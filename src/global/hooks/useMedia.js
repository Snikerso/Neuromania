import React from 'react';

export function useMedia(query, initialState = false) {
    const [state, setState] = React.useState(initialState)
    // 🐨 call React.useDebugValue here.
    // 💰 here's the formatted label I use: `\`${query}\` => ${state}`
  
    React.useEffect(() => {
      let mounted = true
      const mql = window.matchMedia(query)
      function onChange() {
        if (!mounted) {
          return
        }
        setState(Boolean(mql.matches))
      }
  
      mql.addListener(onChange)
      setState(mql.matches)
  
      return () => {
        mounted = false
        mql.removeListener(onChange)
      }
    }, [query])
  
    return state
  }

