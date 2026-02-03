import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function ForecastChart({ data }) {
  const forecastData = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Next Day",
  ].map((day, i) => ({
    day,
    power: Number(data.forecast[i]) / 1000
, // ✅ keep MW as-is
  }));

  return (
    <div className="glass-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-200">
          Hydropower Forecast
        </h3>
        <span className="text-xs text-slate-400">
          Next 7–8 days (MW)
        </span>
      </div>

      {/* Chart */}
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastData}>
            {/* Gradient */}
            <defs>
              <linearGradient id="powerGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={1} />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.6} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
            />

            {/* X Axis */}
            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            {/* Y Axis */}
            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
              tickFormatter={(v) => `${Math.round(v)} MW`}
              domain={["auto", "auto"]}
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(value) => [`${Math.round(value)} MW`, "Predicted Power"]}
              labelStyle={{ color: "#94a3b8" }}
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                color: "#e5e7eb",
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="power"
              stroke="url(#powerGradient)"
              strokeWidth={3}
              dot={{ r: 4, fill: "#38bdf8" }}
              activeDot={{
                r: 6,
                fill: "#38bdf8",
                stroke: "#0ea5e9",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
