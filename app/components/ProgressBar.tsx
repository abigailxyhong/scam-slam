interface ProgressBarProps {
  currentStep: number; // 0 → 3
  totalSteps?: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps = 4,
}: ProgressBarProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-7xl px-6 mt-12 ml-16 mr-16">
      <div className="relative w-full h-5 bg-gray-800 rounded-full">

        {/* Progress Fill */}
        <div
          className="absolute h-5 bg-green-400 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />

        {/* Checkpoints */}
        {[0, 1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2
              ${
                step <= currentStep
                  ? "bg-green-400 border-green-300 shadow-[0_0_6px_#22c55e]"
                  : "bg-gray-900 border-gray-500"
              }`}
            style={{ left: `calc(${(step / totalSteps) * 100}% - 1rem)` }}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-row">
        <p className="text-2xl">Easy</p>
        <p className="text-2xl px-62"> Medium</p>
        <p className="text-2xl">Hard</p>
        <p className="text-2xl px-62">Very Hard</p>
        <p className="text-2xl">Complete!</p>
      </div>
    </div>
  );
}
