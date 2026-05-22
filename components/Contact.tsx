"use client";

import { FormEvent, useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const getSocialIcon = (label: string) => {
  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99h-2.54V12h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 17 22 12z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M10 3c0-.55.45-1 1-1s1 .45 1 1v5.6c1.52.24 2.72 1.6 2.72 3.18 0 1.76-1.43 3.19-3.19 3.19-1.03 0-1.96-.47-2.57-1.2v3.83c0 .83-.67 1.5-1.5 1.5S4.96 15.64 4.96 14V7.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v7c0 .17.14.3.3.3.17 0 .3-.13.3-.3V8.5c0-1.74 1.41-3.15 3.15-3.15H10V3z" />
        </svg>
      );
    case "Threads":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 4.3 4.2 7.95 7 11 2.8-3.05 7-6.7 7-11 0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
      );
    default:
      return <span className="text-xl">•</span>;
  }
};

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
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors shadow-lg"
                    >
                      {getSocialIcon(social.label)}
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
