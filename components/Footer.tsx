import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const getSocialIcon = (label: string) => {
  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99h-2.54V12h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 17 22 12z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M10 3c0-.55.45-1 1-1s1 .45 1 1v5.6c1.52.24 2.72 1.6 2.72 3.18 0 1.76-1.43 3.19-3.19 3.19-1.03 0-1.96-.47-2.57-1.2v3.83c0 .83-.67 1.5-1.5 1.5S4.96 15.64 4.96 14V7.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v7c0 .17.14.3.3.3.17 0 .3-.13.3-.3V8.5c0-1.74 1.41-3.15 3.15-3.15H10V3z" />
        </svg>
      );
    case "Threads":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 4.3 4.2 7.95 7 11 2.8-3.05 7-6.7 7-11 0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
      );
    default:
      return <span className="w-4 h-4">•</span>;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-slate-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">Liên Kết</h3>
            <div className="flex gap-3 flex-wrap">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition-colors"
                >
                  {getSocialIcon(social.label)}
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">Điều Hướng</h3>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="hover:text-blue-500 transition-colors"
              >
                Dự Án
              </a>
              <a
                href="#skills"
                className="hover:text-blue-500 transition-colors"
              >
                Kỹ Năng
              </a>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors"
              >
                Liên Hệ
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">Về Tôi</h3>
            <p className="text-slate-400">
              {SITE_CONFIG.name} - {SITE_CONFIG.title}
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
