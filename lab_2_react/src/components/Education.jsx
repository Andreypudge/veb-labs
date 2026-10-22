function Education() {
  return (
    <section className="bg-slate-900/70 border border-slate-800/80 p-6 sm:p-8 rounded-3xl shadow-lg backdrop-blur-sm mb-8 transition-all duration-300 hover:border-slate-700">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">🎓</span>
        Освіта
      </h2>

      <div className="p-5 rounded-2xl bg-slate-950/60 border-l-4 border-l-indigo-500 border border-slate-800/50">
        <h3 className="text-base font-semibold text-slate-100">
          Національний університет «Львівська політехніка»
        </h3>
        <p className="text-sm font-medium text-indigo-400 mt-1">
          Спеціальність «Кібербезпека»
        </p>
        <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>2 курс (2024 – 2028)</span>
        </div>
      </div>
    </section>
  );
}

export default Education;