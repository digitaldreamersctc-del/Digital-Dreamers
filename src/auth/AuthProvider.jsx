import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onIdTokenChanged,
} from 'firebase/auth'

import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext.js'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null) // incluye datos extra
  const [loading, setLoading] = useState(true) // loading inicial
  const [actionLoading, setActionLoading] = useState(false) // loading de acciones
  const [error, setError] = useState('')

  const googleProvider = new GoogleAuthProvider()

  // 📌 Cargar datos extra del usuario desde Firestore
  const getUserData = async (uid) => {
    const snap = await getDoc(doc(db, 'users', uid))
    return snap.exists() ? snap.data() : {}
  }

  // 📌 Registrar nuevo usuario + perfil extra en Firestore
  const register = async ({ email, password, displayName }) => {
    setError('')
    setActionLoading(true)

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)

      // guardar nombre en Firebase Auth
      if (displayName) {
        await updateProfile(cred.user, { displayName })
      }

      // crear documento en Firestore
      await setDoc(doc(db, 'users', cred.user.uid), {
        displayName: displayName || '',
        role: 'user', // 👈 rol por defecto
        createdAt: new Date(),
      })

      return cred.user
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setActionLoading(false)
    }
  }

  // 📌 Inicio de sesión con email/pass
  const login = async ({ email, password }) => {
    setError('')
    setActionLoading(true)

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      return cred.user
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setActionLoading(false)
    }
  }

  // 📌 Login con Google OAuth
  const loginWithGoogle = async () => {
    setError('')
    setActionLoading(true)

    try {
      const result = await signInWithPopup(auth, googleProvider)

      // si es primera vez, guardamos un perfil
      const snap = await getDoc(doc(db, 'users', result.user.uid))

      if (!snap.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          displayName: result.user.displayName,
          role: 'user',
          createdAt: new Date(),
        })
      }

      return result.user
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setActionLoading(false)
    }
  }

  // 📌 Logout
  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

  // 📌 Reset password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email)

  // 📌 Refresh automático del token
  useEffect(() => {
    const unsub = onIdTokenChanged(auth, () => {})
    return () => unsub()
  }, [])

  // 📌 Listener de sesión + datos extra + persistencia
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        const extra = await getUserData(u.uid)
        const mergedUser = { ...u, ...extra }

        // guardar en localStorage
        localStorage.setItem('user', JSON.stringify(mergedUser))

        setUser(mergedUser)
      } else {
        setUser(null)
        localStorage.removeItem('user')
      }
      setLoading(false)
    })

    return () => unsub()
  }, [])

  // 📌 Permisos basados en roles (muy útil)
  const hasRole = (role) => user?.role === role
  const isAdmin = () => user?.role === 'admin'

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        actionLoading,
        error,
        setError,
        register,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        hasRole,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
