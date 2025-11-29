import { useState, MouseEvent } from "react";

interface ClickEffect {
  id: number;
  x: number;
  y: number;
  value: number;
}

export default function TapButton({ onTap, tapPower = 1 }: { onTap: () => void, tapPower: number }) {
  const [clicks, setClicks] = useState<ClickEffect[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // 1. Trigger the game logic
    onTap();

    // 2. Visual Logic: Add a floating number at click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newClick = { id: Date.now(), x, y, value: tapPower };
    setClicks((prev) => [...prev, newClick]);

    // 3. Cleanup: Remove the number from DOM after 1 second
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 1000);
  };

  return (
    <div className="relative w-full flex justify-center py-10 select-none">
      {/* The Coin */}
      <div 
        onClick={handleClick}
        className="crypto-coin w-64 h-64 rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden"
      >
        <span className="text-6xl select-none">₿</span>
        
        {/* Render Floating Numbers inside the coin container */}
        {clicks.map((click) => (
          <span
            key={click.id}
            className="absolute text-3xl font-bold text-white float-animation"
            style={{ left: click.x, top: click.y }}
          >
            +{click.value}
          </span>
        ))}
      </div>
    </div>
  );
}
