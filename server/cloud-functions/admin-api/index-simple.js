/**
 * Simplified Admin API Cloud Function
 * This version stores content in memory (for testing) and can be extended
 * to use Cloud Storage, Firestore, or any other storage solution
 */

const functions = require('@google-cloud/functions-framework');
const cors = require('cors')({ origin: true });

// Configuration from environment variables
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'admin-token-123';

// In-memory content storage (replace with Cloud Storage/Firestore in production)
let contentStore = {
  home: {
    hero: {
      badge: "Welcome",
      titleLine1: "Innovative Solutions",
      titleLine2: "For Your Business",
      description: "We provide cutting-edge solutions",
      ctaButton: "Get Started",
      image: "/images/bg.jpg"
    }
  },
  about: {},
  contact: {},
  navbar: {},
  footer: {}
};

// Helper function to read content
async function readContent() {
  // TODO: Replace with Cloud Storage or Firestore
  // For now, return in-memory store
  return contentStore;
}

// Helper function to write content
async function writeContent(newContent) {
  // TODO: Replace with Cloud Storage or Firestore
  // For now, update in-memory store
  contentStore = newContent;
  return true;
}

// Authentication check
function authenticateAdmin(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.substring(7);
  return token === ADMIN_TOKEN;
}

// Parse path from request
function parsePath(path) {
  // Remove query string
  const cleanPath = path.split('?')[0];
  return cleanPath.split('/').filter(p => p);
}

// Main Cloud Function
functions.http('adminApi', async (req, res) => {
  cors(req, res, async () => {
    try {
      const { method } = req;
      const pathParts = parsePath(req.path || req.url);
      
      console.log(`[${method}] ${req.path || req.url}`, pathParts);
      
      // Route: POST /api/admin/login
      if (method === 'POST' && 
          pathParts[0] === 'api' && 
          pathParts[1] === 'admin' && 
          pathParts[2] === 'login') {
        const { password } = req.body;
        if (password === ADMIN_PASSWORD) {
          return res.status(200).json({
            token: ADMIN_TOKEN,
            message: 'Login successful'
          });
        } else {
          return res.status(401).json({ error: 'Invalid password' });
        }
      }
      
      // Route: GET /api/content
      if (method === 'GET' && 
          pathParts[0] === 'api' && 
          pathParts[1] === 'content' && 
          pathParts.length === 2) {
        const content = await readContent();
        return res.status(200).json(content);
      }
      
      // Route: GET /api/content/:section
      if (method === 'GET' && 
          pathParts[0] === 'api' && 
          pathParts[1] === 'content' && 
          pathParts.length === 3) {
        const section = pathParts[2];
        const content = await readContent();
        if (content[section]) {
          return res.status(200).json(content[section]);
        } else {
          return res.status(404).json({ error: 'Section not found' });
        }
      }
      
      // Route: PUT /api/content/:section (requires auth)
      if (method === 'PUT' && 
          pathParts[0] === 'api' && 
          pathParts[1] === 'content' && 
          pathParts.length === 3) {
        if (!authenticateAdmin(req)) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
        
        const section = pathParts[2];
        const content = await readContent();
        content[section] = req.body;
        await writeContent(content);
        return res.status(200).json({
          message: 'Content updated successfully',
          content: content[section]
        });
      }
      
      // Route: PUT /api/content/:section/:subsection (requires auth)
      if (method === 'PUT' && 
          pathParts[0] === 'api' && 
          pathParts[1] === 'content' && 
          pathParts.length === 4) {
        if (!authenticateAdmin(req)) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
        
        const section = pathParts[2];
        const subsection = pathParts[3];
        const content = await readContent();
        
        if (!content[section]) {
          content[section] = {};
        }
        
        content[section][subsection] = req.body;
        await writeContent(content);
        return res.status(200).json({
          message: 'Content updated successfully',
          content: content[section][subsection]
        });
      }
      
      // 404 for unmatched routes
      return res.status(404).json({ error: 'Route not found', path: req.path });
      
    } catch (error) {
      console.error('Error in admin API:', error);
      return res.status(500).json({ 
        error: 'Internal server error', 
        message: error.message 
      });
    }
  });
});

