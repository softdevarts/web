import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie policy",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie policy">
      <p>
        A cookie is a small file stored on your device when you visit a website.
        We use them to make the site work properly and to understand how it is
        used.
      </p>
      <h2>Types of cookies</h2>
      <p>
        We use technical cookies (necessary for the site to work) and, with your
        consent, preference, analytics and marketing cookies.
      </p>
      <h2>Managing cookies</h2>
      <p>
        You can configure or reject cookies from the consent panel and, at any
        time, from your browser settings.
      </p>
      <p className="text-sm text-dim/70">
        This is placeholder text. Replace it with your final policy.
      </p>
    </LegalPage>
  );
}
