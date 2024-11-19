import Header from "../../components/Header";
import GameSelection from "../../components/GameSelection";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-base">
      <Header />
      <GameSelection />
    </div>
  );
}
