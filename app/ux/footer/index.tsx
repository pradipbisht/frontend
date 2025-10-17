import {
  FooterNewsletter,
  FooterStats,
  FooterBrand,
  FooterNavigation,
  FooterBottom,
} from "./footer-components";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Newsletter & Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          <FooterNewsletter />
          <FooterStats />
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FooterBrand />
          </div>
          <div className="lg:col-span-3">
            <FooterNavigation />
          </div>
        </div>

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
}
