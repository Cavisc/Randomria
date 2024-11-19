export default function ActionButton({ label, onClick }) {
  return (
    <button
      className="font-bold text-lg text-base bg-primary w-44 h-16 rounded-lg hover:text-text hover:underline mt-9"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
