import React from 'react';

const Footer = () => (
  <footer className="bg-[#18120a] text-yellow-200 py-4 px-4 md:px-14 flex flex-col md:flex-row items-center justify-around w-full mx-auto">
    <div className="flex items-center gap-4 mb-4 md:mb-0 md:mr-8 w-full md:w-auto justify-center md:justify-start bg-[#18120a]">
      <img src="/images/CGinvestimentos.png" alt="Logo CG Investimentos" className="h-[100px] w-auto mx-auto" />
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
);

export default Footer; 