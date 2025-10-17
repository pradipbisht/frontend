import {
  Heart,
  Baby,
  PawPrint,
  Sparkles,
  Dumbbell,
  Users,
  Shield,
  FileText,
  Mail,
  MessageCircle,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export const footerData = {
  brand: {
    name: "WellnessHub",
    tagline: "Your personalized wellness journey starts here",
    description:
      "AI-powered tools and expert guidance for skincare, haircare, pet care, parenting, and holistic wellness.",
  },

  navigation: [
    {
      title: "Wellness Tools",
      links: [
        { name: "All Tools", href: "/tools", icon: Sparkles },
        { name: "Skincare", href: "/skincare", icon: Heart },
        { name: "Haircare", href: "/haircare", icon: Sparkles },
        { name: "Pet Care", href: "/pets", icon: PawPrint },
        { name: "Parenting", href: "/parenting", icon: Baby },
        {
          name: "Health & Lifestyle",
          href: "/health-lifestyle",
          icon: Dumbbell,
        },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Join Community", href: "/community", icon: Users },
        { name: "Expert Advice", href: "/community#experts", icon: Heart },
        { name: "Success Stories", href: "/community#stories", icon: Sparkles },
        {
          name: "Discussions",
          href: "/community#discussions",
          icon: MessageCircle,
        },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "About Us", href: "/about", icon: Heart },
        { name: "Contact", href: "/contact", icon: Mail },
        { name: "Privacy Policy", href: "/privacy", icon: Shield },
        { name: "Terms of Service", href: "/terms", icon: FileText },
      ],
    },
  ],

  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "YouTube", href: "#", icon: Youtube },
  ],

  newsletter: {
    title: "Stay Updated",
    description: "Get weekly wellness tips and exclusive access to new tools.",
    placeholder: "Enter your email",
  },

  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Wellness Plans Created", value: "100K+" },
    { label: "Expert Partners", value: "200+" },
    { label: "Countries Served", value: "50+" },
  ],

  legal: {
    copyright: "© 2025 WellnessHub. All rights reserved.",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
};
