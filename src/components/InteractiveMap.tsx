import React, { useState } from 'react';
import { DEMO_MAP_NODES } from '../demoData/logistics';
import { MapNode } from '../types';
import { Plus, Minus, Navigation, Layers, Truck, Warehouse, Star, CheckCircle, Clock } from 'lucide-react';

interface InteractiveMapProps {
  onBookDispatcher: (dispatcherName: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onBookDispatcher }) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(DEMO_MAP_NODES[0]);
  const [activeLayer, setActiveLayer] = useState<'all' | 'dispatchers' | 'hubs'>('all');
  const [isLocating, setIsLocating] = useState(false);

  const handleZoom = (direction: 'in' | 'out') => {
    if (direction === 'in') setZoomLevel((prev) => Math.min(prev + 15, 140));
    else setZoomLevel((prev) => Math.max(prev - 15, 80));
  };

  const handleLocate = () => {
    setIsLocating(true);
    setTimeout(() => {
      setIsLocating(false);
    }, 800);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#091426] border border-slate-800/80 p-4 sm:p-6 overflow-hidden shadow-2xl">
      {/* Top Map Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80 z-20 relative">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
            <Truck className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100 font-mono">
              NUELOGIXS DISPATCH MATRIX
            </h3>
            <p className="text-xs text-slate-400">Interactive Fleet & Hub Grid (Demo Data)</p>
          </div>
        </div>

        {/* Map Control Buttons: [+], [-], [Locate], [Layers] */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
            <button
              onClick={() => handleZoom('in')}
              className="p-1.5 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors"
              title="Zoom In [+]"
            >
              <Plus className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono px-2 text-slate-400">{zoomLevel}%</span>
            <button
              onClick={() => handleZoom('out')}
              className="p-1.5 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors"
              title="Zoom Out [-]"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleLocate}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all ${
              isLocating
                ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin text-cyan-400' : ''}`} />
            Locate
          </button>

          <button
            onClick={() =>
              setActiveLayer(
                activeLayer === 'all' ? 'dispatchers' : activeLayer === 'dispatchers' ? 'hubs' : 'all'
              )
            }
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-slate-700 flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            Layer: {activeLayer.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Interactive Map Visual Stage */}
      <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl bg-slate-950/80 border border-slate-800/80 overflow-hidden">
        {/* Radar & Terrain Background */}
        <div
          className="absolute inset-0 bg-grid-pattern transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel / 100})` }}
        ></div>

        {/* Map Pins */}
        {DEMO_MAP_NODES.map((node) => {
          const isSelected = selectedNode?.id === node.id;
          return (
            <div
              key={node.id}
              style={{ left: `${node.lng}%`, top: `${node.lat}%` }}
              onClick={() => setSelectedNode(node)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group transition-transform ${
                isSelected ? 'scale-125 z-30' : 'hover:scale-110 z-20'
              }`}
            >
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border shadow-xl backdrop-blur-md text-xs font-mono font-semibold ${
                  node.type === 'dispatcher'
                    ? 'bg-cyan-950/90 text-cyan-300 border-cyan-500/50 shadow-cyan-500/20'
                    : node.type === 'warehouse'
                    ? 'bg-blue-950/90 text-blue-300 border-blue-500/50 shadow-blue-500/20'
                    : 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50 shadow-emerald-500/20'
                }`}
              >
                {node.type === 'dispatcher' ? (
                  <Truck className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <Warehouse className="w-3.5 h-3.5 text-blue-400" />
                )}
                <span>{node.name}</span>
              </div>
            </div>
          );
        })}

        {/* Floating Interface Card Placeholder */}
        {selectedNode && (
          <div className="absolute top-4 right-4 z-30 max-w-xs w-full bg-[#0d1726]/95 border border-slate-700/80 rounded-2xl p-4 backdrop-blur-xl shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                DISPATCHER DETAIL
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{selectedNode.rating || 4.9}</span>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <h4 className="font-extrabold text-slate-100 text-base">{selectedNode.name}</h4>
              <p className="text-xs text-slate-400 font-normal">{selectedNode.details}</p>

              <div className="grid grid-cols-2 gap-2 mt-1 text-xs font-mono">
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">DISTANCE</span>
                  <span className="text-slate-200 font-bold">{selectedNode.distanceKm}</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">ESTIMATED ETA</span>
                  <span className="text-cyan-400 font-bold">{selectedNode.etaMin}</span>
                </div>
              </div>

              <button
                onClick={() => onBookDispatcher(selectedNode.name)}
                className="mt-2 w-full py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20"
              >
                <CheckCircle className="w-3.5 h-3.5" /> [Book Dispatcher]
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
