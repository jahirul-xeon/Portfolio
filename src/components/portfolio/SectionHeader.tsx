"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tagText: string;
  tagIcon: string;
  heading: string;
  description?: string;
  showUnderline?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  tagText,
  tagIcon,
  heading,
  description,
  showUnderline = false,
  centered = false
}: SectionHeaderProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`mb-8 md:mb-12 lg:mb-16 px-4 ${centered ? 'text-center' : ''}`}
    >
      {/* Tag Badge */}
      <motion.div
        className={`inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4 md:mb-6 ${centered ? 'justify-center' : ''}`}
        whileHover={{ scale: 1.05 }}
      >
        <Icon icon={tagIcon} className="text-indigo-500" width={20} height={20} />
        <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
          {tagText}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="bg-gradient-to-l from-emerald-500 via-teal-500 to-teal-300
                 dark:from-emerald-400 dark:via-teal-400 dark:to-teal-200
                 bg-clip-text text-transparent">
          {heading}
        </span>
      </motion.h2>

      {/* Underline */}
      {
        showUnderline && (
          <motion.div
            className={`h-1 md:h-1.5 lg:h-2
                  bg-gradient-to-l from-emerald-500 via-teal-500 to-teal-300
                  dark:from-emerald-400 dark:via-teal-400 dark:to-teal-200
                  rounded-full mb-3 md:mb-4 lg:mb-6
                  ${centered ? 'mx-auto' : ''}`}

            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        )
      }

      {/* Description */}
      {
        description && (
          <motion.p
            className={`text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl ${centered ? 'mx-auto' : ''}`}
            variants={itemVariants}
          >
            {description}
          </motion.p>
        )
      }
    </motion.div >
  );
} 