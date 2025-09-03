import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"

// ✅ Zod Schema
const contactSchema = z.object({
  name: z.string().min(3, "Name is required min 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message is required min 10 characters"),
})

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" })) // clear error when typing
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ Validate with Zod
    const result = contactSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof typeof formData, string>> = {}
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof typeof formData
        fieldErrors[field] = err.message
      })
      setErrors(fieldErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "support@learnhub.com",
      action: "mailto:support@learnhub.com",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      description: "San Francisco, CA",
      action: null,
    },
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Small Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail className="h-4 w-4" />
            <span>Get In Touch</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            Ready to Start
            <span className="bg-gradient-to-r from-red-600 dark:to-white to-black bg-clip-text text-transparent">
              {" "}Your Learning Journey?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about our courses or need guidance? We're here to help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-red-200 bg-white dark:bg-black/60 backdrop-blur-xl shadow-md hover:shadow-red-300/40 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.action ? (
                        <a href={info.action} className="text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors">
                          {info.description}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-400">{info.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-black/70 backdrop-blur-xl shadow-md border border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your learning goals..." rows={6} required />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-black text-white font-semibold rounded-lg shadow-md hover:shadow-red-400/50 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
