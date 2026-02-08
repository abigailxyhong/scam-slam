interface ProgressBarProps {
  currentStep: number
  totalSteps?: number
}

export default function ProgressBar({
  currentStep,
  totalSteps = 4,
}: ProgressBarProps) {
  const labels = ["Easy", "Medium", "Hard", "Very Hard", "Complete!"]
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="max-w-9xl px-6 mt-12 ml-12 mr-16">
      <div className="relative w-full h-5 bg-gray-800 rounded-full">

        {/* Progress Fill */}
        <div
          className="absolute h-5 bg-green-400 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />

        {/* Checkpoints + labels */}
        {labels.map((label, step) => (
          <div
            key={step}
            className="absolute flex flex-col items-center"
            style={{
              left: `${(step / totalSteps) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            {/* Circle */}
            <div
              className={`w-6 h-6 rounded-full border-2
                ${
                  step <= currentStep
                    ? "bg-green-400 border-green-300 shadow-[0_0_6px_#22c55e]"
                    : "bg-gray-900 border-gray-500"
                }`}
            />

            {/* Label */}
            <span className="mt-2 text-xl text-gray-800 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
