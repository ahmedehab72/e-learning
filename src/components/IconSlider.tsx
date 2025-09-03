import { motion } from "framer-motion"
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Cpu,
  Cloud,
  Shield,
  Zap,
  Brain,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
} from "lucide-react"

const IconSlider = () => {
  const technologies = [
    { icon: Code, name: "Programming" },
    { icon: Database, name: "Database" },
    { icon: Smartphone, name: "Mobile Dev" },
    { icon: Globe, name: "Web Dev" },
    { icon: Cpu, name: "AI & ML" },
    { icon: Cloud, name: "Cloud" },
    { icon: Shield, name: "Security" },
    { icon: Zap, name: "DevOps" },
    { icon: Brain, name: "Data Science" },
    { icon: Palette, name: "Design" },
    { icon: Camera, name: "Photography" },
    { icon: Music, name: "Audio" },
    { icon: Video, name: "Video" },
    { icon: Gamepad2, name: "Gaming" },
  ]

  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <section className="py-0 bg-background overflow-hidden ">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* Sliding container */}
        <motion.div
          animate={{ x: [0, -50 * technologies.length] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex space-x-8"
          style={{ width: `${100 * technologies.length}%` }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center p-6 min-w-[120px] group"
            >
              <div className="w-12 h-12 bg-card rounded-xl shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow">
                <tech.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground/80 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default IconSlider
