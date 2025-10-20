export const SEOTrafficIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-emerald-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Search bar floating */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center gap-3 bg-white/90 rounded-lg px-4 py-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div className="flex-1">
                            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>

                {/* Analytics chart */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-end gap-2 h-16">
                            <div className="bg-emerald-400 rounded-t w-1/6 h-1/3"></div>
                            <div className="bg-emerald-400 rounded-t w-1/6 h-1/2"></div>
                            <div className="bg-emerald-400 rounded-t w-1/6 h-2/3"></div>
                            <div className="bg-emerald-400 rounded-t w-1/6 h-full"></div>
                            <div className="bg-gradient-to-t from-emerald-400 to-green-300 rounded-t w-1/6 h-full shadow-lg shadow-emerald-500/50"></div>
                            <div className="bg-gradient-to-t from-emerald-400 to-green-300 rounded-t w-1/6 h-5/6 shadow-lg shadow-emerald-500/50"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                            <div className="h-2 bg-green-400 rounded w-1/3"></div>
                        </div>
                    </div>
                </div>

                {/* Center piece - SEO icon */}
                <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">SEO Optimized</div>
                    </div>
                </div>

                {/* Ranking positions */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-yellow-400 text-yellow-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                            <div className="h-2 bg-emerald-400 rounded flex-1"></div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-300 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                            <div className="h-2 bg-teal-400 rounded flex-1 w-4/5"></div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-300 text-orange-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                            <div className="h-2 bg-cyan-400 rounded flex-1 w-3/5"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-green-400 font-bold">+150%</div>
                        <div className="text-xs text-slate-300">Traffic</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-emerald-400 font-bold">Page 1</div>
                        <div className="text-xs text-slate-300">Ranking</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-teal-400 font-bold">Top 3</div>
                        <div className="text-xs text-slate-300">Keywords</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-teal-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-8 w-10 h-10 bg-cyan-500/20 rounded-full blur-xl"></div>
        </div>
    );
};






export const SEOLeadsIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-violet-800 to-purple-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-violet-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Lead funnel */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg h-3 w-full"></div>
                        <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg h-3 w-4/5 mx-auto"></div>
                        <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg h-3 w-3/5 mx-auto"></div>
                        <div className="bg-gradient-to-r from-violet-400 to-violet-500 rounded-lg h-3 w-2/5 mx-auto shadow-lg shadow-violet-500/50"></div>
                    </div>
                </div>

                {/* User avatars flowing in */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-700"></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-700"></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-slate-700"></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 border-2 border-slate-700"></div>
                        </div>
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1">
                            <div className="h-2 bg-violet-400 rounded w-full"></div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Lead magnet icon */}
                <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Qualified Leads</div>
                    </div>
                </div>

                {/* Lead quality indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <div className="h-2 bg-purple-400 rounded flex-1"></div>
                            <div className="text-xs text-green-400 font-bold">98%</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <div className="h-2 bg-violet-400 rounded flex-1 w-5/6"></div>
                            <div className="text-xs text-green-400 font-bold">95%</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <div className="h-2 bg-fuchsia-400 rounded flex-1 w-4/5"></div>
                            <div className="text-xs text-green-400 font-bold">92%</div>
                        </div>
                    </div>
                </div>

                {/* Conversion pipeline */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            <div className="h-1 w-8 bg-violet-400 rounded"></div>
                        </div>
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-8 bg-purple-400 rounded"></div>
                            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <svg className="w-4 h-4 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-8 bg-fuchsia-400 rounded"></div>
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-violet-400 font-bold">24/7</div>
                        <div className="text-xs text-slate-300">Flow</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-purple-400 font-bold">High Intent</div>
                        <div className="text-xs text-slate-300">Quality</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-fuchsia-400 font-bold">Auto</div>
                        <div className="text-xs text-slate-300">Pipeline</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-violet-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-fuchsia-500/20 rounded-full blur-xl"></div>
        </div>
    );
};

