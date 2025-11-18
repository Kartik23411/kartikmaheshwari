import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Kartik Maheshwari",
  description:
    "View and download Kartik Maheshwari's professional resume. Student software developer with expertise in Kotling, Java, C++, mobile, networking and ML development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Kartik Maheshwari",
    description:
      "View and download Kartik Maheshwari's professional resume featuring his experience and skills as a student developer.",
    url: "https://localhost:3000/resume", // chagne the url 
    siteName: "Kartik Maheshwari",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Kartik Maheshwari Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Kartik Maheshwari",
    description:
      "View Kartik Maheshwari's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      {/* Preload the PDF for better performance */}
      <link
        rel="preload"
        href="/docs/Kartik_Maheshwari_Resume.pdf"
        as="document"
        type="application/pdf"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
