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
    <footer className="bg-[#281e76] text-white py-16">
      {/* LOGO + FRASE */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col items-center md:items-start">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Digital Dreamers Logo"
          className="w-32 mb-4"
        />
        <p className="text-2xl opacity-90 text-center md:text-left">
          Impulsamos sueños con código
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-2 text-center md:text-left">
        {/* Conócenos */}
        <div>
          <h3 className="font-[Concert_One]  text-2xl mb-2">Conócenos</h3>
          <ul className="space-y-2 text-sm font-semibold">
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
          <div className="flex justify-center md:justify-start space-x-4 text-xl font-semibold mb-6">
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
          <a href="#" className="text-sm hover:text-[#FFF2AF] transition">
            Términos de Privacidad
          </a>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-[Concert_One]  text-2xl mb-2">Contáctanos</h3>
          <ul className="space-y-2 text-sm">
            <li>Carabayllo - Lima, Perú</li>
            <li>968 325 993</li>
            <li>digitaldreamersctc@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-2xl mt-12  font-[Concert_One] border-t-4 border-[#B2A5FF] pt-6 ">
        © 2025 Digital Dreamers
      </div>
    </footer>
  )
}
