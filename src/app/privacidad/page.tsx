import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Privacy policy">
      <h2>1. Data controller</h2>
      <p>
        The data controller responsible for the processing of personal data
        collected through this website is:
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

      <h2>2. Personal data we collect</h2>
      <p>
        SoftDevArts may collect and process personal data provided voluntarily
        by users through the contact form available on this website.
      </p>
      <p>The data collected through the contact form may include:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Name</li>
        <li>Email address</li>
        <li>Subject</li>
        <li>Message content</li>
        <li>
          Any other information voluntarily included by the user in the message
        </li>
      </ul>
      <p>
        SoftDevArts may also process personal data received when users contact
        us directly by email.
      </p>
      <p>
        This website does not include user accounts, registration areas, payment
        systems or newsletter subscriptions.
      </p>

      <h2>3. Purpose of processing</h2>
      <p>
        Personal data provided through the contact form or by email will be
        processed for the following purposes:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>To manage and respond to enquiries, requests or messages sent by users.</li>
        <li>
          To maintain professional or commercial communications when requested
          by the user.
        </li>
        <li>
          To manage pre-contractual or contractual relationships, where
          applicable.
        </li>
        <li>To comply with any applicable legal obligations.</li>
      </ul>

      <h2>4. Legal basis for processing</h2>
      <p>The legal basis for processing personal data is:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          The user&rsquo;s consent, when submitting the contact form or sending
          an email.
        </li>
        <li>
          The legitimate interest of SoftDevArts in responding to communications
          and managing professional relationships.
        </li>
        <li>
          The application of pre-contractual measures or the performance of a
          contract, where the communication relates to a potential or existing
          service relationship.
        </li>
        <li>Compliance with legal obligations, where applicable.</li>
      </ul>

      <h2>5. Data retention</h2>
      <p>
        Personal data will be kept only for as long as necessary to manage the
        request, communication or professional relationship.
      </p>
      <p>
        After that, the data may be retained for the periods required by
        applicable legal obligations or for the defence of possible legal
        claims.
      </p>

      <h2>6. Data recipients</h2>
      <p>
        SoftDevArts will not sell, rent or disclose users&rsquo; personal data
        to third parties.
      </p>
      <p>
        Personal data may only be shared when legally required, or when
        necessary for the management of a requested service.
      </p>
      <p>
        The website may be hosted or supported by technology service providers
        that could process data on behalf of SoftDevArts. In such cases,
        SoftDevArts will take reasonable steps to ensure that these providers
        comply with applicable data protection obligations.
      </p>

      <h2>7. International data transfers</h2>
      <p>
        SoftDevArts does not intentionally carry out international transfers of
        personal data through this website.
      </p>
      <p>
        However, some technology service providers, such as hosting, email or
        infrastructure providers, may process data outside the European Economic
        Area. Where this occurs, SoftDevArts will rely on appropriate safeguards
        in accordance with applicable data protection regulations.
      </p>

      <h2>8. User rights</h2>
      <p>
        Users may exercise their rights of access, rectification, erasure,
        objection, restriction of processing and data portability, where
        applicable.
      </p>
      <p>To exercise these rights, users may contact SoftDevArts at:</p>
      <p>
        <a
          href="mailto:info@softdevarts.com"
          className="font-semibold text-fg underline decoration-accent decoration-2 underline-offset-2"
        >
          info@softdevarts.com
        </a>
      </p>
      <p>
        Users should clearly indicate the right they wish to exercise and
        provide sufficient information to verify their identity.
      </p>

      <h2>9. Right to lodge a complaint</h2>
      <p>
        Users have the right to lodge a complaint with the Spanish Data
        Protection Agency if they believe that their personal data has not been
        processed in accordance with applicable data protection regulations.
      </p>

      <h2>10. Security</h2>
      <p>
        SoftDevArts applies reasonable technical and organisational measures to
        protect personal data against unauthorised access, loss, misuse,
        alteration or disclosure.
      </p>

      <h2>11. Accuracy of data</h2>
      <p>
        Users are responsible for ensuring that the personal data they provide
        is accurate, complete and up to date.
      </p>

      <h2>12. Changes to this Privacy Policy</h2>
      <p>
        SoftDevArts may update this Privacy Policy when necessary to reflect
        legal, technical or business changes.
      </p>

      <p className="text-sm text-dim/70">Last updated: 16 June 2026</p>
    </LegalPage>
  );
}
