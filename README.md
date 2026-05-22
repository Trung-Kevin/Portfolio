# Portfolio - Đặng Nguyễn Trung Kiên

Một portfolio cá nhân hiện đại được xây dựng bằng Next.js, TypeScript và Tailwind CSS.

## Tính Năng

- **Giao Diện Hiện Đại**: Design tối ưu cho thiết bị di động và máy tính
- **Hiệu Suất Cao**: Tối ưu hóa SEO và tốc độ tải
- **Responsive Design**: Hoạt động hoàn hảo trên tất cả các thiết bị
- **Các Phần Chính**:
- **Hero Section**: Giới thiệu cá nhân
- **Projects**: Trưng bày các dự án nổi bật
- **Skills**: Hiển thị kỹ năng và công nghệ
- **Contact**: Form liên hệ trực tiếp

## Công Nghệ Sử Dụng

- **Next.js 14**: Framework React hiện đại
- **TypeScript**: Lập trình an toàn kiểu
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Library UI
- **Responsive Design**: Mobile-first approach

## Bắt Đầu

### Yêu Cầu

- Node.js 18+
- npm hoặc yarn

### Cài Đặt

```bash
# Cài đặt dependencies
npm install
# hoặc
yarn install
```

### Chạy Development Server

```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem portfolio.

### Build cho Production

```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## Cấu Trúc Thư Mục

```
portfolio/
├── app/
│   ├── layout.tsx         # Layout chính
│   ├── page.tsx           # Trang chính
│   └── globals.css        # CSS toàn cục
├── components/
│   ├── Navbar.tsx         # Thanh điều hướng
│   ├── Hero.tsx           # Phần hero/giới thiệu
│   ├── Projects.tsx       # Phần dự án
│   ├── Skills.tsx         # Phần kỹ năng
│   ├── Contact.tsx        # Phần liên hệ
│   └── Footer.tsx         # Footer
├── public/                # Tài nguyên tĩnh
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## Tùy Chỉnh

### Thay Đổi Tên

Cập nhật `name` trong các file:

- `app/layout.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`

### Thêm Dự Án

Chỉnh sửa mảng `projects` trong `components/Projects.tsx`

### Thay Đổi Màu Sắc

Cập nhật Tailwind config trong `tailwind.config.js`

### Liên Kết Xã Hội

Cập nhật link trong `components/Footer.tsx` và `components/Contact.tsx`

## Deployment

### Vercel (Khuyến Nghị)

```bash
npm install -g vercel
vercel
```

### Các Lựa Chọn Khác

- GitHub Pages
- Netlify
- AWS Amplify
- Heroku

## Liên Hệ

**Đặng Nguyễn Trung Kiên**

- Email: kien@example.com
- Phone: +84 (0) 123 456 789
- Location: Thành Phố Hồ Chí Minh, Việt Nam

## License

MIT License - Tự do sử dụng và sửa đổi

---

Được tạo bởi: **Đặng Nguyễn Trung Kiên**
