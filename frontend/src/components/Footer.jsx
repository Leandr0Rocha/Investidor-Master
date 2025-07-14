import React from 'react';

const Footer = () => (
  <footer className="bg-preto text-amareloClaro py-4 px-4 md:px-14 flex flex-col md:flex-row items-center justify-center w-full mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">
        <div className="text-m text-center md:text-left md:mr-8">
          <div>Contato: contato@carlosgoodman.com</div>
          <div>Telefone: (22) 900000000</div>
        </div>
        <div className="flex gap-4 justify-center md:justify-center mt-2 md:mt-0 md:ml-8">
          <a href="#" className="hover:text-dourado" title="Instagram">
            <img src="/icons/icons8-instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-dourado" title="Facebook">
            <img src="/icons/icons8-facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-dourado" title="YouTube">
            <img src="/icons/icons8-reproduzir-youtube.svg" alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-dourado" title="LinkedIn">
            <img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0 md:mr-8">
        <img src="/images/CGinvestimentos.png" alt="Logo CG Investimentos" className="h-[100px] w-auto mx-auto" />
      </div>
    </div>
  </footer>
);

export default Footer; 