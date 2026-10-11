"use client";

import { useState } from "react";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
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
      // Using a simple mailto approach as fallback
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:info@toprise.co.ke?subject=${subject}&body=${body}`;
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
    <form onSubmit={handleSubmit} className="glass-effect p-8 md:p-12 rounded-2xl border border-accent-500/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
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
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
              placeholder="Your Name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
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
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
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
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
              placeholder="+254 700 000 000"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-white">
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
            placeholder="How can we help you?"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
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
            className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-400 hover:to-brand-400 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-full font-bold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
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
            ✅ Message sent successfully! Your email client should open with a pre-filled message.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
          <p className="text-red-400 font-medium">
            ❌ There was an error sending your message. Please try again or contact us directly.
          </p>
        </div>
      )}
    </form>
  );
}
