'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <label className="block text-custom-light mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-custom-dark border border-custom-light/20 rounded-lg text-custom-light focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div>
        <label className="block text-custom-light mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-custom-dark border border-custom-light/20 rounded-lg text-custom-light focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div>
        <label className="block text-custom-light mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 bg-custom-dark border border-custom-light/20 rounded-lg text-custom-light focus:outline-none focus:border-blue-400"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
}
