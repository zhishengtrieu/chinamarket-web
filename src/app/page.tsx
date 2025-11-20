import Link from "next/link";
import Image from "next/image";
import OpeningHours from "@/components/OpeningHours";

export default function Home() {
  return (
    <main className="flex-grow">
      <header
        className="relative w-full md:h-screen flex flex-col items-center justify-center text-white text-center p-10">
        <Image
          src="/chinese_meal.jpg"
          alt="Repas chinois traditionnel"
          fill
          className="absolute inset-0 z-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">China Market Wan Jia Long</h1>
          <p className="text-lg md:text-xl mb-6">
            Votre épicerie asiatique de confiance pour tous vos produits exotiques et du quotidien.
          </p>
          <Link href="/magasin" passHref>
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md 
                        transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Découvrir notre magasin"
            >
              Découvrir notre magasin
            </button>
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <article className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Notre engagement</h2>
          <p className="text-gray-700">
            Nous nous efforçons de vous offrir une sélection soigneusement choisie pour satisfaire vos besoins
            culinaires. Venez découvrir une large gamme de produits asiatiques authentiques, frais et de qualité !
            </p>
        </article>

        <OpeningHours />
      </section>
    </main>
  );
}
