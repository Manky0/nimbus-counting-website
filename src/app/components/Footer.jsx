import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <div>
      <Image src="/images/nimbus_white.png" height={90} width={150}/>
      <p className="text-slate-200">nimbusvisionx@gmail.com</p>
      </div>
      <p className="text-slate-200">© 2023 Nimbus | Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
