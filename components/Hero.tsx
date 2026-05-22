"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary"
    >
      <div className="container-custom text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg border-4 border-blue-500">
            <div className="relative w-full h-full">
              <Image
                src="/images/profile.jpg"
                alt={SITE_CONFIG.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {SITE_CONFIG.name}
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-2">
          {SITE_CONFIG.title}
        </p>

        <p className="text-lg text-slate-300 mb-2">
          {SITE_CONFIG.birthDate} ({SITE_CONFIG.age} tuổi)
        </p>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
          {SITE_CONFIG.shortBio}
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <button className="btn-primary">Xem Dự Án</button>
          <button className="btn-secondary">Liên Hệ Tôi</button>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-500">5+</p>
              <p className="text-slate-400">Năm kinh nghiệm</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-500">
                50+
              </p>
              <p className="text-slate-400">Dự án hoàn thành</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-500">
                100%
              </p>
              <p className="text-slate-400">Khách hàng hài lòng</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-500">👨‍🍳</p>
              <p className="text-slate-400">Đầu bếp cũ</p>
            </div>
          </div>

          {/* Hobbies & Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                🎯 Sở Thích
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {SITE_CONFIG.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                💪 Điểm Mạnh
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {SITE_CONFIG.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
