
export const featuredProducts = [
  {
    title: "Kabuli Pulao",
    handle: "kabuli-pulao",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=500",
      altText: "Kabuli Pulao"
    },
    priceRange: {
      minVariantPrice: { amount: "15.99", currencyCode: "EUR" }
    },
    compareAtPriceRange: {
      maxVariantPrice: { amount: "19.99", currencyCode: "EUR" }
    },
    variants: [{ id: "1" }],
    availableForSale: true
  },
  {
    title: "Mantu",
    handle: "mantu",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=500",
      altText: "Mantu"
    },
    priceRange: {
      minVariantPrice: { amount: "12.99", currencyCode: "EUR" }
    },
    compareAtPriceRange: {
      maxVariantPrice: { amount: "0", currencyCode: "EUR" }
    },
    variants: [{ id: "2" }],
    availableForSale: true
  }
];
