import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import MenuItem from "../MenuItem";

import { menuItems } from "../../data/menuItems";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handlePage = (path) => {
    navigate(path);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-primary w-full h-28 border-4 border-text flex items-center justify-center"
    >
      <div className="flex justify-around items-center w-72">
        {menuItems.map((item, index) => {
          if (item.type === "item") {
            return (
              <MenuItem
                key={index}
                item={item.label}
                isActive={location.pathname === item.path}
                onClick={() => {
                  handlePage(item.path);
                }}
              />
            );
          } else if (item.type === "image") {
            return (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="h-20 w-20"
              />
            );
          }

          return null;
        })}
      </div>
    </motion.header>
  );
}
