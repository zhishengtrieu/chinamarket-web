import OpeningHours from "@/components/OpeningHours";

export const metadata = {
  title: "Notre magasin",
  description:
    "China Market - épicerie asiatique à Nancy. Horaires, contact, adresse et plan pour nous trouver.",
};


/*
  <p className="mb-2"><strong>Email :</strong> contact@chinamarket.fr</p>
*/

export default function AboutPage() {
  return (
    <main className="flex-1 bg-background container mx-auto px-8 py-12">
      <article className="mb-12">
        <h1 className="text-4xl font-extrabold text-center mb-6">À propos de nous</h1>
        <p className="text-lg text-gray-700 mb-4">
          China Market est une petite épicerie familiale spécialisée dans les produits asiatiques et dédiée
          à apporter des saveurs authentiques au quartier Mon Désert.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Depuis 2008, notre épicerie s&apos;efforce de créer un espace accueillant où les amateurs de cuisine
          asiatique peuvent trouver leur bonheur.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Notre équipe est toujours prête à vous conseiller et à vous aider à explorer de nouvelles saveurs pour
          enrichir vos expériences culinaires.
        </p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-12">
          <article className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Informations pratiques</h2>
            <p className="mb-2">
              <strong>Adresse :</strong>{' '}
              <a
                href={
                  'https://www.google.com/maps/search/?api=1&query=China+Market+Nancy+1+Rue+Villebois+Mareuil'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline"
              >
                1 Rue Villebois Mareuil, 54000 Nancy
              </a>
            </p>
            <p className="mb-2">
              <strong>Téléphone :</strong>{' '}
              <a href="tel:+33383279759" className="text-primary-600 underline">
                +33 3 83 27 97 59
              </a>
            </p>
          </article>

          <OpeningHours />
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-4">Nous retrouver</h2>
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
      </div>
    </main>
  );
}
