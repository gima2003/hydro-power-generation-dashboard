import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function ScenarioChart({ data }) {
  const normal = data.scenario.normal;
  const reduced = data.scenario.rainfall_drop_20;

  const impactPercent = (
    ((normal - reduced) / normal) *
    100
  ).toFixed(1);

  const chartData = [
    { name: "Normal", value: normal },
    { name: "Rainfall −20%", value: reduced },
  ];

  return (
    <div className="glass-card">
      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-200 mb-1">
        Scenario Impact Analysis
      </h3>
      <p className="text-sm text-slate-400 mb-4">
        Effect of reduced rainfall on hydropower generation
      </p>

      {/* Chart */}
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "#e5e7eb",
              }}
              labelStyle={{ color: "#94a3b8" }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={index === 0 ? "#22c55e" : "#ef4444"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Impact summary */}
      <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
        <p className="text-sm text-slate-300">
          ⚠️ If rainfall drops by <span className="font-semibold">20%</span>,
          hydropower generation is expected to decrease by
          <span className="text-red-400 font-bold ml-1">
            {impactPercent}%
          </span>
          .
        </p>
      </div>
    </div>
  );
}
