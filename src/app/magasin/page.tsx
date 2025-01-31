export const metadata = {
  title: "Notre magasin",
};

export default function AboutHome() {
  return (
    <main className="flex-1 bg-background">
      <section className="container mx-auto px-8 py-12">
        <article className="mb-12">
          <h1 className="text-4xl font-extrabold text-center mb-6">À propos de nous</h1>
          <p className="text-lg text-gray-700 mb-4">
            China Market est une petite épicerie familiale spécialisée dans les produits asiatiques et dédiée 
            à apporter des saveurs authentiques au quartier Mon Désert.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Depuis 2008, notre épicerie s’efforce de créer un espace accueillant où les amateurs de cuisine 
            asiatique peuvent trouver leur bonheur.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Notre équipe est toujours prête à vous conseiller et à vous aider à explorer de nouvelles saveurs pour enrichir vos expériences culinaires.
          </p>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <article className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Informations pratiques</h2>
            <p className="mb-2"><strong>Adresse :</strong> 1 Rue Villebois Mareuil, 54000 Nancy</p>
            <p className="mb-2"><strong>Téléphone :</strong> 03 83 27 97 59</p>
            <p className="mb-2"><strong>Email :</strong> contact@chinamarket.fr</p>
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

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4">Nous trouver</h2>
          <div className="w-full h-64 md:h-96 flex justify-center">
            <iframe 
              className="h-full w-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.117730934592!2d6.180456100000001!3d48.684113700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794986562040189%3A0x4a51d9d39df93c76!2sChina%20Market!5e0!3m2!1sfr!2sca!4v1738352339434!5m2!1sfr!2sca" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
