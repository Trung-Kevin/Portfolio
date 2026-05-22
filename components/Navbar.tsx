"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-slate-800">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          KIÊN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#projects"
            className="hover:text-blue-500 transition-colors"
          >
            Dự Án
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-500 transition-colors"
          >
            Kỹ Năng
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-500 transition-colors"
          >
            Liên Hệ
          </Link>
          <Link href="#about" className="hover:text-blue-500 transition-colors">
            Giới Thiệu
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-secondary flex flex-col gap-4 p-4 md:hidden">
            <Link
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              Dự Án
            </Link>
            <Link
              href="#skills"
              className="hover:text-blue-500 transition-colors"
            >
              Kỹ Năng
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              Liên Hệ
            </Link>
            <Link
              href="#about"
              className="hover:text-blue-500 transition-colors"
            >
              Giới Thiệu
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
