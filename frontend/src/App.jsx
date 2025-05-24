import React from 'react';
import LeadForm from './components/LeadForm';
import SaibaMais from './components/SaibaMais';
import Instrutor from './components/Instrutor';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#BE7B0E]/60 to-black flex flex-col overflow-x-hidden">
      <header className="flex flex-col md:flex-row items-center justify-between pt-8 max-w-6xl mx-auto flex-1 min-h-screen relative overflow-hidden px-4">
        <div className="md:w-1/2 text-center md:text-left flex flex-col items-start justify-center h-full gap-0 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-general mb-1 font-title leading-tight drop-shadow-lg">Investidor master com <br className="hidden md:block" /> <span className="text-button-name">Carlos Goodman</span></h1>
          <p className="text-text-general font-semibold mb-1 text-lg md:text-xl drop-shadow">Aprenda a investir em 4 aulas ao vivo com a expertise e experiência do Carlos Goodman</p>
          <p className="text-text-general mb-2 text-base md:text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis metus, rutrum id mollis ac, lobortis sit amet libero. Integer consequat nunc velit interdum efficitur.</p>
          <div className="flex flex-col gap-4 w-full max-w-md mt-8">
          <LeadForm />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 items-center relative">
          <img src="/images/CarlosGoodman.png" alt="Carlos Goodman" className="max-w-[480px] md:max-w-[750px] h-screen rounded-xl md:absolute md:right-[-60px] md:top-1/2 md:-translate-y-1/2 object-contain z-0" />
        </div>
      </header>
      <SaibaMais />
      <Instrutor />
      <footer className="bg-[#18120a] text-yellow-200 py-4 px-4 md:px-14 flex flex-col md:flex-row items-center justify-around w-full mx-auto">
        <div className="flex items-center gap-4 mb-4 md:mb-0 md:mr-8 w-full md:w-auto justify-start md:justify-start bg-[#18120a]">
          <img src="/images/CGinvestimentos.png" alt="Logo CG Investimentos" className="h-[100px] w-auto" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-around w-full">
          <div className="text-m text-center md:text-left md:mr-8">
            <div>Contato: contato@carlosgoodman.com</div>
            <div>Telefone: (22) 900000000</div>
          </div>
          <div className="flex gap-4 justify-center md:justify-end mt-2 md:mt-0 md:ml-8">
            <a href="#" className="hover:text-yellow-400" title="Instagram">
              <img src="/icons/icons8-instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400" title="Facebook">
              <img src="/icons/icons8-facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400" title="YouTube">
              <img src="/icons/icons8-reproduzir-youtube.svg" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400" title="LinkedIn">
              <img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 