import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Wellness Officer",
    specialty: "Dermatology & Nutrition",
    image: "👩‍⚕️",
  },
  {
    name: "Mike Chen",
    role: "Head of Product",
    specialty: "AI & User Experience",
    image: "👨‍💻",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Advisor",
    specialty: "Child Development",
    image: "👩‍⚕️",
  },
];

export default function AboutTeam() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Meet Our Expert Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((member, idx) => (
          <Card
            key={idx}
            className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <div className="text-5xl mb-4">{member.image}</div>
              <CardTitle className="text-xl">{member.name}</CardTitle>
              <Badge variant="secondary" className="mx-auto">
                {member.role}
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                {member.specialty}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
