export default function CardSec({
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
        grid grid-cols-1 bg-white
        w-full
        sm:w-[250px] md:w-[300px] lg:w-[350px]
        sm:h-[250px] md:h-[300px] lg:h-[350px]
        text-center text-md 
        rounded-2xl overflow-hidden
        shadow-md hover:shadow-lg
        border-2 border-[#281e76] hover:border-[#cb60f1]
        transition-all duration-300
        hover:-translate-y-2
      `}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="
            w-full
            h-full
            object-cover
            lg:col-span-1
          "
        />
      )}

      <div className="p-5 flex flex-col justify-center items-center">
        <h3 className="text-[#493D9E] font-[Concert_One] text-2xl py-4">
          {title}
        </h3>

        <p className="text-gray-800 font-medium">
          {description}
        </p>
      </div>
    </div>
  )
}