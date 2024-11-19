import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import NumbersHeader from "../../components/NumbersHeader";
import GamesBox from "../../components/GamesBox";

import { gamesOptions } from "../../data/gamesOptions";

export default function Numbers() {
  const location = useLocation();
  const gameName = gamesOptions[location.state.gameType].label;

  return (
    <div className="h-screen w-screen bg-base">
      <Header />
      <NumbersHeader gameName={gameName} />
      <GamesBox />
    </div>
  );
}
