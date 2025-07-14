import React from 'react';

const aulas = [
  {
    titulo: 'Aula 1',
    texto: 'Fundamentos dos Investimentos: Entenda os conceitos básicos, tipos de investimentos disponíveis no mercado brasileiro e como começar sua jornada de forma segura e consciente.'
  },
  {
    titulo: 'Aula 2',
    texto: 'Análise de Riscos e Diversificação: Aprenda a avaliar riscos, construir uma carteira diversificada e proteger seu capital em diferentes cenários de mercado.'
  },
  {
    titulo: 'Aula 3',
    texto: 'Estratégias Avançadas: Descubra técnicas de análise fundamentalista e técnica, timing de mercado e como identificar oportunidades únicas de investimento.'
  },
  {
    titulo: 'Aula 4',
    texto: 'Planejamento Financeiro e Independência: Desenvolva um plano financeiro sólido, estabeleça metas realistas e aprenda como alcançar sua independência financeira.'
  }
];

const AulaCard = ({ titulo, texto }) => (
  <div className="bg-marrom rounded-lg shadow-2xl p-4 md:p-8 flex-1 min-w-[250px] max-w-full border-none flex flex-col items-center">
    <h3 className="text-2xl font-extrabold mb-3 font-lg uppercase tracking-wide drop-shadow">{titulo}</h3>
    <p className="text-base text-center leading-relaxed">{texto}</p>
  </div>
);

const SaibaMais = () => (
  <section className="bg-transparent w-full pb-14 overflow-x-hidden">
    <div className="flex justify-center mb-10">
      <div className="bg-vinho rounded-b-3xl px-4 md:px-10 py-8 shadow-lg w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-text-general tracking-wide font-title uppercase drop-shadow">
          Saiba como será a estrutura de cada aula
        </h2>
      </div>
    </div>
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center gap-6 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-4">
      {aulas.map((aula, idx) => (
        <AulaCard key={idx} {...aula} />
      ))}
    </div>
  </section>
);

export default SaibaMais; 