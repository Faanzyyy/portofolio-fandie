"use client";

import Image from "next/image";
import { motion } from "motion/react";

const NAME = "FANDI AHMAD ZULFIKAR";
const ROLE_LINES = ["Web & Flutter", "Developer"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Garis dekoratif */}
      <div className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full border border-foreground/15" />
      <div className="pointer-events-none absolute -right-52 bottom-10 size-[36rem] rounded-full border border-foreground/15" />

      {/* Peran, pojok kiri atas */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-6 top-28 z-20 text-base leading-snug sm:left-10"
      >
        {ROLE_LINES.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </motion.div>

      {/* Nama raksasa, berada di belakang foto */}
      <div className="absolute inset-x-0 top-[30%] z-0 flex justify-center overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading whitespace-nowrap text-[min(36vw,52vh)] uppercase leading-[0.85]"
        >
          {NAME}
        </motion.h1>
      </div>

      {/* Foto, di depan nama */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute bottom-0 left-1/2 z-10 h-[82vh] w-[min(95vw,75vh)] -translate-x-1/2"
      >
        <Image
          src="/images/profile.png"
          alt="Foto Fandi Ahmad Zulfikar"
          fill
          priority
          sizes="(max-width: 768px) 95vw, 60vw"
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* Scroll down, pojok kanan bawah */}
      <a
        href="#about"
        className="absolute bottom-10 right-6 z-20 flex flex-col items-center gap-3 text-sm sm:right-10"
      >
        Scroll down
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px origin-top bg-foreground"
        />
      </a>
    </section>
  );
}
