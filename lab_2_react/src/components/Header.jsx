function Header() {
  return (
    <header className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800 text-center mb-8 transition-all duration-300">
      <div className="inline-block p-1 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full mb-4">
        <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center text-3xl font-bold text-blue-400">
          А
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
        Андрій
      </h1>
      
      <p className="text-slate-400 font-medium text-lg mb-4">
        Cybersecurity Student & Web Developer
      </p>

      <div className="flex flex-wrap justify-center items-center gap-3">
        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Lviv Polytechnic
        </span>
        <a
          href="https://github.com/Andreypudge"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
        >
          <span>Мій GitHub</span>
          <span className="text-xs">↗</span>
        </a>
      </div>
    </header>
  );
}

export default Header;