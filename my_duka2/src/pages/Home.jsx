import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Build Amazing
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Digital Products
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              The modern platform to create, scale, and manage your digital products with ease.
              Join thousands of satisfied creators.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2">
                Get Started Free →
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to succeed in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Optimized performance for the best user experience" },
            { icon: "🔒", title: "Secure", desc: "Enterprise-grade security to protect your data" },
            { icon: "👥", title: "Team Collaboration", desc: "Work together seamlessly with your team" },
            { icon: "📈", title: "Analytics", desc: "Real-time insights to grow your business" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-slate-600 mb-8">
          Join thousands of creators who are building amazing things with our platform
        </p>
        <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
          Start Your Free Trial
        </button>
      </div>
    </div>
  )
}

export default Home