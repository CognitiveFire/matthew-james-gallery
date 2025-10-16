import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY environment variable is not set')
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    // Check if SendGrid is properly configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    if (!process.env.SENDGRID_API_KEY.startsWith('SG.')) {
      console.error('SENDGRID_API_KEY does not start with SG.')
      return NextResponse.json(
        { error: 'Invalid SendGrid API key format' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, subject, artworkId, message, lang } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get artwork title if artworkId is provided
    let artworkTitle = ''
    if (artworkId) {
      try {
        const { getAllArtworks } = await import('@/data/artwork')
        const { getLocalizedArtwork } = await import('@/lib/artwork-utils')
        const artworks = getAllArtworks()
        const artwork = artworks.find(a => a.id === artworkId)
        if (artwork) {
          const localizedArtwork = getLocalizedArtwork(artwork, lang as 'en' | 'no')
          artworkTitle = localizedArtwork.title
        }
      } catch (error) {
        console.error('Error fetching artwork:', error)
      }
    }

    // Create email content
    const subjectText = lang === 'no' ? 'Ny henvendelse fra Matthew James Galleri' : 'New inquiry from Matthew James Gallery'
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
          ${lang === 'no' ? 'Ny henvendelse fra galleriets nettside' : 'New inquiry from gallery website'}
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">${lang === 'no' ? 'Kontaktinformasjon' : 'Contact Information'}</h3>
          <p><strong>${lang === 'no' ? 'Navn' : 'Name'}:</strong> ${name}</p>
          <p><strong>${lang === 'no' ? 'E-post' : 'Email'}:</strong> ${email}</p>
          ${phone ? `<p><strong>${lang === 'no' ? 'Telefon' : 'Phone'}:</strong> ${phone}</p>` : ''}
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">${lang === 'no' ? 'Henvendelse' : 'Inquiry Details'}</h3>
          <p><strong>${lang === 'no' ? 'Emne' : 'Subject'}:</strong> ${subject}</p>
          ${artworkTitle ? `<p><strong>${lang === 'no' ? 'Interessert i kunstverk' : 'Interested in artwork'}:</strong> ${artworkTitle}</p>` : ''}
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">${lang === 'no' ? 'Melding' : 'Message'}</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
          <p>${lang === 'no' ? 'Denne meldingen ble sendt fra Matthew James Galleri nettside.' : 'This message was sent from the Matthew James Gallery website.'}</p>
          <p>${lang === 'no' ? 'Svar direkte til kunden på:' : 'Reply directly to the customer at:'} ${email}</p>
        </div>
      </div>
    `

    const textContent = `
${lang === 'no' ? 'Ny henvendelse fra Matthew James Galleri' : 'New inquiry from Matthew James Gallery'}

${lang === 'no' ? 'Kontaktinformasjon' : 'Contact Information'}:
${lang === 'no' ? 'Navn' : 'Name'}: ${name}
${lang === 'no' ? 'E-post' : 'Email'}: ${email}
${phone ? `${lang === 'no' ? 'Telefon' : 'Phone'}: ${phone}` : ''}

${lang === 'no' ? 'Henvendelse' : 'Inquiry Details'}:
${lang === 'no' ? 'Emne' : 'Subject'}: ${subject}
${artworkTitle ? `${lang === 'no' ? 'Interessert i kunstverk' : 'Interested in artwork'}: ${artworkTitle}` : ''}

${lang === 'no' ? 'Melding' : 'Message'}:
${message}

---
${lang === 'no' ? 'Denne meldingen ble sendt fra Matthew James Galleri nettside.' : 'This message was sent from the Matthew James Gallery website.'}
${lang === 'no' ? 'Svar direkte til kunden på:' : 'Reply directly to the customer at:'} ${email}
    `

    // Send email to gallery owner
    const msg = {
      to: process.env.GALLERY_EMAIL || 'matthew@matthewjamesgallery.com',
      from: process.env.FROM_EMAIL || 'noreply@matthewjamesgallery.com',
      replyTo: email,
      subject: `${subjectText} - ${subject}`,
      text: textContent,
      html: htmlContent,
    }

    try {
      await sgMail.send(msg)
      console.log('Inquiry email sent successfully')
    } catch (sendError) {
      console.error('Error sending inquiry email:', sendError)
      throw sendError
    }

    // Send confirmation email to customer
    const confirmationSubject = lang === 'no' 
      ? 'Takk for din henvendelse - Matthew James Galleri'
      : 'Thank you for your inquiry - Matthew James Gallery'

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
          ${lang === 'no' ? 'Takk for din henvendelse!' : 'Thank you for your inquiry!'}
        </h2>
        
        <p style="font-size: 16px; line-height: 1.6;">
          ${lang === 'no' 
            ? 'Hei ' + name + ',<br><br>Takk for at du tok kontakt med Matthew James Galleri. Vi har mottatt din henvendelse og vil komme tilbake til deg så snart som mulig.'
            : 'Hello ' + name + ',<br><br>Thank you for contacting Matthew James Gallery. We have received your inquiry and will get back to you as soon as possible.'
          }
        </p>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">${lang === 'no' ? 'Din henvendelse' : 'Your inquiry'}</h3>
          <p><strong>${lang === 'no' ? 'Emne' : 'Subject'}:</strong> ${subject}</p>
          ${artworkTitle ? `<p><strong>${lang === 'no' ? 'Interessert i kunstverk' : 'Interested in artwork'}:</strong> ${artworkTitle}</p>` : ''}
          <p><strong>${lang === 'no' ? 'Melding' : 'Message'}:</strong></p>
          <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
        </div>

        <p style="font-size: 16px; line-height: 1.6;">
          ${lang === 'no' 
            ? 'Med vennlig hilsen,<br>Matthew James Galleri'
            : 'Best regards,<br>Matthew James Gallery'
          }
        </p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
          <p>
            ${lang === 'no' 
              ? 'Besøk oss på: <a href="https://matthewjamesgallery.com">matthewjamesgallery.com</a>'
              : 'Visit us at: <a href="https://matthewjamesgallery.com">matthewjamesgallery.com</a>'
            }
          </p>
        </div>
      </div>
    `

    const confirmationMsg = {
      to: email,
      from: process.env.FROM_EMAIL || 'noreply@matthewjamesgallery.com',
      subject: confirmationSubject,
      html: confirmationHtml,
    }

    try {
      await sgMail.send(confirmationMsg)
      console.log('Confirmation email sent successfully')
    } catch (sendError) {
      console.error('Error sending confirmation email:', sendError)
      // Don't throw here - the main email was sent successfully
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
