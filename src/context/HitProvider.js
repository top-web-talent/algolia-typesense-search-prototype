import * as React from 'react'

export const HitContext = React.createContext();

export const HitProvider = ({children}) => {
  const [hits, setHits] = React.useState()
  const [isModal, setIsModal] = React.useState(false)

  return (
    <HitContext.Provider value={{hits, setHits, isModal, setIsModal}}>
      {children}
    </HitContext.Provider>
  )
}
