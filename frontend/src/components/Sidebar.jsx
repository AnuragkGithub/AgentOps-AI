import { LayoutDashboard, Bot } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-700 p-5">

      <h1 className="text-2xl font-bold text-cyan-400 mb-10">
        AgentOps Nexus
      </h1>

      <div className="space-y-5">

        <div className="flex gap-3 cursor-pointer">
          <LayoutDashboard />
          Dashboard
        </div>

        <div className="flex gap-3 cursor-pointer">
          <Bot />
          Command Center
        </div>

      </div>

    </div>
  );
}