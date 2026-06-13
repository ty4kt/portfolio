import { content } from "../content";

export function Contact() {
  return (
    <section className="panel contact" id="contact">
      <h2>{content.contact.heading}</h2>
      <p>{content.contact.line}</p>
      <nav className="contact-links">
        {content.contact.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
          >
            {l.label}
          </a>
        ))}
      </nav>
      {content.cvUrl && (
        <a className="cv-button" href={content.cvUrl} download>
          ⬇ {content.contact.cvLabel}
        </a>
      )}
      <p className="footer-note">
        Built with React Three Fiber. Deployed on Vercel.
      </p>
    </section>
  );
}
