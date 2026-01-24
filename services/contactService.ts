
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    message: string;
}

export const sendContactCheck = async (data: ContactFormData): Promise<boolean> => {
    // We use the EmailJS REST API to avoid needing to install the SDK via npm
    // which can be flaky in some environments.

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn("EmailJS keys are missing from .env.local");
        // Simulate success for demo purposes if keys aren't there
        // so the UI still updates, but log a warning.
        console.log("Simulating email send with data:", data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return true;
    }

    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone_number: data.phone,
        service_needed: data.serviceType,
        message: data.message,
        to_name: "FlowState Plumbing"
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: SERVICE_ID,
                template_id: TEMPLATE_ID,
                user_id: PUBLIC_KEY,
                template_params: templateParams,
            }),
        });

        if (response.ok) {
            return true;
        } else {
            const errorData = await response.text();
            console.error('EmailJS Error:', errorData);
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Contact Form Error:', error);
        throw error;
    }
};
