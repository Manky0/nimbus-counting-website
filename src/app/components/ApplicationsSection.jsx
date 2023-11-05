"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Supermercados",
    id: "supermercados",
    content: (
      <ul className="list-disc pl-2">
        <li>Gestão de Estoques</li>
        <li>Comportamento do Consumidor</li>
        <li>Zonas Mais Visitadas</li>
        <li>Eficácia das Promoções</li>
      </ul>
    ),
    image: "/images/supermercado.webp"
  },
  {
    title: "Shoppings",
    id: "shoppings",
    content: (
      <ul className="list-disc pl-2">
        <li>Otimização de Layout</li>
        <li>Estratégias de Marketing</li>
        <li>Fluxo de Visitantes</li>
        <li>Horários de Pico</li>
      </ul>
    ),
    image: "/images/shopping.jpg"
  },
  {
    title: "Aeroportos",
    id: "aeroportos",
    content: (
      <ul className="list-disc pl-2">
        <li>Distribuição de Recursos</li>
        <li>Planejamento de Segurança</li>
        <li>Filas e Tempo de Espera</li>
        <li>Padrões de Movimento</li>
      </ul>
    ),
    image: "/images/aeroporto.webp"
  },
  {
    title: "Outros",
    id: "outros",
    content: (
      <ul className="list-disc pl-2">
        <li>Pequenos varejos/ambientes</li>
        <li>Bibliotecas</li>
        <li>Eventos e espaços públicos</li>
        <li>Instituições educacionais</li>
        <li>Hospitais e Centros de saúde</li>
      </ul>
    ),
    image: "/images/evento.jpg"
  },
];

const ApplicationsSection = () => {
  const [tab, setTab] = useState("supermercados");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="aplicacoes">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div style={{ position: 'relative', width: '500px', height: '500px' }}> <Image style={{objectFit: "contain"}} src={TAB_DATA.find((t) => t.id === tab).image} width={500} height={500} /></div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Aplicações do produto</h2>
          <p className="text-base lg:text-lg">
          O nosso avançado contador de pessoas apresenta uma solução precisa para monitorar o fluxo de indivíduos em uma variedade de configurações. 
          Este dispositivo inovador é adaptável e pode ser aplicado em várias situações, proporcionando insights valiosos para diversas áreas, tais como:
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("supermercados")}
              active={tab === "supermercados"}
            >
              {" "}
              Supermercados{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("shoppings")}
              active={tab === "shoppings"}
            >
              {" "}
              Shoppings{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("aeroportos")}
              active={tab === "aeroportos"}
            >
              {" "}
              Aeroportos{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("outros")}
              active={tab === "outros"}
            >
              {" "}
              Outros{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
