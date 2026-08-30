import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Mail, Github, GraduationCap, Linkedin, Link, Globe, FileText, FileDown, CodeXml } from "lucide-react";

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

const publicationLinkIcons = {
  "Project Page": Globe,
  Paper: FileText,
  PDF: FileDown,
  Code: CodeXml,
  Supplementary: FileText,
} as const;

const publications = [
  {
    title: "Multinex: Lightweight Low-light Image Enhancement via Multi-prior Retinex",
    authors: "Alexandru Brateanu, Tingting Mu, Codruta O. Ancuti, Cosmin Ancuti",
    venue: "CVPR, 2026",
    links: [
      { label: "Project Page", url: "https://albrateanu.github.io/multinex/" },
      { label: "Paper", url: "https://arxiv.org/abs/2604.10359" },
      { label: "PDF", url: "https://arxiv.org/pdf/2604.10359" },
      { label: "Code", url: "https://github.com/albrateanu/multinex" },
      { label: "Supplementary", url: "https://drive.google.com/file/d/1-bRljca_GG1wvwJYP56bTHhpJZkJmulB/view" },
    ],
  },
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
    <div className="min-h-screen bg-background academic-page">
      <motion.main
        className="max-w-5xl mx-auto px-6 py-14 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <motion.aside variants={itemVariants} className="profile-sidebar md:w-64 shrink-0">
            <img
              src={profilePhoto}
              alt="Alexandru Brateanu"
              className="profile-photo w-44 h-44 object-cover mx-auto md:mx-0 mb-6"
            />
            <h2 className="profile-name">Alexandru Brateanu</h2>
            
            <p className="text-sm text-muted-foreground mt-1">
              PhD Researcher in World Modelling
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              <i>The University of Manchester</i>
            </p>

            <div className="contact-links mt-6 space-y-1 text-sm text-muted-foreground">
              {contactLinks.map((link) => (
                <div key={link.label} className="contact-link flex items-center gap-2">
                  <link.icon className="w-4 h-4" />
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                </div>
              ))}
            </div>
          </motion.aside>

          <div className="content-column flex-1 min-w-0">
            <motion.section variants={itemVariants}>
              <h2 className="section-heading">About me</h2>
              <div className="intro-copy text-foreground leading-relaxed space-y-4">
              <p>
                I am a first-year PhD researcher in world modelling and physical AI at the University of Manchester, under the supervision of{" "}
                <a href="https://personalpages.manchester.ac.uk/staff/tingting.mu/Site/About_Me.html" className="font-semibold" target="_blank" rel="noopener noreferrer">
                  Dr. Tingting Mu
                </a>{" "}
                and{" "}
                <a href="https://research.manchester.ac.uk/en/persons/timothy.f.cootes" className="font-semibold" target="_blank" rel="noopener noreferrer">
                  Prof. Timothy Cootes
                </a>
                .
              </p>
              <p>
                I received my BSc in Computer Science from the University of Manchester in 2026. Since 2024, I have also been working with{" "}
                <a href="https://www.meo.etc.upt.ro/2-uncategorised/2105-cosmin-ancuti" className="font-semibold" target="_blank" rel="noopener noreferrer">
                  Prof. Cosmin Ancuti
                </a>
                ,{" "}
                <a href="https://www.meo.etc.upt.ro/2-uncategorised/2106-codruta-orniana-ancuti" className="font-semibold" target="_blank" rel="noopener noreferrer">
                  Prof. Codruta O. Ancuti
                </a>
                , and{" "}
                <a href="https://ro.linkedin.com/in/ciprian-constantin-orhei-68785218" className="font-semibold" target="_blank" rel="noopener noreferrer">
                  Dr. Ciprian Orhei
                </a>{" "}
                on deep learning methods for image restoration and enhancement.
              </p>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="publications-section mt-14">
              <h2 className="section-heading">Selected work</h2>
              <ul className="publications-list space-y-4">
                {publications.filter((pub) => ["Multinex", "LYT-Net", "ISALux"].some((title) => pub.title.startsWith(title))).map((pub, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className={pub.venue.includes("CVPR") ? "publication featured-publication" : "publication"}
                  >
                    <h3 className="publication-title">{pub.title}</h3>
                    <p className="publication-authors text-sm text-foreground mt-2 leading-relaxed">
                      {highlightAuthor(pub.authors)}
                    </p>
                    <div className="publication-meta text-sm text-muted-foreground mt-3 flex flex-wrap items-center gap-y-2">
                      <span className="publication-venue">{pub.venue}</span>
                      <span className="publication-actions">
                      {pub.links.map((link, j) => {
                        const Icon = publicationLinkIcons[link.label as keyof typeof publicationLinkIcons];

                        return (
                          <span key={j}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 align-[-0.125em]"
                            >
                              {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                              <span>{link.label}</span>
                            </a>
                          </span>
                        );
                      })}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <RouterLink to="/publications" className="all-publications-link">
                View all publications
              </RouterLink>
            </motion.section>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Index;
