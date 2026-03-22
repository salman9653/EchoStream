import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-auto bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-bold text-foreground mb-2 text-base">The Content Engine</div>
          <p>© 2026 The Content Engine. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 font-medium">
          <Link href="#" className="hover:text-foreground transition-colors">Documentation</Link>
          <Link href="#" className="hover:text-foreground transition-colors">API</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
