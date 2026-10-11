"use client";

import { useState } from "react";
import { restaurantInfo } from "@/lib/data";
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
      // Bookings go to the restaurant's WhatsApp: it works on every phone,
      // unlike mailto links, and the team confirms in the same chat.
      const lines = [
        `*TABLE BOOKING — Top Rise*`,
        ``,
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        formData.email ? `Email: ${formData.email}` : "",
        ``,
        `Date: ${formData.date}`,
        `Time: ${formData.time}`,
        `Guests: ${formData.guests}`,
        formData.message ? `` : "",
        formData.message ? `Requests: ${formData.message}` : "",
        ``,
        `Sent from the Top Rise website`,
      ].filter((line, i, all) => line !== "" || all[i - 1] !== "");

      const phone = restaurantInfo.whatsapp.replace(/[^0-9]/g, "");
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Same-day bookings are welcome: most guests book a lunch table that morning.
  const minDate = new Date().toISOString().split("T")[0];

  // Half-hour slots across opening hours, 8:00 AM to 9:00 PM.
  const timeSlots = Array.from({ length: 27 }, (_, i) => {
    const mins = 8 * 60 + i * 30;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${((h + 11) % 12) + 1}:${m === 0 ? "00" : "30"} ${h < 12 ? "AM" : "PM"}`;
  });

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
          <label htmlFor="email" className={formLabelClass}>Email Address (optional)</label>
          <div className="relative">
            <Mail className={iconClass} />
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={formInputWithIconClass} placeholder="youremail@gmail.com" />
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
              {timeSlots.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={formLabelClass}>Special Requests or Notes</label>
        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${formInputClass} px-4 resize-none`} placeholder="Business meeting, quiet corner, food ready on arrival..." />
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
              Send Booking on WhatsApp
            </>
          )}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="mt-6 p-4 bg-green-500/15 border border-green-500/40 rounded-xl text-center">
          <p className="text-green-400 text-sm">WhatsApp has opened with your booking ready. Press send and we will confirm your table.</p>
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
