import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Support",
    primary: "hello@wellnessai.com",
    secondary: "Response within 24 hours",
    color:
      "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Live Chat",
    primary: "Available Mon-Fri",
    secondary: "9 AM - 6 PM EST",
    color:
      "bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone Support",
    primary: "+1 (555) 123-WELL",
    secondary: "Emergency consultations",
    color:
      "bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Office Location",
    primary: "San Francisco, CA",
    secondary: "By appointment only",
    color:
      "bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800",
  },
];

export default function ContactMethods() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">How to Reach Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => (
          <Card
            key={index}
            className={`${method.color} text-center hover:shadow-lg transition-all duration-300`}>
            <CardHeader>
              <div className="flex justify-center text-primary mb-2">
                {method.icon}
              </div>
              <CardTitle className="text-lg">{method.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">{method.primary}</p>
              <p className="text-sm text-muted-foreground">
                {method.secondary}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
