export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Nền tảng thương mại điện tử hoàn chỉnh với tính năng giỏ hàng, thanh toán và quản lý đơn hàng. Xây dựng bằng Next.js, PostgreSQL và Stripe API.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe API",
        "PostgreSQL",
      ],
      image: "🛍️",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với đồng bộ hóa thời gian thực, nhắc nhở tự động, và giao diện trực quan. Hỗ trợ cộng tác nhóm.",
      tags: ["React", "Firebase", "Redux", "Material-UI"],
      image: "✅",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Bảng điều khiển quản lý các tài khoản mạng xã hội với phân tích thời gian thực, lập lịch bài viết và quản lý độc giả.",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "Recharts"],
      image: "📊",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Ứng dụng xem thời tiết với dự báo chi tiết, bản đồ tương tác và thông báo cảnh báo. Hỗ trợ PWA để sử dụng offline.",
      tags: ["React", "OpenWeather API", "Mapbox", "PWA"],
      image: "🌤️",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "Nền tảng blog với editor Markdown, nhận xét, hệ thống phân loại và SEO tối ưu. Hiệu suất cao với SSG.",
      tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      image: "📝",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      id: 6,
      title: "Portfolio Generator",
      description:
        "Công cụ tạo portfolio tự động từ dữ liệu JSON với giao diện tùy chỉnh. Giúp người dùng tạo portfolio chuyên nghiệp dễ dàng.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "💼",
      demoLink: "#",
      sourceLink: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-primary">
      <div className="container-custom py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Các Dự Án Của Tôi
        </h1>
        <p className="text-xl text-slate-400 mb-12">
          Dưới đây là một số dự án nổi bật mà tôi đã xây dựng.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center text-8xl">
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-700 flex gap-4">
                  <a
                    href={project.demoLink}
                    className="text-blue-500 hover:text-blue-400 font-semibold"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.sourceLink}
                    className="text-slate-400 hover:text-slate-300 font-semibold"
                  >
                    Source Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
