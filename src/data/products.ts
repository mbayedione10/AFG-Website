
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: {
    url: string;
    altText: string;
  }[];
  category: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Organic Fresh Fruits Basket",
    description: "Premium selection of seasonal organic fruits",
    price: 49.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
        altText: "Organic Fruits Basket"
      }
    ],
    category: "Fresh Produce",
    tags: ["featured", "organic"]
  },
  {
    id: "2",
    title: "Artisanal Cheese Selection",
    description: "Curated selection of fine European cheeses",
    price: 89.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80",
        altText: "Cheese Selection"
      }
    ],
    category: "Dairy",
    tags: ["premium"]
  },
  {
    id: "3",
    title: "Fresh Seafood Box",
    description: "Daily catch of premium seafood",
    price: 129.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80",
        altText: "Fresh Seafood"
      }
    ],
    category: "Seafood",
    tags: ["featured"]
  },
  {
    id: "4",
    title: "Organic Vegetables Pack",
    description: "Farm-fresh organic vegetables",
    price: 39.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80",
        altText: "Organic Vegetables"
      }
    ],
    category: "Fresh Produce",
    tags: ["organic"]
  },
  {
    id: "5",
    title: "Premium Meat Selection",
    description: "High-quality cuts of meat",
    price: 149.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1603048297172-c92544798d1e?auto=format&fit=crop&w=800&q=80",
        altText: "Premium Meat"
      }
    ],
    category: "Meat",
    tags: ["premium", "featured"]
  },
  {
    id: "6",
    title: "Organic Bread Basket",
    description: "Freshly baked artisanal breads",
    price: 29.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        altText: "Artisanal Breads"
      }
    ],
    category: "Bakery",
    tags: ["organic"]
  },
  {
    id: "7",
    title: "Gourmet Olive Oil Set",
    description: "Premium selection of extra virgin olive oils",
    price: 79.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
        altText: "Olive Oil Set"
      }
    ],
    category: "Pantry",
    tags: ["gourmet"]
  },
  {
    id: "8",
    title: "Fresh Herbs Bundle",
    description: "Assorted fresh cooking herbs",
    price: 19.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
        altText: "Fresh Herbs"
      }
    ],
    category: "Fresh Produce",
    tags: []
  },
  {
    id: "9",
    title: "Premium Wine Selection",
    description: "Curated collection of fine wines",
    price: 299.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
        altText: "Wine Selection"
      }
    ],
    category: "Beverages",
    tags: ["premium", "featured"]
  },
  {
    id: "10",
    title: "Organic Honey Collection",
    description: "Selection of pure organic honey varieties",
    price: 59.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
        altText: "Organic Honey"
      }
    ],
    category: "Pantry",
    tags: ["organic"]
  }
];
