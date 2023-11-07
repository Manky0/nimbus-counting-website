"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Contagem de pessoas",
    description: "Conte automaticamente a quantidade de pessoas que passam pelo seu estabelecimento.",
    image: "/images/caracteristicas/people_counting.png",
    tag: ["Todas", "Acurácia"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Mapa de calor",
    description: "Obtenha informação visual agregada sobre o movimentação de pessoas e horas de pico nos locais do estabelecimento.",
    image: "/images/caracteristicas/heatmap.gif",
    tag: ["Todas", "Acurácia"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Detecção de multidões",
    description: "Estime o tamanho e possiveis acidentes causados por grandes grupos de pessoas.",
    image: "https://venturebeat.com/wp-content/uploads/2017/11/rekognition-face-detection-3.jpg?w=1200&strip=all",
    tag: ["Todas", "Acurácia"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Dashboard",
    description: "Todos os dados são acessíveis facilmente através de uma dashboard web.",
    image: "https://meshed.com.au/wp-content/uploads/2022/08/Dashboard-2.png",
    tag: ["Todas", "Dashboard"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Geração de relatórios",
    description: "Geração automática de relatórios, permitindo exportação para outras plataformas.",
    image: "https://peoplecounter.io/cdn/shop/files/PeopleCounter-Report-Shops-09-2023.png?v=1697957932&width=1946",
    tag: ["Todas", "Acurácia"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Alarmes",
    description: "Tenha alarmes para eventos críticos, como invasões, superlotação, etc...",
    image: "https://cdn.pixabay.com/photo/2021/11/06/05/25/alarm-symbol-6772461_1280.png",
    tag: ["Todas", "Acurácia"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const AdvantagesSection = () => {
  const [tag, setTag] = useState("Todas");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="vantagens">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-14">
        Principais características
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default AdvantagesSection;
