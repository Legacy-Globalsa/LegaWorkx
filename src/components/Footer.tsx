import logo from "@/assets/legaworkx-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="LEGAWORKX" className="h-12 w-auto mx-auto mb-4" />
        <p className="text-xs text-muted-foreground tracking-wide mb-6">
          Where Innovation Meets Automotive Excellence
        </p>
        <div className="gradient-line max-w-[120px] mx-auto mb-6" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Legacy Global Commercial Services Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
