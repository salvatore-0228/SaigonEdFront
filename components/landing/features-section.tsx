"use client"

import { BookOpen, Sparkles, Star, Globe, Users, Shield, Award, Clock } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global School Directory",
      description: "Access comprehensive information about 500+ international schools across 50+ countries with detailed profiles, curriculum information, and admission requirements.",
      color: "text-primary"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Resources",
      description: "Comprehensive guides, articles, and tools to help you understand different education systems, curricula, and make informed decisions about your academic journey.",
      color: "text-accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Consultation",
      description: "Connect with experienced education consultants who provide personalized guidance for school selection, application processes, and academic planning.",
      color: "text-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Information",
      description: "All school information is verified and regularly updated to ensure accuracy and reliability for your decision-making process.",
      color: "text-accent"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Success Stories",
      description: "Learn from real experiences of students who have successfully navigated international education with our platform's guidance and support.",
      color: "text-primary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support system to answer your questions and provide assistance whenever you need guidance on your educational journey.",
      color: "text-accent"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-gray-800 via-gray-600 to-amber-600 bg-clip-text text-transparent">
              Global Education Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, resources, and expert guidance 
            you need to navigate the complex world of international education.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-300/30 dark:border-gray-600/30 hover:border-gray-400/50 dark:hover:border-gray-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-6 group-hover:from-gray-200 group-hover:to-gray-300 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-all duration-300 shadow-lg ${
                feature.color === "text-primary" ? "group-hover:shadow-gray-600/30" : "group-hover:shadow-amber-500/30"
              }`}>
                <div className={feature.color === "text-primary" ? "text-gray-700 dark:text-gray-300" : "text-amber-600 dark:text-amber-400"}>
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-300/50 dark:border-gray-600/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="backdrop-blur-sm bg-gray-50/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-muted-foreground">International Schools</div>
            </div>
            <div className="backdrop-blur-sm bg-gray-50/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="backdrop-blur-sm bg-gray-50/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-muted-foreground">Students Helped</div>
            </div>
            <div className="backdrop-blur-sm bg-gray-50/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
