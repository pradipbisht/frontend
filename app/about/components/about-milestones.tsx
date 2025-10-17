import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestones = [
  { year: "2024", event: "Platform launched with first wellness tools" },
  { year: "2024", event: "10,000+ users joined our community" },
  { year: "2025", event: "AI-powered recommendations introduced" },
  { year: "2025", event: "50,000+ personalized routines created" },
];

export default function AboutMilestones() {
  return (
    <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Our Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-background/50 border border-border rounded-lg">
              <Badge variant="default" className="shrink-0">
                {milestone.year}
              </Badge>
              <p className="text-sm">{milestone.event}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
