import { motion } from "framer-motion"
import { BookOpen, Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "Free",
    period: "forever",
    description: "Perfect for beginners getting started",
    features: [
      "Access to 50+ free courses",
      "Basic progress tracking",
      "Community forum access",
      "Mobile app learning",
    ],
    cta: "Start Learning Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Best for serious learners and professionals",
    features: [
      "Access to all 5,000+ courses",
      "Advanced progress analytics",
      "Priority instructor support",
      "Offline course downloads",
      "Industry certifications",
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "Perfect for organizations and teams",
    features: [
      "Everything in Pro",
      "Team progress dashboard",
      "Bulk user management",
      "Custom learning paths",
      "Advanced reporting",
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BookOpen className="h-4 w-4" />
            <span>Learning Plans</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-red-600 dark:to-white to-black bg-clip-text text-transparent">
              {" "}Learning Journey  
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and unlock your potential. Join thousands of learners advancing their careers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-black  to-red-500 text-white  px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card className={`h-full ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-card' 
                  : 'border-border shadow-elegant bg-card/50 backdrop-blur-sm'
              } transition-all duration-300`}>
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold mb-2 ">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && plan.price !== "Free" && (
                      <span className="text-red-700">/{plan.period}</span>
                    )}
                    {plan.price === "Free" && (
                      <span className="text-red-700"> {plan.period}</span>
                    )}
                    {plan.price === "Custom" && (
                      <span className="text-red-700 text-base ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full text-black dark:text-white  !bg-transparent !border-black ${
                      plan.popular 
                        ? 'shadow-glow animate-glow text-black' 
                        : ''
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}