import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Award,
  Smartphone,
  Clock,
  Users,
  Target,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Interactive Quizzes",
      description:
        "Test your knowledge with smart, interactive quizzes that help you better retain information.",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Certified Credentials",
      description:
        "Earn certified credentials upon course completion to enhance your resume and career opportunities.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    },
    {
      icon: Users,
      title: "Interactive Community",
      description:
        "Join a community of enthusiastic learners, share experiences, ask questions, and get support.",
      gradient: "from-teal-400 via-cyan-500 to-sky-500",
    },
    {
      icon: Zap,
      title: "Fast Learning",
      description:
        "Advanced learning techniques help you acquire skills faster and more effectively than traditional methods.",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-red-600 dark:to-white to-black bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide you with a comprehensive learning experience using the
            latest technologies and interactive methods to ensure you get the
            best results in the shortest time.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <div className="h-full bg-card rounded-lg border border-border shadow-sm hover:shadow-lg transition-all duration-300 p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center shadow-md`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
