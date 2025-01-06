
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
}

export const products: Product[] = [
  {
    id: "1",
    title: "Product 1",
    description: "Description for product 1",
    price: 99.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        altText: "Product 1 image"
      }
    ],
    category: "Electronics"
  },
  {
    id: "2", 
    title: "Product 2",
    description: "Description for product 2",
    price: 149.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        altText: "Product 2 image"
      }
    ],
    category: "Accessories"
  }
];
