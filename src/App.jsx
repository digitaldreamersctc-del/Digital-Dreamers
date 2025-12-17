import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/NavBar.jsx'
import Footer from './components/layout/Footer.jsx'

// Páginas
import Lanzamiento from './pages/Home/Lanzamiento/WebsiteLaunch.jsx'
import Inicio from './pages/Home/Index.jsx'
import Nosotras from './pages/AboutUs/Nosotras.jsx'
import Contacto from './pages/Contact/Contacto.jsx'
import Servicios from './pages/Services/Servicios.jsx'

// Autenticación
import { AuthProvider } from './auth/AuthProvider.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Login from './pages/Login/Login.jsx'
import Dashboard from './pages/Login/Dashboard/Dashboard.jsx'
import CustomCursor from './components/ui/CustomCursor.jsx'

function App() {
  return (
    <AuthProvider>
      {/* Cursor global */}
      <CustomCursor />

      <div className="min-h-screen flex flex-col font-[Poppins]">
        <Navbar />

        <main className="grow p-6">
          <Routes>
            {/* Rutas existentes */}
            <Route path="/" element={<Lanzamiento />} />
            <Route path="/home" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotras" element={<Nosotras />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Nueva ruta para iniciar sesión */}
            <Route path="/login" element={<Login />} />

            {/* Ejemplo de ruta protegida */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* ✅ NUEVA RUTA PROTEGIDA: PERFIL */}
            <Route path="/perfil" element={<ProtectedRoute></ProtectedRoute>} />
          </Routes>
        </main>
      </div>

      <Footer />
    </AuthProvider>
  )
}
export default App
