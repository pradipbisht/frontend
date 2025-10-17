import { GiWeightLiftingUp, GiBabyFace } from "react-icons/gi";
import { FaHeart, FaScissors } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { PiPawPrintFill } from "react-icons/pi";

export const categories = [
  {
    name: "Health & Fitness",
    description: "Tips and guides for maintaining physical and mental health.",
    icon: (
      <GiWeightLiftingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
    ),
    href: "/health-lifestyle",
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Lifestyle",
    description: "Improve daily life with style, hobbies, and personal growth.",
    icon: <FaHeart className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    href: "/health-lifestyle",
    color: "from-purple-500 to-violet-700",
  },
  {
    name: "Skincare",
    description: "Advice and products for healthy glowing skin.",
    icon: <LuSparkles className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
    href: "/skincare",
    color: "from-pink-500 to-rose-700",
  },
  {
    name: "Haircare",
    description: "Haircare routines, styles, and treatments.",
    icon: <FaScissors className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    href: "/haircare",
    color: "from-amber-500 to-orange-700",
  },
  {
    name: "Pets",
    description: "Caring tips, nutrition, and fun for your pets.",
    icon: (
      <PiPawPrintFill className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    ),
    href: "/pets",
    color: "from-blue-500 to-indigo-700",
  },
  {
    name: "Parenting",
    description: "Guides, tips, and advice for parents and children.",
    icon: <GiBabyFace className="h-6 w-6 text-teal-600 dark:text-cyan-400" />,
    href: "/parenting",
    color: "from-teal-500 to-cyan-700",
  },
];
