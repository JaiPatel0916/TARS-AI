import React, { createContext, useContext, useState, useEffect, useRef } from 'react'

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true
    return () => { isMounted.current = false }
  }, [])

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('theme')
        if (saved) {
          if (isMounted.current)setTheme(saved)
          if (saved === 'dark') document.documentElement.classList.add('dark')
          else document.documentElement.classList.remove('dark')
          return
        }

        if (window.matchMedia) {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          const initial = prefersDark ? 'dark' : 'light'
          if (isMounted.current) setTheme(initial)
          if (initial === 'dark') document.documentElement.classList.add('dark')
          else document.documentElement.classList.remove('dark')
        }
      }
    } catch (e) {
      console.warn('Theme init failed', e)
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    if (isMounted.current) setTheme(next)
    if (typeof document !== 'undefined') {
      if (next === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }
    try { 
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', next)
      } 
    } catch (e) {
      console.warn('Failed to save theme', e)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
