"use client";

import React from "react";

export const CustomWebDevIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
    {/* Background grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-slate-600 rounded"></div>
        ))}
      </div>
    </div>

    {/* Main content */}
    <div className="relative z-10 space-y-6 w-full max-w-sm">
      {/* Template with X mark - rejected */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-red-500/50 relative">
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">✕</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-slate-500"></div>
          <div className="w-3 h-3 rounded-full bg-slate-500"></div>
          <div className="w-3 h-3 rounded-full bg-slate-500"></div>
        </div>

        <div className="space-y-2 opacity-50">
          <div className="h-2 bg-slate-500 rounded w-3/4"></div>
          <div className="h-2 bg-slate-500 rounded w-1/2"></div>
          <div className="h-2 bg-slate-500 rounded w-2/3"></div>
        </div>

        <div className="text-xs text-slate-400 mt-2 text-center">Template</div>
      </div>

      {/* Center piece - Custom code with sparkles */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110 relative">
        {/* Sparkle effects */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse" />
        <div className="absolute -top-2 right-8 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-75" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-150" />

        <div className="text-center">
          <div className="text-white text-4xl font-bold mb-2">{'</>'}</div>
          <div className="text-white/90 text-sm font-medium">Custom Built</div>
          <div className="text-white/70 text-xs mt-1">No Templates</div>
        </div>
      </div>

      {/* Custom features with checkmarks */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-green-500/50 relative">
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">✓</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
        </div>

        <div className="space-y-2">
          <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded w-2/3"></div>
          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-3/4"></div>
          <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded w-1/2"></div>
        </div>

        <div className="text-xs text-green-400 mt-2 text-center">Your Vision</div>
      </div>

      {/* Bottom benefits */}
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-indigo-500/50">
          <div className="text-xs text-indigo-300 font-medium">100% Unique</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-purple-500/50">
          <div className="text-xs text-purple-300 font-medium">Scalable</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-pink-500/50">
          <div className="text-xs text-pink-300 font-medium">Optimized</div>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-12 h-12 bg-indigo-500/20 rounded-full blur-xl" />
    <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
    <div className="absolute top-1/2 left-4 w-10 h-10 bg-pink-500/20 rounded-full blur-xl" />
  </div>
);

export const LightningFastIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
    {/* Background grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-slate-600 rounded"></div>
        ))}
      </div>
    </div>

    {/* Speed lines animation */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: "-100%",
            width: "200%",
            animation: `speedLine ${1 + i * 0.2}s linear infinite`,
          }}
        />
      ))}
    </div>

    {/* Main content */}
    <div className="relative z-10 space-y-6 w-full max-w-sm">
      {/* Speedometer gauge */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-slate-600/50">
        <div className="relative w-32 h-32 mx-auto">
          {/* Gauge background */}
          <div className="absolute inset-0 rounded-full border-8 border-slate-600" />
          {/* Active gauge */}
          <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-yellow-400 border-b-orange-500 transform rotate-45" />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-red-500 rounded-full" />
          </div>
          {/* Needle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-12 bg-red-500 rounded-full transform -rotate-45 origin-bottom" />
          </div>
        </div>

        <div className="text-center mt-2">
          <div className="text-xs text-slate-400">Speed Test</div>
        </div>
      </div>

      {/* Center piece - Lightning bolt */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-6 shadow-2xl transform scale-110 relative">
        {/* Electric glow */}
        <div className="absolute inset-0 bg-yellow-300/30 rounded-2xl blur-xl animate-pulse" />
        <div className="text-center relative">
          <div className="text-white text-5xl font-bold mb-2">⚡</div>
          <div className="text-white/90 text-sm font-medium">Lightning Fast</div>
          <div className="text-white/70 text-xs mt-1">Optimized Performance</div>
        </div>

        {/* Spark particles */}
        <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-3 right-6 w-1 h-1 bg-white rounded-full animate-pulse delay-75" />
        <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-150" />
      </div>

      {/* Performance metrics */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
        <div className="space-y-3">
          {/* Load time */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-300">Load Time</div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-slate-600 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
              </div>
              <div className="text-xs text-green-400 font-bold">0.8s</div>
            </div>
          </div>

          {/* FCP */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-300">First Paint</div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-slate-600 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
              </div>
              <div className="text-xs text-blue-400 font-bold">0.3s</div>
            </div>
          </div>

          {/* TTI */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-300">Interactive</div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-slate-600 rounded-full overflow-hidden">
                <div className="h-full w-1/5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
              </div>
              <div className="text-xs text-purple-400 font-bold">1.2s</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom features */}
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-green-500/50">
          <div className="text-xs text-green-300 font-medium">CDN Ready</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-blue-500/50">
          <div className="text-xs text-blue-300 font-medium">Cached</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-purple-500/50">
          <div className="text-xs text-purple-300 font-medium">Minified</div>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-500/20 rounded-full blur-xl" />
    <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl" />
    <div className="absolute top-1/2 right-8 w-10 h-10 bg-red-500/20 rounded-full blur-xl" />

    <style jsx>{`
      @keyframes speedLine {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      .delay-75 {
        animation-delay: 75ms;
      }
      .delay-150 {
        animation-delay: 150ms;
      }
    `}</style>
  </div>
);

export const SEOFriendlyIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
    {/* Background grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-slate-600 rounded"></div>
        ))}
      </div>
    </div>

    {/* Main content */}
    <div className="relative z-10 space-y-6 w-full max-w-sm">
      {/* Search bar with magnifying glass */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-slate-600/50">
        <div className="bg-white rounded-lg p-3 flex items-center gap-3">
          <div className="text-2xl">🔎</div>
          <div className="flex-1 space-y-2">
            <div className="h-2 bg-slate-300 rounded w-full"></div>
            <div className="h-2 bg-slate-200 rounded w-3/4"></div>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <div className="flex-1 bg-slate-600/50 rounded p-2">
            <div className="h-1 bg-blue-400 rounded w-full mb-1"></div>
            <div className="h-1 bg-slate-500 rounded w-2/3"></div>
          </div>
          <div className="flex-1 bg-slate-600/50 rounded p-2">
            <div className="h-1 bg-green-400 rounded w-full mb-1"></div>
            <div className="h-1 bg-slate-500 rounded w-3/4"></div>
          </div>
        </div>

        <div className="text-xs text-slate-400 mt-2 text-center">Search Results</div>
      </div>

      <div className="text-center">
        <div className="text-xl">🔍</div>
      </div>

      {/* Center piece - SEO icon with ranking */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 shadow-2xl transform scale-110 relative">
        {/* Ranking badge */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-800">
          <span className="text-slate-900 text-sm font-bold">#1</span>
        </div>

        {/* Upward trending arrows */}
        <div className="absolute -top-2 left-4 text-green-300 text-xl animate-bounce">↑</div>
        <div className="absolute -top-1 left-8 text-green-300 text-lg animate-bounce delay-75">↑</div>

        <div className="text-center relative">
          <div className="text-white text-5xl font-bold mb-2">🎯</div>
          <div className="text-white/90 text-sm font-medium">SEO Optimized</div>
          <div className="text-white/70 text-xs mt-1">Top Rankings</div>
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 bg-emerald-300/20 rounded-2xl blur-xl animate-pulse" />
      </div>

      {/* SEO Architecture features */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
        <div className="space-y-3">
          {/* Semantic HTML */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-sm font-bold">&lt;/&gt;</span>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-300 font-medium">Semantic HTML</div>
              <div className="h-1 bg-slate-600 rounded-full mt-1 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
              </div>
            </div>
            <span className="text-green-400 text-xs">✓</span>
          </div>

          {/* Meta Tags */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <span className="text-purple-400 text-sm font-bold">#</span>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-300 font-medium">Meta Tags</div>
              <div className="h-1 bg-slate-600 rounded-full mt-1 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full" />
              </div>
            </div>
            <span className="text-green-400 text-xs">✓</span>
          </div>

          {/* Structured Data */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <span className="text-cyan-400 text-sm font-bold">{'{}'}</span>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-300 font-medium">Schema Markup</div>
              <div className="h-1 bg-slate-600 rounded-full mt-1 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />
              </div>
            </div>
            <span className="text-green-400 text-xs">✓</span>
          </div>
        </div>
      </div>

      {/* Bottom benefits */}
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-emerald-500/50">
          <div className="text-xs text-emerald-300 font-medium">Crawlable</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-teal-500/50">
          <div className="text-xs text-teal-300 font-medium">Indexed</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-cyan-500/50">
          <div className="text-xs text-cyan-300 font-medium">Mobile First</div>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/20 rounded-full blur-xl" />
    <div className="absolute bottom-4 left-4 w-16 h-16 bg-teal-500/20 rounded-full blur-xl" />
    <div className="absolute top-1/2 left-4 w-10 h-10 bg-cyan-500/20 rounded-full blur-xl" />

    <style jsx>{`
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      .animate-bounce {
        animation: bounce 2s infinite;
      }
      .delay-75 {
        animation-delay: 150ms;
      }
    `}</style>
  </div>
);

export const ScalableFutureIllustration = () => (
  <div className={`w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden`}>
    {/* Background grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-slate-600 rounded"></div>
        ))}
      </div>
    </div>

    {/* Main content */}
    <div className="relative z-10 space-y-6 w-full max-w-sm">
      {/* Growth chart */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-slate-600/50">
        <div className="flex items-end justify-between gap-2 h-24">
          {[40, 55, 65, 80, 95].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div
                className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t transition-all duration-1000"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="text-xs text-slate-400">Growth</div>
          <div className="text-xs text-green-400 font-bold flex items-center gap-1">
            <span>↗</span>
            <span>+250%</span>
          </div>
        </div>
      </div>

      {/* Center piece - Rocket & layers */}
      <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl p-6 shadow-2xl transform scale-110 relative">
        {/* Orbit rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-white/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-2 border-white/30 rounded-full animate-pulse"></div>
        </div>

        {/* Future indicator */}
        <div className="absolute -top-3 -right-3 w-16 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-800">
          <span className="text-slate-900 text-xs font-bold">2025+</span>
        </div>

        <div className="text-center relative">
          <div className="text-white text-5xl font-bold mb-2">🚀</div>
          <div className="text-white/90 text-sm font-medium">Scalable</div>
          <div className="text-white/70 text-xs mt-1">Future-Ready</div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-purple-300/30 rounded-2xl blur-xl animate-pulse" />
      </div>

      {/* Architecture layers */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
        <div className="space-y-2">
          {/* Layer 1 - Modular */}
          <div className="bg-gradient-to-r from-indigo-500/30 to-indigo-500/10 border border-indigo-500/50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center text-white text-xs font-bold">M</div>
                <span className="text-xs text-slate-300 font-medium">Modular</span>
              </div>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-indigo-400 rounded" />
                ))}
              </div>
            </div>
          </div>

          {/* Layer 2 - Expandable */}
          <div className="bg-gradient-to-r from-purple-500/30 to-purple-500/10 border border-purple-500/50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">E</div>
                <span className="text-xs text-slate-300 font-medium">Expandable</span>
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-purple-400 rounded" />
                ))}
              </div>
            </div>
          </div>

          {/* Layer 3 - Adaptable */}
          <div className="bg-gradient-to-r from-fuchsia-500/30 to-fuchsia-500/10 border border-fuchsia-500/50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-fuchsia-500 rounded flex items-center justify-center text-white text-xs font-bold">A</div>
                <span className="text-xs text-slate-300 font-medium">Adaptable</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-fuchsia-400 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom features */}
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-violet-500/50">
          <div className="text-xs text-violet-300 font-medium">API Ready</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-purple-500/50">
          <div className="text-xs text-purple-300 font-medium">Cloud Native</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-fuchsia-500/50">
          <div className="text-xs text-fuchsia-300 font-medium">Microservices</div>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-12 h-12 bg-violet-500/20 rounded-full blur-xl" />
    <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
    <div className="absolute top-1/2 right-8 w-10 h-10 bg-fuchsia-500/20 rounded-full blur-xl" />

    <style jsx>{`
      @keyframes ping {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        75%,
        100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }
      .animate-ping {
        animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
    `}</style>
  </div>
);

export const ConversionUXIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
    {/* Background grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-slate-600 rounded"></div>
        ))}
      </div>
    </div>

    {/* Main content */}
    <div className="relative z-10 space-y-6 w-full max-w-sm">
      {/* User journey funnel */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-slate-600/50">
        <div className="space-y-2">
          {/* Stage 1 - Visitors */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg p-2 flex items-center justify-between">
            <span className="text-white text-xs font-medium">Visitors</span>
            <span className="text-white text-xs font-bold">1000</span>
          </div>

          {/* Stage 2 - Engaged */}
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-lg p-2 flex items-center justify-between w-4/5 mx-auto">
            <span className="text-white text-xs font-medium">Engaged</span>
            <span className="text-white text-xs font-bold">750</span>
          </div>

          {/* Stage 3 - Action */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-lg p-2 flex items-center justify-between w-3/5 mx-auto">
            <span className="text-white text-xs font-medium">Action</span>
            <span className="text-white text-xs font-bold">450</span>
          </div>

          {/* Stage 4 - Convert */}
          <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-lg p-2 flex items-center justify-between w-2/5 mx-auto">
            <span className="text-white text-xs font-medium">✓ Convert</span>
            <span className="text-white text-xs font-bold">320</span>
          </div>
        </div>

        <div className="text-xs text-green-400 mt-3 text-center font-bold">32% CVR</div>
      </div>

      {/* Center piece - Target with cursor */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 rounded-2xl p-6 shadow-2xl transform scale-110 relative">
        {/* Click ripple effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-white/30 rounded-full animate-ping" />
        </div>

        {/* Conversion rate badge */}
        <div className="absolute -top-3 -right-3 w-14 h-14 bg-green-400 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-slate-800">
          <span className="text-slate-900 text-xs font-bold">+32%</span>
          <span className="text-slate-900 text-xs">CVR</span>
        </div>

        <div className="text-center">
          <div className="text-4xl">👆</div>
        </div>
      </div>

      {/* Cursor pointer */}
      <div className="absolute top-4 left-6 text-white text-2xl animate-bounce">
        <div className="text-2xl">🎯</div>
        <div className="text-center relative">
          <div className="text-white text-5xl font-bold mb-2"> </div>
          <div className="text-white/90 text-sm font-medium">Conversion</div>
          <div className="text-white/70 text-xs mt-1">Optimized UX</div>
        </div>

        {/* Pulse glow */}
        <div className="absolute inset-0 bg-pink-300/30 rounded-2xl blur-xl animate-pulse" />
      </div>

      {/* UX optimization features */}
      <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
        <div className="space-y-3">
          {/* CTA Placement */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">▶</span>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-300 font-medium">Clear CTAs</div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 flex-1 bg-rose-400 rounded-full" />
                ))}
              </div>
            </div>
            <span className="text-green-400 text-lg">✓</span>
          </div>

          {/* User Flow */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">→</span>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-300 font-medium">Smooth Flow</div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 flex-1 bg-pink-400 rounded-full" />
                ))}
              </div>
            </div>
            <span className="text-green-400 text-lg">✓</span>
          </div>

          {/* A/B Tested */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-fuchsia-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">A/B</span>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-300 font-medium">Data-Driven</div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 flex-1 bg-fuchsia-400 rounded-full" />
                ))}
              </div>
            </div>
            <span className="text-green-400 text-lg">✓</span>
          </div>
        </div>
      </div>

      {/* Bottom benefits */}
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-rose-500/50">
          <div className="text-xs text-rose-300 font-medium">Heat Maps</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-pink-500/50">
          <div className="text-xs text-pink-300 font-medium">Analytics</div>
        </div>
        <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-fuchsia-500/50">
          <div className="text-xs text-fuchsia-300 font-medium">User Testing</div>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-12 h-12 bg-rose-500/20 rounded-full blur-xl" />
    <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl" />
    <div className="absolute top-1/2 left-4 w-10 h-10 bg-fuchsia-500/20 rounded-full blur-xl" />

    <style jsx>{`
      @keyframes ping {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        75%,
        100% {
          transform: scale(1.8);
          opacity: 0;
        }
      }
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      .animate-ping {
        animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
      .animate-bounce {
        animation: bounce 1.5s infinite;
      }
    `}</style>
  </div>
);

export default function page() {
  return (
    <>
      <ConversionUXIllustration />
      <CustomWebDevIllustration />
      <LightningFastIllustration />
      <SEOFriendlyIllustration />
      <ScalableFutureIllustration />
    </>
  );
}
