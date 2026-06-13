import { content } from "../content";

type Props = {
  onExplore: () => void;
};

export function Hero({ onExplore }: Props) {
  return (
    <section className="hero" id="top">
      <h1>{content.name}</h1>
      <p className="one-liner">{content.oneLiner}</p>
      <p className="sub-line">{content.subLine}</p>
      <p className="now-strip">
        <span className="now-dot" /> {content.now}
      </p>
      <button type="button" className="scroll-hint" onClick={onExplore}>
        about me ↓
      </button>
    </section>
  );
}
