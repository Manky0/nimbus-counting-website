"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4896ac] to-[#4896ac]">NimbusVision ProX</span>
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4896ac] to-[#b3dde9]">
              Uma solução inteligente para{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Contagem de pessoas",
                1000,
                "Otimizar seus lucros",
                1000,
                "Gerenciamento de tráfego",
                1000,
                "Segurança do espaço",
                1000,
                "Análise de ocupação",
                1000,
                "Estratégias de vendas",
                1000,
                "Controle de multidões",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Descubra o poder da precisão com o NimbusVision ProX – a solução inovadora para uma gestão inteligente de espaços e análise de tráfego de pessoas equipado com tecnologia de ponta.
          </p>
          {/* <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#b3dde9] to-[#4896ac] hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#b3dde9] to-[#4896ac] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-md w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/camera.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={700}
              height={700}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
