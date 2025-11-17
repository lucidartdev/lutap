export default function UpgradeShop({ game, onTapUpgrade, onAutoUpgrade }: any) {
    const tapCost = 50 * game.tapLevel * game.tapLevel;
    const autoCost = 100 * game.autoLevel * game.autoLevel;
  
    return (
      <div className="mt-6 p-4 border rounded-lg shadow space-y-4">
        <h2 className="text-lg font-bold">Upgrades</h2>
  
        <button
          onClick={onTapUpgrade}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Tap Multiplier (x2) — Cost: {tapCost}
        </button>
  
        <button
          onClick={onAutoUpgrade}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
        >
          Auto Miner Lv{game.autoLevel} — Cost: {autoCost}
        </button>
      </div>
    );
  }
  