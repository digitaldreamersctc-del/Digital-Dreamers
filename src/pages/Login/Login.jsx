import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export default function Login() {
  const {
    login,
    register,
    resetPassword,
    setError,
    error,
    loginWithGoogle,
  } = useAuth();

  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", displayName: "" });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      if (mode === "login") {
        await login({ email: form.email, password: form.password });
        navigate("/dashboard");
      } else if (mode === "register") {
        await register({ email: form.email, password: form.password, displayName: form.displayName });
        navigate("/dashboard");
      } else {
        await resetPassword(form.email);
        alert("Revisa tu correo para restablecer la contraseña.");
        setMode("login");
      }
    } catch (err) {
      const msg = err?.code?.replace("auth/", "").replaceAll("-", " ") || "error inesperado";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    console.log("🟡 Clic detectado: intentando iniciar sesión con Google...");
    setSubmitting(true);
    setError("");
    try {
      const user = await loginWithGoogle();
      console.log("🟢 Inicio de sesión exitoso:", user);
      navigate("/dashboard");
    } catch (err) {
      console.error("🔴 Error completo en login con Google:", err);
      const msg = err?.code?.replace("auth/", "").replaceAll("-", " ") || "error al iniciar con google";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80dvh] grid place-items-center px-4 bg-[#DAD2FF]">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

        {/* Modo de acceso */}
        <div className="flex gap-2 mb-6">
          {["login", "register", "reset"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors duration-300
                ${mode === m ? "bg-[#281e76] text-white shadow-md" : "border border-gray-300 hover:bg-gray-100"}`}
            >
              {m === "login" ? "Entrar" : m === "register" ? "Crear cuenta" : "Olvidé mi contraseña"}
            </button>
          ))}
        </div>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Nombre</label>
              <input
                name="displayName"
                value={form.displayName}
                onChange={onChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb60f1]"
                placeholder="Tu nombre"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label className="text-sm mb-1 font-medium">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb60f1]"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          {mode !== "reset" && (
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb60f1]"
                placeholder="********"
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2 rounded-lg bg-[#281e76] text-white font-semibold hover:bg-[#352C7A] transition-colors disabled:opacity-60"
          >
            {submitting
              ? "Procesando…"
              : mode === "login"
              ? "Entrar"
              : mode === "register"
              ? "Crear cuenta"
              : "Enviar correo"}
          </button>
        </form>

        {/* Google OAuth */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={submitting}
          className="w-full mt-4 py-2 rounded-lg border flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors disabled:opacity-60"
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
  );
}
