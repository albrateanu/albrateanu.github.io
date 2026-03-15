import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Mail, Github, GraduationCap, Linkedin, Link, Sun, Moon } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const publications = [
  {
    title: "ISALux: Illumination and Segmentation Aware Transformer Employing Mixture of Experts for Low Light Image Enhancement",
    authors: "Raul Balmez, Alexandru Brateanu, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "WACV, 2026",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2508.17885" }],
  },
  {
    title: "ModalFormer: Multimodal Transformer for Low-Light Image Enhancement",
    authors: "Alexandru Brateanu, Raul Balmez, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "arXiv, 2025",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2507.20388" },
      { label: "Code", url: "https://github.com/albrateanu/ModalFormer" },
    ],
  },
  {
    title: "LYT-Net: Lightweight YUV Transformer-based Network for Low-Light Image Enhancement",
    authors: "Alexandru Brateanu, Raul Balmez, Adrian Avram, Ciprian Orhei, Cosmin Ancuti",
    venue: "SPL, 2025",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10972228" },
      { label: "Code", url: "https://github.com/albrateanu/LYT-Net" },
    ],
  },
  {
    title: "DepthLux: Employing Depthwise Separable Convolutions for Low-Light Image Enhancement",
    authors: "Raul Balmez, Alexandru Brateanu, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "Sensors, 2025",
    links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/25/5/1530" }],
  },
  {
    title: "AKDT: Adaptive Kernel Dilation Transformer for Effective Image Denoising",
    authors: "Alexandru Brateanu, Raul Balmez, Adrian Avram, Ciprian Orhei",
    venue: "VISAPP, 2025",
    links: [
      { label: "Paper", url: "https://www.scitepress.org/Papers/2025/131577/131577.pdf" },
      { label: "Code", url: "https://github.com/albrateanu/AKDT" },
    ],
  },
  {
    title: "Enhancing Low-Light Images with Kolmogorov–Arnold Networks in Transformer Attention",
    authors: "Alexandru Brateanu, Raul Balmez, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "Sensors, 2025",
    links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/25/2/327" }],
  },
  {
    title: "Kolmogorov-Arnold Networks in Transformer Attention for Low-Light Image Enhancement",
    authors: "Alexandru Brateanu, Raul Balmez",
    venue: "ISETC, 2024",
    links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10797300/" }],
  },
  {
    title: "DepthLux: Depthwise Separable Convolution Transformer",
    authors: "Raul Balmez, Alexandru Brateanu",
    venue: "ISETC, 2024",
    links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10797398/" }],
  },
];

function highlightAuthor(authors: string) {
  const name = "Alexandru Brateanu";
  const idx = authors.indexOf(name);
  if (idx === -1) return authors;
  return (
    <>
      {authors.slice(0, idx)}
      <span className="underline">{name}</span>
      {authors.slice(idx + name.length)}
    </>
  );
}

const contactLinks = [
  { label: "Email", url: "mailto:albrateanu@gmail.com", icon: Mail },
  { label: "GitHub", url: "https://github.com/albrateanu", icon: Github },
  { label: "Scholar", url: "https://scholar.google.com/citations?user=ru0meGgAAAAJ", icon: GraduationCap },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/albrateanu/", icon: Linkedin },
  { label: "ORCID", url: "https://orcid.org/0009-0001-2752-2357", icon: Link },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
            <img src="/ab_logo.png" alt="Logo" className="w-8 h-8 rounded object-cover" />
            <h1 className="text-lg font-semibold text-foreground">Alexandru Brateanu</h1>
          </div>
      </header>

      <div className="h-1 bg-primary" />

      <motion.main
        className="max-w-5xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <motion.aside variants={itemVariants} className="md:w-64 shrink-0">
            <img
              src={profilePhoto}
              alt="Alexandru Brateanu"
              className="w-44 h-44 rounded-full object-cover mx-auto md:mx-0 mb-5"
            />
            <h2 className="text-lg font-semibold text-foreground">Alexandru Brateanu</h2>
            
            <p className="text-sm text-muted-foreground mt-1">
              BSc Computer Science Student at the University of Manchester
            </p>

            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-2">
                  <link.icon className="w-4 h-4 text-primary" />
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                </div>
              ))}
            </div>
          </motion.aside>

          <div className="flex-1 min-w-0">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-foreground mb-4">About me</h2>
              <p className="text-foreground leading-relaxed">
                I am a final-year BSc student majoring in Computer Science at the University of Manchester.
                My research is under the supervision of{" "}
                <a href="https://www.linkedin.com/in/cosmin-ancuti-86b3872/" className="font-semibold" target="_blank" rel="noopener noreferrer">
                  Prof. Cosmin Ancuti
                </a>{" "}
                and{" "}
                <a href="https://personalpages.manchester.ac.uk/staff/tingting.mu/Site/About_Me.html" className="font-semibold" target="_blank" rel="noopener noreferrer">
                  Dr. Tingting Mu
                </a>{" "}
                on deep learning methods for image restoration and enhancement, and physics-driven visual representation learning.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">Selected work</h2>
              <ul className="space-y-8">
                {publications.map((pub, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <h3 className="font-bold text-foreground">{pub.title}</h3>
                    <p className="text-sm text-foreground mt-1 leading-relaxed">
                      {highlightAuthor(pub.authors)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pub.venue}
                      {pub.links.map((link, j) => (
                        <span key={j}>
                          {" "}•{" "}
                          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        </span>
                      ))}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Index;
