import { useState } from "react";
import { content } from "../content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { CaseStudyModal } from "./CaseStudyModal";

type CaseStudyId = keyof typeof content.caseStudies;

export function Work() {
  const [openCase, setOpenCase] = useState<CaseStudyId | null>(null);

  return (
    <section className="panel" id="work">
      <h2>{content.work.heading}</h2>
      <div className="project-grid">
        {content.work.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <ProjectCard
              {...p}
              onOpenCaseStudy={
                p.caseStudy
                  ? () => setOpenCase(p.caseStudy as CaseStudyId)
                  : undefined
              }
            />
          </Reveal>
        ))}
      </div>
      {openCase && (
        <CaseStudyModal id={openCase} onClose={() => setOpenCase(null)} />
      )}
    </section>
  );
}
