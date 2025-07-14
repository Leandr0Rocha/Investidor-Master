import React from 'react';
import LeadForm from './components/LeadForm';
import SaibaMais from './components/SaibaMais';
import Instrutor from './components/Instrutor';
import Header from './components/Header';
import Footer from './components/Footer';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-preto to-dourado/60  flex flex-col overflow-x-hidden">
      <Header>
        <div className="flex flex-col gap-1 w-full max-w-xs xs:max-w-sm sm:max-w-md mt-6 mx-auto">
            <LeadForm />
        </div>
      </Header>
      <SaibaMais />
      <Instrutor />
      <Depoimentos />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App; 