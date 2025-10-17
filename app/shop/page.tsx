import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  Star,
  ShoppingCart,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";

export default function ShopPage() {
  const categories = [
    {
      name: "Health & Wellness",
      count: 234,
      color: "bg-pastel-mint text-pastel-mint",
    },
    {
      name: "Skincare",
      count: 156,
      color: "bg-pastel-peach text-pastel-peach",
    },
    {
      name: "Haircare",
      count: 89,
      color: "bg-pastel-lavender text-pastel-lavender",
    },
    { name: "Pet Care", count: 167, color: "bg-pastel-blue text-pastel-blue" },
    {
      name: "Baby & Parenting",
      count: 78,
      color: "bg-pastel-pink text-pastel-pink",
    },
  ];

  const expertChoice = [
    {
      id: 1,
      name: "CeraVe Hydrating Cleanser",
      price: "$12.99",
      rating: 4.8,
      image: "🧴",
      category: "Skincare",
      badge: "Expert's Choice",
    },
    {
      id: 2,
      name: "Biotin Hair Growth Supplement",
      price: "$24.99",
      rating: 4.6,
      image: "💊",
      category: "Haircare",
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "Organic Baby Food Maker",
      price: "$89.99",
      rating: 4.9,
      image: "🍼",
      category: "Baby & Parenting",
      badge: "Editor's Pick",
    },
  ];

  const trending = [
    {
      id: 4,
      name: "Premium Pet Food Bowl Set",
      price: "$34.99",
      rating: 4.7,
      image: "🐕",
      category: "Pet Care",
    },
    {
      id: 5,
      name: "Vitamin D3 + K2 Supplement",
      price: "$19.99",
      rating: 4.5,
      image: "💊",
      category: "Health & Wellness",
    },
    {
      id: 6,
      name: "Retinol Night Serum",
      price: "$45.99",
      rating: 4.8,
      image: "🌙",
      category: "Skincare",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          🛍 Shop & Marketplace
        </h1>
        <p className="text-xl text-muted-foreground">
          Curated products from trusted brands across all wellness categories
        </p>
      </div>

      {/* Filter Categories */}
      <Card className="bg-pastel-beige border-pastel-beige">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Shop by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {categories.map((category, idx) => (
              <Button
                key={idx}
                variant="outline"
                className={`h-auto p-4 flex flex-col items-center gap-2 ${category.color} border-current`}
                asChild>
                <Link
                  href={`/shop/category/${category.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}>
                  <span className="font-medium text-sm">{category.name}</span>
                  <span className="text-xs opacity-70">
                    {category.count} items
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Expert's Choice Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-yellow-600" />
          <h2 className="text-2xl font-bold">Expert's Choice</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {expertChoice.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-pastel-mint border-pastel-mint">
              <CardHeader className="text-center">
                <Badge className="mx-auto w-fit bg-yellow-100 text-yellow-700">
                  {product.badge}
                </Badge>
                <div className="text-4xl mb-2">{product.image}</div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {product.price}
                </div>
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {trending.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-pastel-peach border-pastel-peach">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{product.image}</div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {product.price}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="flex-1 gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cart & Checkout Info */}
      <Card className="bg-gradient-to-r from-pastel-mint to-pastel-peach border-pastel-mint">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Secure Checkout & Fast Delivery
          </CardTitle>
          <p className="text-muted-foreground">
            Partner with trusted retailers • Secure payments • Free shipping on
            orders $50+
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <Button size="lg" className="gap-2">
            <ShoppingCart className="h-5 w-5" />
            View Cart & Checkout
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
