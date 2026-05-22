# Thông Tin Cá Nhân - Đặng Nguyễn Trung Kiên

## 👤 Thông Tin Cơ Bản

| Thông Tin      | Giá Trị                         |
| -------------- | ------------------------------- |
| **Tên**        | Đặng Nguyễn Trung Kiên          |
| **Sinh Ngày**  | 24/10/2005                      |
| **Tuổi**       | 18                              |
| **Địa Chỉ**    | Thành Phố Hồ Chí Minh, Việt Nam |
| **Email**      | kien@example.com                |
| **Điện Thoại** | +84 (0) 123 456 789             |

## 🎯 Sở Thích

- 🍽️ Ăn uống
- ⚽ Đá banh
- 💻 Lập trình

## 💪 Điểm Mạnh

- ✓ Chịu khó
- ✓ Dễ thích nghi
- ✓ Sáng tạo
- ✓ Giải quyết vấn đề

## 👨‍🍳 Kinh Nghiệm Trước Đó

**Từng là một đầu bếp** - Một hành trình thú vị đã hình thành nên tính cách và giá trị của bạn.

Quá trình này đã dạy cho bạn:

- Tính kỷ luật
- Sáng tạo trong công việc
- Cách làm việc dưới áp lực
- Những kỹ năng quý báu vẫn áp dụng trong lập trình

## 📌 Cách Cập Nhật Thông Tin Trong Portfolio

Tất cả thông tin cá nhân được lưu trữ trong file `lib/constants.ts`. Để cập nhật:

1. **Mở file**: `k:\nextjs\Portfolio\Portfolio\lib\constants.ts`

2. **Cập nhật `SITE_CONFIG`**:

```typescript
export const SITE_CONFIG = {
  name: "Đặng Nguyễn Trung Kiên",
  title: "Web Developer & Designer",
  birthDate: "24/10/2005",
  age: 18,
  email: "your-email@example.com",
  phone: "+84 (0) xxx xxx xxx",
  location: "Thành Phố Hồ Chí Minh, Việt Nam",
  hobbies: ["Ăn uống", "Đá banh", "Lập trình"],
  strengths: ["Chịu khó", "Dễ thích nghi", "Sáng tạo", "Giải quyết vấn đề"],
  pastExperience: "Từng là một đầu bếp",
};
```

3. **Các component sẽ tự động cập nhật**:
   - Hero section
   - About page
   - Contact page
   - Footer

## 🖼️ Cách Thêm Ảnh Đại Diện

1. Chuyển ảnh vào: `public/images/profile.jpg`
2. Ảnh sẽ tự động hiển thị trong Hero section
3. Khích thước khuyên: 400x400px hoặc tỷ lệ 1:1

## 🚀 Tính Năng Hiện Tại

✅ Hero section với ảnh đại diện và thông tin cá nhân  
✅ Hiển thị sở thích và điểm mạnh  
✅ Trang About chi tiết với lịch sử cá nhân  
✅ Form liên hệ với các thông tin  
✅ Responsive design cho mobile  
✅ Dark theme hiện đại

## 📝 Notes

- Portfolio đã được cập nhật với tất cả thông tin của bạn
- Các file sử dụng NextJS 14 với TypeScript
- Styling sử dụng Tailwind CSS
- Hoàn toàn production-ready

---

**Portfolio Version**: 1.0.0  
**Last Updated**: May 22, 2026
