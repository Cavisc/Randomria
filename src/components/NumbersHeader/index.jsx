import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ReturnButton from "../ReturnButton";
import ActionButton from "../ActionButton";

export default function NumbersHeader({ gameName }) {
  const navigate = useNavigate();

  const newGame = () => {
    navigate("/");
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-around max-sm:flex-col max-sm:mt-6"
    >
      <span className="text-text font-bold text-lg">jogo: {gameName}</span>
      <div className="flex gap-4">
        <ReturnButton size={16} onClick={reload} />
        <ActionButton label={"novo jogo"} onClick={newGame} />
      </div>
    </motion.section>
  );
}
