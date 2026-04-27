export const metadata = {
  title: "Ved Bapardekar — Software Development Engineer",
  description:
    "Software Development Engineer specializing in full-stack systems, cloud infrastructure, and applied AI. Built an on-prem RAG system for Meghalaya Police, crop yield forecasting at R²=0.98, a crew scheduling platform for 200+ users, and real-time flight tracking at global scale.",
  keywords: [
    "Ved Bapardekar",
    "Software Development Engineer",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Applied AI",
    "RAG systems",
    "Next.js",
    "Node.js",
    "Cloud infrastructure",
    "Kubernetes",
    "Mumbai",
    "India",
  ],
  authors: [ { name: "Ved Bapardekar", url: "https://1ved.cloud/whois" } ],
  creator: "Ved Bapardekar",
  metadataBase: new URL("https://1ved.cloud"),
  alternates: {
    canonical: "/whois",
  },
  openGraph: {
    type: "profile",
    url: "https://1ved.cloud/whois",
    siteName: "1ved Cloud",
    title: "Ved Bapardekar — Software Development Engineer",
    description:
      "Full-stack engineer with production deployments spanning RAG pipelines, Kubernetes infrastructure, and real-time backends. Production over demos. Evidence over vibes.",
    locale: "en_IN",
    firstName: "Ved",
    lastName: "Bapardekar",
    username: "eldrago4",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ved Bapardekar — Software Development Engineer",
    description:
      "Full-stack engineer. RAG for Meghalaya Police, AKS deployments, real-time backends. Production over demos.",
    creator: "@eldrago4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ved Bapardekar",
  jobTitle: "Software Development Engineer",
  url: "https://1ved.cloud/whois",
  email: "dev@1ved.cloud",
  telephone: "+919820279131",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/in/engineeringbyved/",
    "https://github.com/eldrago4",
    "https://codeforces.com/profile/eldrago4",
    "https://www.hackerrank.com/profile/eldrago",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sindhudurg Shikshan Prasarak Mandal's College of Engineering",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "University of Mumbai",
    },
  },
  knowsAbout: [
    "Full-Stack Engineering",
    "Backend Systems",
    "Cloud Infrastructure",
    "Kubernetes",
    "Terraform",
    "Applied AI",
    "RAG Pipelines",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "CI/CD",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Junior Cybersecurity Analyst",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "Cisco" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Cloud Computing Foundations",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "Google Cloud" },
    },
  ],
};

export default function WhoisLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
