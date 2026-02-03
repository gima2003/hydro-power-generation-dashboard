import Header from "./components/Header";
import KPICards from "./components/KPICards";
import ForecastChart from "./components/ForecastChart";
import RiskPanel from "./components/RiskPanel";
import ScenarioChart from "./components/ScenarioChart";
import ExplanationPanel from "./components/ExplanationPanel";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/hydro_output.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b0f14] via-[#0f172a] to-black">

        <p className="text-xl animate-pulse">Loading hydro intelligence…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100">
      <Header riskStatus={data.risk_status} />

    <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">

  {/* TOP — KPI STRIP */}
  <KPICards data={data} />

  {/* GRID BELOW */}
  <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

    {/* LEFT — Explanation */}
    <section className="xl:col-span-3">
      <ExplanationPanel data={data} />
    </section>

    {/* CENTER — Forecast */}
    <section className="xl:col-span-6">
      <ForecastChart data={data} />
    </section>

    {/* RIGHT — Risk + Scenario */}
    <section className="xl:col-span-3 space-y-6">
      <RiskPanel data={data} />
      <ScenarioChart data={data} />
    </section>

  </div>
</main>


    </div>
  );
}

export default App;
