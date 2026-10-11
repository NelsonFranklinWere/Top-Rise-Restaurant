"use client";

import { useState } from "react";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import {
  formShellClass,
  formLabelClass,
  formInputClass,
  formInputWithIconClass,
  formSubmitClass,
} from "@/lib/form-styles";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactFormSimple() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with pre-filled content
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Top Rise Restaurant Contact Form
      `);
      
      const mailtoLink = `mailto:strivego4@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={formShellClass}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={formLabelClass}>
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className={formInputWithIconClass}
              placeholder="Your Name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={formLabelClass}>
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={formInputWithIconClass}
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className={formLabelClass}>
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={formInputWithIconClass}
              placeholder="+254 700 000 000"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className={formLabelClass}>
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className={`${formInputClass} px-4`}
            placeholder="How can we help you?"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className={formLabelClass}>
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-accent-500" />
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`${formInputWithIconClass} resize-none`}
            placeholder="Tell us more about your inquiry..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={formSubmitClass}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Opening Email...
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
          <p className="text-green-400 font-medium">
            ✅ Your email client should open with a pre-filled message. Please send the email to complete your inquiry.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
          <p className="text-red-400 font-medium">
            ❌ There was an error. Please try again or contact us directly at {process.env.NEXT_PUBLIC_RESTAURANT_EMAIL || "strivego4@gmail.com"}.
          </p>
        </div>
      )}
    </form>
  );
}
