/**
 * TypeScript type definitions for email service
 */

export interface EmailMessage {
  to: string;
  subject: string;
  body: string;
  from?: string;
}

export interface ApplicationData {
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  experience: string;
  statement: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface EmailConfig {
  fromAddress: string;
  senderName: string;
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}