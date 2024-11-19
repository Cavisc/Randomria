import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ActionButton from "../ActionButton";
import GameQuantity from "../GameQuantity";
import GameType from "../GameType";

import { gamesOptions } from "../../data/gamesOptions";

export default function GameSelection() {
  const [gameType, setGameType] = useState(0);
  const [quantityNumbers, setQuantityNumbers] = useState(
    gamesOptions[gameType].lowerLimit
  );
  const [quantityGames, setQuantityGames] = useState(1);
  const navigate = useNavigate();

  const handleGameType = (e) => {
    gamesOptions.map((item, index) => {
      if (item.value === e.target.value) {
        setGameType(index);
        setQuantityNumbers(item.lowerLimit);
      }
    });
  };

  const handleGenerate = () => {
    navigate("/numbers", {
      state: { gameType, quantityNumbers, quantityGames },
    });
  };

  return (
    <motion.main
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className="flex items-center justify-center h-5/6 flex-col gap-2"
    >
      <GameType onChange={handleGameType} />
      <GameQuantity
        label="quantos números?"
        lowerLimit={gamesOptions[gameType].lowerLimit}
        upperLimit={gamesOptions[gameType].upperLimit}
        value={quantityNumbers}
        onChange={setQuantityNumbers}
      />
      <GameQuantity
        label="quantos jogos?"
        lowerLimit={1}
        upperLimit={6}
        value={quantityGames}
        onChange={setQuantityGames}
      />
      <ActionButton label="gerar" onClick={handleGenerate} />
    </motion.main>
  );
}
