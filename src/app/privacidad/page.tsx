import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        At {site.name} we respect your privacy. The data you share through the
        contact form is used solely to respond to your enquiry.
      </p>
      <h2>Data controller</h2>
      <p>
        {site.longName}, {site.address.city}. Contact:{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-fg underline decoration-accent decoration-2 underline-offset-2"
        >
          {site.email}
        </a>
        .
      </p>
      <h2>Purpose and retention</h2>
      <p>
        We process your data to handle your enquiry and, where applicable, to
        prepare a proposal. We keep it only for as long as needed for that
        purpose.
      </p>
      <h2>Your rights</h2>
      <p>
        You can exercise your rights of access, rectification, erasure and
        objection by writing to the address above.
      </p>
      <p className="text-sm text-dim/70">
        This is placeholder text. Replace it with your final policy.
      </p>
    </LegalPage>
  );
}
