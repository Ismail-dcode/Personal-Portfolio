import emailjs from '@emailjs/browser';

/**
 * Reusable email service function using EmailJS.
 * 
 * PLACE YOUR EMAILJS CREDENTIALS IN YOUR ENVIROMENT FILE (.env / .env.local):
 * - Service ID  -> VITE_EMAILJS_SERVICE_ID
 * - Template ID -> VITE_EMAILJS_TEMPLATE_ID
 * - Public Key  -> VITE_EMAILJS_PUBLIC_KEY
 * 
 * @param {Object} emailData
 * @param {string} emailData.from_name - Sender's name
 * @param {string} emailData.from_email - Sender's email address
 * @param {string} emailData.subject - Subject / Topic
 * @param {string} emailData.opportunity_type - Opportunity type / category
 * @param {string} emailData.message - Project details & scope
 * @returns {Promise<Object>} EmailJS response
 */
export const sendEmail = async (emailData) => {
  // Retrieve environment variables
  // 1. Service ID: Obtained from EmailJS Dashboard -> Email Services
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  
  // 2. Template ID: Obtained from EmailJS Dashboard -> Email Templates
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  
  // 3. Public Key: Obtained from EmailJS Dashboard -> Account / Public Key
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS credentials are missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env or .env.local file.'
    );
  }

  // Exact EmailJS payload matching required template schema
  const templateParams = {
    from_name: emailData.from_name,
    from_email: emailData.from_email,
    subject: emailData.subject,
    opportunity_type: emailData.opportunity_type,
    message: emailData.message,
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
};
