
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
    title: "Afghan Kabuli Pulao",
    description: "Traditional Afghan rice dish with carrots and raisins",
    image: "/images/products/pulao.jpg",
    price: 15.99,
    collection: "Main Dishes"
  },
  {
    id: "2", 
    title: "Mantu",
    description: "Steamed dumplings filled with meat and onions",
    image: "/images/products/mantu.jpg",
    price: 12.99,
    collection: "Appetizers"
  },
  {
    id: "3",
    title: "Afghan Naan",
    description: "Traditional Afghan bread",
    image: "/images/products/naan.jpg", 
    price: 3.99,
    collection: "Breads"
  }
];

export const collections = [
  {
    title: "Main Dishes",
    handle: "main-dishes",
    image: "/images/collections/main.jpg"
  },
  {
    title: "Appetizers", 
    handle: "appetizers",
    image: "/images/collections/appetizers.jpg"
  },
  {
    title: "Breads",
    handle: "breads", 
    image: "/images/collections/breads.jpg"
  }
];

export const getCollectionProducts = (collection: string) => {
  return {
    products: products.filter(product => product.collection === collection)
  };
};

export const getCollections = () => collections;
