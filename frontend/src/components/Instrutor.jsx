import React from 'react';

export default function Instrutor() {
  return (
    <section className="w-full bg-transparent py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-title text-text-general text-center mb-14 tracking-wide uppercase drop-shadow-lg">Conheça melhor o instrutor</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full mx-auto mb-10">
        <div className="flex-1 text-text-general text-lg leading-relaxed mb-6 md:mb-0">
          <p>Phasellus commodo ex eu nibh ullamcorper maximus. Nulla arcu lectus, gravida in semper id, fringilla sit amet arcu. Cras maximus sodales erat vitae bibendum. Suspendisse sapien nunc, gravida id porttitor tristique, rhoncus in augue. Sed accumsan tellus nibh, eu consequat nulla laoreet quis.</p>
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
          <p>Quisque at dapibus leo. Aenean quis enim a ipsum feugiat aliquam. Nullam id elementum enim. Etiam suscipit metus lorem, ut elementum risus auctor hendrerit. Quisque quis sapien ultricies, rutrum nunc at, interdum nunc. In pretium pulvinar odio, non faucibus erat viverra vel. Vivamus ac vehicula ipsum. Ut id odio vitae ligula ultricies hendrerit.</p>
        </div>
      </div>
    </section>
  );
} 