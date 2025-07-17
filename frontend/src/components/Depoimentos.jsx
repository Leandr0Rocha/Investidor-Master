import React from "react";
import BotaoParticipe from "./BotaoParticipe";

function Depoimentos() {

  const depoimentos = [
    {
      nome: "Ana Paula Souza",
      texto:
        "Nunca tinha investido antes e confesso que tinha muito medo. O evento me mostrou que é possível começar do zero, de forma simples e segura. Hoje já faço meus primeiros investimentos com confiança!",
      cargo: "Iniciante em Investimentos",
      imagem: "/images/ana paula souza.jpg"
    },
    {
      nome: "Carlos Henrique",
      texto:
        "Achei o conteúdo muito prático e direto ao ponto. As lives foram dinâmicas e consegui tirar todas as minhas dúvidas ao vivo. Recomendo para quem quer aprender de verdade!",
      cargo: "Empreendedor",
      imagem: "/images/carlos henrique.jpg"
    },
    {
      nome: "Fernanda Lima",
      texto:
        "O evento superou minhas expectativas! Gostei muito da didática do instrutor e da atenção dada a cada participante. Já estou aplicando o que aprendi e vendo resultados.",
      cargo: "Professora",
      imagem: "/images/fernanda lima.jpg"
    },
    {
      nome: "João Victor",
      texto:
        "Participar desse evento foi um divisor de águas para mim. Sempre achei que investir era complicado, mas agora vejo que é acessível para todos. Parabéns pela iniciativa!",
      cargo: "Estudante Universitário",
      imagem: "/images/joao victor.jpg"
    },
    {
      nome: "Marina Oliveira",
      texto:
        "O suporte durante o evento foi excelente. As explicações foram claras e os exemplos práticos ajudaram muito. Indico para todos que querem começar a investir sem enrolação.",
      cargo: "Analista de RH",
      imagem: "/images/marina oliveira.jpg"
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <h2 className="text-4xl font-title text-text-general text-center mb-12">
        O QUE DIZ QUEM JÁ PARTICIPOU
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-900 scrollbar-track-black snap-x snap-mandatory">
          {depoimentos.map((dep, idx) => (
            <div
              key={idx}
              className="bg-marrom rounded-lg p-8 flex-shrink-0 w-80 md:w-96 flex flex-col items-center shadow-lg snap-center border-none"
            >
              <p className="mb-8 text-base">{dep.texto}</p>
              <div className="flex flex-col items-center mt-auto">
                <img
                  src={dep.imagem}
                  alt={dep.nome}
                  className="w-20 h-20 rounded-full border-4 border-branca mb-4 object-cover bg-preto"
                />
                <span className="font-title text-2xl font-bold">{dep.nome}</span>
                <span className="font-semibold">{dep.cargo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BotaoParticipe />
    </section>
  );
}

export default Depoimentos; 