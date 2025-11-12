# Two-Factor Email Authentication Setup

## Overview

The admin panel now requires two-factor authentication (2FA) via email. After entering your password, you'll receive a 6-digit verification code via email.

## Setup Requirements

### 1. Email Configuration

Add these to your `server/.env` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@venusglobaltech.com
```

**For Gmail:**
1. Enable 2-Step Verification on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password (not your regular password) in `EMAIL_PASS`

**For other email providers:**
- Outlook: Use your email and app password
- Yahoo: Use your email and app password
- Custom SMTP: Update the transporter configuration in `server.js`

### 2. Admin Email

The OTP will be sent to the email specified in:
- `ADMIN_EMAIL` environment variable (priority)
- `EMAIL_USER` environment variable (fallback)
- Default: `admin@venusglobaltech.com`

## How It Works

### Login Flow

1. **Step 1: Enter Password**
   - User enters admin password
   - System verifies password
   - If correct, generates 6-digit OTP
   - Sends OTP to admin email
   - Returns session ID

2. **Step 2: Enter OTP**
   - User enters 6-digit code from email
   - System verifies OTP
   - If valid, grants access token
   - User is logged in

### Security Features

- ✅ **OTP Expiration**: Codes expire after 5 minutes
- ✅ **Attempt Limiting**: Maximum 5 failed attempts per OTP
- ✅ **Session Management**: Each login attempt gets unique session
- ✅ **Auto Cleanup**: Expired OTPs are automatically removed
- ✅ **Resend Protection**: 30-second cooldown between resend requests

## API Endpoints

### POST /api/admin/login
**Step 1: Verify password and send OTP**

Request:
```json
{
  "password": "admin123"
}
```

Response (Success):
```json
{
  "sessionId": "session_1234567890_abc123",
  "message": "Password verified. OTP sent to your email.",
  "expiresAt": "2024-01-27T10:35:00.000Z"
}
```

### POST /api/admin/verify-otp
**Step 2: Verify OTP and complete login**

Request:
```json
{
  "sessionId": "session_1234567890_abc123",
  "otp": "123456"
}
```

Response (Success):
```json
{
  "token": "admin-token-123",
  "message": "Login successful"
}
```

### POST /api/admin/resend-otp
**Resend OTP to email**

Request:
```json
{
  "sessionId": "session_1234567890_abc123"
}
```

Response (Success):
```json
{
  "message": "New OTP sent to your email.",
  "expiresAt": "2024-01-27T10:40:00.000Z"
}
```

## Testing

1. **Start the server:**
   ```bash
   cd server
   npm start
   ```

2. **Go to admin panel:**
   ```
   http://localhost:3000/admin
   ```

3. **Enter password:** `admin123`

4. **Check your email** for the 6-digit code

5. **Enter the code** to complete login

## Troubleshooting

### Email Not Sending?

1. **Check email configuration:**
   - Verify `EMAIL_USER` and `EMAIL_PASS` in `.env`
   - For Gmail, make sure you're using an App Password
   - Check server logs for email errors

2. **Check spam folder:**
   - OTP emails might go to spam
   - Add sender to contacts

3. **Verify email service:**
   - Check server console for "Email server is ready" message
   - If you see "Email not configured", check your `.env` file

### OTP Not Working?

1. **Check expiration:**
   - OTPs expire after 5 minutes
   - Request a new one if expired

2. **Check attempts:**
   - Maximum 5 failed attempts per OTP
   - Request a new OTP if exceeded

3. **Verify session:**
   - Make sure you're using the correct sessionId
   - Don't refresh the page between steps

### Can't Access Admin?

1. **Email service required:**
   - 2FA requires email to be configured
   - Without email, login will fail
   - Configure email in `.env` file

2. **Backend server:**
   - Make sure backend is running on port 5000
   - Check server logs for errors

## Security Notes

- OTPs are stored in-memory (cleared on server restart)
- For production, consider using Redis for OTP storage
- OTPs are single-use (deleted after successful verification)
- Failed attempts are tracked per OTP
- Session IDs are unique and time-based

## Production Recommendations

1. **Use Redis for OTP storage** (instead of in-memory)
2. **Rate limiting** on login attempts
3. **IP-based restrictions** for admin access
4. **Email templates** for better branding
5. **Logging** for security audit trail

