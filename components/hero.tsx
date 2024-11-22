"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative px-6 lg:px-8 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Build something amazing with modern web tech
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
        >
          Create stunning web applications with Next.js, Tailwind CSS, and Framer Motion.
          Optimized for performance and SEO.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <Link
            href="/contact"
            className="group rounded-full px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-600 transition-all"
          >
            Get Started
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}