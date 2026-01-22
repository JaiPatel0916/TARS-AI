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
    
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      // Fallback for browsers that don't support View Transitions
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
      return
    }

    // Always use center of screen
    const x = window.innerWidth / 2
    const y = window.innerHeight / 2
    
    // Calculate the radius for the circle (distance to farthest corner from center)
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    // Start view transition with circular reveal
    const transition = document.startViewTransition(() => {
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
    })

    // Apply circular reveal animation from center
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      
      document.documentElement.animate(
        {
          clipPath: clipPath
        },
        {
          duration: 800,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      )
    })
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
