export default function TapButton({ onTap }: any) {
    return (
      <button
        onClick={onTap}
        className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 py-6 rounded-xl shadow text-xl font-semibold"
      >
        🟡 TAP TO EARN
      </button>
    );
  }
  