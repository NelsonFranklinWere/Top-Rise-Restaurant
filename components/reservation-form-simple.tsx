"use client";

import { useState } from "react";
import { Mail, Phone, User, Calendar, Clock, Users } from "lucide-react";
import {
  formShellClass,
  formLabelClass,
  formInputClass,
  formInputWithIconClass,
  formSubmitClass,
} from "@/lib/form-styles";

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

export function ReservationFormSimple() {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const subject = encodeURIComponent(`Reservation Request - ${formData.date} at ${formData.time}`);
      const body = encodeURIComponent(`
RESERVATION REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Reservation Details:
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}

Special Requests:
${formData.message}

---
Sent from Top Rise Restaurant Reservation Form
      `);

      window.location.href = `mailto:strivego4@gmail.com?subject=${subject}&body=${body}`;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-400";

  return (
    <form onSubmit={handleSubmit} className={formShellClass}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className={formLabelClass}>Full Name *</label>
          <div className="relative">
            <User className={iconClass} />
            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={formInputWithIconClass} placeholder="Your Name" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className={formLabelClass}>Email Address *</label>
          <div className="relative">
            <Mail className={iconClass} />
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={formInputWithIconClass} placeholder="youremail@gmail.com" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className={formLabelClass}>Phone Number *</label>
          <div className="relative">
            <Phone className={iconClass} />
            <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className={formInputWithIconClass} placeholder="+254 700 000 000" />
          </div>
        </div>
        <div>
          <label htmlFor="guests" className={formLabelClass}>Number of Guests *</label>
          <div className="relative">
            <Users className={iconClass} />
            <select id="guests" name="guests" required value={formData.guests} onChange={handleChange} className={`${formInputWithIconClass} appearance-none`}>
              <option value="">Select guests</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={String(n)}>{n} Guest{n > 1 ? "s" : ""}</option>
              ))}
              <option value="9+">9+ Guests</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="date" className={formLabelClass}>Preferred Date *</label>
          <div className="relative">
            <Calendar className={iconClass} />
            <input id="date" name="date" type="date" required min={minDate} value={formData.date} onChange={handleChange} className={formInputWithIconClass} />
          </div>
        </div>
        <div>
          <label htmlFor="time" className={formLabelClass}>Preferred Time *</label>
          <div className="relative">
            <Clock className={iconClass} />
            <select id="time" name="time" required value={formData.time} onChange={handleChange} className={`${formInputWithIconClass} appearance-none`}>
              <option value="">Select time</option>
              {["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={formLabelClass}>Special Requests or Notes</label>
        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${formInputClass} px-4 resize-none`} placeholder="Dietary requirements, occasion details, preferences..." />
      </div>

      <div className="text-center">
        <button type="submit" disabled={isSubmitting} className={formSubmitClass}>
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Opening Email...
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              Send Reservation Request
            </>
          )}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="mt-6 p-4 bg-green-500/15 border border-green-500/40 rounded-xl text-center">
          <p className="text-green-400 text-sm">Your email client should open with your reservation request.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-6 p-4 bg-accent-500/15 border border-accent-500/40 rounded-xl text-center">
          <p className="text-accent-300 text-sm">Something went wrong. Please call us directly.</p>
        </div>
      )}
    </form>
  );
}
