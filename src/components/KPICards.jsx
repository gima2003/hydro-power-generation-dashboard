import useCountUp from "../hooks/useCountUp";

export default function KPICards({ data }) {
  const power = useCountUp(Math.round(data.predicted_power));
  const rainfall = useCountUp(data.rainfall_mm);
  const reservoir = useCountUp(data.reservoir_level);

  const cards = [
    {
      label: "Predicted Power",
      value: `${power} MW`,
      color: "amber",
    },
    {
      label: "Hydro Status",
      value: "CRITICAL",
      sub: "Very Low Hydro",
      color: "red",
    },
    {
      label: "Rainfall",
      value: `${rainfall} mm`,
      color: "cyan",
    },
    {
      label: "Reservoir Level",
      value: `${reservoir} m`,
      color: "indigo",
    },
  ];

  const colorMap = {
    amber: "text-amber-400",
    red: "text-red-400",
    cyan: "text-cyan-400",
    indigo: "text-indigo-400",
  };

  return (
    <section className="grid grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`
            h-[110px]
            rounded-xl px-5 py-4
            bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/90
            ring-1 ring-white/10
            flex flex-col justify-center
            shadow-lg
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-2xl
            ${i === 0 ? "gold-glow" : ""}
          `}
        >
          <p className="text-[11px] uppercase tracking-widest text-slate-400">
            {card.label}
          </p>

          <p className={`text-2xl font-semibold mt-1 ${colorMap[card.color]}`}>
            {card.value}
          </p>

          {card.sub && (
            <p className="text-xs text-slate-400 mt-0.5">
              {card.sub}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
