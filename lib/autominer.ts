// tokens generated per second
export function autoMinerIncome(level: number) {
    return level * 1; // 1 token/sec per level
  }
  
  // cost increases exponentially: 100 * level²
  export function autoMinerCost(level: number) {
    return 100 * level * level;
  }
  