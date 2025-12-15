export default function CardT({
  title,
  description,
  image,
  name,
  className = '',
}) {
  return (
    <div
      className={`
        ${className}
        grid grid-cols-1 sm:grid-cols-3
        bg-white
        w-full sm:w-[300px] md:w-[350px] lg:w-[400px]
        rounded-2xl overflow-hidden
        shadow-md border-l-6 border-2 border-[#281e76]
        hover:border-[#cb60f1]
        transition-transform duration-300
        hover:-translate-y-2 hover:shadow-lg
        cursor-pointer
         text-lg leading-relaxed
      `}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full sm:h-auto object-cover sm:col-span-1"
        />
      )}

      <div className="p-5 text-center sm:text-left sm:col-span-2 flex flex-col justify-center">
        <h3 className="text-[#493D9E] font-[Concert_One] text-2xl">{name}</h3>
        <p className="text-gray-800 font-light text-md leading-relaxed my-2">
          {description}
        </p>
      </div>
    </div>
  )
}
