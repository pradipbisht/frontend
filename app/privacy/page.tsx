import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Lock,
  Eye,
  Download,
  Trash2,
  Settings,
  Mail,
  Clock,
} from "lucide-react";

export default function PrivacyPage() {
  const dataSections = [
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Personal Information",
      items: [
        "Name, email, and profile details",
        "Account preferences and settings",
        "Communication preferences",
      ],
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Wellness Data",
      items: [
        "Skin type and concern assessments",
        "Hair care preferences and results",
        "Pet information and care routines",
        "Parenting milestones and tracking",
      ],
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Usage Analytics",
      items: [
        "Pages visited and time spent",
        "Feature usage patterns",
        "Search queries and interactions",
        "Device and browser information",
      ],
    },
  ];

  const rights = [
    {
      icon: <Download className="h-4 w-4" />,
      title: "Access & Download",
      description:
        "Request a copy of all your personal data in a portable format",
    },
    {
      icon: <Settings className="h-4 w-4" />,
      title: "Rectification",
      description: "Correct or update any inaccurate personal information",
    },
    {
      icon: <Trash2 className="h-4 w-4" />,
      title: "Deletion",
      description: "Request deletion of your account and all associated data",
    },
    {
      icon: <Shield className="h-4 w-4" />,
      title: "Portability",
      description:
        "Transfer your data to another service in a structured format",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Shield className="h-10 w-10" />
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your privacy is fundamental to our mission. This policy explains how
          we collect, use, and protect your personal information when you use
          WellnessAI.
        </p>
        <Badge className="bg-green-100 text-green-700">
          <Clock className="h-3 w-3 mr-1" />
          Last updated: January 2025
        </Badge>
      </div>

      {/* Quick Summary */}
      <Card className="bg-pastel-mint border-pastel-mint">
        <CardHeader>
          <CardTitle className="text-2xl">Privacy at a Glance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-background/50 border border-border rounded-lg">
              <Lock className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold">Secure by Design</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade encryption protects all your data
              </p>
            </div>
            <div className="text-center p-4 bg-background/50 border border-border rounded-lg">
              <Eye className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold">No Hidden Tracking</h3>
              <p className="text-sm text-muted-foreground">
                We only collect data that improves your experience
              </p>
            </div>
            <div className="text-center p-4 bg-background/50 border border-border rounded-lg">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold">You're in Control</h3>
              <p className="text-sm text-muted-foreground">
                Full control over your data and privacy settings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Information We Collect */}
      <Card className="bg-pastel-peach border-pastel-peach">
        <CardHeader>
          <CardTitle className="text-2xl">Information We Collect</CardTitle>
          <p className="text-muted-foreground">
            We collect information to provide personalized wellness
            recommendations and improve our services.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {dataSections.map((section, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 p-2 bg-orange-100 rounded-lg text-orange-600">
                {section.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* How We Use Your Information */}
      <Card className="bg-pastel-lavender border-pastel-lavender">
        <CardHeader>
          <CardTitle className="text-2xl">
            How We Use Your Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Primary Purposes</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Provide personalized wellness recommendations and
                    assessments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Improve our AI algorithms and recommendation accuracy
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Send you relevant health tips and platform updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Ensure platform security and prevent misuse
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">We Never</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Sell your personal information to third parties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Share wellness data without explicit consent
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Use your data for advertising to other companies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm">
                    Access your data without legitimate business purposes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Security */}
      <Card className="bg-pastel-blue border-pastel-blue">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lock className="h-6 w-6" />
            Data Security & Protection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-background/50 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Encryption</h3>
              <p className="text-sm text-muted-foreground">
                All data is encrypted in transit and at rest using
                industry-standard AES-256 encryption
              </p>
            </div>
            <div className="p-4 bg-background/50 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Access Control</h3>
              <p className="text-sm text-muted-foreground">
                Strict access controls ensure only authorized personnel can
                access data for legitimate purposes
              </p>
            </div>
            <div className="p-4 bg-background/50 border border-border rounded-lg">
              <h3 className="font-semibold mb-2">Regular Audits</h3>
              <p className="text-sm text-muted-foreground">
                Security assessments and penetration testing conducted quarterly
                by third-party experts
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Your Rights */}
      <Card className="bg-pastel-pink border-pastel-pink">
        <CardHeader>
          <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
          <p className="text-muted-foreground">
            You have complete control over your personal information. Exercise
            these rights anytime.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {rights.map((right, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-background/50 border border-border rounded-lg">
                <div className="flex-shrink-0 p-2 bg-pink-100 rounded text-pink-600">
                  {right.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{right.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {right.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Separator />
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              To exercise any of these rights, contact our privacy team
            </p>
            <Button asChild className="gap-2">
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Contact Privacy Team
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Cookies & Tracking */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-pastel-mint border-pastel-mint">
          <CardHeader>
            <CardTitle className="text-xl">Cookies & Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">Essential Cookies</h3>
              <p className="text-xs text-muted-foreground">
                Required for basic functionality and security
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Analytics Cookies</h3>
              <p className="text-xs text-muted-foreground">
                Help us understand how users interact with our platform
                (optional)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Preference Cookies</h3>
              <p className="text-xs text-muted-foreground">
                Remember your settings and personalization choices
              </p>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              You can manage cookie preferences in your browser settings or
              through our cookie banner.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-pastel-peach border-pastel-peach">
          <CardHeader>
            <CardTitle className="text-xl">Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Account Data</span>
                <span className="text-muted-foreground">
                  Until account deletion
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Assessment Results</span>
                <span className="text-muted-foreground">
                  2 years (or until deletion)
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Usage Analytics</span>
                <span className="text-muted-foreground">
                  1 year (anonymized)
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Support Communications</span>
                <span className="text-muted-foreground">3 years</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              You can request early deletion of any data at any time.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* International Users */}
      <Card className="bg-pastel-lavender border-pastel-lavender">
        <CardHeader>
          <CardTitle className="text-xl">
            International Users & Compliance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-background/50 border border-border rounded-lg">
              <h3 className="font-semibold text-sm">🇪🇺 GDPR</h3>
              <p className="text-xs text-muted-foreground">
                Full compliance with European data protection laws
              </p>
            </div>
            <div className="p-3 bg-background/50 border border-border rounded-lg">
              <h3 className="font-semibold text-sm">🇺🇸 CCPA</h3>
              <p className="text-xs text-muted-foreground">
                California Consumer Privacy Act compliant
              </p>
            </div>
            <div className="p-3 bg-background/50 border border-border rounded-lg">
              <h3 className="font-semibold text-sm">🏥 HIPAA</h3>
              <p className="text-xs text-muted-foreground">
                Health information protection standards
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Data is processed in secure facilities within your region when
            possible. Cross-border transfers are protected by appropriate
            safeguards.
          </p>
        </CardContent>
      </Card>

      {/* Changes to Policy */}
      <Card className="bg-gray-100 border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl">Policy Updates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            We may update this privacy policy to reflect changes in our
            practices or legal requirements. We'll notify you of significant
            changes through:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              Email notification to registered users
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              Prominent notice on our website
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              Updated "Last Modified" date at the top of this policy
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Contact & Support */}
      <Card className="bg-gradient-to-r from-pastel-mint to-pastel-blue border-pastel-mint">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Questions About Privacy?</CardTitle>
          <p className="text-muted-foreground">
            Our privacy team is here to help with any questions or concerns
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Privacy Officer:</strong> privacy@wellnessai.com
            </p>
            <p className="text-sm">
              <strong>Data Protection:</strong> dpo@wellnessai.com
            </p>
            <p className="text-sm">
              <strong>General Contact:</strong> hello@wellnessai.com
            </p>
          </div>
          <Button asChild>
            <Link href="/contact">Contact Privacy Team</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
