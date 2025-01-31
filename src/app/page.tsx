/*
import Image from "next/image";
  <div className="relative w-full h-64 md:h-96 mb-8">
    <Image
      src="/china_market.png"
      alt="Vue extérieure de l'épicerie China Market Wan Jia Long"
      layout="fill"
      objectFit="cover"
      className="rounded-lg shadow-lg"
    />
  </div>
*/

export default function Home() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">China Market Wan Jia Long</h1>
        <p className="text-lg text-gray-700">
          Votre destination pour une expérience culinaire authentique au cœur de votre quartier.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <article className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Notre engagement</h2>
          <p className="text-gray-700">
            Nous nous efforçons de vous offrir une sélection soigneusement choisie pour satisfaire vos besoins culinaires 
            et vous faire découvrir la richesse de la cuisine asiatique.
          </p>
        </article>

        <article className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Horaires d&apos;ouverture</h2>
          <table className="w-full border-collapse border border-gray-200 text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Jour</th>
                <th className="border p-2">Matin</th>
                <th className="border p-2">Après-midi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Lundi - Samedi</td>
                <td className="border p-2">9h30 - 11h30</td>
                <td className="border p-2">14h00 - 18h00</td>
              </tr>
              <tr>
                <td className="border p-2">Dimanche et jours fériés</td>
                <td className="border p-2">9h30 - 11h30</td>
                <td className="border p-2">Fermé</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </main>
  );
}
