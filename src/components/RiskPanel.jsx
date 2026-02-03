export default function RiskPanel({ data }) {
  const status = data.risk_status.toLowerCase();

  let level = 0;
  let color = "text-green-400";
  let ring = "stroke-green-400";
  let bg = "bg-green-400/10";
  let title = "NORMAL";
  let message =
    "Hydropower generation is within safe operating limits.";

  if (status.includes("warning")) {
    level = 60;
    color = "text-yellow-400";
    ring = "stroke-yellow-400";
    bg = "bg-yellow-400/10";
    title = "WARNING";
    message =
      "Hydropower levels are declining. Monitor closely.";
  }

  if (status.includes("critical")) {
    level = 85;
    color = "text-red-400";
    ring = "stroke-red-400";
    bg = "bg-red-400/10";
    title = "CRITICAL";
    message =
      "High risk of power shortage. Immediate action required.";
  }

  return (
    <div className="glass-card">
      <h3 className="text-lg font-semibold text-slate-200 mb-4">
        Risk Severity
      </h3>

      {/* Ring Meter */}
      <div className="flex items-center gap-6">
        <svg width="110" height="110" viewBox="0 0 36 36">
          <path
            className="text-slate-700"
            strokeWidth="3"
            fill="none"
            stroke="currentColor"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`${ring}`}
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${level}, 100`}
            strokeLinecap="round"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        <div>
          <p className={`text-2xl font-bold ${color}`}>
            {title}
          </p>
          <p className="text-sm text-slate-400">
            Risk Level: {level}%
          </p>
        </div>
      </div>

      {/* Recommendation */}
      <div
        className={`mt-4 p-3 rounded-lg border ${bg} border-white/10`}
      >
        <p className="text-sm text-slate-200">
          {message}
        </p>
      </div>
    </div>
  );
}
