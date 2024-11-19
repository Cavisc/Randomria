import { useState } from "react";

import { gamesOptions } from "../../data/gamesOptions";

export default function GameType({ onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col items-center mb-4">
      <label className="text-lg text-text font-bold mb-2">qual o jogo?</label>
      <div className="relative inline-block w-60 h-16">
        <select
          name="games"
          id="games"
          className="w-full h-full rounded-lg text-text font-bold bg-base border-2 border-text text-center block appearance-none leading-tight"
          onClick={() => setIsFocused(!isFocused)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
        >
          {gamesOptions.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-text">
          <svg
            className={`${isFocused ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0b0a07"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
