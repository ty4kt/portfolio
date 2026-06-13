export type Tab = "home" | "about" | "skills" | "work" | "contact";

const tabs: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

type Props = {
  active: Tab;
  onSelect: (tab: Tab) => void;
};

export function Nav({ active, onSelect }: Props) {
  return (
    <nav className="tabs" aria-label="Site sections">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={active === t.id ? "tab active" : "tab"}
          onClick={() => onSelect(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