export const SEOAuthorityIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-amber-800 to-orange-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-amber-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Trust badges */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-center gap-3">
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Domain Authority Score */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-xs text-slate-300">Domain Authority</div>
                            <div className="text-2xl font-bold text-amber-400">85/100</div>
                        </div>
                        <div className="relative w-16 h-16">
                            <svg className="transform -rotate-90 w-16 h-16">
                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-600" />
                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="176" strokeDashoffset="26" className="text-amber-400" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-amber-400">85</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Shield/Authority icon */}
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Trusted Authority</div>
                    </div>
                </div>

                {/* Backlink quality */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            <div className="h-2 bg-amber-400 rounded flex-1"></div>
                            <span className="text-xs text-amber-400 font-bold">DA 90+</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            <div className="h-2 bg-orange-400 rounded flex-1 w-5/6"></div>
                            <span className="text-xs text-orange-400 font-bold">DA 80+</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            <div className="h-2 bg-yellow-400 rounded flex-1 w-4/5"></div>
                            <span className="text-xs text-yellow-400 font-bold">DA 70+</span>
                        </div>
                    </div>
                </div>

                {/* SSL & Security indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-300">SSL Secure</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-300">Verified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs text-slate-300">Premium</span>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-amber-400 font-bold">DA 85+</div>
                        <div className="text-xs text-slate-300">Authority</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-orange-400 font-bold">500+</div>
                        <div className="text-xs text-slate-300">Backlinks</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-yellow-400 font-bold">Trusted</div>
                        <div className="text-xs text-slate-300">Source</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 left-8 w-10 h-10 bg-yellow-500/20 rounded-full blur-xl"></div>
        </div>
    );
};

export const SEODataDrivenIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-cyan-800 to-blue-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-cyan-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Analytics dashboard */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg p-2 text-center">
                            <div className="text-white text-lg font-bold">247</div>
                            <div className="text-white/70 text-xs">Metrics</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2 text-center">
                            <div className="text-white text-lg font-bold">89%</div>
                            <div className="text-white/70 text-xs">Growth</div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg p-2 text-center">
                            <div className="text-white text-lg font-bold">24/7</div>
                            <div className="text-white/70 text-xs">Track</div>
                        </div>
                    </div>
                </div>

                {/* Data visualization */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <div className="flex-1 space-y-1">
                                <div className="h-1 bg-cyan-400 rounded w-full"></div>
                                <div className="h-1 bg-blue-400 rounded w-4/5"></div>
                                <div className="h-1 bg-indigo-400 rounded w-3/5"></div>
                            </div>
                        </div>
                        <div className="flex items-end gap-1 h-12 justify-center">
                            <div className="bg-cyan-400 rounded-t w-1/6 h-1/2"></div>
                            <div className="bg-blue-400 rounded-t w-1/6 h-2/3"></div>
                            <div className="bg-indigo-400 rounded-t w-1/6 h-3/4"></div>
                            <div className="bg-cyan-400 rounded-t w-1/6 h-5/6"></div>
                            <div className="bg-gradient-to-t from-blue-400 to-cyan-300 rounded-t w-1/6 h-full shadow-lg shadow-cyan-500/50"></div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Target/Strategy icon */}
                <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Data-Driven</div>
                    </div>
                </div>

                {/* Custom strategy indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <div className="flex-1">
                                <div className="h-2 bg-cyan-400 rounded"></div>
                            </div>
                            <span className="text-xs text-cyan-400">Real-time</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="flex-1">
                                <div className="h-2 bg-blue-400 rounded w-5/6"></div>
                            </div>
                            <span className="text-xs text-blue-400">Custom</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <div className="flex-1">
                                <div className="h-2 bg-indigo-400 rounded w-4/5"></div>
                            </div>
                            <span className="text-xs text-indigo-400">Tailored</span>
                        </div>
                    </div>
                </div>

                {/* Target audience segments */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-center gap-3">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-700"></div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                            </div>
                            <div className="text-xs text-slate-300">Multi-channel</div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-cyan-400 font-bold">AI</div>
                        <div className="text-xs text-slate-300">Insights</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-blue-400 font-bold">Custom</div>
                        <div className="text-xs text-slate-300">Reports</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-indigo-400 font-bold">Adaptive</div>
                        <div className="text-xs text-slate-300">Strategy</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-indigo-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOReportingIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-indigo-800 to-blue-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-indigo-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Report document */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="bg-white/95 rounded-lg p-3 space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 rounded flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="h-2 bg-indigo-300 rounded w-3/4"></div>
                                <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-full"></div>
                            <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-1 bg-gray-200 rounded w-4/5"></div>
                        </div>
                    </div>
                </div>

                {/* Performance metrics */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-green-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                            <div className="text-green-400 text-sm font-bold">+285%</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-blue-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <div className="text-blue-400 text-sm font-bold">12.4K</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-purple-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <div className="text-purple-400 text-sm font-bold">8,547</div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 border border-indigo-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-indigo-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="text-indigo-400 text-sm font-bold">94.2%</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Chart/Report icon */}
                <div className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Clear Reports</div>
                    </div>
                </div>

                {/* Real-time tracking */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-slate-300 flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            Live Tracking
                        </span>
                        <span className="text-xs text-green-400 font-bold">Updated 2m ago</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-600 rounded-full h-2">
                                <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            <span className="text-xs text-slate-300 w-10">85%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-600 rounded-full h-2">
                                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{width: '72%'}}></div>
                            </div>
                            <span className="text-xs text-slate-300 w-10">72%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-600 rounded-full h-2">
                                <div className="bg-gradient-to-r from-cyan-400 to-indigo-400 h-2 rounded-full" style={{width: '91%'}}></div>
                            </div>
                            <span className="text-xs text-slate-300 w-10">91%</span>
                        </div>
                    </div>
                </div>

                {/* Transparency indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-around">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-slate-300">Full Visibility</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-slate-300">Real-Time</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-slate-300">Verified</div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-indigo-400 font-bold">Weekly</div>
                        <div className="text-xs text-slate-300">Reports</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-blue-400 font-bold">100%</div>
                        <div className="text-xs text-slate-300">Transparent</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-cyan-400 font-bold">ROI</div>
                        <div className="text-xs text-slate-300">Tracked</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-indigo-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 left-8 w-10 h-10 bg-cyan-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOHolisticIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-rose-800 to-pink-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-rose-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* SEO Component */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.031l-2.261 2.262a1 1 0 101.414 1.414l2.262-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-green-400 font-bold mb-1">SEO</div>
                            <div className="h-2 bg-green-400 rounded w-full"></div>
                        </div>
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* PPC Component */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-blue-400 font-bold mb-1">PPC</div>
                            <div className="h-2 bg-blue-400 rounded w-4/5"></div>
                        </div>
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Center piece - Integration/Network icon */}
                <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Integrated</div>
                    </div>
                </div>

                {/* Social Media Component */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-purple-400 font-bold mb-1">Social</div>
                            <div className="h-2 bg-purple-400 rounded w-5/6"></div>
                        </div>
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Content Component */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-orange-400 font-bold mb-1">Content</div>
                            <div className="h-2 bg-orange-400 rounded w-full"></div>
                        </div>
                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Connection visualization */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">S</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">P</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">S</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">C</span>
                            </div>
                        </div>
                        <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        <div className="text-xs text-pink-400 font-bold">Synergy</div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-rose-400 font-bold">360°</div>
                        <div className="text-xs text-slate-300">Coverage</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-pink-400 font-bold">4-in-1</div>
                        <div className="text-xs text-slate-300">Solution</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-fuchsia-400 font-bold">Unified</div>
                        <div className="text-xs text-slate-300">Strategy</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-rose-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-fuchsia-500/20 rounded-full blur-xl"></div>
        </div>
    );
};



export const SEODecisionsIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-teal-800 to-emerald-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-teal-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Analytics Data Points */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                            <div className="text-xs text-teal-400 font-bold">Live Data</div>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="w-1 bg-teal-400 rounded-full"
                                    style={{height: `${Math.random() * 20 + 8}px`}}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decision Matrix */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-teal-500/20 border border-teal-400/40 rounded-lg p-2">
                            <svg className="w-5 h-5 text-teal-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-center text-teal-300">Verified</div>
                        </div>
                        <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-lg p-2">
                            <svg className="w-5 h-5 text-emerald-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-center text-emerald-300">Tested</div>
                        </div>
                        <div className="bg-cyan-500/20 border border-cyan-400/40 rounded-lg p-2">
                            <svg className="w-5 h-5 text-cyan-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-center text-cyan-300">Tracked</div>
                        </div>
                        <div className="bg-green-500/20 border border-green-400/40 rounded-lg p-2">
                            <svg className="w-5 h-5 text-green-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-center text-green-300">Actioned</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Analytics Brain/Intelligence icon */}
                <div className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Analytics-First</div>
                    </div>
                </div>

                {/* Metrics Dashboard */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-teal-500/20 rounded flex items-center justify-center">
                                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <span className="text-xs text-slate-300">Performance</span>
                            </div>
                            <span className="text-xs text-teal-400 font-bold">+47%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded flex items-center justify-center">
                                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-xs text-slate-300">Engagement</span>
                            </div>
                            <span className="text-xs text-emerald-400 font-bold">+62%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-cyan-500/20 rounded flex items-center justify-center">
                                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-xs text-slate-300">Conversions</span>
                            </div>
                            <span className="text-xs text-cyan-400 font-bold">+38%</span>
                        </div>
                    </div>
                </div>

                {/* Insight Flow */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-teal-400">Data</div>
                        </div>
                        <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </div>
                            <div className="text-xs text-emerald-400">Insight</div>
                        </div>
                        <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-green-400">Action</div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-teal-400 font-bold">100%</div>
                        <div className="text-xs text-slate-300">Backed</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-emerald-400 font-bold">Real-time</div>
                        <div className="text-xs text-slate-300">Insights</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-green-400 font-bold">Smart</div>
                        <div className="text-xs text-slate-300">Moves</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-teal-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 left-8 w-10 h-10 bg-green-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOExpertiseIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
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
                {/* Industry Icons Row 1 */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-4 gap-3">
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Experience Years */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between">
                        <div className="text-center flex-1">
                            <div className="text-3xl font-bold text-blue-400">10+</div>
                            <div className="text-xs text-slate-300 mt-1">Years</div>
                        </div>
                        <div className="w-px h-12 bg-slate-600"></div>
                        <div className="text-center flex-1">
                            <div className="text-3xl font-bold text-purple-400">50+</div>
                            <div className="text-xs text-slate-300 mt-1">Industries</div>
                        </div>
                        <div className="w-px h-12 bg-slate-600"></div>
                        <div className="text-center flex-1">
                            <div className="text-3xl font-bold text-orange-400">500+</div>
                            <div className="text-xs text-slate-300 mt-1">Projects</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Expert/Professional icon */}
                <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-slate-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Expert Team</div>
                    </div>
                </div>

                {/* Industry Icons Row 2 */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-4 gap-3">
                        <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Skill Badges */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-1">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-700 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-700 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-slate-700 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded w-full"></div>
                            </div>
                            <span className="text-xs text-slate-300 font-bold">Certified</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-1 rounded">E-commerce</span>
                            <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-1 rounded">SaaS</span>
                            <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-1 rounded">Healthcare</span>
                            <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-1 rounded">Finance</span>
                            <span className="text-xs bg-slate-600/50 text-slate-300 px-2 py-1 rounded">Real Estate</span>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-blue-400 font-bold">Expert</div>
                        <div className="text-xs text-slate-300">Level</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-purple-400 font-bold">Multi</div>
                        <div className="text-xs text-slate-300">Industry</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-orange-400 font-bold">Proven</div>
                        <div className="text-xs text-slate-300">Results</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-orange-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOCustomIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-fuchsia-800 to-purple-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-fuchsia-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Puzzle pieces showing customization */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg h-12 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg h-12 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-lg h-12 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Tailored approach indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-pink-400 font-bold mb-1">Your Goals</div>
                                <div className="h-1 bg-pink-400 rounded w-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-purple-400 font-bold mb-1">Your Timeline</div>
                                <div className="h-1 bg-purple-400 rounded w-5/6"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-fuchsia-400 font-bold mb-1">Your Budget</div>
                                <div className="h-1 bg-fuchsia-400 rounded w-4/5"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Customization/Tools icon */}
                <div className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Fully Custom</div>
                    </div>
                </div>

                {/* Customization options */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-pink-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-pink-300 font-bold">Strategy</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-purple-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-purple-300 font-bold">Approach</div>
                        </div>
                        <div className="bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 border border-fuchsia-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-fuchsia-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <div className="text-xs text-fuchsia-300 font-bold">Metrics</div>
                        </div>
                        <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/20 border border-violet-400/30 rounded-lg p-3 text-center">
                            <svg className="w-6 h-6 text-violet-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-violet-300 font-bold">Support</div>
                        </div>
                    </div>
                </div>

                {/* Flexible components */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded"></div>
                                <div className="w-12 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded"></div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-12 h-8 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded"></div>
                                <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-violet-600 rounded"></div>
                            </div>
                        </div>
                        <svg className="w-8 h-8 text-pink-400 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-2 text-xs text-pink-400 font-bold">Modular<br/>Design</div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-fuchsia-400 font-bold">100%</div>
                        <div className="text-xs text-slate-300">Tailored</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-purple-400 font-bold">Unique</div>
                        <div className="text-xs text-slate-300">Solutions</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-pink-400 font-bold">Your</div>
                        <div className="text-xs text-slate-300">Way</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-fuchsia-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-8 w-10 h-10 bg-pink-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOScalableIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-lime-800 to-green-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-lime-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Growth stages visualization */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-end justify-center gap-2 h-16">
                        <div className="flex flex-col items-center gap-1">
                            <div className="bg-gradient-to-t from-lime-400 to-lime-500 rounded-t w-8 h-6"></div>
                            <div className="text-xs text-lime-400">Start</div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="bg-gradient-to-t from-lime-400 to-lime-500 rounded-t w-8 h-10"></div>
                            <div className="text-xs text-lime-400">Grow</div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="bg-gradient-to-t from-green-400 to-lime-400 rounded-t w-8 h-14 shadow-lg shadow-lime-500/50"></div>
                            <div className="text-xs text-green-400">Scale</div>
                        </div>
                    </div>
                </div>

                {/* Expansion indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-lime-400 to-lime-500 rounded-full" style={{width: '40%'}}></div>
                            </div>
                            <span className="text-xs text-lime-400 font-bold">Phase 1</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-lime-400 to-green-400 rounded-full" style={{width: '70%'}}></div>
                            </div>
                            <span className="text-xs text-green-400 font-bold">Phase 2</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center border-2 border-lime-400">
                                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" style={{width: '25%'}}></div>
                            </div>
                            <span className="text-xs text-slate-400 font-bold">Phase 3</span>
                        </div>
                    </div>
                </div>

                {/* Center piece - Scale/Expansion icon */}
                <div className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Scale Ready</div>
                    </div>
                </div>

                {/* Adaptive features */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-lime-500/20 border border-lime-400/30 rounded-lg p-2">
                            <div className="flex items-center gap-2 mb-1">
                                <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-lime-400 font-bold">Flexible</span>
                            </div>
                            <div className="space-y-1">
                                <div className="h-1 bg-lime-400/40 rounded w-full"></div>
                                <div className="h-1 bg-lime-400/40 rounded w-4/5"></div>
                            </div>
                        </div>
                        <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-2">
                            <div className="flex items-center gap-2 mb-1">
                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <span className="text-xs text-green-400 font-bold">Modular</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                                <div className="h-3 bg-green-400/40 rounded"></div>
                                <div className="h-3 bg-green-400/40 rounded"></div>
                                <div className="h-3 bg-green-400/40 rounded"></div>
                            </div>
                        </div>
                        <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-2">
                            <div className="flex items-center gap-2 mb-1">
                                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-emerald-400 font-bold">Fast</span>
                            </div>
                            <div className="flex items-end gap-1 h-6">
                                <div className="bg-emerald-400/40 rounded-t w-1/4 h-1/2"></div>
                                <div className="bg-emerald-400/40 rounded-t w-1/4 h-3/4"></div>
                                <div className="bg-emerald-400/40 rounded-t w-1/4 h-full"></div>
                            </div>
                        </div>
                        <div className="bg-teal-500/20 border border-teal-400/30 rounded-lg p-2">
                            <div className="flex items-center gap-2 mb-1">
                                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-teal-400 font-bold">Dynamic</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-teal-400/40 rounded-full"></div>
                                <div className="w-2 h-2 bg-teal-400/40 rounded-full"></div>
                                <div className="w-2 h-2 bg-teal-400/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Growth trajectory */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-300">Growth Capacity</span>
                        <span className="text-xs text-lime-400 font-bold">Unlimited</span>
                    </div>
                    <div className="relative h-12">
                        <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                            <path 
                                d="M 0,40 Q 50,35 100,20 T 200,5" 
                                fill="none" 
                                stroke="url(#gradient)" 
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a3e635" />
                                    <stop offset="50%" stopColor="#22c55e" />
                                    <stop offset="100%" stopColor="#10b981" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute top-1 right-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-lime-400 font-bold">∞</div>
                        <div className="text-xs text-slate-300">Potential</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-green-400 font-bold">Adaptive</div>
                        <div className="text-xs text-slate-300">System</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-emerald-400 font-bold">Future</div>
                        <div className="text-xs text-slate-300">Ready</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-lime-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-emerald-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOPerformanceIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-red-800 to-orange-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-red-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* PageSpeed Score */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-xs text-slate-300">PageSpeed Score</div>
                            <div className="text-4xl font-bold text-green-400">95</div>
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-green-400 font-bold">+42 pts</span>
                            </div>
                        </div>
                        <div className="relative w-20 h-20">
                            <svg className="transform -rotate-90 w-20 h-20">
                                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="7" fill="transparent" className="text-slate-600" />
                                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="7" fill="transparent" strokeDasharray="226" strokeDashoffset="23" className="text-green-400" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-400">95%</div>
                        </div>
                    </div>
                </div>

                {/* Performance metrics */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-green-400 font-bold">0.8s</div>
                            <div className="text-xs text-slate-300">Load Time</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-orange-400 font-bold">0.2s</div>
                            <div className="text-xs text-slate-300">FCP</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-red-400 font-bold">1.2s</div>
                            <div className="text-xs text-slate-300">LCP</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Speed/Rocket icon */}
                <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Lightning Fast</div>
                    </div>
                </div>

                {/* Bounce rate reduction */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-300">Bounce Rate</span>
                        <span className="text-xs text-green-400 font-bold">-40%</span>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-slate-400">Before</span>
                                <span className="text-xs text-red-400">68%</span>
                            </div>
                            <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full" style={{width: '68%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-slate-400">After</span>
                                <span className="text-xs text-green-400">28%</span>
                            </div>
                            <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{width: '28%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optimization indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-green-400 font-bold">Optimized</div>
                                <div className="text-xs text-slate-300">Images</div>
                            </div>
                        </div>
                        <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-6 h-6 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-orange-400 font-bold">Minified</div>
                                <div className="text-xs text-slate-300">Code</div>
                            </div>
                        </div>
                        <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-red-400 font-bold">Cached</div>
                                <div className="text-xs text-slate-300">Assets</div>
                            </div>
                        </div>
                        <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-yellow-400 font-bold">Lazy</div>
                                <div className="text-xs text-slate-300">Loading</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-red-400 font-bold">90+</div>
                        <div className="text-xs text-slate-300">Score</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-orange-400 font-bold">-40%</div>
                        <div className="text-xs text-slate-300">Bounce</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-yellow-400 font-bold">Ultra</div>
                        <div className="text-xs text-slate-300">Fast</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-red-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-8 w-10 h-10 bg-yellow-500/20 rounded-full blur-xl"></div>
        </div>
    );
};



export const SEOOptimizedIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-sky-800 to-blue-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-sky-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* SEO Tool Integration */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-3 flex-1">
                            <div className="text-center">
                                <svg className="w-8 h-8 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div className="text-xs text-white font-bold">Yoast</div>
                            </div>
                        </div>
                        <div className="text-slate-400">+</div>
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-3 flex-1">
                            <div className="text-center">
                                <svg className="w-8 h-8 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <div className="text-xs text-white font-bold">Rank Math</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Score */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="text-xs text-slate-300 mb-2">SEO Score</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{width: '95%'}}></div>
                                    </div>
                                    <span className="text-xs text-green-400 font-bold w-8">95</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center piece - SEO/Search icon */}
                <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">SEO Ready</div>
                    </div>
                </div>

                {/* Ranking indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">1</span>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-yellow-400 font-bold mb-1">Top Ranking</div>
                                <div className="h-1 bg-yellow-400 rounded w-full"></div>
                            </div>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-blue-400 font-bold mb-1">Organic Traffic</div>
                                <div className="h-1 bg-blue-400 rounded w-5/6"></div>
                            </div>
                            <span className="text-xs text-blue-400 font-bold">+156%</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-sky-400 font-bold mb-1">Keywords</div>
                                <div className="h-1 bg-sky-400 rounded w-4/5"></div>
                            </div>
                            <span className="text-xs text-sky-400 font-bold">247</span>
                        </div>
                    </div>
                </div>

                {/* SEO Features */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-sky-300">Meta Tags</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-blue-300">Schema</span>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-indigo-300">Sitemaps</span>
                        </div>
                        <div className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-cyan-300">Readability</span>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-sky-400 font-bold">Built-in</div>
                        <div className="text-xs text-slate-300">Tools</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-blue-400 font-bold">Page 1</div>
                        <div className="text-xs text-slate-300">Rankings</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-indigo-400 font-bold">Organic</div>
                        <div className="text-xs text-slate-300">Growth</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-sky-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-indigo-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOScalableSolutionIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-purple-800 to-indigo-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-purple-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Visitor scale progression */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-end justify-around gap-2 h-20">
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <div className="bg-gradient-to-t from-purple-400 to-purple-500 rounded-t w-full h-8"></div>
                            <div className="text-xs text-purple-400 text-center">1K</div>
                        </div>
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <div className="bg-gradient-to-t from-purple-400 to-violet-400 rounded-t w-full h-12"></div>
                            <div className="text-xs text-violet-400 text-center">10K</div>
                        </div>
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <div className="bg-gradient-to-t from-violet-400 to-indigo-400 rounded-t w-full h-16"></div>
                            <div className="text-xs text-indigo-400 text-center">100K</div>
                        </div>
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <div className="bg-gradient-to-t from-indigo-400 to-blue-400 rounded-t w-full h-20 shadow-lg shadow-blue-500/50"></div>
                            <div className="text-xs text-blue-400 font-bold text-center">1M</div>
                        </div>
                    </div>
                </div>

                {/* Growth capacity indicators */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-purple-400 font-bold">Infrastructure</div>
                                    <div className="text-xs text-slate-400">Auto-scales</div>
                                </div>
                            </div>
                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-indigo-400 font-bold">Performance</div>
                                    <div className="text-xs text-slate-400">Optimized</div>
                                </div>
                            </div>
                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-blue-400 font-bold">Security</div>
                                <div className="text-xs text-slate-400">Enterprise-grade</div>
                            </div>
                        </div>
                        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    </div>
                </div>

                {/* Center piece - Rocket/Growth icon */}
                <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Future-Proof</div>
                    </div>
                </div>

                {/* Visitor milestone tracker */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full" style={{width: '100%'}}></div>
                            </div>
                            <span className="text-xs text-purple-400 font-bold">1K</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-violet-400 to-violet-500 rounded-full" style={{width: '100%'}}></div>
                            </div>
                            <span className="text-xs text-violet-400 font-bold">10K</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            <span className="text-xs text-indigo-400 font-bold">100K</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center border-2 border-blue-400">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" style={{width: '45%'}}></div>
                            </div>
                            <span className="text-xs text-blue-400 font-bold">1M</span>
                        </div>
                    </div>
                </div>

                {/* Scalability features */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-around">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-slate-300">Fast</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-slate-300">Flexible</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-slate-300">Scalable</div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-purple-400 font-bold">1K-1M</div>
                        <div className="text-xs text-slate-300">Visitors</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-indigo-400 font-bold">No Limits</div>
                        <div className="text-xs text-slate-300">Growth</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-blue-400 font-bold">Ready</div>
                        <div className="text-xs text-slate-300">Always</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-8 w-10 h-10 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOSecureIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-green-800 to-teal-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-green-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* HTTPS Security Badge */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="text-sm text-green-400 font-bold">HTTPS</div>
                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-xs text-slate-300">SSL/TLS Encrypted</div>
                            <div className="h-1 bg-green-400 rounded w-full mt-2"></div>
                        </div>
                    </div>
                </div>

                {/* GDPR Compliance */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-blue-400 font-bold">GDPR Compliant</div>
                                <div className="text-xs text-slate-400">Data Protection</div>
                            </div>
                            <div className="text-xs text-green-400 font-bold px-2 py-1 bg-green-400/20 rounded">✓</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-teal-400 font-bold">Cookie Consent</div>
                                <div className="text-xs text-slate-400">User Privacy</div>
                            </div>
                            <div className="text-xs text-green-400 font-bold px-2 py-1 bg-green-400/20 rounded">✓</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Shield/Security icon */}
                <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Protected</div>
                    </div>
                </div>

                {/* Security patches status */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-300">Security Updates</span>
                        <span className="text-xs text-green-400 font-bold flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            Active
                        </span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="flex-1 text-xs text-slate-300">Regular Patches</div>
                            <div className="text-xs text-green-400">Daily</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="flex-1 text-xs text-slate-300">Malware Scan</div>
                            <div className="text-xs text-green-400">24/7</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="flex-1 text-xs text-slate-300">Firewall</div>
                            <div className="text-xs text-green-400">Active</div>
                        </div>
                    </div>
                </div>

                {/* Security features grid */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-green-400 font-bold">SSL</div>
                                <div className="text-xs text-slate-300">256-bit</div>
                            </div>
                        </div>
                        <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-emerald-400 font-bold">Backup</div>
                                <div className="text-xs text-slate-300">Daily</div>
                            </div>
                        </div>
                        <div className="bg-teal-500/20 border border-teal-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-teal-400 font-bold">2FA</div>
                                <div className="text-xs text-slate-300">Enabled</div>
                            </div>
                        </div>
                        <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-cyan-400 font-bold">Monitor</div>
                                <div className="text-xs text-slate-300">Real-time</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-green-400 font-bold">100%</div>
                        <div className="text-xs text-slate-300">Secure</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-emerald-400 font-bold">GDPR</div>
                        <div className="text-xs text-slate-300">Ready</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-teal-400 font-bold">Auto</div>
                        <div className="text-xs text-slate-300">Updates</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-teal-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOSupportIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-yellow-800 to-amber-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-yellow-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* 24/7 Availability Badge */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-2xl text-yellow-400 font-bold">24/7</div>
                                <div className="text-xs text-slate-300">Always Available</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400 font-bold">Online</span>
                        </div>
                    </div>
                </div>

                {/* Communication Channels */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-3 text-center">
                            <svg className="w-8 h-8 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                            <div className="text-xs text-white font-bold">Slack</div>
                            <div className="text-xs text-purple-200">Instant</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-3 text-center">
                            <svg className="w-8 h-8 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <div className="text-xs text-white font-bold">Email</div>
                            <div className="text-xs text-blue-200">Fast</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Support/Headset icon */}
                <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">We're Here</div>
                    </div>
                </div>

                {/* Response Time Tracker */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-slate-300">Response Time</span>
                        <span className="text-xs text-yellow-400 font-bold">≤ 1 Hour</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" style={{width: '95%'}}></div>
                            </div>
                            <span className="text-xs text-yellow-400">45 min</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <div className="bg-yellow-500/20 border border-yellow-400/30 rounded p-2 text-center">
                                <div className="text-xs text-yellow-400 font-bold">Avg</div>
                                <div className="text-xs text-slate-300">12 min</div>
                            </div>
                            <div className="bg-amber-500/20 border border-amber-400/30 rounded p-2 text-center">
                                <div className="text-xs text-amber-400 font-bold">Peak</div>
                                <div className="text-xs text-slate-300">45 min</div>
                            </div>
                            <div className="bg-orange-500/20 border border-orange-400/30 rounded p-2 text-center">
                                <div className="text-xs text-orange-400 font-bold">Best</div>
                                <div className="text-xs text-slate-300">3 min</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Team Members */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-slate-300">Support Team</span>
                        <span className="text-xs text-green-400 flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            8 Active
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">J</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">S</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">M</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 border-2 border-slate-700 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">+5</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-slate-300">Expert Support</div>
                            <div className="text-xs text-yellow-400">Ready to Help</div>
                        </div>
                    </div>
                </div>

                {/* Support Features */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-yellow-300">Priority</span>
                        </div>
                        <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-amber-300">Screen Share</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-orange-300">Video Calls</span>
                        </div>
                        <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-lg p-2">
                            <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-red-300">Emergency</span>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-yellow-400 font-bold">24/7</div>
                        <div className="text-xs text-slate-300">Available</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-amber-400 font-bold">1 Hour</div>
                        <div className="text-xs text-slate-300">Response</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-orange-400 font-bold">Expert</div>
                        <div className="text-xs text-slate-300">Team</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-amber-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-8 w-10 h-10 bg-orange-500/20 rounded-full blur-xl"></div>
        </div>
    );
};


export const SEOConnectivityIllustration = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-blue-800 to-cyan-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-blue-600 rounded"></div>
                    ))}
                </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-sm">
                {/* Connected Applications */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-4 gap-2">
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg p-2 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Data Exchange Flow */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-1 shadow-xl border border-slate-600/50">
                    <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-1 mb-1">
                                    <div className="h-1 w-8 bg-blue-400 rounded"></div>
                                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <div className="h-1 w-8 bg-cyan-400 rounded"></div>
                                </div>
                                <div className="text-xs text-slate-300">Real-time Sync</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs text-green-400 font-bold">Seamless Data Flow</div>
                        </div>
                    </div>
                </div>

                {/* Center piece - Network/Connection icon */}
                <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="text-white/90 text-sm font-medium">Connected</div>
                    </div>
                </div>

                {/* Integration Partners */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-slate-300">Active Integrations</span>
                        <span className="text-xs text-cyan-400 font-bold">24+</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-1">
                                <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-700"></div>
                                <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-slate-700"></div>
                                <div className="w-6 h-6 rounded bg-gradient-to-br from-sky-400 to-sky-600 border-2 border-slate-700"></div>
                                <div className="w-6 h-6 rounded bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-700"></div>
                            </div>
                            <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            <span className="text-xs text-cyan-400">85%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>APIs Connected</span>
                            <span className="text-green-400">✓ All Systems Go</span>
                        </div>
                    </div>
                </div>

                {/* Workflow Efficiency */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-300">Workflow Efficiency</span>
                            <span className="text-xs text-cyan-400 font-bold">+89%</span>
                        </div>
                        <div className="flex items-end justify-center gap-1 h-12">
                            <div className="bg-blue-400 rounded-t w-1/6 h-1/3"></div>
                            <div className="bg-cyan-400 rounded-t w-1/6 h-1/2"></div>
                            <div className="bg-sky-400 rounded-t w-1/6 h-2/3"></div>
                            <div className="bg-teal-400 rounded-t w-1/6 h-5/6"></div>
                            <div className="bg-gradient-to-t from-cyan-400 to-blue-300 rounded-t w-1/6 h-full shadow-lg shadow-cyan-500/50"></div>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                            <span className="text-green-400">Optimized</span>
                        </div>
                    </div>
                </div>

                {/* Connection Features */}
                <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-slate-600/50">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-blue-400 font-bold">REST API</div>
                                <div className="text-xs text-slate-300">Ready</div>
                            </div>
                        </div>
                        <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-cyan-400 font-bold">Webhooks</div>
                                <div className="text-xs text-slate-300">Active</div>
                            </div>
                        </div>
                        <div className="bg-sky-500/20 border border-sky-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-sky-400 font-bold">OAuth</div>
                                <div className="text-xs text-slate-300">Secure</div>
                            </div>
                        </div>
                        <div className="bg-teal-500/20 border border-teal-400/30 rounded-lg p-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-xs text-teal-400 font-bold">Sync</div>
                                <div className="text-xs text-slate-300">Real-time</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="flex gap-3 justify-center">
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-blue-400 font-bold">24+</div>
                        <div className="text-xs text-slate-300">Tools</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-cyan-400 font-bold">100%</div>
                        <div className="text-xs text-slate-300">Uptime</div>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                        <div className="text-xs text-teal-400 font-bold">Instant</div>
                        <div className="text-xs text-slate-300">Sync</div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-8 w-10 h-10 bg-teal-500/20 rounded-full blur-xl"></div>
        </div>
    );
};








export const SecurityReliabilityIllustration = () => (
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
            {/* Security layers floating */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-emerald-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Authentication</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-lg">🔐</div>
                        <div className="h-2 bg-emerald-400 rounded flex-1"></div>
                        <div className="text-xs text-emerald-400 font-bold">OAuth 2.0</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-lg">🔑</div>
                        <div className="h-2 bg-teal-400 rounded flex-1"></div>
                        <div className="text-xs text-teal-400 font-bold">API Keys</div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-blue-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Encryption</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-lg">🛡️</div>
                        <div className="h-2 bg-blue-400 rounded flex-1"></div>
                        <div className="text-xs text-blue-400 font-bold">TLS 1.3</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-lg">🔒</div>
                        <div className="h-2 bg-cyan-400 rounded flex-1"></div>
                        <div className="text-xs text-cyan-400 font-bold">AES-256</div>
                    </div>
                </div>
            </div>

            {/* Center piece - Shield icon */}
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-5xl mb-2">🛡️</div>
                    <div className="text-white text-2xl font-bold mb-1">Secure</div>
                    <div className="text-white/90 text-sm font-medium">Enterprise Grade</div>
                </div>
            </div>

            {/* Access control */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-purple-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Access Control</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-lg">👥</div>
                        <div className="h-2 bg-purple-400 rounded flex-1"></div>
                        <div className="text-xs text-purple-400 font-bold">RBAC</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-lg">✅</div>
                        <div className="h-2 bg-pink-400 rounded flex-1"></div>
                        <div className="text-xs text-pink-400 font-bold">Verified</div>
                    </div>
                </div>
            </div>

            {/* Bottom elements - Security badges */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-emerald-400 font-semibold">🔐 Auth</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-blue-400 font-semibold">🔒 Encrypted</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">✅ Controlled</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - security nodes */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-teal-500 rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-cyan-500 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-pink-500 rounded-full"></div>
        
        {/* Security barrier lines */}
        <div className="absolute top-10 left-10 w-20 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -rotate-45"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
    </div>
);


export const UserExperienceIllustration = () => (
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
            {/* Device platforms floating */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-blue-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Mobile</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl">📱</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-blue-400 rounded w-full"></div>
                            <div className="h-2 bg-cyan-400 rounded w-3/4"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-400 font-bold">iOS & Android</span>
                        <span className="text-xs text-green-400">✓ Synced</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-3 shadow-xl border border-purple-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Desktop</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl">💻</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-purple-400 rounded w-full"></div>
                            <div className="h-2 bg-pink-400 rounded w-4/5"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-purple-400 font-bold">Web & Desktop</span>
                        <span className="text-xs text-green-400">✓ Synced</span>
                    </div>
                </div>
            </div>

            {/* Center piece - User experience icon */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-5xl mb-2">✨</div>
                    <div className="text-white text-2xl font-bold mb-1">UX</div>
                    <div className="text-white/90 text-sm font-medium">Seamless Experience</div>
                </div>
            </div>

            {/* Real-time sync indicator */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-emerald-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="text-xs text-slate-400 font-mono">Real-time Sync</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-lg">⚡</div>
                        <div className="flex-1">
                            <div className="h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded animate-pulse"></div>
                        </div>
                        <div className="text-xs text-emerald-400 font-bold">Live</div>
                    </div>
                    <div className="flex items-center gap-3 justify-between">
                        <span className="text-xs text-teal-400">📱 ↔️ 💻</span>
                        <span className="text-xs text-emerald-400 font-bold">Instant Updates</span>
                    </div>
                </div>
            </div>

            {/* Tablet device */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-3 transform rotate-1 shadow-xl border border-cyan-600/50 mr-8">
                <div className="flex items-center gap-2">
                    <div className="text-xl">📲</div>
                    <div className="flex-1">
                        <div className="h-1.5 bg-cyan-400 rounded w-full mb-1"></div>
                        <div className="h-1.5 bg-blue-400 rounded w-2/3"></div>
                    </div>
                    <span className="text-xs text-cyan-400 font-bold">Tablet</span>
                </div>
            </div>

            {/* Bottom elements - Experience features */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-blue-400 font-semibold">⚡ Real-time</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">🔄 Consistent</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-pink-400 font-semibold">📱 Cross-platform</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - connection nodes representing sync */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-cyan-500 rounded-full"></div>
        
        {/* Sync connection lines */}
        <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-transparent rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-cyan-500/30 -rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-0.5 bg-gradient-to-r from-pink-500/30 to-transparent rotate-12"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
    </div>
);



export const CustomBuiltIllustration = () => (
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
            {/* Code blocks representing custom development */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-indigo-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xs text-indigo-400 font-mono">class</div>
                        <div className="h-2 bg-indigo-400 rounded w-2/3"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xs text-purple-400 font-mono">func</div>
                        <div className="h-2 bg-purple-400 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xs text-pink-400 font-mono">API</div>
                        <div className="h-2 bg-pink-400 rounded w-3/4"></div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-cyan-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xs text-cyan-400 font-mono">def</div>
                        <div className="h-2 bg-cyan-400 rounded w-3/4"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xs text-teal-400 font-mono">route</div>
                        <div className="h-2 bg-teal-400 rounded w-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xs text-emerald-400 font-mono">init</div>
                        <div className="h-2 bg-emerald-400 rounded w-1/2"></div>
                    </div>
                </div>
            </div>

            {/* Center piece - Custom code tag */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-4xl font-bold mb-2">{'</>'}</div>
                    <div className="text-white text-xl font-bold mb-1">Custom Built</div>
                    <div className="text-white/90 text-sm font-medium">Tailored Solutions</div>
                </div>
            </div>

            {/* Workflow integration card */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-blue-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Workflow Integration</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-lg">🔧</div>
                        <div className="h-2 bg-blue-400 rounded flex-1"></div>
                        <div className="text-xs text-blue-400 font-bold">Aligned</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-lg">⚙️</div>
                        <div className="h-2 bg-cyan-400 rounded flex-1"></div>
                        <div className="text-xs text-cyan-400 font-bold">Optimized</div>
                    </div>
                </div>
            </div>

            {/* Tech stack compatibility */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-3 transform rotate-1 shadow-xl border border-purple-600/50 mr-8">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Tech Stack</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-xs">⚛️</div>
                        <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center text-xs">🐍</div>
                        <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center text-xs">📗</div>
                    </div>
                    <span className="text-xs text-purple-400 font-bold ml-auto">Compatible</span>
                </div>
            </div>

            {/* Bottom elements - Custom features */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-indigo-400 font-semibold">🎯 Tailored</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">🔧 Flexible</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-pink-400 font-semibold">✨ Unique</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - code nodes */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-teal-500 rounded-full"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-blue-500 rounded-full"></div>
        
        {/* Code bracket decorations */}
        <div className="absolute top-16 left-6 text-indigo-500/20 text-4xl font-bold">{`{`}</div>
        <div className="absolute bottom-16 right-6 text-purple-500/20 text-4xl font-bold">{`}`}</div>
        
        {/* Connection lines representing custom integration */}
        <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-transparent rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-blue-500/30 -rotate-45"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
    </div>
);



export const UnifiedManagementIllustration = () => (
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
            {/* Content Management panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-blue-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Website Content</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">📄</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-blue-400 rounded w-full"></div>
                            <div className="h-2 bg-cyan-400 rounded w-3/4"></div>
                        </div>
                        <div className="text-xs text-green-400 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-blue-400 font-bold">Pages: 247</span>
                        <span className="text-xs text-slate-400">Managed</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-3 shadow-xl border border-purple-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Products</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">📦</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-purple-400 rounded w-4/5"></div>
                            <div className="h-2 bg-pink-400 rounded w-full"></div>
                        </div>
                        <div className="text-xs text-green-400 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-purple-400 font-bold">SKUs: 1.2K</span>
                        <span className="text-xs text-slate-400">Tracked</span>
                    </div>
                </div>
            </div>

            {/* Center piece - Dashboard icon */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-5xl mb-2">📊</div>
                    <div className="text-white text-xl font-bold mb-1">Dashboard</div>
                    <div className="text-white/90 text-sm font-medium">Unified Control</div>
                </div>
            </div>

            {/* Customer Data panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-emerald-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Customer Data</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">👥</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-emerald-400 rounded w-full"></div>
                            <div className="h-2 bg-teal-400 rounded w-2/3"></div>
                        </div>
                        <div className="text-xs text-green-400 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-emerald-400 font-bold">Users: 15K</span>
                        <span className="text-xs text-slate-400">Secured</span>
                    </div>
                </div>
            </div>

            {/* Efficiency metrics */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-3 transform rotate-1 shadow-xl border border-orange-600/50 mr-8">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <div className="text-xs text-slate-400 font-mono">Efficiency</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                            <div className="text-lg">⏱️</div>
                            <span className="text-xs text-orange-400 font-bold">-65%</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">📈</div>
                            <span className="text-xs text-green-400 font-bold">+40%</span>
                        </div>
                    </div>
                    <span className="text-xs text-orange-400 font-bold">Time Saved</span>
                </div>
            </div>

            {/* Bottom elements - Management features */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-blue-400 font-semibold">📄 Content</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">📦 Products</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-emerald-400 font-semibold">👥 Customers</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - data flow nodes */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-cyan-500 rounded-full"></div>
        
        {/* Data flow lines converging to center */}
        <div className="absolute top-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rotate-45"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-0.5 bg-gradient-to-l from-purple-500/40 to-pink-500/40 -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-0.5 bg-gradient-to-l from-orange-500/40 to-pink-500/40 rotate-45"></div>
        
        {/* Dashboard window decoration */}
        <div className="absolute top-12 left-8 text-blue-500/10 text-2xl">▢</div>
        <div className="absolute bottom-12 right-8 text-purple-500/10 text-2xl">▢</div>
        <div className="absolute top-1/3 right-12 text-emerald-500/10 text-2xl">▢</div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
    </div>
);



export const CustomizableSolutionsIllustration = () => (
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
            {/* CMS Customization panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-blue-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-slate-400 font-mono">CMS Platform</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">🎨</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-blue-400 rounded w-full"></div>
                            <div className="h-2 bg-cyan-400 rounded w-3/4"></div>
                            <div className="h-2 bg-sky-400 rounded w-5/6"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-blue-400 font-bold">Themes</span>
                        <span className="text-xs text-cyan-400">Layouts</span>
                        <span className="text-xs text-sky-400">Widgets</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-purple-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">eCommerce</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">🛒</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-purple-400 rounded w-5/6"></div>
                            <div className="h-2 bg-pink-400 rounded w-full"></div>
                            <div className="h-2 bg-fuchsia-400 rounded w-2/3"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-purple-400 font-bold">Checkout</span>
                        <span className="text-xs text-pink-400">Payment</span>
                        <span className="text-xs text-fuchsia-400">Cart</span>
                    </div>
                </div>
            </div>

            {/* Center piece - Customization icon */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-5xl mb-2">⚙️</div>
                    <div className="text-white text-xl font-bold mb-1">Customize</div>
                    <div className="text-white/90 text-sm font-medium">Full Control</div>
                </div>
            </div>

            {/* Flexibility & Scalability panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-emerald-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Flexibility</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">🔧</div>
                        <div className="flex-1">
                            <div className="h-2 bg-emerald-400 rounded w-full"></div>
                        </div>
                        <div className="text-xs text-emerald-400 font-bold">Adaptable</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xl">📈</div>
                        <div className="flex-1">
                            <div className="h-2 bg-teal-400 rounded w-full"></div>
                        </div>
                        <div className="text-xs text-teal-400 font-bold">Scalable</div>
                    </div>
                </div>
            </div>

            {/* Brand customization */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-3 transform rotate-1 shadow-xl border border-orange-600/50 mr-8">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Brand Goals</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded"></div>
                    </div>
                    <span className="text-xs text-orange-400 font-bold">Tailored</span>
                </div>
            </div>

            {/* Bottom elements - Customization features */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-indigo-400 font-semibold">🎨 Flexible</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">📈 Scalable</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-pink-400 font-semibold">⚙️ Control</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - customization nodes */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-500 rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-pink-500 rounded-full"></div>
        
        {/* Customization sliders decoration */}
        <div className="absolute top-16 left-6 w-12 h-0.5 bg-blue-500/20 rounded-full"></div>
        <div className="absolute top-20 left-8 w-8 h-0.5 bg-purple-500/20 rounded-full"></div>
        <div className="absolute bottom-16 right-6 w-10 h-0.5 bg-emerald-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-8 w-14 h-0.5 bg-pink-500/20 rounded-full"></div>
        
        {/* Setting gears decoration */}
        <div className="absolute top-1/4 left-8 text-indigo-500/10 text-3xl">⚙️</div>
        <div className="absolute bottom-1/4 right-8 text-purple-500/10 text-3xl">⚙️</div>
        <div className="absolute top-1/3 right-12 text-pink-500/10 text-2xl">🎨</div>
        
        {/* Connection lines representing customization flow */}
        <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-transparent rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-pink-500/30 -rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-0.5 bg-gradient-to-l from-emerald-500/30 to-transparent -rotate-12"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
    </div>
);



export const PerformanceSecurityIllustration = () => (
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
            {/* Performance Speed panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-blue-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="text-xs text-slate-400 font-mono">Site Performance</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">⚡</div>
                        <div className="flex-1">
                            <div className="relative h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-[98%]"></div>
                            </div>
                        </div>
                        <div className="text-xs text-cyan-400 font-bold">Fast</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-blue-400 font-bold">Load: 0.8s</span>
                        <span className="text-xs text-cyan-400">Score: 98/100</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-3 shadow-xl border border-emerald-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Security Shield</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">🛡️</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-emerald-400 rounded w-full"></div>
                            <div className="h-2 bg-teal-400 rounded w-5/6"></div>
                        </div>
                        <div className="text-xs text-emerald-400 font-bold">SSL</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-emerald-400 font-bold">Encrypted</span>
                        <span className="text-xs text-teal-400">Protected</span>
                    </div>
                </div>
            </div>

            {/* Center piece - Performance & Security icon */}
            <div className="bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-4xl mb-2">
                        <span>⚡</span>
                        <span>🛡️</span>
                    </div>
                    <div className="text-white text-xl font-bold mb-1">Optimized</div>
                    <div className="text-white/90 text-sm font-medium">Fast & Secure</div>
                </div>
            </div>

            {/* SEO Optimization panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-purple-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">SEO Optimized</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">🔍</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-purple-400 rounded w-full"></div>
                            <div className="h-2 bg-pink-400 rounded w-4/5"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-purple-400 font-bold">Meta Tags</span>
                        <span className="text-xs text-pink-400">Sitemap</span>
                        <span className="text-xs text-fuchsia-400">Schema</span>
                    </div>
                </div>
            </div>

            {/* Data Protection metrics */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-3 transform rotate-1 shadow-xl border border-orange-600/50 mr-8">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <div className="text-xs text-slate-400 font-mono">Data Protection</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                            <div className="text-lg">🔒</div>
                            <span className="text-xs text-orange-400 font-bold">Secure</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">💾</div>
                            <span className="text-xs text-yellow-400 font-bold">Backup</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">🔐</div>
                            <span className="text-xs text-green-400 font-bold">Safe</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom elements - Performance & Security features */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-blue-400 font-semibold">⚡ Fast</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-emerald-400 font-semibold">🛡️ Secure</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">🔍 SEO</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - performance & security nodes */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-500 rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-teal-500 rounded-full"></div>
        
        {/* Speed lines decoration */}
        <div className="absolute top-14 left-4 w-16 h-0.5 bg-gradient-to-r from-blue-500/40 to-transparent"></div>
        <div className="absolute top-18 left-6 w-12 h-0.5 bg-gradient-to-r from-cyan-500/40 to-transparent"></div>
        <div className="absolute bottom-14 right-4 w-14 h-0.5 bg-gradient-to-l from-emerald-500/40 to-transparent"></div>
        <div className="absolute bottom-18 right-6 w-10 h-0.5 bg-gradient-to-l from-teal-500/40 to-transparent"></div>
        
        {/* Shield & Lightning decoration */}
        <div className="absolute top-1/4 left-6 text-blue-500/10 text-4xl">⚡</div>
        <div className="absolute bottom-1/4 right-6 text-emerald-500/10 text-4xl">🛡️</div>
        <div className="absolute top-1/3 right-10 text-purple-500/10 text-3xl">🔍</div>
        
        {/* Performance flow lines */}
        <div className="absolute top-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-transparent rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-teal-500/30 -rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-0.5 bg-gradient-to-l from-purple-500/30 via-pink-500/30 to-transparent rotate-12"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
    </div>
);



export const IntegrationsIllustration = () => (
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
            {/* Payment Gateway panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-green-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Payment Gateway</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">💳</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-green-400 rounded w-full"></div>
                            <div className="h-2 bg-emerald-400 rounded w-4/5"></div>
                        </div>
                        <div className="text-xs text-green-400 font-bold">✓</div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-green-400 font-bold">Stripe</span>
                        <span className="text-xs text-emerald-400">PayPal</span>
                        <span className="text-xs text-teal-400">Square</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-blue-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-slate-400 font-mono">CRM System</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">👥</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-blue-400 rounded w-5/6"></div>
                            <div className="h-2 bg-cyan-400 rounded w-full"></div>
                        </div>
                        <div className="text-xs text-blue-400 font-bold">✓</div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-blue-400 font-bold">Salesforce</span>
                        <span className="text-xs text-cyan-400">HubSpot</span>
                    </div>
                </div>
            </div>

            {/* Center piece - Integration hub icon */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-5xl mb-2">🔗</div>
                    <div className="text-white text-xl font-bold mb-1">Connected</div>
                    <div className="text-white/90 text-sm font-medium">Ecosystem</div>
                </div>
            </div>

            {/* Marketing Tools panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-purple-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Marketing Tools</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">📢</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-purple-400 rounded w-full"></div>
                            <div className="h-2 bg-pink-400 rounded w-3/4"></div>
                        </div>
                        <div className="text-xs text-purple-400 font-bold">✓</div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-purple-400 font-bold">Mailchimp</span>
                        <span className="text-xs text-pink-400">Analytics</span>
                    </div>
                </div>
            </div>

            {/* Inventory System panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-3 transform rotate-1 shadow-xl border border-orange-600/50 mr-8">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <div className="text-xs text-slate-400 font-mono">Inventory</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xl">📦</div>
                    <div className="flex-1">
                        <div className="h-2 bg-orange-400 rounded w-full"></div>
                    </div>
                    <span className="text-xs text-orange-400 font-bold">Synced</span>
                </div>
            </div>

            {/* Bottom elements - Integration types */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-green-400 font-semibold">💳 Payment</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-blue-400 font-semibold">👥 CRM</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">📢 Marketing</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - integration connection nodes */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-cyan-500 rounded-full"></div>
        
        {/* Integration connection lines - all pointing to center */}
        <div className="absolute top-1/4 left-1/4 w-24 h-0.5 bg-gradient-to-r from-green-500/40 via-emerald-500/40 to-purple-500/20 rotate-45"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-l from-blue-500/40 via-cyan-500/40 to-purple-500/20 -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-0.5 bg-gradient-to-r from-orange-500/40 via-yellow-500/40 to-purple-500/20 -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-l from-purple-500/40 via-pink-500/40 to-purple-500/20 rotate-45"></div>
        
        {/* Integration hub nodes around center */}
        <div className="absolute top-1/2 left-12 w-3 h-3 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-1/2 right-12 w-3 h-3 bg-purple-400/30 rounded-full"></div>
        <div className="absolute top-12 left-1/2 w-3 h-3 bg-green-400/30 rounded-full"></div>
        <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-orange-400/30 rounded-full"></div>
        
        {/* Plugin/Integration icons decoration */}
        <div className="absolute top-1/4 left-8 text-green-500/10 text-3xl">💳</div>
        <div className="absolute bottom-1/4 right-8 text-purple-500/10 text-3xl">📢</div>
        <div className="absolute top-1/3 right-10 text-blue-500/10 text-3xl">👥</div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
    </div>
);



export const CustomerExperienceIllustration = () => (
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
            {/* Smooth Experience panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-2 shadow-xl border border-blue-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="text-xs text-slate-400 font-mono">Smooth UX</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">🎯</div>
                        <div className="flex-1">
                            <div className="relative h-2 bg-slate-600 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-[96%] animate-pulse"></div>
                            </div>
                        </div>
                        <div className="text-xs text-cyan-400 font-bold">96%</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-blue-400 font-bold">Satisfaction</span>
                        <span className="text-xs text-cyan-400">Seamless</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-3 shadow-xl border border-purple-600/50 ml-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Responsive Design</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1 text-sm">
                            <span>📱</span>
                            <span>💻</span>
                            <span>⌚</span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-purple-400 rounded w-full"></div>
                            <div className="h-2 bg-pink-400 rounded w-5/6"></div>
                        </div>
                        <div className="text-xs text-purple-400 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-purple-400 font-bold">All Devices</span>
                        <span className="text-xs text-pink-400">Adaptive</span>
                    </div>
                </div>
            </div>

            {/* Center piece - Customer Experience icon */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-5xl mb-2">✨</div>
                    <div className="text-white text-xl font-bold mb-1">Customer</div>
                    <div className="text-white/90 text-sm font-medium">First Experience</div>
                </div>
            </div>

            {/* Personalization panel */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-1 shadow-xl border border-emerald-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="text-xs text-slate-400 font-mono">Personalized</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-xl">🎨</div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-emerald-400 rounded w-full"></div>
                            <div className="h-2 bg-teal-400 rounded w-4/5"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-emerald-400 font-bold">AI Powered</span>
                        <span className="text-xs text-teal-400">Custom Fit</span>
                    </div>
                </div>
            </div>

            {/* Engagement & Conversion metrics */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-3 transform rotate-1 shadow-xl border border-orange-600/50 mr-8">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <div className="text-xs text-slate-400 font-mono">Performance</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                            <div className="text-lg">💬</div>
                            <span className="text-xs text-orange-400 font-bold">+85%</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">🛒</div>
                            <span className="text-xs text-yellow-400 font-bold">+62%</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">💰</div>
                            <span className="text-xs text-green-400 font-bold">+48%</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-orange-400">Engage</span>
                    <span className="text-yellow-400">Cart</span>
                    <span className="text-green-400">Convert</span>
                </div>
            </div>

            {/* Bottom elements - Experience features */}
            <div className="flex gap-3 justify-center flex-wrap">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-blue-400 font-semibold">🎯 Smooth</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-purple-400 font-semibold">📱 Responsive</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-emerald-400 font-semibold">🎨 Personal</div>
                </div>
            </div>
        </div>

        {/* Decorative elements - customer journey nodes */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-500 rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 left-12 w-2 h-2 bg-pink-500 rounded-full"></div>
        
        {/* Customer journey path lines */}
        <div className="absolute top-1/4 left-1/4 w-24 h-0.5 bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-purple-500/20 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-teal-500/40 -rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-0.5 bg-gradient-to-l from-purple-500/40 via-pink-500/40 to-transparent rotate-12"></div>
        
        {/* Conversion funnel decoration */}
        <div className="absolute top-16 left-6 w-12 h-16 border-l-2 border-r-2 border-b-2 border-blue-500/10 rounded-b-xl transform rotate-180"></div>
        <div className="absolute bottom-16 right-6 w-12 h-16 border-l-2 border-r-2 border-b-2 border-emerald-500/10 rounded-b-xl transform rotate-180"></div>
        
        {/* Experience icons decoration */}
        <div className="absolute top-1/4 left-8 text-blue-500/10 text-4xl">🎯</div>
        <div className="absolute bottom-1/4 right-8 text-emerald-500/10 text-4xl">🎨</div>
        <div className="absolute top-1/3 right-10 text-purple-500/10 text-3xl">✨</div>
        
        {/* Star sparkles for optimized experience */}
        <div className="absolute top-10 right-20 text-yellow-400/20 text-xl">⭐</div>
        <div className="absolute bottom-10 left-20 text-yellow-400/20 text-xl">⭐</div>
        <div className="absolute top-1/2 right-8 text-yellow-400/20 text-sm">✨</div>
        <div className="absolute top-1/2 left-8 text-yellow-400/20 text-sm">✨</div>
        
        {/* Glowing orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
    </div>
);