export default function BalanceCard({ balance }: any) {
    return (
      <div className="w-full p-4 border rounded-lg shadow">
        <p className="text-lg font-medium">
          Balance: <span className="font-bold">{balance}</span> TOKEN
        </p>
      </div>
    );
  }
  