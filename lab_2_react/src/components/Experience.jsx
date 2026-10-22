function Experience() {
  const experiences = [
    {
      title: "Розробка простих скриптів на Python",
      tags: ["Python", "Automation", "Security Tools"],
      desc: "Написання утиліт для автоматизації рутинних завдань та базового аналізу мережевих пакетів.",
    },
    {
      title: "Адміністрування систем родини Linux",
      tags: ["Linux", "Bash", "Fedora", "Networking"],
      desc: "Налаштування оточення, конфігурація прав доступу, моніторинг процесів та робота з терміналом.",
    },
  ];

  return (
    <section className="bg-slate-900/70 border border-slate-800/80 p-6 sm:p-8 rounded-3xl shadow-lg backdrop-blur-sm mb-6 transition-all duration-300 hover:border-slate-700">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">⚡</span>
        Досвід та проєкти
      </h2>

      <div className="space-y-4">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-slate-100 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-[11px] font-medium bg-slate-800/80 text-slate-300 px-2.5 py-0.5 rounded-md border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;