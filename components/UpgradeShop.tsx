export default function UpgradeShop({ game, onTapUpgrade, onAutoUpgrade }: any) {
  const tapCost = 50 * game.tapLevel * game.tapLevel;
  const autoCost = 100 * game.autoLevel * game.autoLevel;

  return (
    <div className="mt-8 glass-panel p-5 rounded-2xl">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        🚀 Boosters
      </h2>

      <div className="space-y-3">
        {/* Tap Upgrade */}
        <button
          onClick={onTapUpgrade}
          disabled={game.balance < tapCost}
          className={`w-full flex justify-between items-center p-4 rounded-xl transition-all ${
            game.balance >= tapCost 
              ? "bg-blue-600/80 hover:bg-blue-500 border-b-4 border-blue-800 active:border-b-0 active:translate-y-1" 
              : "bg-gray-700/50 cursor-not-allowed opacity-50"
          }`}
        >
          <div className="text-left">
            <div className="font-bold text-white">Multitap (Lv {game.tapLevel})</div>
            <div className="text-xs text-blue-200">Get +{game.tapPower * 2} per click</div>
          </div>
          <div className="text-yellow-300 font-mono font-bold">
            {tapCost.toLocaleString()} 💰
          </div>
        </button>

        {/* Auto Miner Upgrade */}
        <button
          onClick={onAutoUpgrade}
          disabled={game.balance < autoCost}
          className={`w-full flex justify-between items-center p-4 rounded-xl transition-all ${
            game.balance >= autoCost 
              ? "bg-green-600/80 hover:bg-green-500 border-b-4 border-green-800 active:border-b-0 active:translate-y-1" 
              : "bg-gray-700/50 cursor-not-allowed opacity-50"
          }`}
        >
          <div className="text-left">
            <div className="font-bold text-white">Auto Bot (Lv {game.autoLevel})</div>
            <div className="text-xs text-green-200">+{game.autoLevel + 1} / sec</div>
          </div>
          <div className="text-yellow-300 font-mono font-bold">
            {autoCost.toLocaleString()} 💰
          </div>
        </button>
      </div>
    </div>
  );
}
