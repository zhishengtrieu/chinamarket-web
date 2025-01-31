export const metadata = {
  title: 'Notre magasin',
}

export default function AboutHome() {
  return (
    <main className="flex-1 bg-background">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">À propos de nous</h1>
        </div>
      </header>
      <section className="flex-grow container mx-auto px-8">
        <p className="mb-4">
          China Market est une petite épicerie familiale spécialisée dans les produits asiatiques et dédiée à
          apporter des saveurs authentiques au quartier Mon desert.
        </p>
        <p className="mb-4">
          Depuis 2008, notre épicerie s&apos;efforce de créer un espace accueillant où les amateurs de cuisine
          asiatique peuvent trouver leur bonheur.
        </p>
        <p className="mb-4">
          Notre équipe est toujours prête à vous conseiller et à vous aider à explorer de nouvelles saveurs pour
          enrichir vos expériences culinaires.
        </p>
      </section>
    </main>
  )
}
