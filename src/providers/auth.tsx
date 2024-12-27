"use client"

import { SessionProvider } from 'next-auth/react'
import type { SessionProviderProps } from 'next-auth/react'

export const AuthProvider = ({children}: SessionProviderProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}