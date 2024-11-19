export default function MenuItem({ item, isActive, onClick }) {
  const baseClasses = "text-lg cursor-pointer select-none font-bold";
  const activeClasses = "text-text";
  const deactiveClasses = "text-base";

  return (
    <span
      className={`${baseClasses} ${isActive ? activeClasses : deactiveClasses}`}
      onClick={onClick}
    >
      {item}
    </span>
  );
}
