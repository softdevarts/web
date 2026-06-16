import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie policy",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookies policy">
      <h2>1. Use of cookies</h2>
      <p>This website does not use cookies.</p>
      <p>
        SoftDevArts does not use analytics cookies, advertising cookies,
        personalisation cookies, tracking cookies or third-party cookies on this
        website.
      </p>
      <p>
        The website does not use tools intended to monitor user behaviour,
        create user profiles or store information on users&rsquo; devices.
      </p>

      <h2>2. What are cookies?</h2>
      <p>
        Cookies are small files that may be stored on a user&rsquo;s device when
        visiting certain websites. They can be used for different purposes, such
        as enabling technical functionality, analysing browsing behaviour,
        personalising content or displaying advertising.
      </p>

      <h2>3. Cookies used on this website</h2>
      <p>This website does not install cookies on users&rsquo; devices.</p>
      <p>In particular, this website does not use:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Google Analytics or similar analytics tools</li>
        <li>Advertising or remarketing cookies</li>
        <li>Social media tracking pixels</li>
        <li>User session cookies</li>
        <li>Personalisation cookies</li>
        <li>Third-party tracking technologies</li>
      </ul>

      <h2>4. Contact form</h2>
      <p>
        The contact form on this website allows users to send a message to
        SoftDevArts.
      </p>
      <p>
        Submitting the contact form involves the processing of the personal data
        voluntarily provided by the user, as described in the Privacy Policy.
        However, the contact form does not require the use of cookies.
      </p>

      <h2>5. Third-party websites</h2>
      <p>
        This website may include links to third-party websites. These
        third-party websites may use their own cookies or tracking technologies.
      </p>
      <p>
        SoftDevArts is not responsible for the cookies, privacy policies or
        practices of third-party websites. Users should review the corresponding
        policies on those websites.
      </p>

      <h2>6. Changes to this Cookies Policy</h2>
      <p>
        If SoftDevArts introduces cookies or similar technologies in the future,
        this Cookies Policy will be updated accordingly and, where legally
        required, users will be asked for consent before non-essential cookies
        are used.
      </p>

      <p className="text-sm text-dim/70">Last updated: 16 June 2026</p>
    </LegalPage>
  );
}
