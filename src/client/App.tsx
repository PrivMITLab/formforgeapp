import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full backdrop-blur-md bg-black/20 rounded-3xl mt-5">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="FormForge Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-indigo-500/20" />
          <span className="font-extrabold text-xl tracking-tight text-white">FormForge</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="/dashboard" className="text-sm font-semibold text-slate-300 hover:text-white transition">Dashboard</a>
          <a href="/docs/index.html" className="text-sm font-semibold text-slate-300 hover:text-white transition">Docs</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16 flex flex-col justify-center items-center text-center">
        <div className="relative mb-6">
          <img src="/logo.svg" alt="Branding" className="w-24 h-24 rounded-3xl shadow-2xl shadow-indigo-500/30 animate-pulse" />
        </div>
        
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-4 inline-block">
          Vite + Pure React 19 + Hono API
        </span>
        
        <h1 className="text-4xl font-black text-white sm:text-6xl tracking-tight leading-tight">
          Form Backend Forged <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">For the Modern Web</span>
        </h1>
        
        <p className="mt-6 text-slate-400 max-w-xl leading-relaxed text-base">
          A high-performance contact form, waitlist, and lead capture backend running natively on Cloudflare Pages Workers.
        </p>

        <div className="mt-8 flex gap-3">
          <a href="/dashboard" className="rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-6 py-3.5 transition-all shadow-lg shadow-indigo-600/30 hover:scale-105">
            Open Dashboard
          </a>
          <a href="/docs/index.html" className="rounded-2xl border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white font-bold text-sm px-6 py-3.5 transition-all">
            Read Docs
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500 max-w-6xl mx-auto w-full">
        &copy; {new Date().getFullYear()} FormForge · Self-Hosted & Open Source.
      </footer>
    </div>
  );
}
