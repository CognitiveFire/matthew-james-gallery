# Resend Email Setup Guide

## Overview
The contact form is now integrated with Resend, a modern email service that's much easier to set up than traditional SMTP services. Resend provides reliable email delivery with a simple API.

## Why Resend?

- **No App Passwords**: Works with any email address
- **Easy Setup**: Just one API key
- **Reliable**: Built for developers
- **Free Tier**: 3,000 emails/month free
- **Great Deliverability**: Emails don't go to spam

## Required Environment Variables

You need to set up the following environment variables in your Railway deployment:

### 1. RESEND_API_KEY
- **Purpose**: Your Resend API key
- **Format**: Starts with `re_`
- **How to get it**:
  1. Go to [resend.com](https://resend.com)
  2. Sign up for a free account
  3. Go to API Keys section
  4. Create a new API key
  5. Copy the key (starts with `re_`)

### 2. FROM_EMAIL
- **Purpose**: Email address to send from
- **Example**: `noreply@matthewjamesgallery.com`
- **Note**: Must be verified in Resend (they'll send you a verification email)

### 3. GALLERY_EMAIL (Optional)
- **Purpose**: Email address where inquiries will be sent
- **Example**: `matthew@matthewjamesgallery.com`
- **Note**: If not set, defaults to `matthew@matthewjamesgallery.com`

## Setting Up Resend

### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email address

### Step 2: Get API Key
1. In your Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Give it a name like "Gallery Website"
4. Copy the API key (starts with `re_`)

### Step 3: Verify Domain (Optional but Recommended)
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `matthewjamesgallery.com`)
3. Follow the DNS setup instructions
4. This improves deliverability and prevents spam

## Setting Up Environment Variables in Railway

1. **Go to your Railway project dashboard**
2. **Click on your service**
3. **Go to the "Variables" tab**
4. **Add the following variables**:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   FROM_EMAIL=noreply@matthewjamesgallery.com
   GALLERY_EMAIL=matthew@matthewjamesgallery.com
   ```

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

1. **"Email service not configured"**
   - Check that RESEND_API_KEY is set correctly
   - Ensure there are no extra spaces or characters

2. **"Invalid API key"**
   - Verify your API key starts with `re_`
   - Check that the API key is active in Resend dashboard

3. **Emails not being sent**
   - Check Railway logs for error messages
   - Verify your Resend account is in good standing
   - Ensure your FROM_EMAIL is verified in Resend

4. **Emails going to spam**
   - Verify your domain in Resend (recommended)
   - Use a professional FROM_EMAIL address
   - Consider setting up SPF/DKIM records

## Advantages of Resend

- **No App Passwords**: Works with any email
- **Easy Setup**: Just one API key
- **Reliable**: Built for developers
- **Free Tier**: 3,000 emails/month free
- **Great Deliverability**: Professional service
- **Modern API**: Clean and simple

## Support

If you encounter any issues:
1. Check the Railway deployment logs
2. Verify all environment variables are set correctly
3. Check your Resend dashboard for any issues
4. Ensure your Resend account is in good standing

The contact form is now fully functional with Resend and ready for production use! 🎉
