export default function BalanceCard({ balance }: any) {
  return (
    <div className="w-full p-6 glass-panel rounded-2xl text-center mb-4 sticky top-4 z-10">
      <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Current Balance</p>
      <div className="flex justify-center items-center gap-2 mt-2">
        <span className="text-4xl font-bold text-yellow-400 drop-shadow-md">
          {balance.toLocaleString()}
        </span>
        <span className="text-xl text-white">TOKENS</span>
      </div>
    </div>
  );
}
