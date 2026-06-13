import { content } from "../content";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section className="panel" id="skills">
      <h2>{content.skills.heading}</h2>
      <div className="skills-grid">
        {content.skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
