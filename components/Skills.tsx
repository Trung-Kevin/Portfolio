export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "HTML/CSS",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "GraphQL",
      ],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "GitHub Actions", "Vercel", "Nginx"],
    },
    {
      category: "Design",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Web Animation"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Kỹ Năng & Công Nghệ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-primary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-6">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill}</span>
                      <span className="text-blue-400">★★★★★</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Sẵn Sàng Cho Một Thử Thách Mới?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Tôi luôn tìm kiếm các cơ hội mới để cải thiện kỹ năng và đóng góp
            cho các dự án thú vị.
          </p>
          <button className="btn-primary bg-white text-blue-600 hover:bg-slate-100">
            Hãy Liên Hệ Với Tôi
          </button>
        </div>
      </div>
    </section>
  );
}
