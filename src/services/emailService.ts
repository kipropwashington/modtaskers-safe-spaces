/**
 * Email Service for ModTaskers Application
 * Handles Gmail API email sending for application confirmations
 */

import type { EmailMessage, ApplicationData, ContactData, EmailConfig, EmailResponse } from '@/types/email';

// Email configuration
const DEFAULT_EMAIL_CONFIG: EmailConfig = {
  fromAddress: 'noreply@modtaskers.com',
  senderName: 'ModTaskers Team'
};

/**
 * Creates an email message object with proper structure
 * @param to - Recipient email address
 * @param subject - Email subject
 * @param body - Email body content
 * @param config - Optional email configuration
 * @returns EmailMessage object
 */
export function createEmailMessage(
  to: string, 
  subject: string, 
  body: string, 
  config: EmailConfig = DEFAULT_EMAIL_CONFIG
): EmailMessage {
  // Validate input parameters
  if (!to || !subject || !body) {
    throw new Error('Missing required email parameters: to, subject, and body are required');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(to)) {
    throw new Error('Invalid email address format');
  }

  const fromAddr = `${config.senderName} <${config.fromAddress}>`;

  return {
    to,
    subject,
    body,
    from: fromAddr
  };
}

/**
 * Sends assessment confirmation email to applicant
 * @param applicationData - Application form data
 * @returns Promise<EmailResponse> - Response with success status and details
 */
export async function sendAssessmentConfirmationEmail(applicationData: ApplicationData): Promise<EmailResponse> {
  try {
    // Validate application data
    if (!applicationData.email || !applicationData.fullName) {
      throw new Error('Missing required application data: email and fullName are required');
    }

    // Get email template
    const emailBody = getAssessmentConfirmationTemplate(applicationData);
    const subject = 'Application Received - ModTaskers Moderation Team';

    // Create email message
    const emailMessage = createEmailMessage(
      applicationData.email,
      subject,
      emailBody
    );

    // TODO: Implement actual Gmail API sending logic
    // For now, simulate email sending
    console.log('Sending email:', emailMessage);
    
    // Simulate async email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return {
      success: true,
      messageId: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  } catch (error) {
    console.error('Error sending assessment confirmation email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Generates the assessment confirmation email template
 * @param applicationData - Application form data
 * @returns HTML email template string
 */
export function getAssessmentConfirmationTemplate(applicationData: ApplicationData): string {
  const { fullName, country, experience } = applicationData;
  
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .highlight { color: #667eea; font-weight: bold; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🛡️ ModTaskers</h1>
            <h2>Application Received Successfully!</h2>
          </div>
          <div class="content">
            <p>Dear <span class="highlight">${fullName}</span>,</p>
            
            <p>Thank you for your interest in joining the ModTaskers moderation team! We have successfully received your application.</p>
            
            <h3>Application Summary:</h3>
            <ul>
              <li><strong>Name:</strong> ${fullName}</li>
              <li><strong>Country:</strong> ${country}</li>
              <li><strong>Experience Level:</strong> ${experience}</li>
            </ul>
            
            <h3>Next Steps:</h3>
            <p>Our recruitment team will carefully review your application and assess your suitability for our moderation positions. Here's what to expect:</p>
            
            <ol>
              <li><strong>Initial Review</strong> - We'll review your application within 48 hours</li>
              <li><strong>Assessment</strong> - Qualified candidates will receive a moderation assessment</li>
              <li><strong>Interview</strong> - Successful candidates will be invited for a video interview</li>
              <li><strong>Onboarding</strong> - Selected moderators will begin our comprehensive training program</li>
            </ol>
            
            <p>We appreciate your patience during this process. Creating safer digital communities is our mission, and we're excited about the possibility of having you join our professional team.</p>
            
            <p>If you have any questions, please don't hesitate to contact us.</p>
            
            <p>Best regards,<br>
            <strong>The ModTaskers Recruitment Team</strong></p>
            
            <div class="footer">
              <p>ModTaskers - Professional Content Moderation Services<br>
              Creating safer digital communities worldwide since August 2024</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generates a contact confirmation template (utility function)
 * @param contactData - Contact form data
 * @returns HTML email template string
 */
export function getContactConfirmationTemplate(contactData: ContactData): string {
  const { name, email, message } = contactData;
  
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .highlight { color: #667eea; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🛡️ ModTaskers</h1>
            <h2>Message Received</h2>
          </div>
          <div class="content">
            <p>Dear <span class="highlight">${name}</span>,</p>
            
            <p>Thank you for contacting ModTaskers. We have received your message and will respond within 24 hours.</p>
            
            <p><strong>Your message:</strong></p>
            <p style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0;">${message}</p>
            
            <p>Best regards,<br>
            <strong>The ModTaskers Team</strong></p>
          </div>
        </div>
      </body>
    </html>
  `;
}