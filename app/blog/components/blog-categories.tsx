import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Health & Wellness",
    count: 124,
    color:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  },
  {
    name: "Skincare",
    count: 89,
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  },
  {
    name: "Haircare",
    count: 56,
    color:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  {
    name: "Pet Care",
    count: 78,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  {
    name: "Parenting",
    count: 67,
    color:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  },
];

export default function BlogCategories() {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Browse by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`${category.color} hover:scale-105 transition-transform cursor-pointer`}>
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
