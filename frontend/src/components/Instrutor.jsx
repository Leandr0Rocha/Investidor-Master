import React from 'react';

export default function Instrutor() {
  return (
    <section className="w-full bg-transparent py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-title text-text-general text-center mb-14 tracking-wide uppercase drop-shadow-lg">Conheça melhor o instrutor</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full mx-auto mb-10">
        <div className="flex-1 text-text-general text-lg leading-relaxed mb-6 md:mb-0">
          <p>Carlos Goodman é um dos investidores mais respeitados do mercado brasileiro, com mais de 15 anos de experiência em análise de investimentos. Formado em Economia e com especialização em Mercado Financeiro, Carlos já ajudou milhares de pessoas a transformarem suas vidas através de investimentos inteligentes e estratégicos.</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/Apresentando.png" alt="Carlos Goodman apresentando" className="rounded-sm shadow-2xl max-w-[500px] w-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full mx-auto">
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <img src="/images/Estudando.png" alt="Carlos Goodman analisando gráficos" className="rounded-sm shadow-2xl max-w-[500px] w-full object-cover" />
        </div>
        <div className="flex-1 text-text-general text-lg leading-relaxed order-1 md:order-2">
          <p>Com uma abordagem única que combina teoria sólida com experiência prática, Carlos desenvolveu metodologias exclusivas que já geraram resultados extraordinários para seus alunos. Sua missão é democratizar o conhecimento sobre investimentos, tornando a educação financeira acessível a todos que desejam construir um futuro próspero.</p>
        </div>
      </div>
    </section>
  );
} 