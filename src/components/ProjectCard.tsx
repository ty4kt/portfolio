type Props = {
  title: string;
  description: string;
  image: string;
  tags?: readonly string[];
  link: string | null;
  linkLabel: string | null;
  caseStudy?: string | null;
  onOpenCaseStudy?: () => void;
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  linkLabel,
  caseStudy,
  onOpenCaseStudy,
}: Props) {
  return (
    <article className="project-card">
      <img src={image} alt={`${title} artwork`} loading="lazy" />
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags && (
          <div className="project-tags">
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
        {link && linkLabel && (
          <a href={link} target="_blank" rel="noreferrer" className="card-link">
            {linkLabel} →
          </a>
        )}
        {caseStudy && (
          <button type="button" className="card-link" onClick={onOpenCaseStudy}>
            Read the case study →
          </button>
        )}
      </div>
    </article>
  );
}
