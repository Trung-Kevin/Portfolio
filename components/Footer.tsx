import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-slate-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">Liên Kết</h3>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://facebook.com/yourprofile"
                className="hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="mailto:kien@example.com"
                className="hover:text-blue-500 transition-colors"
              >
                Gmail
              </a>
              <a
                href="https://github.com/yourusername"
                className="hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
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
