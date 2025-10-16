# SendGrid Setup Guide

## Overview
The contact form is now integrated with SendGrid to send professional emails when customers submit inquiries. This guide will help you set up the necessary environment variables.

## Required Environment Variables

You need to set up the following environment variables in your Railway deployment:

### 1. SENDGRID_API_KEY
- **Purpose**: Your SendGrid API key for sending emails
- **Format**: Should start with "SG."
- **How to get it**:
  1. Log into your SendGrid account
  2. Go to Settings → API Keys
  3. Create a new API key with "Full Access" permissions
  4. Copy the generated key

### 2. GALLERY_EMAIL
- **Purpose**: Email address where inquiries will be sent
- **Example**: `matthew@matthewjamesgallery.com`
- **Note**: This should be your main email address

### 3. FROM_EMAIL
- **Purpose**: Sender email address for automated emails
- **Example**: `noreply@matthewjamesgallery.com`
- **Note**: This should be a verified sender in SendGrid

## Setting Up Environment Variables in Railway

1. **Go to your Railway project dashboard**
2. **Click on your service**
3. **Go to the "Variables" tab**
4. **Add the following variables**:
   ```
   SENDGRID_API_KEY=SG.your_actual_api_key_here
   GALLERY_EMAIL=matthew@matthewjamesgallery.com
   FROM_EMAIL=noreply@matthewjamesgallery.com
   ```

## SendGrid Domain Verification (Recommended)

To ensure emails are delivered properly and don't go to spam:

1. **Verify your domain in SendGrid**:
   - Go to Settings → Sender Authentication
   - Add your domain (e.g., `matthewjamesgallery.com`)
   - Follow the DNS verification steps

2. **Set up SPF, DKIM, and DMARC records** (optional but recommended for better deliverability)

## Testing the Contact Form

Once you've set up the environment variables:

1. **Deploy to Railway** (the environment variables will trigger a new deployment)
2. **Visit your contact page**
3. **Fill out and submit the form**
4. **Check your email** for the inquiry
5. **Check the customer's email** for the confirmation

## Email Features

### Inquiry Email (to Gallery Owner)
- Contains all form data in a professional HTML format
- Includes customer contact information
- Shows selected artwork if applicable
- Reply-to is set to customer's email for easy response

### Confirmation Email (to Customer)
- Professional confirmation message
- Shows a summary of their inquiry
- Available in both English and Norwegian
- Includes gallery website link

## Troubleshooting

### Common Issues:

1. **"API key does not start with SG."**
   - Check that your SENDGRID_API_KEY is correctly formatted
   - Ensure there are no extra spaces or characters

2. **Emails not being sent**
   - Verify your SendGrid account has sufficient credits
   - Check that FROM_EMAIL is verified in SendGrid
   - Check Railway logs for error messages

3. **Emails going to spam**
   - Verify your domain in SendGrid
   - Consider setting up SPF/DKIM records
   - Use a professional FROM_EMAIL address

## Support

If you encounter any issues:
1. Check the Railway deployment logs
2. Verify all environment variables are set correctly
3. Test your SendGrid API key in the SendGrid dashboard
4. Ensure your SendGrid account is in good standing

The contact form is now fully functional and ready for production use! 🎉
