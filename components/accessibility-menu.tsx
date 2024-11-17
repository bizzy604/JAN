"use client"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Settings } from "lucide-react"
import { useAccessibility } from "./providers/accessibility-provider"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

export function AccessibilityMenu() {
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    highContrast,
    toggleHighContrast,
    reduceMotion,
    toggleReduceMotion,
  } = useAccessibility()

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full"
          aria-label="Accessibility settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Accessibility Settings</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <Label>Text Size</Label>
            <div className="flex items-center gap-2">
              <Button onClick={decreaseFontSize} aria-label="Decrease font size">A-</Button>
              <span className="min-w-8 text-center">{fontSize}px</span>
              <Button onClick={increaseFontSize} aria-label="Increase font size">A+</Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast">High Contrast</Label>
            <Switch
              id="high-contrast"
              checked={highContrast}
              onCheckedChange={toggleHighContrast}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion">Reduce Motion</Label>
            <Switch
              id="reduce-motion"
              checked={reduceMotion}
              onCheckedChange={toggleReduceMotion}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 