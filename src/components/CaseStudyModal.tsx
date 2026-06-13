import { useEffect } from "react";
import { content } from "../content";

type Props = {
  id: keyof typeof content.caseStudies;
  onClose: () => void;
};

export function CaseStudyModal({ id, onClose }: Props) {
  const data = content.caseStudies[id];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={data.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h2>{data.title}</h2>
        <p className="modal-tagline">{data.tagline}</p>
        {data.sections.map((s) => (
          <div className="modal-section" key={s.heading}>
            <h3>{s.heading}</h3>
            <p>{s.body}</p>
          </div>
        ))}
        <p className="modal-private">🔒 {data.privateNote}</p>
      </div>
    </div>
  );
}
