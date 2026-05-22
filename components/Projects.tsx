export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Nền tảng thương mại điện tử hoàn chỉnh với tính năng giỏ hàng, thanh toán và quản lý đơn hàng.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
      image: "🛍️",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với đồng bộ hóa thời gian thực và giao diện trực quan.",
      tags: ["React", "Firebase", "Redux", "Material-UI"],
      image: "✅",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Bảng điều khiển quản lý các tài khoản mạng xã hội với phân tích thời gian thực.",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "Recharts"],
      image: "📊",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Ứng dụng xem thời tiết với dự báo chi tiết và bản đồ tương tác.",
      tags: ["React", "OpenWeather API", "Mapbox", "PWA"],
      image: "🌤️",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "Nền tảng blog với editor Markdown, nhận xét và hệ thống phân loại.",
      tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      image: "📝",
    },
    {
      id: 6,
      title: "Portfolio Generator",
      description:
        "Công cụ tạo portfolio tự động từ dữ liệu JSON với giao diện tùy chỉnh.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "💼",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container-custom">
        <h2 className="section-title">Các Dự Án Nổi Bật</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-40 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700 flex gap-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-400 font-semibold"
                  >
                    Live Demo →
                  </a>
                  <a
                    href="#"
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
    </section>
  );
}
