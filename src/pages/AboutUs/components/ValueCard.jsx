import { useState } from 'react'
import {
  Users,
  Palette,
  TrendingUp,
  CalendarCheck,
  Search,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

const iconMap = {
  colaboracion: Users,
  creatividad: Palette,
  perseverancia: TrendingUp,
  responsabilidad: CalendarCheck,
  curiosidad: Search,
  respeto: HeartHandshake,
}

export default function ValueCard({ item }) {
  const [open, setOpen] = useState(false)
  const Icon = iconMap[item.id]

  return (
    <div
      className="
        group bg-white rounded-2xl p-6
        shadow-md hover:shadow-xl
        border border-transparent hover:border-[#cb60f1] 
        transition-all duration-300
        hover:-translate-y-2
        flex flex-col justify-between
        min-h-[280px] "
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className="
                        p-3 rounded-xl
                        text-[#493D9E]
                        border border-[#cb60f1] 
                        transition-transform duration-300
                        group-hover:scale-110"
          >
            <Icon size={24} />
          </div>
          <h3 className="font-[Concert_One] text-2xl text-[#281e76]">
            {item.title}
          </h3>
        </div>

        {/* Texto corto */}
        <p className="text-md text[#281e76] leading-relaxed mb-3">
          {item.summary}
        </p>

        {/* Texto desplegable */}
        {open && (
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {item.detail}
          </p>
        )}
      </div>

      {/* Footer */}
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="
            inline-flex items-center gap-1
            text-md font-semibold
            text-[#493D9E] hover:text-[#cb60f1] 
            transition"
        >
          {open ? 'Ver menos' : 'Ver más'}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <div
          className="
            mt-4 bg-[#ffee98] 
            text-[#281e76] text-md
            rounded-lg px-3 py-2
            text-center font-medium"
        >
          “{item.quote}”
        </div>
      </div>
    </div>
  )
}
