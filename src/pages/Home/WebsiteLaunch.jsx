import { Link } from "react-router-dom";

export default function Lanzamiento() {
    return (
        <div className="bg-[#DAD2FF] text-[#281e76] rounded-3xl overflow-hidden">

            {/* ===============================HERO – LANZAMIENTO OFICIAL=============================== */}
            <section
                className="flex flex-col justify-center items-center text-center
                   bg-linear-to-tr from-[#B2A5FF] to-gray-50
                   px-10 py-32"
            >
                <h1
                    className="text-[clamp(3.2rem,6vw,6rem)] font-[Merienda]
                     font-extrabold tracking-wide leading-tight
                     text-[#281e76]"
                >
                    🚀 Lanzamiento Oficial
                </h1>

                {/* PROPUESTA DE VALOR */}
                <p
                    className="mt-8 max-w-3xl text-xl md:text-2xl
                     font-semibold text-[#493D9E]"
                >
                    Presentamos oficialmente a <strong>Digital Dreamers</strong>, un equipo
                    creativo que combina diseño web, tecnología y trabajo colaborativo
                    para desarrollar soluciones digitales modernas, funcionales y con
                    identidad.
                </p>

                {/* CTA */}
                <div className="mt-12">
                    <Link
                        to="/contacto"
                        className="inline-block bg-[#281e76] text-white
                       px-10 py-4 rounded-2xl text-lg font-semibold
                       shadow-md transition-all duration-300
                       hover:bg-[#B2A5FF] hover:text-[#281e76]
                       hover:scale-105"
                    >
                        Conectemos
                    </Link>
                </div>
            </section>

            {/* ===============================PUBLICACIÓN PARA REDES=============================== */}
            <section className="bg-gray-50 px-10 lg:px-24 py-24 text-center">
                <h2
                    className="text-4xl font-[Merienda] font-bold mb-10
                     text-[#281e76]"
                >
                    📢 Publicación para redes sociales
                </h2>

                <div
                    className="bg-[#DAD2FF] rounded-3xl p-10 
                    max-w-4xl mx-auto text-lg font-medium
                    text-[#493D9E]
                    shadow-lg hover:shadow-2xl
                    transform transition-all duration-300
                    hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
                >
                    <p>
                        🚀 Hoy presentamos oficialmente a <strong>Digital Dreamers</strong>,
                        un equipo creativo enfocado en el desarrollo de experiencias
                        digitales modernas y funcionales 💻✨
                        <br /><br />
                        Trabajamos con pasión, organización y creatividad para transformar
                        ideas en proyectos digitales con propósito.
                    </p>
                </div>
            </section>

            {/* 💜 Por qué elegirnos */}
            <section className="w-full bg-[#DAD2FF] py-14 px-6 text-center">
                <h2 className="text-4xl italic text-gray-800 mb-10">¿Por qué elegirnos?</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        { icon: "💜", title: "PERSPECTIVA ÚNICA", text: "Como equipo 100% femenino, aportamos una visión fresca y diversa que transforma cada proyecto en algo auténtico." },
                        { icon: "⚡", title: "AGILIDAD Y FLEXIBILIDAD", text: "Nos adaptamos rápidamente a los cambios con metodologías ágiles, entregando resultados óptimos sin perder calidad." },
                        { icon: "🔍", title: "ATENCIÓN AL DETALLE", text: "Cuidamos cada píxel, línea de código y palabra para que tu producto no solo funcione, sino que brille." },
                        { icon: "🌱", title: "IMPACTO SOSTENIBLE", text: "No construimos solo proyectos, sino soluciones que evolucionan contigo y generan impacto positivo a largo plazo." },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 hover:bg-[#bfa9ff]/70 transition-colors duration-300"
                        >
                            <h3 className="text-[#3C2A91] font-semibold mb-2">
                                {item.icon} {item.title}
                            </h3>
                            <p className="text-gray-700 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🌟 Sección Servicios */}
            <section className="w-full bg-[#DAD2FF] py-18 px-6 text-center">
                <h2 className="text-4xl italic text-gray-800 mb-10">¿En qué podemos ayudarte?</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: "🎨", title: "Diseño UX/UI", text: "Diseñamos experiencias digitales atractivas, intuitivas y centradas en el usuario.", bg: "bg-white" },
                        { icon: "💻", title: "Desarrollo Web", text: "Desde páginas informativas hasta plataformas dinámicas, creamos soluciones a medida.", bg: "bg-white" },
                        { icon: "🚀", title: "Estrategia Digital", text: "Te guiamos en marketing, redes sociales y posicionamiento online.", bg: "bg-white" },
                        { icon: "🤖", title: "Integración con IA", text: "Implementamos herramientas de inteligencia artificial para potenciar tu negocio.", bg: "bg-white" },
                        { icon: "🌍", title: "Consultoría en Diversidad Tech", text: "Fomentamos equipos inclusivos y entornos tecnológicos más diversos.", bg: "bg-white" },
                        { icon: "📚", title: "Formación y Workshops", text: "Capacitaciones prácticas en programación, diseño y herramientas digitales.", bg: "bg-white" },
                    ].map((servicio, index) => (
                        <div
                            key={index}
                            className={`${servicio.bg} rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300`}
                        >
                            <h3 className="text-lg font-semibold text-[#3C2A91] mb-2">
                                {servicio.icon} {servicio.title}
                            </h3>
                            <p className="text-gray-700 text-sm">{servicio.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===============================CTA FINAL=============================== */}
            <section
                className="bg-linear-to-r from-[#281e76] to-[#493D9E]
                   text-white py-24 text-center"
            >
                <h2 className="text-4xl font-bold font-[Merienda] mb-6">
                    ¿List@ para conocer al equipo?
                </h2>

                <p className="text-xl mb-10 max-w-2xl mx-auto">
                    Descubre quiénes somos y cómo podemos ayudarte a crear
                    soluciones digitales con estilo y propósito.
                </p>

                <Link
                    to="/nosotras"
                    className="inline-block bg-white text-[#281e76]
                     px-10 py-4 rounded-2xl text-lg font-semibold
                     transition-all duration-300
                     hover:bg-[#B2A5FF] hover:scale-105"
                >
                    Conócenos
                </Link>
            </section>

        </div>
    );
}
