export default function OpeningHours() {
  return (
    <main className="bg-white p-6 shadow-md rounded-lg">
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
    </main>
  )
}
