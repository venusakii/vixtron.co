"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="bg-[#1B1C22] border-2 border-[#00F5A0]/30 rounded-xl p-6 shadow-[0_0_40px_rgba(0,245,160,0.2)]">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-[#F5F5F5] mb-4 leading-relaxed">
              We use cookies to improve your experience — no tracking, just creativity 🍪
            </p>
            <Button
              onClick={handleAccept}
              className="bg-[#00F5A0] text-[#0D0E12] hover:bg-[#00C3FF] font-semibold w-full"
            >
              Accept
            </Button>
          </div>
          <button
            onClick={handleAccept}
            className="text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
