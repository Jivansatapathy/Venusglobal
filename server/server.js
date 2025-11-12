const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// Serve React app from client build (if built)
const buildPath = path.join(__dirname, '..', 'client', 'build');
if (require('fs').existsSync(buildPath)) {
  app.use(express.static(buildPath));
}

// Content file path
const CONTENT_FILE = path.join(__dirname, 'data', 'content.json');

// Simple authentication middleware
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = authHeader.substring(7);
  // Simple token check - in production, use proper JWT or session management
  if (token === process.env.ADMIN_TOKEN || token === 'admin-token-123') {
    next();
  } else {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Helper function to read content
const readContent = async () => {
  try {
    const data = await fs.readFile(CONTENT_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading content:', error);
    throw error;
  }
};

// Helper function to write content
const writeContent = async (content) => {
  try {
    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing content:', error);
    throw error;
  }
};

// Email configuration (optional - only if email credentials are provided)
let transporter = null;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

if (emailUser && emailPass && emailUser !== 'your-email@gmail.com' && emailPass !== 'your-app-password') {
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Verify email configuration
    transporter.verify((error, success) => {
      if (error) {
        console.log('Email configuration error:', error.message);
        console.log('Email functionality will be disabled');
      } else {
        console.log('Email server is ready to send messages');
      }
    });
  } catch (error) {
    console.log('Email configuration error:', error.message);
    console.log('Email functionality will be disabled');
  }
} else {
  console.log('Email not configured - contact form emails will be disabled');
}

// Content Management API Endpoints

// Get all content
app.get('/api/content', async (req, res) => {
  try {
    const content = await readContent();
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read content' });
  }
});

// Get specific content section
app.get('/api/content/:section', async (req, res) => {
  try {
    const content = await readContent();
    const section = req.params.section;
    if (content[section]) {
      res.json(content[section]);
    } else {
      res.status(404).json({ error: 'Section not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to read content' });
  }
});

// Update content (requires authentication)
app.put('/api/content/:section', authenticateAdmin, async (req, res) => {
  try {
    const content = await readContent();
    const section = req.params.section;
    content[section] = req.body;
    await writeContent(content);
    res.json({ message: 'Content updated successfully', content: content[section] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

// Update nested content (e.g., home.hero)
app.put('/api/content/:section/:subsection', authenticateAdmin, async (req, res) => {
  try {
    const content = await readContent();
    const section = req.params.section;
    const subsection = req.params.subsection;
    if (content[section]) {
      content[section][subsection] = req.body;
      await writeContent(content);
      res.json({ message: 'Content updated successfully', content: content[section][subsection] });
    } else {
      res.status(404).json({ error: 'Section not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

// Admin login endpoint
app.post('/api/admin/login', async (req, res) => {
  try {
    const { password } = req.body;
    // Simple password check - in production, use proper authentication
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (password === adminPassword) {
      // Return a simple token
      const token = process.env.ADMIN_TOKEN || 'admin-token-123';
      res.json({ token, message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, budget, inquiry } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !budget || !inquiry) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if email is configured
    if (!transporter) {
      console.log('Contact form submission received but email is not configured:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Budget:', budget);
      console.log('Inquiry:', inquiry);
      return res.status(200).json({ 
        message: 'Form submitted successfully (email not configured - check server logs)' 
      });
    }

    // Email content
    const mailOptions = {
      from: emailUser,
      to: process.env.RECIPIENT_EMAIL || emailUser,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Inquiry:</strong></p>
        <p>${inquiry.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your website contact form.</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Serve React app (catch-all route must be last)
// Only serve index.html for non-API routes (only if build folder exists)
const clientBuildPath = path.join(__dirname, '..', 'client', 'build', 'index.html');
try {
  if (require('fs').existsSync(clientBuildPath)) {
    app.get(/^(?!\/api).*/, (req, res) => {
      res.sendFile(clientBuildPath);
    });
  }
} catch (error) {
  console.log('Client build folder not found - API server only mode');
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
