

export default function Home() {
   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg transform rotate-3">
                  <svg
                    className="w-6 h-6 text-white transform -rotate-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tight">Drawly</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium">
                Features
              </a>
              <a href="#examples" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium">
                Examples
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium">
                Pricing
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Sign in</button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold">
                Start Drawing
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-blue-700 text-sm font-medium">✨ Now with real-time collaboration</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Think it.
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                Sketch it.
              </span>
              <span className="text-gray-700">Share it.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most intuitive virtual whiteboard for creating beautiful hand-drawn diagrams, wireframes, and
              illustrations that feel natural and look amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
                Start Drawing Free
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                See Examples
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">No signup required • Free forever • Export anywhere</p>
          </div>

          {/* Interactive Canvas Mockup */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Browser-like header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Untitled Diagram</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-700 font-medium">3 online</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium">Share</button>
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 relative overflow-hidden shadow-inner"
                style={{ aspectRatio: "16/10" }}
              >
                {/* Enhanced Toolbar */}
                <div className="absolute top-4 left-4 flex items-center space-x-1 z-20 bg-white rounded-xl shadow-lg border border-gray-200 p-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50">
                    <div className="w-4 h-4 border-2 border-gray-700 rounded"></div>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50">
                    <div className="w-4 h-4 border-2 border-gray-700 rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                </div>

                {/* Canvas Grid Background */}
                <div className="absolute inset-0 opacity-30">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Realistic Drawing Content */}
                <div className="absolute inset-8 pt-16">
                  {/* User Authentication Flow */}
                  <div className="absolute top-8 left-12 w-40 h-28 border-3 border-blue-600 rounded-2xl transform rotate-1 shadow-lg bg-blue-50/80 backdrop-blur-sm">
                    <div className="p-4">
                      <div className="text-sm font-bold text-blue-800 mb-2 transform -rotate-1">👤 User Login</div>
                      <div className="space-y-2">
                        <div className="w-24 h-2 bg-blue-400 rounded transform rotate-1"></div>
                        <div className="w-20 h-2 bg-blue-400 rounded"></div>
                        <div className="w-16 h-3 bg-blue-600 rounded transform -rotate-1 mt-2"></div>
                      </div>
                    </div>
                  </div>

                  {/* Database */}
                  <div className="absolute top-4 right-16 w-32 h-32 border-3 border-green-500 rounded-full transform -rotate-2 shadow-lg bg-green-50/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg mb-1">🗄️</div>
                      <div className="text-sm font-bold text-green-800">Database</div>
                      <div className="w-12 h-1 bg-green-500 rounded mx-auto mt-1"></div>
                      <div className="w-8 h-1 bg-green-400 rounded mx-auto mt-1"></div>
                    </div>
                  </div>

                  {/* API Gateway */}
                  <div className="absolute top-20 left-64 w-36 h-24 border-3 border-purple-500 rounded-xl transform rotate-2 shadow-lg bg-purple-50/80 backdrop-blur-sm">
                    <div className="p-3">
                      <div className="text-sm font-bold text-purple-800 mb-1">⚡ API Gateway</div>
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <div className="text-xs text-purple-600">POST /auth/login</div>
                    </div>
                  </div>

                  {/* Success Response */}
                  <div className="absolute bottom-20 right-20 w-32 h-20 border-3 border-emerald-500 rounded-lg transform rotate-3 shadow-lg bg-emerald-50/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl mb-1">✅</div>
                      <div className="text-sm font-bold text-emerald-800">Success!</div>
                      <div className="text-xs text-emerald-600">200 OK</div>
                    </div>
                  </div>

                  {/* Error Handling */}
                  <div className="absolute bottom-8 left-16 w-36 h-24 border-3 border-red-500 rounded-xl transform -rotate-1 shadow-lg bg-red-50/80 backdrop-blur-sm">
                    <div className="p-3">
                      <div className="text-sm font-bold text-red-800 mb-1">❌ Error Handler</div>
                      <div className="text-xs text-red-600 mb-1">try/catch</div>
                      <div className="w-20 h-1 bg-red-400 rounded"></div>
                      <div className="w-16 h-1 bg-red-300 rounded mt-1"></div>
                    </div>
                  </div>

                  {/* JWT Token */}
                  <div className="absolute top-32 right-48 w-28 h-16 border-3 border-orange-500 rounded-lg transform rotate-1 shadow-lg bg-orange-50/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-bold text-orange-800">🔑 JWT</div>
                      <div className="w-16 h-1 bg-orange-500 rounded mt-1"></div>
                    </div>
                  </div>

                  {/* Connecting Arrows with better styling */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                        <polygon points="0 0, 12 4, 0 8" fill="#6B7280" />
                      </marker>
                      <marker id="arrowhead-blue" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                        <polygon points="0 0, 12 4, 0 8" fill="#3B82F6" />
                      </marker>
                      <marker id="arrowhead-green" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                        <polygon points="0 0, 12 4, 0 8" fill="#10B981" />
                      </marker>
                    </defs>

                    {/* Login to API */}
                    <path
                      d="M 200 90 Q 240 70 280 85"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      markerEnd="url(#arrowhead-blue)"
                    />

                    {/* API to Database */}
                    <path
                      d="M 360 100 Q 400 80 440 90"
                      stroke="#10B981"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      markerEnd="url(#arrowhead-green)"
                    />

                    {/* Database back to API */}
                    <path
                      d="M 440 120 Q 400 140 360 130"
                      stroke="#10B981"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      markerEnd="url(#arrowhead-green)"
                    />

                    {/* API to Success */}
                    <path
                      d="M 380 140 Q 420 180 460 200"
                      stroke="#059669"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      markerEnd="url(#arrowhead-green)"
                    />

                    {/* Error path */}
                    <path
                      d="M 320 140 Q 280 180 240 200"
                      stroke="#DC2626"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="12,6"
                      markerEnd="url(#arrowhead)"
                    />

                    {/* JWT flow */}
                    <path
                      d="M 380 110 Q 420 120 440 140"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>

                  {/* Floating User Cursors */}
                  <div
                    className="absolute top-16 right-32 flex items-center space-x-2 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.64 21.97c-.95-.02-1.84-.32-2.53-.9-.69-.58-1.1-1.38-1.1-2.1 0-.58.23-1.11.61-1.54.38-.42.89-.72 1.44-.84.55-.12 1.12-.07 1.64.13.52.2.97.55 1.3 1.01.33.46.51 1.01.51 1.57 0 .59-.18 1.14-.51 1.6-.33.46-.78.81-1.3 1.01-.52.2-1.09.25-1.64.13-.55-.12-1.06-.42-1.44-.84-.38-.43-.61-.96-.61-1.54z" />
                    </svg>
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      Sarah
                    </div>
                  </div>

                  <div
                    className="absolute bottom-32 left-32 flex items-center space-x-2 animate-bounce"
                    style={{ animationDelay: "1s", animationDuration: "3s" }}
                  >
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.64 21.97c-.95-.02-1.84-.32-2.53-.9-.69-.58-1.1-1.38-1.1-2.1 0-.58.23-1.11.61-1.54.38-.42.89-.72 1.44-.84.55-.12 1.12-.07 1.64.13.52.2.97.55 1.3 1.01.33.46.51 1.01.51 1.57 0 .59-.18 1.14-.51 1.6-.33.46-.78.81-1.3 1.01-.52.2-1.09.25-1.64.13-.55-.12-1.06-.42-1.44-.84-.38-.43-.61-.96-.61-1.54z" />
                    </svg>
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      Mike
                    </div>
                  </div>

                  <div
                    className="absolute top-40 left-80 flex items-center space-x-2 animate-bounce"
                    style={{ animationDelay: "2s", animationDuration: "3s" }}
                  >
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.64 21.97c-.95-.02-1.84-.32-2.53-.9-.69-.58-1.1-1.38-1.1-2.1 0-.58.23-1.11.61-1.54.38-.42.89-.72 1.44-.84.55-.12 1.12-.07 1.64.13.52.2.97.55 1.3 1.01.33.46.51 1.01.51 1.57 0 .59-.18 1.14-.51 1.6-.33.46-.78.81-1.3 1.01-.52.2-1.09.25-1.64.13-.55-.12-1.06-.42-1.44-.84-.38-.43-.61-.96-.61-1.54z" />
                    </svg>
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      Alex
                    </div>
                  </div>

                  {/* Annotations */}
                  <div className="absolute top-2 left-20 text-xs text-gray-500 font-medium transform rotate-1">
                    Authentication Flow
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-medium transform -rotate-2">
                    v2.1.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Everything you need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                create magic
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to make diagramming feel natural, collaborative, and fun
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 - Large */}
            <div className="lg:col-span-2 group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl border border-blue-200 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 text-sm font-semibold">CORE FEATURE</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hand-drawn Magic</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Every line, shape, and element gets the perfect hand-drawn treatment. Our advanced rendering engine
                  makes your diagrams look naturally sketched while keeping them crisp and professional.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Sketchy borders
                  </div>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Natural curves
                  </div>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Perfect imperfection
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl border border-green-200 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  See teammates' cursors in real-time. Watch ideas come to life together with instant sync and seamless
                  multiplayer editing.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-3xl border border-purple-200 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized for speed with 60fps rendering. No lag, no delays - just smooth, responsive drawing that
                  keeps up with your thoughts.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="lg:col-span-2 group">
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-3xl border border-orange-200 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-600 text-sm font-semibold">EXPORT ANYWHERE</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Share & Export</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Export as PNG, SVG, PDF, or share with a simple link. Perfect for presentations, documentation, or
                  social media. Your diagrams look great everywhere.
                </p>
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white/60 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-gray-700">PNG</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-gray-700">SVG</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-gray-700">PDF</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-gray-700">LINK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Ready to bring your ideas to life?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join over 100,000 creators, designers, and teams who use Drawly to turn thoughts into beautiful diagrams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-gray-900 px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
              Start Drawing Now
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Free forever plan
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Export anywhere
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-black">Drawly</span>
              </div>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                The most intuitive virtual whiteboard for creating beautiful hand-drawn diagrams that feel natural and
                look amazing.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Drawly. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}