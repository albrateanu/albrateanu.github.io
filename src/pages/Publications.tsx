import { CodeXml, FileDown, FileText, Globe } from "lucide-react";

const publicationLinkIcons = {
  "Project Page": Globe,
  Paper: FileText,
  PDF: FileDown,
  Code: CodeXml,
  Supplementary: FileText,
} as const;

const publications = [
  { title: "Multinex: Lightweight Low-light Image Enhancement via Multi-prior Retinex", authors: "Alexandru Brateanu, Tingting Mu, Codruta O. Ancuti, Cosmin Ancuti", venue: "CVPR, 2026", links: [{ label: "Project Page", url: "https://albrateanu.github.io/multinex/" }, { label: "Paper", url: "https://arxiv.org/abs/2604.10359" }, { label: "PDF", url: "https://arxiv.org/pdf/2604.10359" }, { label: "Code", url: "https://github.com/albrateanu/multinex" }, { label: "Supplementary", url: "https://drive.google.com/file/d/1-bRljca_GG1wvwJYP56bTHhpJZkJmulB/view" }] },
  { title: "ISALux: Illumination and Segmentation Aware Transformer Employing Mixture of Experts for Low Light Image Enhancement", authors: "Raul Balmez, Alexandru Brateanu, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti", venue: "WACV, 2026", links: [{ label: "Paper", url: "https://arxiv.org/abs/2508.17885" }] },
  { title: "ModalFormer: Multimodal Transformer for Low-Light Image Enhancement", authors: "Alexandru Brateanu, Raul Balmez, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti", venue: "arXiv, 2025", links: [{ label: "Paper", url: "https://arxiv.org/abs/2507.20388" }, { label: "Code", url: "https://github.com/albrateanu/ModalFormer" }] },
  { title: "LYT-Net: Lightweight YUV Transformer-based Network for Low-Light Image Enhancement", authors: "Alexandru Brateanu, Raul Balmez, Adrian Avram, Ciprian Orhei, Cosmin Ancuti", venue: "SPL, 2025", links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10972228" }, { label: "Code", url: "https://github.com/albrateanu/LYT-Net" }] },
  { title: "DepthLux: Employing Depthwise Separable Convolutions for Low-Light Image Enhancement", authors: "Raul Balmez, Alexandru Brateanu, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti", venue: "Sensors, 2025", links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/25/5/1530" }] },
  { title: "AKDT: Adaptive Kernel Dilation Transformer for Effective Image Denoising", authors: "Alexandru Brateanu, Raul Balmez, Adrian Avram, Ciprian Orhei", venue: "VISAPP, 2025", links: [{ label: "Paper", url: "https://www.scitepress.org/Papers/2025/131577/131577.pdf" }, { label: "Code", url: "https://github.com/albrateanu/AKDT" }] },
  { title: "Enhancing Low-Light Images with Kolmogorov–Arnold Networks in Transformer Attention", authors: "Alexandru Brateanu, Raul Balmez, Ciprian Orhei, Codruta O. Ancuti, Cosmin Ancuti", venue: "Sensors, 2025", links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/25/2/327" }] },
  { title: "Kolmogorov-Arnold Networks in Transformer Attention for Low-Light Image Enhancement", authors: "Alexandru Brateanu, Raul Balmez", venue: "ISETC, 2024", links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10797300/" }] },
  { title: "DepthLux: Depthwise Separable Convolution Transformer", authors: "Raul Balmez, Alexandru Brateanu", venue: "ISETC, 2024", links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10797398/" }] },
];

function highlightAuthor(authors: string) {
  const name = "Alexandru Brateanu";
  const idx = authors.indexOf(name);
  if (idx === -1) return authors;

  return <>{authors.slice(0, idx)}<span className="underline">{name}</span>{authors.slice(idx + name.length)}</>;
}

const publicationsByYear = ["2026", "2025", "2024"].map((year) => ({
  year,
  items: publications.filter((publication) => publication.venue.endsWith(year)),
}));

const Publications = () => (
  <main className="academic-page min-h-screen">
    <div className="publications-page mx-auto px-6 py-14 lg:py-20">
      <header>
        <h1 className="publications-page-title">Publications</h1>
        <p className="publications-page-intro">A complete record of research publications and associated resources.</p>
      </header>

      {publicationsByYear.map(({ year, items }) => (
        <section key={year} aria-labelledby={`year-${year}`}>
          <h2 id={`year-${year}`} className="publication-year">{year}</h2>
          <ul className="publications-list space-y-4">
            {items.map((publication) => (
              <li key={publication.title} className={publication.venue.includes("CVPR") ? "publication featured-publication" : "publication"}>
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-authors text-sm text-foreground mt-2 leading-relaxed">{highlightAuthor(publication.authors)}</p>
                <div className="publication-meta text-sm text-muted-foreground mt-3 flex flex-wrap items-center gap-y-2">
                  <span className="publication-venue">{publication.venue}</span>
                  <span className="publication-actions">
                    {publication.links.map((link) => {
                      const Icon = publicationLinkIcons[link.label as keyof typeof publicationLinkIcons];
                      return <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}<span>{link.label}</span></a>;
                    })}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </main>
);

export default Publications;
