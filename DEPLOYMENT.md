# Hướng Dẫn Triển Khai (Deployment Guide)

## 🚀 Triển Khai trên Vercel (Khuyến Nghị)

Vercel là nền tảng lý tưởng để triển khai Next.js applications.

### Bước 1: Tạo Repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

### Bước 2: Connect với Vercel

1. Truy cập https://vercel.com
2. Đăng nhập bằng GitHub
3. Click "New Project"
4. Chọn repository `portfolio`
5. Click "Deploy"

### Bước 3: Cấu Hình Biến Môi Trường

1. Truy cập Project Settings
2. Chọn "Environment Variables"
3. Thêm các biến từ `.env.example`:
   ```
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

## 📦 Triển Khai trên Netlify

### Bước 1: Kết Nối Repository

1. Truy cập https://netlify.com
2. Click "New site from Git"
3. Chọn GitHub và authorize
4. Chọn repository `portfolio`

### Bước 2: Cấu Hình Build

```
Build command: npm run build
Publish directory: .next
```

### Bước 3: Deploy

Click "Deploy site"

## ☁️ Triển Khai trên AWS Amplify

```bash
# Cài đặt AWS CLI
npm install -g @aws-amplify/cli

# Khởi tạo Amplify
amplify init

# Deploy
amplify publish
```

## 🐳 Triển Khai bằng Docker

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build và Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🖥️ Triển Khai trên VPS (Ubuntu)

### Bước 1: Cài Đặt Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Bước 2: Cài Đặt PM2

```bash
sudo npm install -g pm2
```

### Bước 3: Clone Repository

```bash
cd /var/www
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run build
```

### Bước 4: Chạy bằng PM2

```bash
pm2 start "npm start" --name "portfolio"
pm2 startup
pm2 save
```

### Bước 5: Cấu Hình Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Bước 6: Enable HTTPS (SSL)

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 📋 Danh Sách Kiểm Tra Trước Deploy

- [ ] Tất cả tests pass
- [ ] Build thành công: `npm run build`
- [ ] Không có warnings hoặc errors
- [ ] Cập nhật `.env.example` với tất cả biến cần thiết
- [ ] Kiểm tra responsive design trên mobile
- [ ] Kiểm tra performance: https://pagespeed.web.dev/
- [ ] Kiểm tra SEO: meta tags, title, description
- [ ] Update domain name trong metadata
- [ ] Setup analytics (Google Analytics, etc.)

## 🔧 Cấu Hình Tên Miền

### Trỏ Domain đến Vercel

1. Truy cập Registrar (GoDaddy, Namecheap, etc.)
2. Cập nhật DNS records thành:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Trỏ Domain đến VPS

1. Cập nhật A record:
   ```
   Type: A
   Name: @
   Value: Your-VPS-IP
   ```

## 📊 Monitoring & Analytics

### Google Analytics

1. Tạo property tại https://analytics.google.com
2. Copy Measurement ID
3. Thêm vào `_app.tsx` hoặc `layout.tsx`

### Monitoring Performance

- Vercel Analytics: Tự động trên Vercel
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse: Trong Chrome DevTools

## 🔐 Security Best Practices

- [ ] Enable HTTPS
- [ ] Set up firewall rules
- [ ] Regular updates
- [ ] Backup database regularly
- [ ] Use environment variables cho sensitive data
- [ ] Implement rate limiting
- [ ] CORS configuration

## 📞 Troubleshooting

### Build fails on Vercel

- Kiểm tra logs: `npm run build` locally
- Xóa `node_modules` và `.next`
- Kiểm tra Node version compatibility

### Site not loading after deploy

- Kiểm tra environment variables
- Kiểm tra build configuration
- Xem production logs

### Performance issues

- Enable caching
- Optimize images
- Use CDN
- Check database queries

---

Để biết thêm thông tin, tham khảo:

- https://nextjs.org/docs/deployment
- https://vercel.com/docs
- https://www.netlify.com/blog/deploying-next-js-with-netlify/
