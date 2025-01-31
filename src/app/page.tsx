export default function Home() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">China Market Wan Jia Long</h1>
      <p className="mb-4">Votre destination pour une expérience culinaire authentique au cœur de votre quartier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Notre engagement</h2>
          <p>
            Nous nous efforçons de vous offrir une sélection soigneusement choisie pour satisfaire vos besoins
            culinaires et vous faire découvrir la richesse de la cuisine asiatique.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Horaires d&apos;ouverture</h2>
          <ul className="list-none">
            <li>Lundi - Samedi : 9h30 - 11h30 et 14h00 - 18h00</li>
            <li>Dimanche et jour férié : 9h30 - 11h30</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
