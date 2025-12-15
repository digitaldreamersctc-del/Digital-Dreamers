import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'

export default function NavBar() {
  const auth = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  if (!auth) return null
  const { user, logout } = auth

  const links = [
    { label: 'Inicio', to: '/' },
    { label: 'Nosotras', to: '/nosotras' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Contacto', to: '/contacto' },
    { label: 'Proyectos', to: '/proyectos' },
  ]

  return (
    <header
      className="
      bg-[#281e76] sticky top-0 z-20 shadow-md
      grid grid-cols-1 md:grid-cols-4
    "
    >
      {/* CONTENEDOR GENERAL */}
      <div
        className="
        col-span-full
        grid grid-cols-1 md:grid-cols-4
        items-center
        px-6 py-4
      "
      >
        {/* 1 LOGO (1 columna) */}
        <div className="flex justify-between items-center md:col-span-1">
          <div className="text-white text-2xl font-bold">Digital Dreamers</div>

          {/* HAMBURGUESA */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-xl transition-transform hover:scale-110"
            >
              ☰
            </button>
          </div>
        </div>

        {/* 2 MENÚ (2 columnas desktop) */}
        <nav
          className={`
            md:col-span-2
            ${menuOpen ? 'block' : 'hidden'} lg:block
            md:flex
            flex-col md:flex-row
            justify-center
            mt-4 md:mt-0
          `}
        >
          <ul
            className="
            flex flex-col md:flex-row
            gap-2 md:gap-4
            text-white font-semibold text-lg
          "
          >
            {links.map((link) => {
              return (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                    px-3 py-2 
                    transition-all duration-200
                    hover:text-[#cb60f1] 
                    ${
                      isActive
                        ? 'border-b-4 border-[#ffee98] text-[#ffee98]'
                        : ''
                    }
                    `
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* 3 AUTH (1 columna) */}
        <div
          className="
          md:col-span-1
          flex flex-col md:flex-row
          items-start md:items-center
          gap-2
          mt-4 md:mt-0 order-3 md:order-0
        "
        >
          {user ? (
            <>
              <span className="text-[#ffee98] text-sm">
                Hola, {user.displayName || user.email}
              </span>

              <Link
                to="/dashboard"
                className="px-3 py-1.5 rounded bg-[#ffee98] text-[#281e76] font-semibold hover:bg-[#B2A5FF]"
              >
                Dashboard
              </Link>

              <Link
                to="/perfil"
                className="px-3 py-1.5 rounded border border-[#ffee98] font-semibold hover:bg-[#B2A5FF] hover:text-[#281e76]"
              >
                Perfil
              </Link>

              <button
                onClick={logout}
                className="px-3 py-1.5 rounded border border-[#ffee98] font-semibold hover:bg-[#B2A5FF] hover:text-[#281e76]"
              >
                Salir
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1.5 rounded border-[#ffee98] border-2 text-white focus:text-[#ffee98] font-semibold text-lg hover:border-[#cb60f1] "
            >
              Registrarse
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
