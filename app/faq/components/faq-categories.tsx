import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "General",
    count: 8,
    color:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  },
  {
    name: "Skincare",
    count: 12,
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  },
  {
    name: "Haircare",
    count: 9,
    color:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  {
    name: "Pets",
    count: 11,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  {
    name: "Parenting",
    count: 7,
    color:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  },
  {
    name: "Technical",
    count: 6,
    color: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300",
  },
];

export default function FAQCategories() {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Browse by Category
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`${category.color} hover:scale-105 transition-transform cursor-pointer p-3 justify-center`}>
              <div className="text-center">
                <div className="font-medium">{category.name}</div>
                <div className="text-xs opacity-80">({category.count})</div>
              </div>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
