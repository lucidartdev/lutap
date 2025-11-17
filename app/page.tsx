"use client";

import { useEffect, useState } from "react";
import TapButton from "@/components/TapButton";
import BalanceCard from "@/components/BalanceCard";
import UpgradeShop from "@/components/UpgradeShop";
import AutoMinerDisplay from "@/components/AutoMinerDisplay";
import { loadGame, saveGame } from "@/lib/storage";

export default function Home() {
  const [game, setGame] = useState<any>(null);

  // Load saved game
  useEffect(() => {
    const data = loadGame();
    setGame(data);
  }, []);

  // Auto miner loop
  useEffect(() => {
    if (!game) return;

    const interval = setInterval(() => {
      const income = game.autoLevel * 1; // 1 token/sec per level

      if (income > 0) {
        const updated = { ...game, balance: game.balance + income };
        setGame(updated);
        saveGame(updated);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [game]);

  if (!game) return null;

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
    <main className="min-h-screen p-6 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold mb-6">CryptoTap</h1>

      <BalanceCard balance={game.balance} />

      <TapButton onTap={handleTap} />

      <UpgradeShop
        game={game}
        onTapUpgrade={buyTapUpgrade}
        onAutoUpgrade={buyAutoMiner}
      />

      <AutoMinerDisplay level={game.autoLevel} />
    </main>
  );
}
