import React from 'react';

const Header = ({ children }) => (
  <header className="flex flex-col lg:flex-row items-center justify-between pt-8 max-w-6xl mx-auto flex-1 min-h-screen relative overflow-hidden px-2 sm:px-4">
    <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center h-full gap-0 z-10">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-amareloClaro mb-1 font-title leading-tight drop-shadow-lg">
        Investidor master com <br className="hidden md:block" />
        <span className="text-dourado">Carlos Goodman</span>
      </h1>
      <p className="font-semibold mb-1 text-sm xs:text-base sm:text-lg md:text-xl drop-shadow">
        Aprenda a investir em 4 aulas ao vivo com a expertise e experiência do Carlos Goodman
      </p>
      <p className="mb-2 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
      Descubra os segredos dos grandes investidores e aprenda estratégias comprovadas para multiplicar seu patrimônio. Uma jornada completa de educação financeira que vai transformar sua relação com o dinheiro.
      </p>
      {children}
    </div>
    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 items-center relative">
      <img
        src="/images/CarlosGoodman.png"
        alt="Carlos Goodman"
        className="w-full max-w-full h-auto sm:max-w-[400px] md:max-w-[480px] lg:min-w-[750px] md:h-screen rounded-xl md:absolute md:right-[-60px] md:top-1/2 md:-translate-y-1/2 object-contain z-0"
      />
    </div>
  </header>
);

export default Header; 