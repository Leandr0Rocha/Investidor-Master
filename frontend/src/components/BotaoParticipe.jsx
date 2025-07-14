import React from "react";

function BotaoParticipe() {
    const handleClick = () => {
      const header = document.querySelector('header');
      if (header) {
        header.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
      <div className="flex justify-center mt-10">
        <button
          onClick={handleClick}
          className="bg-dourado hover:bg-dourado/80 font-bold py-4 px-10 text-2xl rounded transition shadow-lg mx-auto block"
        >
          Participe você também
        </button>
      </div>
    );
  }

  export default BotaoParticipe;