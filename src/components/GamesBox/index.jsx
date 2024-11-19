import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import GameBox from "../GameBox";

export default function GamesBox() {
  const location = useLocation();
  const quantityGames = location.state.quantityGames;

  return (
    <section className="w-full flex justify-center my-16 overflow-scroll">
      <div
        className={`grid grid-rows-${quantityGames} grid-cols-1 gap-12 w-2/3 place-items-center`}
      >
        {Array.from({ length: quantityGames }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
          >
            <GameBox />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
