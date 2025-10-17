import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  AlertTriangle,
  Shield,
  Users,
  Gavel,
  Clock,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  const keyPoints = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Educational Purpose Only",
      description:
        "Our recommendations are for educational purposes and not medical advice",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community Guidelines",
      description:
        "Respectful behavior and appropriate use of our platform is required",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Limitation of Liability",
      description:
        "We provide tools and information but cannot guarantee specific outcomes",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Intellectual Property",
      description:
        "Our content and technology are protected by copyright and patents",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Gavel className="h-10 w-10" />
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          These terms govern your use of WellnessAI platform and services.
          Please read them carefully before using our wellness tools and
          recommendations.
        </p>
        <Badge className="bg-blue-100 text-blue-700">
          <Clock className="h-3 w-3 mr-1" />
          Last updated: January 2025
        </Badge>
      </div>

      {/* Key Points Overview */}
      <Card className="bg-pastel-mint border-pastel-mint">
        <CardHeader>
          <CardTitle className="text-2xl">Key Points Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-background/50 border border-border rounded-lg">
                <div className="flex-shrink-0 p-2 bg-green-100 rounded text-green-600">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{point.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Acceptance of Terms */}
      <Card className="bg-pastel-peach border-pastel-peach">
        <CardHeader>
          <CardTitle className="text-xl">1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            By accessing or using WellnessAI ("the Platform"), you agree to be
            bound by these Terms of Service and our Privacy Policy. If you do
            not agree to these terms, please do not use our services.
          </p>
          <p className="text-sm text-muted-foreground">
            These terms constitute a legally binding agreement between you and
            WellnessAI Inc. ("Company", "we", "us", or "our").
          </p>
          <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
            <p className="text-xs text-orange-700">
              <strong>Important:</strong> By creating an account or using our
              tools, you confirm you are at least 18 years old or have
              parental/guardian consent.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Service Description */}
      <Card className="bg-pastel-lavender border-pastel-lavender">
        <CardHeader>
          <CardTitle className="text-xl">2. Service Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm mb-2">What We Provide</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  AI-powered wellness assessments and personalized
                  recommendations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  Educational content on skincare, haircare, pet care, and
                  parenting
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  Product recommendations and affiliate marketplace integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  Interactive tools for tracking progress and building routines
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg">
              <h3 className="font-semibold text-sm mb-2">
                Service Limitations
              </h3>
              <ul className="space-y-1 text-xs text-purple-700">
                <li>
                  • Our platform is currently in beta - features may change or
                  be temporarily unavailable
                </li>
                <li>
                  • AI recommendations are based on general guidelines, not
                  personal medical examination
                </li>
                <li>
                  • Product availability and pricing are subject to third-party
                  merchant policies
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical Disclaimer */}
      <Card className="bg-pastel-blue border-pastel-blue border-2 border-blue-400">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-blue-600" />
            3. Medical Disclaimer & Health Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-sm text-blue-800 mb-2">
              🏥 IMPORTANT HEALTH NOTICE
            </h3>
            <div className="space-y-2 text-sm text-blue-700">
              <p>
                <strong>WellnessAI is NOT a medical service.</strong> Our
                recommendations are for educational and informational purposes
                only and do not constitute medical advice, diagnosis, or
                treatment.
              </p>
              <p>
                Always consult with qualified healthcare professionals before
                making significant changes to your health routines, especially
                if you have medical conditions, allergies, or are
                pregnant/nursing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-sm mb-2">
                For Health Concerns
              </h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Consult dermatologists for skin conditions</li>
                <li>• See trichologists for serious hair loss</li>
                <li>• Contact pediatricians for child health</li>
                <li>• Visit veterinarians for pet health issues</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">
                Emergency Situations
              </h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Call emergency services immediately</li>
                <li>• Do not rely on our platform for urgent care</li>
                <li>• Contact poison control for ingestion issues</li>
                <li>• Seek immediate help for allergic reactions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Responsibilities */}
      <Card className="bg-pastel-pink border-pastel-pink">
        <CardHeader>
          <CardTitle className="text-xl">
            4. User Responsibilities & Conduct
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-sm mb-2 text-green-700">
                ✅ You May
              </h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Use our tools for personal wellness guidance</li>
                <li>• Share your experiences in community features</li>
                <li>• Provide feedback to improve our services</li>
                <li>• Access and download your personal data</li>
                <li>• Use recommendations as starting points for research</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-red-700">
                ❌ You May Not
              </h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Provide false information in assessments</li>
                <li>• Share account credentials with others</li>
                <li>
                  • Use our platform for commercial purposes without permission
                </li>
                <li>• Attempt to reverse-engineer our AI algorithms</li>
                <li>• Post harmful, illegal, or inappropriate content</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 p-3 rounded-lg">
            <p className="text-xs text-pink-700">
              <strong>Account Suspension:</strong> Violation of these guidelines
              may result in temporary or permanent account suspension at our
              discretion.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Intellectual Property */}
      <Card className="bg-pastel-mint border-pastel-mint">
        <CardHeader>
          <CardTitle className="text-xl">
            5. Intellectual Property Rights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">Our Property</h3>
              <p className="text-xs text-muted-foreground">
                All content, algorithms, designs, logos, and software on
                WellnessAI are protected by copyright, trademark, and patent
                laws. This includes our AI models, assessment tools, and
                recommendation engines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm">Your Content</h3>
              <p className="text-xs text-muted-foreground">
                You retain ownership of content you submit (reviews, feedback,
                photos). By submitting content, you grant us a license to use it
                to improve our services and provide recommendations to other
                users.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm">Third-Party Content</h3>
              <p className="text-xs text-muted-foreground">
                Product information, reviews, and external links remain the
                property of their respective owners. We do not claim ownership
                of third-party brands or products featured on our platform.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Limitation of Liability */}
      <Card className="bg-pastel-peach border-pastel-peach">
        <CardHeader>
          <CardTitle className="text-xl">
            6. Limitation of Liability & Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-sm text-orange-800 mb-2">
              Service Disclaimers
            </h3>
            <ul className="space-y-1 text-xs text-orange-700">
              <li>
                • Services are provided "as is" without warranties of any kind
              </li>
              <li>
                • We cannot guarantee specific results from following our
                recommendations
              </li>
              <li>
                • Platform availability may be interrupted for maintenance or
                technical issues
              </li>
              <li>
                • Third-party product availability and pricing may change
                without notice
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">Liability Limitations</h3>
              <p className="text-xs text-muted-foreground">
                To the fullest extent permitted by law, WellnessAI shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of our platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm">Maximum Liability</h3>
              <p className="text-xs text-muted-foreground">
                Our total liability for any claims shall not exceed the amount
                you paid us in the 12 months preceding the claim (or $100 if you
                haven't paid us anything).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Termination & Account Management */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-pastel-lavender border-pastel-lavender">
          <CardHeader>
            <CardTitle className="text-lg">7. Account Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">By You</h3>
              <p className="text-xs text-muted-foreground">
                You may delete your account anytime through settings or by
                contacting support. Data deletion follows our privacy policy
                timelines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">By Us</h3>
              <p className="text-xs text-muted-foreground">
                We may suspend or terminate accounts for terms violations,
                illegal activity, or to protect our community.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-pastel-blue border-pastel-blue">
          <CardHeader>
            <CardTitle className="text-lg">8. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">
              We may update these terms to reflect service changes or legal
              requirements. Significant changes will be communicated through:
            </p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• Email notification (if you have an account)</li>
              <li>• Prominent website notice</li>
              <li>• Updated effective date</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Governing Law */}
      <Card className="bg-gray-100 border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl">
            9. Governing Law & Dispute Resolution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-sm">Governing Law</h3>
              <p className="text-xs text-muted-foreground">
                Delaware State Law
              </p>
            </div>
            <div className="p-3 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-sm">Jurisdiction</h3>
              <p className="text-xs text-muted-foreground">Delaware Courts</p>
            </div>
            <div className="p-3 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-sm">Disputes</h3>
              <p className="text-xs text-muted-foreground">
                Binding Arbitration
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Most disputes can be resolved through our customer support. For
            legal matters, we encourage mediation before formal proceedings.
          </p>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="bg-gradient-to-r from-pastel-mint to-pastel-peach border-pastel-mint">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Questions About These Terms?
          </CardTitle>
          <p className="text-muted-foreground">
            Our legal team is available to clarify any part of these terms
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Legal Inquiries:</strong> legal@wellnessai.com
            </p>
            <p className="text-sm">
              <strong>General Support:</strong> hello@wellnessai.com
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 123 Wellness Blvd, San Francisco, CA
              94105
            </p>
          </div>
          <Button asChild className="gap-2">
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Contact Legal Team
            </Link>
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
