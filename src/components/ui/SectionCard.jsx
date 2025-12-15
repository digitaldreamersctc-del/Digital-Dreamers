export default function CardSec({ title, description, image, className = '' }) {
  return (
    <div
      className={`
        justify-center items-center gap-5
        p-6 w-full rounded-2xl
        ${className}
      `}
    >
      <div className="text-[#281e76] text-center  leading-relaxed">
        <h2 className="text-3xl font-[Concert_One] my-6">{title}</h2>
        <p className="my-2 text-medium">{description}</p>

        {image && (
          <div className="flex justify-center items-center w-full my-4">
            <img
              src={image}
              alt={title}
              className="w-full max-w-[500px] rounded-2xl object-cover
              transition-transform duration-300 hover:-translate-y-2"
            />
          </div>
        )}
      </div>
    </div>
  )
}
