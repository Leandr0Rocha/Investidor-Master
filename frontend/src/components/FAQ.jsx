import React, { useState } from 'react';

const faqs = [
  {
    pergunta: 'Preciso ter experiência prévia em investimentos para participar?',
    resposta: 'Não! O evento é todo estruturado para iniciantes e traz uma abordagem prática e objetiva para quem nunca investiu.'
  },
  {
    pergunta: 'O curso é 100% online?',
    resposta: 'Sim, todas as aulas são online. Entretanto, você deverá assistir as lives no horário agendado.'
  },
  {
    pergunta: 'Terei acesso ao instrutor para tirar dúvidas?',
    resposta: 'Sim! Você poderá enviar dúvidas durante as lives, e o instrutor irá responder o máximo possível.'
  },
  {
    pergunta: 'Por quanto tempo terei acesso ao conteúdo?',
    resposta: 'Até 3 dias após o evento, visto que o conteúdo é disponibilizado apenas por esse período.'
  },
  {
    pergunta: 'Receberei certificado ao concluir o curso?',
    resposta: 'Sim, ao finalizar todas as aulas, você receberá um certificado digital de conclusão.'
  },
  {
    pergunta: 'Quais formas de pagamento são aceitas?',
    resposta: 'Aceitamos cartão de crédito, boleto bancário e Pix. O pagamento é totalmente seguro.'
  },
];

function FAQ() {
  const [aberta, setAberta] = useState(null);

  const toggle = idx => {
    setAberta(aberta === idx ? null : idx);
  };

  return (
    <section className="py-16">
      <h2 className="text-4xl font-title text-text-general text-center mb-12">FAQ</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-4 px-2">
        {faqs.map((faq, idx) => (
          <div key={idx} className="">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between bg-dourado text-2xl font-normal font-sans rounded-lg px-6 py-3 md:py-4 focus:outline-none transition-all duration-200 shadow-lg"
            >
              <span className="text-left font-title">{faq.pergunta}</span>
              <svg
                className={`w-8 h-8 ml-4 transition-transform duration-300 ${aberta === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aberta === idx && (
              <div className="bg-preto text-amareloClaro rounded-b-lg px-6 py-4 text-lg animate-fade-in">
                {faq.resposta}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ; 