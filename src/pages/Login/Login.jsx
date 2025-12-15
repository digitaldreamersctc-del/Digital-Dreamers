import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Login() {
  const {
    login,
    register,
    resetPassword,
    setError,
    error,
    loginWithGoogle, // 🔹 nuevo
  } = useAuth()

  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({
    email: '',
    password: '',
    displayName: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password })
        navigate('/dashboard')
      } else if (mode === 'register') {
        await register({
          email: form.email,
          password: form.password,
          displayName: form.displayName,
        })
        navigate('/dashboard')
      } else {
        await resetPassword(form.email)
        alert('Revisa tu correo para restablecer la contraseña.')
        setMode('login')
      }
    } catch (err) {
      const msg =
        err?.code?.replace('auth/', '').replaceAll('-', ' ') ||
        'error inesperado'
      setError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  // 🔹 NUEVO: handler para Google
  const handleGoogleLogin = async () => {
    setSubmitting(true)
    setError('')
    try {
      await loginWithGoogle()
      navigate('/dashboard')
    } catch (err) {
      const msg =
        err?.code?.replace('auth/', '').replaceAll('-', ' ') ||
        'error al iniciar con google'
      setError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-[80dvh] grid place-items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <div className="flex gap-2 mb-6">
          <button
            className={`flex-1 py-2 rounded ${
              mode === 'login' ? 'bg-gray-900 text-white' : 'border'
            }`}
            onClick={() => setMode('login')}
          >
            Entrar
          </button>
          <button
            className={`flex-1 py-2 rounded ${
              mode === 'register' ? 'bg-gray-900 text-white' : 'border'
            }`}
            onClick={() => setMode('register')}
          >
            Crear cuenta
          </button>
          <button
            className={`flex-1 py-2 rounded ${
              mode === 'reset' ? 'bg-gray-900 text-white' : 'border'
            }`}
            onClick={() => setMode('reset')}
          >
            Olvidé contraseña
          </button>
        </div>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                name="displayName"
                value={form.displayName}
                onChange={onChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-1">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {mode !== 'reset' && (
            <div>
              <label className="block text-sm mb-1">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2 rounded bg-gray-900 text-white disabled:opacity-60"
          >
            {submitting
              ? 'Procesando…'
              : mode === 'login'
                ? 'Entrar'
                : mode === 'register'
                  ? 'Crear cuenta'
                  : 'Enviar correo'}
          </button>
        </form>

        {/* 🔹 Botón Google OAuth */}
        <button
          type="button"
          disabled={submitting}
          onClick={handleGoogleLogin}
          className="w-full py-2 rounded border mt-4 flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  )
}
