import React from 'react';

export const EnterpriseFooterBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#040b14] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto flex justify-center items-center overflow-hidden">
        <img
          src="/Nuelogixs.png"
          alt="Nuelogixs Enterprises and ESIK Pay logistics and payments platforms"
          className="w-full h-auto max-w-full block object-contain rounded-2xl transition-opacity duration-300"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};
