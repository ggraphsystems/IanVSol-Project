import { Resend } from 'resend'

const resend = new Resend(process.env.FORM_API_KEY)

export default async function handler(req, res) {
    if(req.method !== "POST") {
        return res.status(405).json({meesage: "Method not allowed"})
    }
    
    try {
        const data = await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: ["delivered@resend.dev"],
          subject: "Hello world",
          html: "<strong>It works!</strong>",
        });
    
        return res.status(200).json({ success: true, data });
    } 
    catch (error) {
        return res.status(400).json({
          success: false,
          message: error.message || "Something went wrong",
        });
    }
    
}