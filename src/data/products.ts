export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  collection: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Simplifier la distribution alimentaire avec notre expertise dédiée",
    description:
      "Transformez votre approvisionnement en une expérience fluide et fiable avec AFG",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    price: 15.99,
    collection: "Main Dishes",
  },
  {
    id: "2",
    title: "Mantu",
    description: "Steamed dumplings filled with meat and onions",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    price: 12.99,
    collection: "Appetizers",
  },
  {
    id: "3",
    title: "Afghan Naan",
    description: "Traditional Afghan bread",
    image: "https://images.unsplash.com/photo-1584534582042-939e91d1b3f7?w=800",
    price: 3.99,
    collection: "Breads",
  },
];

export const collections = [
  {
    title: "Main Dishes",
    handle: "main-dishes",
    image: "https://images.unsplash.com/photo-1547928576-b822bc410bdf?w=800",
  },
  {
    title: "Appetizers",
    handle: "appetizers",
    image: "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?w=800",
  },
  {
    title: "Breads",
    handle: "breads",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
  },
];

export const getCollectionProducts = (collection: string) => {
  return {
    products: products.filter((product) => product.collection === collection),
  };
};

export const getCollections = () => collections;
