import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-20 px-4 border-t border-border/50">
      <div className="container mx-auto">

        {/* Logo + Tagline */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold">WildTrace</span>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm">
            Discover, identify, and protect wildlife with the power of AI.
          </p>
        </div>

        {/* Developer Credits */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold mb-8">Developed by the WildTrace Team</p>

          {/* Developer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">

            {/* Dev 1 */}
            <div className="flex flex-col items-center">
              <a
                href="https://github.com/henriksfu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Henrik Sachdeva (@henriksfu)
              </a>
              <span className="text-xs text-muted-foreground">API & Architecture Lead</span>
            </div>

            {/* Dev 2 */}
            <div className="flex flex-col items-center">
              <a
                href="https://github.com/ReidLockhart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Reid Lockhart (@ReidLockhart)
              </a>
              <span className="text-xs text-muted-foreground">User & UI/UX Lead</span>
            </div>

            {/* Dev 3 */}
            <div className="flex flex-col items-center">
              <a
                href="https://github.com/Roguecoder113"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Kavi Godden (@Roguecoder113)
              </a>
              <span className="text-xs text-muted-foreground">Backend & Database Lead</span>
            </div>

            {/* Dev 4 */}
            <div className="flex flex-col items-center">
              <a
                href="https://github.com/StevenG522"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Steven Gong (@StevenG522)
              </a>
              <span className="text-xs text-muted-foreground">Maps & Sighting Flow Lead</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex justify-center">
          <p className="text-sm text-muted-foreground">
            © 2025 WildTrace. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
