import React from "react";

function ExplanationPanel({ data }) {
  const reasons = [];

  if (data.rainfall_mm < 15) {
    reasons.push("Low average rainfall in the past 7 days");
  }

  if (data.reservoir_level < 60) {
    reasons.push("Reservoir level below safe operating threshold");
  }

  if (data.predicted_power < 700) {
    reasons.push("Predicted power generation is significantly reduced");
  }

  return (
    <section className="px-8 mt-10">
      <div className="glass-card border-red-500/40">
        <h2 className="text-xl font-semibold mb-4 text-red-400">
          🧠 Why is Hydro Status CRITICAL?
        </h2>

        <ul className="list-disc list-inside space-y-2 text-slate-200">
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-slate-400">
          This explanation is generated automatically using recent climate and
          reservoir data.
        </p>
      </div>
    </section>
  );
}

export default ExplanationPanel;
