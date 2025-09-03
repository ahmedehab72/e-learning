import { motion } from "framer-motion";
import { Star, Users, BookOpen, Award, ArrowRight, UserRoundPlus } from "lucide-react";
import heroImage from "../assets/hero-image.png";
const Hero = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "10,000+" },
    { icon: BookOpen, label: "Courses", value: "50+" },
    { icon: Award, label: "Certificates", value: "500+" },
    { icon: Star, label: "Platform Rating", value: "4.9" },
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="hero"
      className="relative px-4 lg:px-0 min-h-screen w-screen flex items-center justify-center overflow-hidden 
             bg-gradient-to-br from-pink-50 via-white to-rose-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-transparent to-indigo-200/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Learn Tech Skills Fast —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  to-red-500">
                Short Lessons, Big Results
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Join thousands of students and gain new technical skills through
              our interactive micro-courses. Learn at your own pace and earn
              certified credentials.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-black  to-red-500 text-white 
                       font-semibold rounded-lg shadow-lg hover:shadow-rose-300/50 transition-all duration-300 flex items-center !border-none"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.a
                onClick={() => scrollToSection("pricing")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border !border-red-300 dark:!border-red-600 dark:bg-gray-800 
                       !text-gray-900 dark:!text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 
                       transition-all duration-300 flex items-center  !bg-transparent cursor-pointer"
              >
                
                <UserRoundPlus className="w-5 h-5 mr-2 text-rose-500" />
                Subscribe Now
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-center lg:text-left space-y-2"
                >
                  <div className="flex items-center justify-center lg:justify-start">
                    <stat.icon className="w-8 h-8 text-rose-500" />
                  </div>
                  <div className="font-bold text-2xl text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div
              className="w-full h-96 md:h-[500px] rounded-3xl shadow-xl flex items-center justify-center 
                     bg-gradient-to-br from-indigo-500 via-pink-400 to-rose-500"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-rose-500 rounded-2xl shadow-lg flex items-center justify-center"
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-xl shadow-lg flex items-center justify-center"
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
