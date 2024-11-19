import { motion } from "framer-motion";

import RulesCard from "../RulesCard";

import { gamesOptions } from "../../data/gamesOptions";

export default function CardsBox() {
  return (
    <section className="w-full flex justify-center my-20">
      <div className="flex flex-wrap w-3/4 justify-center gap-6">
        {Array.from({ length: gamesOptions.length }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
          >
            <RulesCard
              gameName={gamesOptions[i].label}
              rules={gamesOptions[i].rules}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
