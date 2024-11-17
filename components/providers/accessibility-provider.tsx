"use client"

import React, { createContext, useContext, useState } from "react"
import { cn } from "@/lib/utils"

type AccessibilityContextType = {
  fontSize: number
  increaseFontSize: () => void
  decreaseFontSize: () => void
  highContrast: boolean
  toggleHighContrast: () => void
  reduceMotion: boolean
  toggleReduceMotion: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const increaseFontSize = () => setFontSize((size) => Math.min(size + 2, 24))
  const decreaseFontSize = () => setFontSize((size) => Math.max(size - 2, 12))
  const toggleHighContrast = () => setHighContrast((prev) => !prev)
  const toggleReduceMotion = () => setReduceMotion((prev) => !prev)

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        highContrast,
        toggleHighContrast,
        reduceMotion,
        toggleReduceMotion,
      }}
    >
      <div
        className={cn(
          `text-size-${fontSize}`,
          highContrast && "contrast-more",
          reduceMotion && "motion-reduce"
        )}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
} 