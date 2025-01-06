
import type { Product } from "@/lib/shopify/types";

export const products = [
  {
    id: "1",
    title: "Riz Basmati Premium",
    description: "Riz basmati de première qualité, grain long et parfumé",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2",
        altText: "Riz Basmati"
      }]
    },
    variants: {
      nodes: [{
        id: "1",
        title: "1kg",
        price: {
          amount: "15.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Céréales" }] },
    tags: ["featured"]
  },
  {
    id: "2",
    title: "Huile d'Olive Extra Vierge",
    description: "Huile d'olive pressée à froid de première qualité",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
        altText: "Huile d'Olive"
      }]
    },
    variants: {
      nodes: [{
        id: "2",
        title: "750ml",
        price: {
          amount: "24.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Huiles" }] },
    tags: ["bio"]
  },
  {
    id: "3",
    title: "Épices Mélange Oriental",
    description: "Mélange traditionnel d'épices orientales",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
        altText: "Épices"
      }]
    },
    variants: {
      nodes: [{
        id: "3",
        title: "200g",
        price: {
          amount: "12.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Épices" }] },
    tags: ["featured"]
  },
  {
    id: "4",
    title: "Dattes Medjool",
    description: "Dattes Medjool premium de qualité supérieure",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1",
        altText: "Dattes"
      }]
    },
    variants: {
      nodes: [{
        id: "4",
        title: "500g",
        price: {
          amount: "18.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Fruits Secs" }] },
    tags: ["bio"]
  },
  {
    id: "5",
    title: "Thé Vert à la Menthe",
    description: "Thé vert traditionnel avec menthe fraîche",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12",
        altText: "Thé Vert"
      }]
    },
    variants: {
      nodes: [{
        id: "5",
        title: "100g",
        price: {
          amount: "9.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Thés" }] },
    tags: ["featured"]
  },
  {
    id: "6",
    title: "Couscous Fin",
    description: "Couscous de semoule fine de qualité supérieure",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1590165482129-1b8b27698780",
        altText: "Couscous"
      }]
    },
    variants: {
      nodes: [{
        id: "6",
        title: "1kg",
        price: {
          amount: "8.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Céréales" }] },
    tags: ["populaire"]
  },
  {
    id: "7",
    title: "Miel de Fleurs d'Oranger",
    description: "Miel pur de fleurs d'oranger",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae",
        altText: "Miel"
      }]
    },
    variants: {
      nodes: [{
        id: "7",
        title: "500g",
        price: {
          amount: "22.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Miels" }] },
    tags: ["bio"]
  },
  {
    id: "8",
    title: "Pistaches Grillées",
    description: "Pistaches grillées et salées de première qualité",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1616684000067-36952fde56ec",
        altText: "Pistaches"
      }]
    },
    variants: {
      nodes: [{
        id: "8",
        title: "250g",
        price: {
          amount: "14.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Fruits Secs" }] },
    tags: ["snacks"]
  },
  {
    id: "9",
    title: "Safran Premium",
    description: "Safran pur de première qualité",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1596040033282-884edd2c910e",
        altText: "Safran"
      }]
    },
    variants: {
      nodes: [{
        id: "9",
        title: "1g",
        price: {
          amount: "29.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Épices" }] },
    tags: ["premium"]
  },
  {
    id: "10",
    title: "Loukoums Assortis",
    description: "Assortiment de loukoums traditionnels",
    images: {
      nodes: [{
        url: "https://images.unsplash.com/photo-1516747773518-29521cd11203",
        altText: "Loukoums"
      }]
    },
    variants: {
      nodes: [{
        id: "10",
        title: "400g",
        price: {
          amount: "16.99",
          currencyCode: "EUR"
        }
      }]
    },
    collections: { nodes: [{ title: "Confiseries" }] },
    tags: ["desserts"]
  }
];

export const collections = [
  {
    title: "Céréales",
    handle: "cereales",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2"
  },
  {
    title: "Épices",
    handle: "epices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
  },
  {
    title: "Fruits Secs",
    handle: "fruits-secs",
    image: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1"
  }
];

export const getCollectionProducts = (collection: string) => ({
  products: products.filter(product => 
    product.collections.nodes.some(col => col.title === collection)
  )
});

export const getCollections = () => collections;
