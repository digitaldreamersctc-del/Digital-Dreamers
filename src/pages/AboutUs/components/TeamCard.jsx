import { useState } from 'react'
import { FaChevronDown, FaStar, FaTools } from 'react-icons/fa'

function TeamCard({ member }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg text-lg p-6 flex flex-col gap-4 hover:-translate-y-2 transition">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-[Concert_One] text-[#493D9E]">
          {member.name}
        </h3>
        <p className="text-lg  text-[#cb60f1] font-semibold">{member.role}</p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2">
        {member.skills.map((skill, i) => (
          <span
            key={i}
            className=" px-3 py-1 bg-[#EDE9FF] text-[#352C7A] rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Superpoder */}
      <div className="bg-[#C5BDF7] text-[#352C7A] p-4 rounded-lg text-sm font-semibold flex items-start gap-2">
        <FaStar className="mt-1" />
        {member.superpower}
      </div>

      {/* Herramientas */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[#493D9E] font-semibold">
          <FaTools />
          Herramientas
        </div>

        {member.tools.map((tool, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs font-medium">
              <span>{tool.name}</span>
              <span>{tool.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-linear-to-r from-[#e5afec] to-[#cb60f1] h-2 rounded-full"
                style={{ width: `${tool.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Historia desplegable */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-sm font-semibold text-[#493D9E] flex items-center justify-center gap-2 hover:underline"
      >
        Nuestra historia
        <FaChevronDown className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <p className="text-sm text-gray-600 leading-relaxed text-center">
          {member.story}
        </p>
      )}
    </div>
  )
}

export default TeamCard
