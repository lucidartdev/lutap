export function loadGame() {
    if (typeof window === "undefined") return null;
  
    const raw = localStorage.getItem("cryptotap");
    if (raw) return JSON.parse(raw);
  
    const initial = {
      balance: 0,
      tapPower: 1,
      tapLevel: 1,
      autoLevel: 0,
    };
  
    localStorage.setItem("cryptotap", JSON.stringify(initial));
    return initial;
  }
  
  export function saveGame(data: any) {
    localStorage.setItem("cryptotap", JSON.stringify(data));
  }
  