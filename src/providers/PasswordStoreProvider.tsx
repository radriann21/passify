"use client"

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { type PasswordStore, createPasswordStore, initPasswordStore } from '@/stores/PasswordStore'

export type PasswordStoreApi = ReturnType<typeof createPasswordStore>

export const PasswordStoreContext = createContext<PasswordStoreApi | null>(null)

export interface PasswordStoreProviderProps {
  children: ReactNode
}

export const PasswordStoreProvider = ({ children }: PasswordStoreProviderProps) => {
  const storeRef = useRef<PasswordStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createPasswordStore(initPasswordStore())
  }

  return (
    <PasswordStoreContext.Provider value={storeRef.current} >
      {children}
    </PasswordStoreContext.Provider>
  )
}

export const usePasswordStoreContext = <T,>(selector: (store: PasswordStore) => T,): T => {
  const passwordStoreContext = useContext(PasswordStoreContext)
  if (!passwordStoreContext) {
    throw new Error("usePasswordStoreContext must be used within a PasswordStoreProvider")
  }
  return useStore(passwordStoreContext, selector)
}