// app/page.tsx
import Image from "next/image";

export default function Home() {
  // Array de recuerdos: cada imagen con su texto único
  const recuerdos = [
    { src: "/Foto1.jpg", alt: "Foto 1", texto: "En verdad nuestra historia comenzó mucho antes, sin embargo, esta fue una de nuestras primeras fotos." },
    { src: "/Foto2.jpg", alt: "Foto 2", texto: "En este punto ya soliamos compratir tiempo juntos, me encanta que no importa ni el donde, el cuando, ni el haciendo que. Disfrutamos estar juntos." },
    { src: "/Foto3.jpg", alt: "Foto 3", texto: "Los días se hacía cada vez más amenos y aunque el tiempo se pasaba volando, cada minuto a tu lado valía la pena." },
    { src: "/Foto4.jpg", alt: "Foto 4", texto: "A decir verdad no recuerdo que estábamos celebrando, tal vez que subí un par de kilos, jsjsjs, lo importante es que pasamos momentos importantes juntos." },
    { src: "/Foto5.jpg", alt: "Foto 5", texto: "Aunque cada día se volvía cotidiano, cada día era especial." },
    { src: "/Foto6.jpg", alt: "Foto 6", texto: "Ahora compartimos logros no solo nuestros, sino que también de nuestras familias." },
    { src: "/Foto7.jpg", alt: "Foto 7", texto: "Simplemente disfrutamos estar juntos, en cada risa, en cada llanto, en cada alegría, eramos simplemente los dos siendo felices." },
    { src: "/Foto8.jpg", alt: "Foto 8", texto: "Esto no es lo último, pero fue nuestra última gran experiencia. Tal vez nuestra rutina ha cambiado por diversos problemas, pero lo que nunca va a cambiar es el amor que sentimos el uno por el otro, tal vez no todo vaya cuesta arriba, pero se que va a estar bien si estoy a tu lado. Gracias por vivir muchas experiencias conmigo y espero que vivamos muchas más. TE AMO." },
  ];

  return (
    <main className="min-h-screen bg-rose-100 flex flex-col items-center p-8 sm:p-12">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-12 text-center">
        La historia de nuestro amor
      </h1>

      {/* Contenedor de grid responsivo */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {recuerdos.map((recuerdo, i) => (
          <article
            key={i}
            className="relative group rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            {/* Imagen local */}
            <Image
              src={recuerdo.src}
              alt={recuerdo.alt}
              width={600}
              height={600}
              className="object-cover w-full h-96 sm:h-[28rem] transition-transform duration-500 group-hover:scale-110 border-4 border-rose-500 shadow-[0_0_25px_rgba(244,114,182,0.7)]"
            />

            {/* Texto único */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-center text-base sm:text-lg">{recuerdo.texto}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
