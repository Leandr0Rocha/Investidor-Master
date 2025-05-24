import React from 'react';
import { aulas } from '../data/aulas';

const AulaCard = ({ titulo, texto }) => (
  <div className="bg-[#BE7B0E] text-[#FFF1CC] rounded-xl shadow-2xl p-4 md:p-8 flex-1 min-w-[250px] max-w-full border-2 border-input-card flex flex-col items-center">
    <h3 className="text-2xl font-extrabold mb-3 font-title uppercase tracking-wide drop-shadow">{titulo}</h3>
    <p className="text-base text-center leading-relaxed">{texto}</p>
  </div>
);

const SaibaMais = () => (
  <section className="bg-transparent w-full pb-14 overflow-x-hidden">
    <div className="flex justify-center mb-10">
      <div className="bg-banner-saiba rounded-b-3xl px-4 md:px-10 py-8 shadow-lg w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-text-general tracking-wide font-title uppercase drop-shadow">
          Saiba como será a estrutura de cada aula
        </h2>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto px-4">
      {aulas.map((aula, idx) => (
        <AulaCard key={idx} {...aula} />
      ))}
    </div>
  </section>
);

export default SaibaMais; 