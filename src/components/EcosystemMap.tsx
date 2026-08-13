import React, { useState } from 'react';
import { DEMO_MAP_NODES, DEMO_ROUTES } from '../demoData/logistics';
import { MapNode, RouteLine } from '../types';
import { Truck, Warehouse, User, Wallet, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

interface EcosystemMapProps {
  onNodeSelect?: (node: MapNode) => void;
}

export const EcosystemMap: React.FC<EcosystemMapProps> = ({ onNodeSelect }) => {
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(DEMO_MAP_NODES[0]);
  const [activeTabFilter, setActiveTabFilter] = useState<'all' | 'dispatcher' | 'warehouse' | 'payment'>('all');

  const filteredNodes = DEMO_MAP_NODES.filter((node) => {
    if (activeTabFilter === 'all') return true;
    if (activeTabFilter === 'dispatcher') return node.type === 'dispatcher';
    if (activeTabFilter === 'warehouse') return node.type === 'warehouse';
    if (activeTabFilter === 'payment') return node.type === 'payment_node';
    return true;
  });

  const getNodeIcon = (type: MapNode['type']) => {
    switch (type) {
      case 'dispatcher':
        return <Truck className="w-4 h-4 text-cyan-400" />;
      case 'warehouse':
        return <Warehouse className="w-4 h-4 text-blue-400" />;
      case 'customer':
        return <User className="w-4 h-4 text-slate-300" />;
      case 'payment_node':
        return <Wallet className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getNodeBg = (type: MapNode['type']) => {
    switch (type) {
      case 'dispatcher':
        return 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300 shadow-cyan-500/20';
      case 'warehouse':
        return 'bg-blue-950/80 border-blue-500/50 text-blue-300 shadow-blue-500/20';
      case 'customer':
        return 'bg-slate-900/80 border-slate-700 text-slate-200 shadow-slate-500/10';
      case 'payment_node':
        return 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20';
    }
  };

  const handleNodeClick = (node: MapNode) => {
    setSelectedNode(node);
    if (onNodeSelect) onNodeSelect(node);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#091424] border border-slate-800/80 p-4 sm:p-6 overflow-hidden shadow-2xl">
      {/* Background Grid & Radar Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Map Controls Header */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
            LIVE NETWORK RADAR MOCK
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800/80 text-xs">
          <button
            onClick={() => setActiveTabFilter('all')}
            className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
              activeTabFilter === 'all'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ALL NODES
          </button>
          <button
            onClick={() => setActiveTabFilter('dispatcher')}
            className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
              activeTabFilter === 'dispatcher'
                ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/50'
                : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            DISPATCHERS
          </button>
          <button
            onClick={() => setActiveTabFilter('warehouse')}
            className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
              activeTabFilter === 'warehouse'
                ? 'bg-blue-950 text-blue-400 border border-blue-800/50'
                : 'text-slate-400 hover:text-blue-300'
            }`}
          >
            WAREHOUSES
          </button>
          <button
            onClick={() => setActiveTabFilter('payment')}
            className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
              activeTabFilter === 'payment'
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                : 'text-slate-400 hover:text-emerald-300'
            }`}
          >
            ESIK SETTLEMENT
          </button>
        </div>
      </div>

      {/* Interactive Map Visual Area */}
      <div className="relative w-full h-[320px] sm:h-[380px] my-4 rounded-xl bg-slate-950/60 border border-slate-800/60 overflow-hidden">
        {/* SVG Route Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Animated SVG Path Lines connecting nodes */}
          <line
            x1="20%"
            y1="25%"
            x2="40%"
            y2="35%"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-flow"
          />
          <line
            x1="40%"
            y1="35%"
            x2="85%"
            y2="60%"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-flow"
          />
          <line
            x1="85%"
            y1="60%"
            x2="70%"
            y2="80%"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="animate-flow"
          />
        </svg>

        {/* Map Nodes Pins */}
        {filteredNodes.map((node) => {
          const isSelected = selectedNode?.id === node.id;
          return (
            <div
              key={node.id}
              style={{ left: `${node.lng}%`, top: `${node.lat}%` }}
              onClick={() => handleNodeClick(node)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group transition-all duration-300 ${
                isSelected ? 'scale-125 z-30' : 'hover:scale-110 z-20'
              }`}
            >
              {/* Pulse Ring */}
              <div
                className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
                  node.type === 'dispatcher'
                    ? 'bg-cyan-400'
                    : node.type === 'warehouse'
                    ? 'bg-blue-400'
                    : node.type === 'payment_node'
                    ? 'bg-emerald-400'
                    : 'bg-slate-400'
                }`}
              ></div>

              {/* Pin Container */}
              <div
                className={`relative flex items-center gap-2 p-2 rounded-xl border shadow-xl backdrop-blur-md ${getNodeBg(
                  node.type
                )}`}
              >
                {getNodeIcon(node.type)}
                <span className="hidden sm:inline font-mono text-xs font-semibold whitespace-nowrap">
                  {node.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Flow Legend Banner at bottom left */}
        <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800/90 rounded-xl p-2.5 backdrop-blur-md text-[11px] font-mono flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>DISPATCH</span>
          </div>
          <span className="text-slate-600">→</span>
          <div className="flex items-center gap-1.5 text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>WAREHOUSE</span>
          </div>
          <span className="text-slate-600">→</span>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>ESIK PAY</span>
          </div>
        </div>
      </div>

      {/* Selected Node Details Card Overlay */}
      {selectedNode && (
        <div className="relative z-20 bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-start gap-3">
            <div className={`p-3 rounded-xl border ${getNodeBg(selectedNode.type)}`}>
              {getNodeIcon(selectedNode.type)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-100 text-sm">{selectedNode.name}</h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {selectedNode.type.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{selectedNode.details}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800/80">
              <span className="text-slate-500 block text-[10px]">DISTANCE</span>
              <span className="text-slate-200 font-semibold">{selectedNode.distanceKm}</span>
            </div>
            <div className="bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800/80">
              <span className="text-slate-500 block text-[10px]">STATUS / ETA</span>
              <span className="text-cyan-400 font-semibold">{selectedNode.etaMin}</span>
            </div>
            <button
              onClick={() => handleNodeClick(selectedNode)}
              className="px-3 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors text-xs font-medium flex items-center gap-1"
            >
              Inspect Node <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
