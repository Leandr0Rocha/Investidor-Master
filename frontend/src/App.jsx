import React from 'react';
import LeadForm from './components/LeadForm';
import SaibaMais from './components/SaibaMais';
import Instrutor from './components/Instrutor';
import Header from './components/Header';
import Footer from './components/Footer';
import Depoimentos from './components/Depoimentos';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#BE7B0E]/60 to-black flex flex-col overflow-x-hidden">
      <Header>
        <div className="flex flex-col gap-1 w-full max-w-xs xs:max-w-sm sm:max-w-md mt-6 mx-auto">
          <LeadForm />
        </div>
      </Header>
      <SaibaMais />
      <Instrutor />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default App; 