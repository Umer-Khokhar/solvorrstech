"use client"
import { useState } from "react"

export default function App() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <span className="text-white font-bold text-2xl">SOLVORR TECH</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          We're Building
          <br />
          <span className="text-purple-300">Something Amazing</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
          Our web agency is crafting innovative solutions that will transform your digital presence. Stay tuned for
          something extraordinary.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-4 border border-slate-600 px-3 bg-slate-900/50 backdrop-blur-sm text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 transition-all duration-300 py-3"
            >
              Notify Me
            </button>
          </form>
        </div>

        <p className="text-gray-500 text-sm">Expected launch: Coming Soon</p>
      </main>
    </div>
  )
}
