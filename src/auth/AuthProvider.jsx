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
import { AuthContext } from '../context/AuthContext'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState('')

  const googleProvider = new GoogleAuthProvider()

  const getUserData = async (uid) => {
    const snap = await getDoc(doc(db, 'users', uid))
    return snap.exists() ? snap.data() : {}
  }

  const register = async ({ email, password, displayName }) => {
    setError('')
    setActionLoading(true)

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)

      if (displayName) {
        await updateProfile(cred.user, { displayName })
      }

      await setDoc(doc(db, 'users', cred.user.uid), {
        displayName: displayName || '',
        role: 'user',
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

  const loginWithGoogle = async () => {
    setError('')
    setActionLoading(true)

    try {
      const result = await signInWithPopup(auth, googleProvider)
      const ref = doc(db, 'users', result.user.uid)
      const snap = await getDoc(ref)

      if (!snap.exists()) {
        await setDoc(ref, {
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

  const logout = async () => {
    await signOut(auth)
    setUser(null)
    localStorage.removeItem('user')
  }

  const resetPassword = (email) => sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unsub = onIdTokenChanged(auth, () => {})
    return unsub
  }, [])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        const extra = await getUserData(u.uid)

        const mergedUser = {
          uid: u.uid,
          email: u.email,
          displayName: u.displayName,
          photoURL: u.photoURL,
          ...extra,
        }

        setUser(mergedUser)
        localStorage.setItem('user', JSON.stringify(mergedUser))
      } else {
        setUser(null)
        localStorage.removeItem('user')
      }
      setLoading(false)
    })

    return unsub
  }, [])

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
