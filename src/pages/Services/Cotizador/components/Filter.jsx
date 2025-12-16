export function Filters({ type, setType, category, setCategory }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex flex-col md:flex-row gap-4 text-gray-800">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-lg p-2 border-[#cb60f1] focus:border-[#493D9E] hover:bg-gray-50"
      >
        <option value="all">Todos</option>
        <option value="services">Servicios</option>
        <option value="packages">Paquetes</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg p-2 border-[#cb60f1] focus:border-[#493D9E] hover:bg-gray-50"
      >
        <option value="all">Todas las categorías</option>
        <option value="educativo">Educativo individual</option>
        <option value="marca">Marca colectiva</option>
        <option value="ecommerce">E-commerce</option>
        <option value="blog">Blog personal</option>
        <option value="portfolio">Portafolio profesional</option>
      </select>
    </div>
  )
}
