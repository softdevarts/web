import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Legal notice",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Legal notice">
      <h2>1. Website owner</h2>
      <p>
        In compliance with the information obligations established under Spanish
        Law 34/2002 of 11 July on Information Society Services and Electronic
        Commerce, users are informed that this website is owned by:
      </p>
      <ul className="space-y-1">
        <li>
          <strong className="text-fg">Company name:</strong> Software Development
          SL
        </li>
        <li>
          <strong className="text-fg">Registered address:</strong> Carrer de La
          Plaça, 61, local derecha, 08330 Premià de Mar, Barcelona, Spain
        </li>
        <li>
          <strong className="text-fg">Website:</strong>{" "}
          <a
            href="https://www.softdevarts.com"
            className="font-semibold text-fg underline decoration-accent decoration-2 underline-offset-2"
          >
            https://www.softdevarts.com
          </a>
        </li>
        <li>
          <strong className="text-fg">Email:</strong>{" "}
          <a
            href="mailto:info@softdevarts.com"
            className="font-semibold text-fg underline decoration-accent decoration-2 underline-offset-2"
          >
            info@softdevarts.com
          </a>
        </li>
      </ul>

      <h2>2. Purpose of the website</h2>
      <p>
        The purpose of this website is to provide corporate and informational
        content about SoftDevArts, its professional services, projects,
        initiatives and related activities.
      </p>
      <p>
        The website may also provide contact details and a contact form so that
        users can get in touch with SoftDevArts.
      </p>
      <p>
        The information published on this website is for informational purposes
        only and does not constitute a contractual offer, professional advice or
        a binding commercial proposal.
      </p>

      <h2>3. Terms of use</h2>
      <p>
        Users undertake to use this website lawfully, responsibly and in
        accordance with this Legal Notice, applicable legislation, good faith
        and public order.
      </p>
      <p>
        Users must not use the website for unlawful purposes, damage its content
        or infrastructure, attempt to gain unauthorised access to systems, or
        interfere with its normal operation.
      </p>
      <p>
        Users must not submit unlawful, offensive, misleading, confidential
        third-party information or content that infringes the rights of third
        parties through the contact form.
      </p>

      <h2>4. Intellectual and industrial property</h2>
      <p>
        All content on this website, including texts, images, logos, designs,
        source code, structure, layout and other elements, is owned by Software
        Development SL or by third parties who have authorised its use, unless
        otherwise stated.
      </p>
      <p>
        Reproduction, distribution, public communication, transformation or any
        other form of exploitation of the content is not permitted without prior
        written authorisation from the owner.
      </p>

      <h2>5. Third-party links</h2>
      <p>
        This website may include links to third-party websites or projects, such
        as aza.family, BlackBox Coworking, LinkedIn, Instagram or external map
        services.
      </p>
      <p>
        Software Development SL is not responsible for the content, privacy
        policies, practices or availability of third-party websites. Access to
        such websites is the sole responsibility of the user.
      </p>

      <h2>6. Liability</h2>
      <p>
        Software Development SL makes reasonable efforts to keep the information
        on this website accurate and up to date. However, it does not guarantee
        the absence of errors, omissions, interruptions, viruses or other
        harmful elements.
      </p>
      <p>
        Software Development SL shall not be liable for damages arising from the
        use of the website, except where required by applicable law.
      </p>

      <h2>7. Data protection</h2>
      <p>
        The processing of personal data through this website is governed by the
        Privacy Policy.
      </p>
      <p>
        Users should read the Privacy Policy before submitting the contact form.
      </p>

      <h2>8. Applicable law and jurisdiction</h2>
      <p>This Legal Notice shall be governed by Spanish law.</p>
      <p>
        For any dispute arising from the use of this website, the parties shall
        submit to the courts and tribunals that correspond according to
        applicable law.
      </p>

      <h2>9. Contact</h2>
      <p>For any questions regarding this Legal Notice, users may contact:</p>
      <p>
        <a
          href="mailto:info@softdevarts.com"
          className="font-semibold text-fg underline decoration-accent decoration-2 underline-offset-2"
        >
          info@softdevarts.com
        </a>
      </p>

      <p className="text-sm text-dim/70">Last updated: 16 June 2026</p>
    </LegalPage>
  );
}
