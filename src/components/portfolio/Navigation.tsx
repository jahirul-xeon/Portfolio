"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 md:top-4 w-full z-50 ">
      <div className="md:max-w-fit md:border-2 md:rounded-full mx-auto px-7 py-2  bg-white/70 dark:bg-[#56afb8]/30
  backdrop-blur-3xl border border-gray-300 dark:border-[#56afb8]/50 transition-colors duration-300">
        <div className="flex justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent"
          >
            <Image
              src="/logo.png"
              alt="No Image"
              width={50}
              height={50}
              title="My Logo"
            />
          </motion.div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {[
                "Overview",
                "Stack",
                "Experience",
                // "Projects",
                // "Testimonials",
                // "Certifications",
                "Contact",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
  border border-gray-300 dark:border-emerald-700 transition-all duration-30"
              aria-label="Toggle theme">
            {theme === "dark" ? (
              <Icon
                icon="solar:sun-bold"
                className="text-yellow-500"
                width={20}
                height={20}
              />
            ) : (
              <Icon
                icon="solar:moon-bold"
                className="text-blue-500"
                width={20}
                height={20}
              />
            )}
          </motion.button>
        </div>
      </div>
    </div>
    </nav >
  );
}
