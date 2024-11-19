import { useLocation } from "react-router-dom";

import NumberBox from "../NumberBox";

import { gamesOptions } from "../../data/gamesOptions";
import randomNumbers from "../../utils/randomNumbers";

export default function GameBox() {
  const location = useLocation();
  const gameType = location.state.gameType;
  const gameName = gamesOptions[gameType].label;
  const min = gamesOptions[gameType].minNumber;
  const max = gamesOptions[gameType].maxNumber;
  const quantityNumbers = location.state.quantityNumbers;

  const numbers = randomNumbers(min, max, quantityNumbers, gameName);

  return (
    <div className={`flex flex-row flex-wrap gap-4 justify-center`}>
      {numbers.map((number, i) => (
        <NumberBox key={i} number={number} />
      ))}
    </div>
  );
}
