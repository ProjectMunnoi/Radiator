import { Check, Wrench, Droplets, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Premium Radiator Cleaning",
      description: "Advanced deep-cleaning technology removes stubborn deposits, rust, and scale buildup for maximum cooling efficiency.",
      highlight: "99% Performance Boost",
      features: ["Deep Scale Removal", "Rust Elimination", "Flow Optimization"]
    },
    {
      icon: Wrench,
      title: "Expert Radiator Repair",
      description: "Professional leak detection and repair using cutting-edge techniques to extend your radiator's lifespan.",
      highlight: "Lifetime Warranty",
      features: ["Leak Detection", "Crack Sealing", "Core Replacement"]
    }
  ];

  return (
    <div className="relative w-full py-16 md:py-24 lg:py-32 bg-black overflow-hidden" id="services">
      {/* Mechanical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 border-4 border-yellow-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-yellow-500 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-2 bg-yellow-500"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border-4 border-yellow-500 rounded-full"></div>
        <Settings className="absolute top-1/3 right-10 w-28 h-28 text-yellow-500 opacity-20 animate-spin" style={{animationDuration: '20s'}} />
        <Settings className="absolute bottom-1/3 left-20 w-16 h-16 text-yellow-500 opacity-20 animate-spin" style={{animationDuration: '15s'}} />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-bold tracking-wide">
            <Zap className="w-4 h-4 mr-2" />
            PROFESSIONAL RADIATOR SERVICES
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Keep Your Engine
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Running Cool
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Expert radiator services that deliver exceptional performance and reliability for your vehicle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 border border-gray-700 hover:border-yellow-500/50 overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 m-2 py-2 rounded-full text-sm font-bold shadow-lg">
                {service.highlight}
              </div>
              
              {/* Decorative Gear */}
              <div className="absolute -top-8 -right-8 opacity-10">
                <Settings className="w-24 h-24 text-yellow-500 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              
              {/* Icon */}
              <div className="relative mb-6 z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Quality Badge */}
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/20">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Professional Grade Equipment</span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105 font-bold">
            <span className="text-lg">Ready to boost your engine's performance?</span>
            <span className="text-sm opacity-80">Contact us for a free consultation today!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;