"use client";

import { FormEvent, useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container-custom">
        <h2 className="section-title">Liên Hệ Với Tôi</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Thông Tin Liên Hệ
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h4>
                  <p className="text-slate-400">{SITE_CONFIG.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Điện Thoại
                  </h4>
                  <p className="text-slate-400">{SITE_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Địa Chỉ
                  </h4>
                  <p className="text-slate-400">{SITE_CONFIG.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🎂</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Sinh Nhật
                  </h4>
                  <p className="text-slate-400">{SITE_CONFIG.birthDate}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Mạng Xã Hội
                </h4>
                <div className="flex gap-4 flex-wrap justify-center">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      title={social.label}
                      className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <span className="text-2xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Họ Tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nhập email của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-semibold mb-2"
                >
                  Chủ Đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nhập chủ đề"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Tin Nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Nhập tin nhắn của bạn"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Gửi Tin Nhắn
              </button>

              {submitted && (
                <div className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400">
                  ✓ Cảm ơn bạn! Tôi sẽ trả lời bạn sớm nhất có thể.
                </div>
              )}
            </form>
          </div>{" "}
          {/* Đóng tag bọc ngoài Form */}
        </div>{" "}
        {/* Đóng tag hàng/cột của layout (nếu có ở trên) */}
      </div>{" "}
      {/* Đóng tag container chính */}
    </section>
  );
}
