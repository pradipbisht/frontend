import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { footerData } from "./footer-data";

export function FooterNewsletter() {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">
            {footerData.newsletter.title}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            {footerData.newsletter.description}
          </p>
          <div className="flex max-w-sm mx-auto gap-2">
            <Input
              type="email"
              placeholder={footerData.newsletter.placeholder}
              className="flex-1"
            />
            <Button size="sm">Subscribe</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function FooterStats() {
  return (
    <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {footerData.stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function FooterBrand() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{footerData.brand.name}</h2>
        <p className="text-sm font-medium text-primary">
          {footerData.brand.tagline}
        </p>
      </div>
      <p className="text-sm text-muted-foreground max-w-sm">
        {footerData.brand.description}
      </p>
      <div className="flex gap-2">
        {footerData.social.map((social, index) => (
          <Button key={index} variant="ghost" size="icon" asChild>
            <Link href={social.href} aria-label={social.name}>
              <social.icon className="h-4 w-4" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

export function FooterNavigation() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {footerData.navigation.map((section, index) => (
        <div key={index} className="space-y-4">
          <h3 className="font-semibold text-foreground">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <link.icon className="h-3 w-3" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function FooterBottom() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border">
      <p className="text-sm text-muted-foreground">
        {footerData.legal.copyright}
      </p>
      <div className="flex gap-4">
        {footerData.legal.links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
