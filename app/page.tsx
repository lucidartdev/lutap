"use client";

import { useEffect, useState } from "react";
import TapButton from "@/components/TapButton";
import BalanceCard from "@/components/BalanceCard";
import UpgradeShop from "@/components/UpgradeShop";
import AutoMinerDisplay from "@/components/AutoMinerDisplay";
import { loadGame, saveGame } from "@/lib/storage";

export default function Home() {
  const [game, setGame] = useState<any>(null);

  useEffect(() => {
    const data = loadGame();
    setGame(data);
  }, []);

  useEffect(() => {
    if (!game) return;
    const interval = setInterval(() => {
      const income = game.autoLevel * 1; 
      if (income > 0) {
        setGame((prev: any) => {
            const updated = { ...prev, balance: prev.balance + income };
            saveGame(updated);
            return updated;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [game]);

  if (!game) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;

  const handleTap = () => {
    const newBalance = game.balance + game.tapPower;
    const updated = { ...game, balance: newBalance };
    setGame(updated);
    saveGame(updated);
  };

  const buyTapUpgrade = () => {
    const cost = 50 * game.tapLevel * game.tapLevel;
    if (game.balance < cost) return;
    const updated = {
      ...game,
      balance: game.balance - cost,
      tapLevel: game.tapLevel + 1,
      tapPower: game.tapPower * 2,
    };
    setGame(updated);
    saveGame(updated);
  };

  const buyAutoMiner = () => {
    const cost = 100 * game.autoLevel * game.autoLevel;
    if (game.balance < cost) return;
    const updated = {
      ...game,
      balance: game.balance - cost,
      autoLevel: game.autoLevel + 1,
    };
    setGame(updated);
    saveGame(updated);
  };

  return (
    <main className="min-h-screen p-4 max-w-md mx-auto pb-24">
        {/* Header */}
      <h1 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 drop-shadow-sm">
        CRYPTO TAP
      </h1>

      <BalanceCard balance={game.balance} />

      {/* Pass tapPower so the floating number shows the correct amount */}
      <TapButton onTap={handleTap} tapPower={game.tapPower} />

      <AutoMinerDisplay level={game.autoLevel} />
      
      <UpgradeShop
        game={game}
        onTapUpgrade={buyTapUpgrade}
        onAutoUpgrade={buyAutoMiner}
      />
    </main>
  );
}
