"use client"

import { useEffect } from "react"

const ScrollToHero = () => {
  useEffect(() => {
    const heroElement = document.getElementById("hero__container")
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "auto", block: "start" })
    }
  }, [])

  return null
}

export default ScrollToHero