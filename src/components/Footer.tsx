export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-8 text-center">
      <p className="container mx-auto text-muted-foreground">
        &copy; {currentYear} China Market. Tous droits réservés.
      </p>
    </footer>
  )
}
