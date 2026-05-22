# Hướng Dẫn Nhanh - Portfolio Đặng Nguyễn Trung Kiên

## 1️⃣ Cài Đặt Ban Đầu

```bash
# Cài đặt dependencies
npm install
```

## 2️⃣ Chạy Phát Triển

```bash
npm run dev
```

Truy cập: http://localhost:3000

## 3️⃣ Chỉnh Sửa Thông Tin Cá Nhân

### Tên & Tiêu Đề

- **File**: `components/Navbar.tsx` (dòng ~13)
- **File**: `components/Hero.tsx` (dòng ~21)

### Thông Tin Liên Hệ

- **File**: `components/Contact.tsx` (dòng ~105-120)

### Dự Án

- **File**: `components/Projects.tsx` (dòng ~2-39)
- Thêm dự án mới vào mảng `projects`

### Kỹ Năng

- **File**: `components/Skills.tsx` (dòng ~2-16)
- Cập nhật các danh mục và kỹ năng

## 4️⃣ Build Production

```bash
npm run build
npm start
```

## 5️⃣ Deploy lên Vercel

```bash
npm install -g vercel
vercel
```

## 📁 Cấu Trúc File

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Layout chính
│   ├── page.tsx           # Trang chủ
│   └── globals.css        # CSS toàn cục
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/                # Ảnh & tài nguyên tĩnh
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
├── package.json
└── README.md
```

## 🎨 Tùy Chỉnh Màu Sắc

Sửa `tailwind.config.js`:

```javascript
colors: {
  primary: '#0f172a',      // Màu nền chính
  secondary: '#1e293b',    // Màu nền phụ
  accent: '#3b82f6',       // Màu nhấn
}
```

## 🔗 Liên Kết Xã Hội

Cập nhật trong `components/Footer.tsx` và `components/Contact.tsx`:

- GitHub
- LinkedIn
- Twitter
- v.v.

## ✅ Danh Sách Kiểm Tra

- [ ] Cập nhật tên và thông tin cá nhân
- [ ] Thêm các dự án của bạn
- [ ] Cập nhật liên kết xã hội
- [ ] Kiểm tra form liên hệ
- [ ] Build và test trên production
- [ ] Deploy lên Vercel/Netlify

## 💡 Mẹo

- Sử dụng emoji để làm cho portfolio thêm sống động
- Thêm ảnh thực trong thư mục `public/`
- Tích hợp form liên hệ thực (ví dụ: Formspree, SendGrid)
- Thêm animation CSS cho hiệu ứng đẹp hơn
- Sử dụng TypeScript để bắt lỗi sớm

## 🆘 Cần Giúp?

- Xem tài liệu Next.js: https://nextjs.org/docs
- Xem tài liệu Tailwind: https://tailwindcss.com
- Liên hệ: kien@example.com

---

Chúc bạn thành công! 🚀
