import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#281e76] text-white py-16 mt-16">
      {/* LOGO + FRASE */}
      <div className="flex flex-col items-center md:items-start mb-14">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Digital Dreamers Logo"
          className="w-32 mb-4"
        />
        <p className="text-sm text-center md:text-left opacity-90">
          Impulsamos sueños con código
        </p>
      </div>

      {/* GRID DE SECCIONES */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Conócenos */}
        <div>
          <h3 className="font-[Concert_One] bold text-lg mb-4">Conócenos</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Inicio', to: '/' },
              { label: 'Nosotras', to: '/nosotras' },
              { label: 'Servicios', to: '/servicios' },
              { label: 'Contacto', to: '/contacto' },
              { label: 'Proyectos', to: '/proyectos' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="hover:text-[#FFF2AF] hover:scale-105 transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="font-[Concert_One] bold text-lg mb-4">
            Redes Sociales
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-[#FFF2AF] hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#FFF2AF] hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#FFF2AF] hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-[#FFF2AF] hover:scale-110 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              className="hover:text-[#FFF2AF] hover:scale-110 transition-transform duration-300"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-[Concert_One] bold text-lg mb-4">Contáctanos</h3>
          <ul className="space-y-2 text-sm">
            <li>Carabayllo-Lima, Perú</li>
            <li>901-767-000</li>
            <li>digitaldreamers@gmail.com</li>
          </ul>
        </div>

        {/* Términos de Privacidad */}
        <div>
          <h3 className="font-[Concert_One] bold text-lg mb-4">Términos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#FFF2AF] hover:scale-105 transition-all duration-300"
              >
                Términos de Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm mt-12 border-t-2 border-t-white pt-6 text-white font-bold">
        Copyright © 2025 Digital Dreamers
      </div>
    </footer>
  )
}
