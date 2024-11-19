export default function NumberBox({ number }) {
  return (
    <div className="flex items-center justify-center max-sm:w-16 max-sm:h-16 w-24 h-20 bg-tertiary border-2 border-text rounded-lg">
      <span className="font-bold text-text max-sm:text-sm">{number}</span>
    </div>
  );
}
