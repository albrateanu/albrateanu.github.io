import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Mail, MapPin } from "lucide-react";

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
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const publications = [
  {
    title: "Language Models Improve When Pretraining Data Matches Target Tasks",
    authors: "David Mizrahi, Anders Boesen Lindbo Larsen, Jesse Allardice, Suzie Petryk, Yuri Gorokhov, Jeffrey Li, Alex Fang, Josh Gardner, Tom Gunter, Afshin Dehghan",
    venue: "arXiv, 2025",
    links: [{ label: "Paper", url: "#" }],
    highlight: "David Mizrahi",
  },
  {
    title: "FlexTok: Resampling Images into 1D Token Sequences of Flexible Length",
    authors: "Roman Bachmann*, Jesse Allardice*, David Mizrahi*, Enrico Fini, Oğuzhan Fatih Kar, Elmira Amirloo, Alaeeldin El-Nouby, Amir Zamir, Afshin Dehghan",
    venue: "ICML, 2025",
    links: [
      { label: "Project Page", url: "#" },
      { label: "Paper", url: "#" },
    ],
    highlight: "David Mizrahi*",
  },
  {
    title: "4M-21: An Any-to-Any Vision Model for Tens of Tasks and Modalities",
    authors: "Roman Bachmann, Oğuzhan Fatih Kar, David Mizrahi, Ali Garjani, Mingfei Gao, David Griffiths, Jiaming Hu, Afshin Dehghan, Amir Zamir",
    venue: "NeurIPS, 2024",
    links: [
      { label: "Project Page", url: "#" },
      { label: "Paper", url: "#" },
    ],
    highlight: "David Mizrahi",
  },
  {
    title: "4M: Massively Multimodal Masked Modeling",
    authors: "David Mizrahi*, Roman Bachmann*, Oğuzhan Fatih Kar, Teresa Yeo, Mingfei Gao, Afshin Dehghan, Amir Zamir",
    venue: "NeurIPS, 2023 (Spotlight)",
    links: [
      { label: "Project Page", url: "#" },
      { label: "Paper", url: "#" },
    ],
    highlight: "David Mizrahi*",
  },
  {
    title: "Understanding Transfer Learning with Optimal Transport",
    authors: "David Mizrahi*, Raja Giryes, Guillermo Sapiro",
    venue: "AISTATS, 2023",
    links: [{ label: "Paper", url: "#" }],
    highlight: "David Mizrahi*",
  },
];

function highlightAuthor(authors: string, name: string) {
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <h1 className="text-lg font-semibold text-foreground">David Mizrahi</h1>
        </div>
      </header>

      {/* Accent line */}
      <div className="h-1 bg-primary" />

      {/* Main content */}
      <motion.main
        className="max-w-5xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <motion.aside variants={itemVariants} className="md:w-64 shrink-0">
            <img
              src={profilePhoto}
              alt="David Mizrahi"
              className="w-44 h-44 rounded-full object-cover mx-auto md:mx-0 mb-5"
            />
            <h2 className="text-lg font-semibold text-foreground">David Mizrahi</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Member of Technical Staff at Anthropic
            </p>

            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:email@example.com">Email</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 text-primary font-bold text-xs flex items-center justify-center">𝕏</span>
                <a href="#">Twitter</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 text-primary font-bold text-xs flex items-center justify-center">in</span>
                <a href="#">LinkedIn</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 text-primary font-bold text-xs flex items-center justify-center">⌥</span>
                <a href="#">Github</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 text-primary font-bold text-xs flex items-center justify-center">🎓</span>
                <a href="#">Google Scholar</a>
              </div>
            </div>
          </motion.aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-foreground mb-4">About me</h2>
              <p className="text-foreground leading-relaxed">
                Hi, I'm David! I'm a member of technical staff at{" "}
                <a href="https://anthropic.com">Anthropic</a>. Previously, I was a
                research scientist at <a href="https://apple.com">Apple</a> where I
                worked on language model pretraining and multimodal foundation models.
                I completed my BSc and MSc at EPFL, where I researched multimodal
                models at <a href="#">VILAB</a> with Prof. Amir Zamir.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">Selected work</h2>
              <ul className="space-y-8">
                {publications.map((pub, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <h3 className="font-bold text-foreground">{pub.title}</h3>
                    <p className="text-sm text-foreground mt-1 leading-relaxed">
                      {highlightAuthor(pub.authors, pub.highlight)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pub.venue}
                      {pub.links.map((link, j) => (
                        <span key={j}>
                          {" "}
                          •{" "}
                          <a href={link.url}>{link.label}</a>
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
