import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#281e76] font-[Poppins] text-white py-16">

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-[Concert_One] text-2xl mb-2 text-center md:text-left">
            Digital Dreamers
          </h3>
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Digital Dreamers Logo"
            className="w-40 mb-4 mx-auto md:mx-0"
          />
        </div>

        {/* Conócenos */}
        <div>
          <h3 className="font-[Concert_One]  text-2xl mb-2">Conócenos</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              { label: 'Inicio', to: '/' },
              { label: 'Nosotras', to: '/nosotras' },
              { label: 'Servicios', to: '/servicios' },
              { label: 'Contacto', to: '/contacto' },
              { label: 'Proyectos', to: '/proyectos' },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-[#FFF2AF] transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes + Términos */}
        <div>
          <h3 className="font-[Concert_One]  text-2xl mb-2">Redes Sociales</h3>
          <div className="flex justify-center md:justify-start space-x-4 opacity-90 text-xl font-semibold mb-6">
            {[
              FaFacebookF,
              FaInstagram,
              FaLinkedinIn,
              FaGithub,
              FaPinterestP,
            ].map((Icon, i) => (
              <Icon
                key={i}
                className="hover:text-[#FFF2AF] hover:scale-110 transition"
              />
            ))}
          </div>

          <h3 className="font-[Concert_One]  text-2xl mb-2">Términos</h3>
          <a href="#" className="text-sm opacity-90 hover:text-[#FFF2AF] transition">
            Términos de Privacidad
          </a>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-[Concert_One] text-2xl mb-2">Contáctanos</h3>
          <div className="flex justify-center md:justify-start opacity-90 space-x-4 text-xl mb-6">
            <ul     className="flex flex-col items-center md:items-start space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white" />
                <span>Carabayllo - Lima, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-white" />
                <span>968 325 993</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <span>digitaldreamersctc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-2xl mt-12 font-bold font-[Poppins] border-t-4 border-[#B2A5FF] pt-6 ">
        © 2025 Digital Dreamers
      </div>
    </footer>
  )
}
