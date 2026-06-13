import { content } from "../content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="panel" id="about">
      <div className="about-header">
        <img
          className="avatar"
          src={content.about.avatar}
          alt="Tyrese Thomas"
          onError={(e) => {
            // selfie not added yet — hide the slot instead of a broken icon
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <h2>{content.about.heading}</h2>
      </div>
      {content.about.paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
      <h3 className="bring-heading">{content.about.bringHeading}</h3>
      <p className="bring-intro">{content.about.bringIntro}</p>
      <Reveal>
        <ul className="bring-list">
          {content.about.bring.map((b) => (
            <li key={b.lead}>
              <span className="bring-lead">{b.lead}</span> {b.detail}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
