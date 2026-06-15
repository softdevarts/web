import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Legal notice",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Legal notice">
      <p>
        This website is owned by {site.name} ({site.longName}), based at{" "}
        {site.address.street}, {site.address.city}, {site.address.region}. You
        can reach us at{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-fg underline decoration-accent decoration-2 underline-offset-2"
        >
          {site.email}
        </a>
        .
      </p>
      <h2>Terms of use</h2>
      <p>
        Accessing and using this site implies acceptance of these terms. The
        content is informational and may be changed without notice.
      </p>
      <h2>Intellectual property</h2>
      <p>
        All content (text, images, trademarks and design) is protected by
        intellectual and industrial property rights and belongs to {site.name}{" "}
        or to third parties who have authorised its use.
      </p>
      <p className="text-sm text-dim/70">
        This is placeholder text. Replace it with your final legal notice.
      </p>
    </LegalPage>
  );
}
