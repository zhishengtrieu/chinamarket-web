export const metadata = {
  title: 'Contactez-nous',
}
/*
  <p className="mb-2">Email : contact@chinamarket.fr</p>
*/
export default function ContactPage() {
  return (
    <div className="bg-background flex-1">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Contactez-nous</h1>
        </div>
      </header>
      <section className="container mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-20 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Coordonnées</h2>
          <p className="mb-2">Adresse : 1 Rue Villebois Mareuil, 54000 Nancy</p>
          <p className="mb-2">Téléphone : 03 83 27 97 59</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Heures d&apos;ouverture</h2>
          <ul className="list-none">
            <li>Lundi - Samedi : 9h30 - 11h30 et 14h00 - 18h00</li>
            <li>Dimanche et jour férié : 9h30 - 11h30</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
