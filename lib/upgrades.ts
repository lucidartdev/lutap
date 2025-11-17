// cost is 50 * level²
export function tapUpgradeCost(level: number) {
    return 50 * level * level;
  }
  
  // tap power doubles on each upgrade
  export function applyTapUpgrade(currentPower: number) {
    return currentPower * 2;
  }
  