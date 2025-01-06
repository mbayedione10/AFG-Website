
interface Product {
  id: string;
  title: string;
  description: string;
  images: {
    url: string;
    altText: string;
  }[];
  price: number;
  currency: string;
  categories: string[];
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Riz Basmati Premium",
    description: "Riz basmati de première qualité, grain long et parfumé",
    images: [{
      url: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      altText: "Riz Basmati"
    }],
    price: 15.99,
    currency: "EUR",
    categories: ["Céréales"],
    tags: ["featured"]
  },
  {
    id: "2",
    title: "Huile d'Olive Extra Vierge",
    description: "Huile d'olive pressée à froid de première qualité",
    images: [{
      url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
      altText: "Huile d'Olive"
    }],
    price: 24.99,
    currency: "EUR",
    categories: ["Huiles"],
    tags: ["bio"]
  },
  {
    id: "3",
    title: "Épices Mélange Oriental",
    description: "Mélange traditionnel d'épices orientales",
    images: [{
      url: "https://images.unsplash.com/photo-1532336414078-cf2fe1f6f37b",
      altText: "Épices"
    }],
    price: 12.99,
    currency: "EUR",
    categories: ["Épices"],
    tags: ["featured"]
  }
];

export const collections = [
  {
    title: "Céréales",
    handle: "cereales",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
  },
  {
    title: "Épices",
    handle: "epices",
    image: "https://images.unsplash.com/photo-1532336414078-cf2fe1f6f37b"
  },
  {
    title: "Fruits Secs",
    handle: "fruits-secs",
    image: "https://images.unsplash.com/photo-1616684000067-36952fde56ec"
  }
];

export const getCollectionProducts = (collection: string) => ({
  products: products.filter(product => 
    product.categories.includes(collection)
  )
});

export const getCollections = () => collections;
