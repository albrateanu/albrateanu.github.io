import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Link,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const publications = [
  {
    title:
      "ISALux: Illumination and Segmentation Aware Transformer Employing Mixture of Experts for Low Light Image Enhancement",
    authors:
      "Raul Balmez, Alexandru Brateanu, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "WACV, 2026",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2508.17885" }],
  },
  {
    title:
      "ModalFormer: Multimodal Transformer for Low-Light Image Enhancement",
    authors:
      "Alexandru Brateanu, Raul Balmez, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "arXiv, 2025",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2507.20388" },
      { label: "Code", url: "https://github.com/albrateanu/ModalFormer" },
    ],
  },
  {
    title:
      "LYT-Net: Lightweight YUV Transformer-based Network for Low-Light Image Enhancement",
    authors:
      "Alexandru Brateanu, Raul Balmez, Adrian Avram, Ciprian Orhei, Cosmin Ancuti",
    venue: "SPL, 2025",
    links: [
      {
        label: "Paper",
        url: "https://ieeexplore.ieee.org/abstract/document/10972228",
      },
      { label: "Code", url: "https://github.com/albrateanu/LYT-Net" },
    ],
  },
  {
    title:
      "DepthLux: Employing Depthwise Separable Convolutions for Low-Light Image Enhancement",
    authors:
      "Raul Balmez, Alexandru Brateanu, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "Sensors, 2025",
    links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/25/5/1530" }],
  },
  {
    title:
      "AKDT: Adaptive Kernel Dilation Transformer for Effective Image Denoising",
    authors:
      "Alexandru Brateanu, Raul Balmez, Adrian Avram, Ciprian Orhei",
    venue: "VISAPP, 2025",
    links: [
      {
        label: "Paper",
        url: "https://www.scitepress.org/Papers/2025/131577/131577.pdf",
      },
      { label: "Code", url: "https://github.com/albrateanu/AKDT" },
    ],
  },
  {
    title:
      "Enhancing Low-Light Images with Kolmogorov–Arnold Networks in Transformer Attention",
    authors:
      "Alexandru Brateanu, Raul Balmez, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "Sensors, 2025",
    links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/25/2/327" }],
  },
  {
    title:
      "Kolmogorov-Arnold Networks in Transformer Attention for Low-Light Image Enhancement",
    authors: "Alexandru Brateanu, Raul Balmez",
    venue: "ISETC, 2024",
    links: [
      {
        label: "Paper",
        url: "https://ieeexplore.ieee.org/abstract/document/10797300/",
      },
    ],
  },
  {
    title: "DepthLux: Depthwise Separable Convolution Transformer",
    authors: "Raul Balmez, Alexandru Brateanu",
    venue: "ISETC, 2024",
    links: [
      {
        label: "Paper",
        url: "https://ieeexplore.ieee.org/abstract/document/10797398/",
      },
    ],
  },
];

const contactLinks = [
  { label: "Email", url: "mailto:albrateanu@gmail.com", icon: Mail },
  { label: "GitHub", url: "https://github.com/albrateanu", icon: Github },
  {
    label: "Scholar",
    url: "https://scholar.google.com/citations?user=ru0meGgAAAAJ",
    icon: GraduationCap,
  },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/albrateanu/", icon: Linkedin },
  { label: "ORCID", url: "https://orcid.org/0009-0001-2752-2357", icon: Link },
];

const focusAreas = [
  "Low-light image enhancement",
  "Image restoration",
  "Vision transformers",
  "Physics-driven representation learning",
];

const highlightMetrics = [
  { label: "Selected publications", value: "8" },
  { label: "Research focus", value: "CV + ML" },
  { label: "Current role", value: "Final-year BSc" },
];

function highlightAuthor(authors: string) {
  const name = "Alexandru Brateanu";
  const idx = authors.indexOf(name);
  if (idx === -1) return authors;

  return (
    <>
      {authors.slice(0, idx)}
      <span className="font-medium text-foreground">{name}</span>
      {authors.slice(idx + name.length)}
    </>
  );
}

