export default function SectionSplit({
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <section className="w-full">
      <div
        className={`
          max-w-7xl mx-auto
          flex flex-col
          ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}
          items-center
          gap-10 sm:gap-14 lg:gap-20
        `}
      >
        {/* CARD TEXTO */}
        <div className="w-full lg:w-1/2">
          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-6 sm:p-8 lg:p-10
              transition-all
              hover:shadow-xl
            "
          >
            <h2
              className="
                text-2xl sm:text-3xl lg:text-4xl
                font-[Concert_One] font-bold
                text-[#281e76]
                mb-4 sm:mb-6
              "
            >
              {title}
            </h2>

            <p
              className="
                text-base sm:text-lg lg:text-xl
                text-[#493D9E]
                leading-relaxed
                font-medium
              "
            >
              {description}
            </p>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="
              w-full
              max-w-xs sm:max-w-md lg:max-w-xl
              rounded-3xl
              shadow-md
              object-cover
              transition-transform
              hover:-translate-y-2
            "
          />
        </div>
      </div>
    </section>
  )
}
