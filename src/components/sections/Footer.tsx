import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink">
      <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent-2 to-accent-3" />
      <Container className="flex flex-col items-center gap-4 py-10 text-center text-sm text-muted">
        <p>© 2026 Bailey&apos;s Inner Circle. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms And Conditions
          </a>
        </div>
      </Container>
    </footer>
  );
}
