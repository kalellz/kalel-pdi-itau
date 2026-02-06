'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface TechnologyContextType {
  selectedTechnologies: Set<string>
  toggleTechnology: (tech: string) => void
}

const TechnologyContext = createContext<TechnologyContextType | undefined>(undefined)

export function TechnologyProvider({ children }: { children: ReactNode }) {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Set<string>>(new Set())

  const toggleTechnology = (tech: string) => {
    const newSelected = new Set(selectedTechnologies)
    if (newSelected.has(tech)) {
      newSelected.delete(tech)
    } else {
      newSelected.add(tech)
    }
    setSelectedTechnologies(newSelected)
  }

  return (
    <TechnologyContext.Provider value={{ selectedTechnologies, toggleTechnology }}>
      {children}
    </TechnologyContext.Provider>
  )
}

export function useTechnology() {
  const context = useContext(TechnologyContext)
  if (!context) {
    throw new Error('useTechnology deve ser usado dentro de TechnologyProvider')
  }
  return context
}
