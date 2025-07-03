import React, { useRef } from 'react';

const depoimentos = [
  {
    nome: 'Ana Souza',
    texto: 'A mentoria do Carlos mudou minha visão sobre investimentos. Hoje me sinto muito mais segura para investir!',
    foto: '/images/Apresentando.png',
    profissao: 'Analista Financeira'
  },
  {
    nome: 'João Pedro',
    texto: 'Conteúdo prático, direto ao ponto e com dicas que realmente funcionam. Recomendo demais!',
    foto: '/images/Estudando.png',
    profissao: 'Empreendedor'
  },
  {
    nome: 'Marina Lima',
    texto: 'Nunca imaginei que aprender sobre investimentos pudesse ser tão simples. Obrigada, Carlos!',
    foto: '/images/CarlosGoodman.png',
    profissao: 'Estudante Universitária'
  },
  {
    nome: 'Ricardo Alves',
    texto: 'O acompanhamento e a didática do Carlos são diferenciados. Meu dinheiro está rendendo muito mais!',
    foto: '/images/CGinvestimentos.png',
    profissao: 'Servidor Público'
  },
  {
    nome: 'Beatriz Martins',
    texto: 'Recomendo para todos que querem começar a investir sem enrolação. Aprendi muito em pouco tempo.',
    foto: '/images/Apresentando.png',
    profissao: 'Designer'
  }
];

const Depoimentos = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Funções para drag horizontal
  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };
  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidade
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Navegação por setas
  const scrollByCard = (dir) => {
    const cardWidth = 340; // largura aproximada do card + gap
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  const scrollToHeader = () => {
    const header = document.querySelector('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-transparent py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl mb-8 text-center text-text-general tracking-wide uppercase drop-shadow-lg">Leia sobre a experiência de quem fez</h2>
      <div className="relative w-full max-w-6xl">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-thumb-white/10 scrollbar-thumb-button-name/60 scrollbar-track-transparent py-4 px-1 md:px-8 select-none cursor-grab"
          style={{ scrollBehavior: 'smooth' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {depoimentos.map((dep, idx) => (
            <div key={idx} className="bg-[#222] rounded-xl shadow-lg p-6 flex flex-col items-center text-center flex-shrink-0 min-w-[300px] max-w-[340px] mx-auto border border-yellow-900/30">
              <img src={dep.foto} alt={dep.nome} className="w-20 h-20 rounded-full object-cover border-4 border-button-name mb-4 shadow" />
              <p className="text-lg text-text-general mb-4 italic">"{dep.texto}"</p>
              <div className="font-bold text-button-name">{dep.nome}</div>
              <div className="text-yellow-100 text-sm">{dep.profissao}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollToHeader}
        className="mt-10 bg-button-name hover:bg-button-name/90 text-text-general font-bold py-4 px-10 text-2xl rounded transition shadow-lg mx-auto block"
      >
        Participar
      </button>
    </section>
  );
};

export default Depoimentos; 