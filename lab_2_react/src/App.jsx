import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 antialiased selection:bg-blue-500 selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Header />
        <main>
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;