const Index = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-12rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(83,108,255,0.34),rgba(139,92,246,0.22),rgba(249,115,22,0.08),transparent_72%)] blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.22),rgba(249,115,22,0.16),transparent_72%)] blur-3xl" />
        <div className="absolute left-[-8rem] bottom-24 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(168,85,247,0.12),transparent_72%)] blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
            <img src="/ab_logo.png" alt="Logo" className="h-6 w-6 rounded object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">Alexandru Brateanu</p>
            <h1 className="text-sm font-medium text-white/90">Research portfolio</h1>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/70 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <motion.main
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 md:py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black px-6 py-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(72,119,255,0.18),rgba(139,92,246,0.14),rgba(250,204,21,0.12),rgba(249,115,22,0.18))] opacity-80" />
          <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(10,10,14,0.9),rgba(3,3,5,0.96))]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/72 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                Computer Vision · Image Restoration · Minimal Research Design
              </div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                Precision research, presented with a cleaner Apple-like rhythm.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                I build deep learning methods for low-light enhancement, image restoration,
                and multimodal visual understanding—balancing rigorous engineering with
                visually calm presentation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {contactLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white/14 hover:no-underline"
                  >
                    <link.icon className="h-4 w-4 text-white/75" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(160deg,rgba(87,112,255,0.45),rgba(168,85,247,0.22),rgba(251,191,36,0.18),rgba(249,115,22,0.18))] blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/7 p-5 backdrop-blur-2xl">
                <div className="flex items-start gap-4">
                  <img
                    src={profilePhoto}
                    alt="Alexandru Brateanu"
                    className="h-24 w-24 rounded-[1.5rem] object-cover ring-1 ring-white/15"
                  />
                  <div>
                    <p className="text-xl font-semibold text-white">Alexandru Brateanu</p>
                    <p className="mt-1 text-sm text-white/65">Undergraduate Student</p>
                    <p className="text-sm text-white/50 italic">The University of Manchester</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {highlightMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.4rem] border border-white/10 bg-black/45 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    >
                      <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{metric.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.section variants={itemVariants} className="space-y-6">
            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/8 dark:bg-white/6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">About</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                Minimal structure. Meaningful contrast.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-[15px]">
                I am a final-year BSc student majoring in Computer Science at the University of Manchester.
                My research is supervised by{" "}
                <a
                  href="https://www.linkedin.com/in/cosmin-ancuti-86b3872/"
                  className="font-medium text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prof. Cosmin Ancuti
                </a>{" "}
                and{" "}
                <a
                  href="https://personalpages.manchester.ac.uk/staff/tingting.mu/Site/About_Me.html"
                  className="font-medium text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Tingting Mu
                </a>{" "}
                on deep learning methods for image restoration, enhancement, and physics-driven visual representation learning.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-7 text-white shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">Focus areas</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    Where I spend most of my time.
                  </h3>
                </div>
                <div className="hidden h-12 w-12 rounded-full bg-[linear-gradient(135deg,#4f7bff,#8b5cf6,#facc15,#f97316)] opacity-90 md:block" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="rounded-[2rem] border border-black/5 bg-white/78 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/8 dark:bg-white/6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Selected work</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    Papers arranged like products.
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                  Rebuilt with softer surfaces and quieter depth so the content feels premium instead of heavy.
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {publications.map((pub, i) => (
                  <motion.li
                    key={pub.title}
                    variants={itemVariants}
                    className="group rounded-[1.75rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,247,250,0.85))] p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 inline-flex rounded-full border border-black/6 bg-black/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground dark:border-white/10 dark:bg-white/6">
                          {pub.venue}
                        </div>
                        <h4 className="text-lg font-semibold leading-7 text-foreground">{pub.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{highlightAuthor(pub.authors)}</p>
                      </div>
                      <span className="mt-1 hidden rounded-full border border-black/6 p-2 text-muted-foreground transition group-hover:border-transparent group-hover:bg-[linear-gradient(135deg,#4f7bff,#8b5cf6,#facc15,#f97316)] group-hover:text-white dark:border-white/10 md:inline-flex">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {pub.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-black/[0.03] px-3 py-2 text-sm font-medium text-foreground transition duration-300 hover:border-transparent hover:bg-black hover:text-white hover:no-underline dark:border-white/10 dark:bg-white/6 dark:hover:bg-white dark:hover:text-black"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        <motion.footer
          variants={itemVariants}
          className="rounded-[2rem] border border-white/10 bg-black px-7 py-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.24)]"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold tracking-[-0.04em]">Open to research collaborations and thoughtful ideas.</p>
              <p className="mt-2 text-sm text-white/58">
                A darker foundation, restrained surfaces, and a blue-to-orange highlight system keep the site clean while adding personality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/78 transition duration-300 hover:bg-white hover:text-black hover:no-underline"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.footer>
      </motion.main>
    </div>
  );
};

export default Index;
