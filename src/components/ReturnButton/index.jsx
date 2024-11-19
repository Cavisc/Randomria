export default function ReturnButton({ onClick }) {
  return (
    <button
      className={`flex items-center justify-center font-bold text-lg text-base bg-secondary hover:border-text border-4 border-secondary w-16 h-16 rounded-lg mt-9`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f8fafc"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-rotate-cw"
      >
        <polyline points="23 4 23 10 17 10"></polyline>
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
      </svg>
    </button>
  );
}
