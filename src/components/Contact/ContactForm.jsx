import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message submitted successfully!");
  };

  return (
    <form
      action="https://formspree.io/f/xwpavddy"
      method="POST"
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 border rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 border rounded"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="w-full p-3 border rounded"
      />

      <input
        type="tel"
        name="whatsapp"
        placeholder="WhatsApp Number"
        className="w-full p-3 border rounded"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="w-full p-3 border rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded transition"
      >
        Send Message
      </button>
    </form>

  );
}
