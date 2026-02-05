"use client"

import { useEffect, useState } from "react"

interface TimeRemaining {
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  elapsedMonths: number
}

export function InternshipTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null)

  useEffect(() => {
    const calculateTime = () => {
      // Start: October 1, 2025
      const startDate = new Date(2025, 9, 1, 0, 0, 0)
      // End: October 1, 2026
      const endDate = new Date(2026, 9, 1, 0, 0, 0)
      const now = new Date()

      // Calculate elapsed time
      const elapsedMs = now.getTime() - startDate.getTime()
      const totalMs = endDate.getTime() - startDate.getTime()
      const remainingMs = endDate.getTime() - now.getTime()

      // Calculate elapsed months
      let elapsedMonths = 0
      let tempDate = new Date(startDate)
      while (tempDate < now) {
        tempDate.setMonth(tempDate.getMonth() + 1)
        if (tempDate <= now) {
          elapsedMonths++
        }
      }

      // Calculate remaining time
      let months = 0
      let tempEndDate = new Date(now)
      while (tempEndDate < endDate) {
        tempEndDate.setMonth(tempEndDate.getMonth() + 1)
        if (tempEndDate <= endDate) {
          months++
        }
      }

      const remainingSeconds = Math.floor(remainingMs / 1000)
      const days = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000)

      setTimeRemaining({
        months,
        days,
        hours,
        minutes,
        seconds,
        elapsedMonths,
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!timeRemaining) {
    return (
      <div className="text-zinc-600 dark:text-zinc-400 font-semibold">
        Carregando timer...
      </div>
    )
  }

  return (
    <div>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
        Tempo decorrido: {timeRemaining.elapsedMonths} {timeRemaining.elapsedMonths === 1 ? "mês" : "meses"}
      </p>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
        <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
          <span className="text-zinc-900 dark:text-white font-bold text-lg">
            ⏳ Contagem regressiva:
          </span>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
              <span className="text-blue-700 dark:text-blue-300 font-bold">
                {timeRemaining.months}
              </span>
              <span className="text-blue-600 dark:text-blue-400 text-sm ml-1">
                {timeRemaining.months === 1 ? "mês" : "meses"}
              </span>
            </div>
            <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
              <span className="text-purple-700 dark:text-purple-300 font-bold">
                {timeRemaining.days}
              </span>
              <span className="text-purple-600 dark:text-purple-400 text-sm ml-1">
                {timeRemaining.days === 1 ? "dia" : "dias"}
              </span>
            </div>
            <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
              <span className="text-indigo-700 dark:text-indigo-300 font-bold">
                {timeRemaining.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 text-sm ml-1">
                h
              </span>
            </div>
            <div className="px-3 py-1 bg-violet-100 dark:bg-violet-900/40 rounded-lg">
              <span className="text-violet-700 dark:text-violet-300 font-bold">
                {timeRemaining.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-violet-600 dark:text-violet-400 text-sm ml-1">
                m
              </span>
            </div>
            <div className="px-3 py-1 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
              <span className="text-rose-700 dark:text-rose-300 font-bold">
                {timeRemaining.seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-rose-600 dark:text-rose-400 text-sm ml-1">
                s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
