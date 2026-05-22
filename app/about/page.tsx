import { SITE_CONFIG } from "@/lib/constants";

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-primary">
      <div className="container-custom py-12">
        <h1 className="text-5xl font-bold text-white mb-8">Về Tôi</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-6">
              Câu Chuyện Của Tôi
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Xin chào! Tôi là <strong>{SITE_CONFIG.name}</strong>, sinh ngày{" "}
                <strong>{SITE_CONFIG.birthDate}</strong> ({SITE_CONFIG.age}{" "}
                tuổi), một nhà phát triển web đam mê từ {SITE_CONFIG.location}.
              </p>
              <p>
                Trước khi trở thành lập trình viên, tôi đã có kinh nghiệm làm
                việc trong lĩnh vực ẩm thực ({SITE_CONFIG.pastExperience}). Quá
                trình này đã dạy tôi tính kỷ luật, sáng tạo và cách làm việc
                dưới áp lực - những kỹ năng quý báu mà tôi vẫn áp dụng trong
                công việc lập trình ngày hôm nay.
              </p>
              <p>
                Hành trình của tôi sang lập trình bắt đầu với niềm yêu thích
                giải quyết vấn đề và tạo ra những giải pháp sáng tạo. Những kỹ
                năng của tôi - <strong>chịu khó</strong> và{" "}
                <strong>dễ thích nghi</strong> - giúp tôi nhanh chóng học hỏi
                các công nghệ mới.
              </p>
              <p>
                Tôi chuyên về các công nghệ như React, Next.js, TypeScript để
                xây dựng các giải pháp web mạnh mẽ và đáp ứng được nhu cầu người
                dùng.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                🎯 Sở Thích Cá Nhân
              </h3>
              <div className="space-y-3">
                {SITE_CONFIG.hobbies.map((hobby) => (
                  <div key={hobby} className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-slate-300">{hobby}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                💪 Điểm Mạnh
              </h3>
              <div className="space-y-3">
                {SITE_CONFIG.strengths.map((strength) => (
                  <div key={strength} className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-slate-300">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                👨‍🍳 Kinh Nghiệm Trước Đó
              </h3>
              <p className="text-blue-100">
                {SITE_CONFIG.pastExperience} - Một hành trình thú vị đã hình
                thành nên tính cách và giá trị của tôi.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-secondary rounded-lg p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Thành Tích
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-500 mb-4">
                🏆 Giải Thưởng
              </h4>
              <ul className="text-slate-300 space-y-2">
                <li>✓ Best Web Developer - Tech Summit 2023</li>
                <li>✓ Innovation Award - Innovation Challenge 2022</li>
                <li>✓ Top Contributor - Open Source Community</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-500 mb-4">
                📚 Giáo Dục
              </h4>
              <ul className="text-slate-300 space-y-2">
                <li>✓ B.S. Computer Science - Đại học FPT</li>
                <li>✓ Certification - Full Stack Web Development</li>
                <li>✓ Coursework - Advanced React & Node.js</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-500 mb-4">
                🎯 Mục Tiêu
              </h4>
              <ul className="text-slate-300 space-y-2">
                <li>✓ Tạo ứng dụng web có ảnh hưởng tích cực</li>
                <li>✓ Góp phần vào cộng đồng tech Việt Nam</li>
                <li>✓ Học hỏi và phát triển kỹ năng liên tục</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-500 mb-4">
                ℹ️ Thông Tin Cá Nhân
              </h4>
              <ul className="text-slate-300 space-y-2">
                <li>✓ Sinh ngày: {SITE_CONFIG.birthDate}</li>
                <li>✓ Tuổi: {SITE_CONFIG.age}</li>
                <li>✓ Địa chỉ: {SITE_CONFIG.location}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
