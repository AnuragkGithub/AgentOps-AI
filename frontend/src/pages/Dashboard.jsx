import { useState } from "react";
import AgentStep from "../components/AgentStep";

export default function Dashboard() {

  const [result, setResult] = useState(null);

  const runAgents = () => {

    setResult({
      rootCause: "VPN credential mismatch",
      risk: "Medium",
      action: "Reset credentials and re-enroll MFA"
    });

  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto p-10">

        <h1 className="text-6xl font-bold mb-4">
          AgentOps Nexus
        </h1>

        <p className="text-slate-400 mb-10">
          Enterprise AI Workforce
        </p>

        <textarea
          className="w-full h-40 bg-slate-900 rounded-2xl p-5"
          placeholder="Describe enterprise issue..."
        />

        <button
          onClick={runAgents}
          className="mt-5 px-8 py-4 rounded-xl bg-cyan-500"
        >
          Analyze Incident
        </button>

        {result && (
          <>
            <div className="mt-10">

              <h2 className="text-2xl mb-5">
                Agent Execution
              </h2>

              <AgentStep
                name="Intent Agent"
                status="COMPLETE"
              />

              <AgentStep
                name="Security Agent"
                status="COMPLETE"
              />

              <AgentStep
                name="Knowledge Agent"
                status="COMPLETE"
              />

              <AgentStep
                name="Compliance Agent"
                status="COMPLETE"
              />

              <AgentStep
                name="CEO Agent"
                status="COMPLETE"
              />

            </div>

            <div className="bg-slate-900 rounded-2xl mt-10 p-6">

              <h2 className="text-2xl mb-5">
                Executive Summary
              </h2>

              <p>
                <b>Root Cause:</b> {result.rootCause}
              </p>

              <p className="mt-2">
                <b>Risk:</b> {result.risk}
              </p>

              <p className="mt-2">
                <b>Action:</b> {result.action}
              </p>

            </div>
          </>
        )}

      </div>

    </div>
  );
}