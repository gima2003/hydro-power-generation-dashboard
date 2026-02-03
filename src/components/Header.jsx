export default function Header({ riskStatus }) {
  const lastUpdated = new Date().toLocaleString();
  const confidence = 92;

  const isCritical =
    riskStatus && riskStatus.toLowerCase().includes("critical");

  return (
    <header className="border-b border-white/10 bg-gradient-to-r from-[#020617] to-[#0f172a]">
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-100">
            Hydro Power Generation Prediction System
          </h1>
          <p className="text-sm text-slate-400">
            AI-Driven Decision Support Dashboard
          </p>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-4 mt-3 sm:mt-0">

          {/* Confidence */}
          <div className="px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            <p className="text-xs font-semibold text-emerald-400">
              Model Confidence: {confidence}%
            </p>
          </div>

          {/* LIVE + timestamp */}
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/20">

            {/* LIVE indicator */}
            <span className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
              <span
                className={`h-2 w-2 rounded-full bg-cyan-400 ${
                  isCritical ? "animate-live" : ""
                }`}
              />
              LIVE
            </span>

            {/* Divider */}
            <span className="h-3 w-px bg-sky-400/30" />

            {/* Timestamp */}
            <span className="text-xs text-sky-300">
              {lastUpdated}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}
