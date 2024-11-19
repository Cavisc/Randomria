export default function RulesCard({ gameName, rules }) {
  return (
    <div className="bg-tertiary border-2 border-text w-72 h-80 rounded-lg text-center p-6">
      <h1 className="font-bold text-lg mb-5">{gameName}</h1>
      <ul className="flex flex-col gap-3 text-sm font-semibold">
        {rules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}
