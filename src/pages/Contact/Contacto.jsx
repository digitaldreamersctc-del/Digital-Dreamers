import { useNavigate } from "react-router-dom";
import ContactForm from '../Contact/components/ContactForm.jsx'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contacto() {

  const navigate = useNavigate();
  return (
    <div className="bg-[#DAD2FF] text-gray-800 rounded-3xl">

      {/* Hero */}
      <section className="text-center py-20 bg-white shadow-md mt-10 mb-20 px-6">
        <h1 className="text-6xl font-bold text-[#281e76] mb-6 font-[Merienda]">
          ¡Conectemos!
        </h1>
        <p className="max-w-3xl mx-auto text-xl font-medium text-[#493D9E]">
          Completa el formulario para que podamos conocerte mejor y responderte
          lo antes posible.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-6xl mx-auto px-6 sm:px-10 lg:px-24 pb-16">
        {/* Dirección */}
        <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md border-2 border-[#281e76] hover:border-[#cb60f1] transition-all duration-300">
          <MapPin className="w-8 h-8 text-[#cb60f1]" />
          <p className="font-bold text-gray-700">
            Carabayllo<br />Lima, Perú
          </p>
        </div>

        {/* Teléfono */}
        <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md border-2 border-[#281e76] hover:border-[#cb60f1] transition-all duration-300">
          <Phone className="w-8 h-8 text-[#cb60f1]" />
          <a
            href="tel:+51968325993"
            className="font-bold text-gray-700 hover:text-[#281e76]  transition"
          >
            968 325 993
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md border-2 border-[#281e76] hover:border-[#cb60f1] transition-all duration-300">
          <Mail className="w-8 h-8 text-[#cb60f1]" />
          <a
            href="mailto:digitaldreamersctc@gmail.com"
            className="font-bold text-gray-700 hover:text-[#281e76] transition"
          >
            digitaldreamersctc@gmail.com
          </a>
        </div>
        </div>

        {/* 📩 formulario de contacto */}
        <section>
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg text-gray-800">
            <ContactForm />
          </div>
        </section>

        {/* 🔙 botón para regresar */}
        <section
          className="
          relative
          w-full flex flex-col items-center gap-10
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20 lg:py-24
        "
        >
          <button
            onClick={() => navigate("/")}
            className="mt-10 
            px-6 py-3 rounded-xl font-semibold
            hover:scale-105 hover:shadow-lg
            inline-block bg-[#281e76] text-white text-lg
            shadow-md transition-all duration-300 
              hover:bg-[#cb60f1]"
          >
            ← Volver al lanzamiento
          </button>
        </section>
      </div>
      )
}