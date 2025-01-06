
import React from 'react';
import { useStore } from '@nanostores/react';
import { cartIsOpen } from '@/cartStore';

interface AddToCartProps {
  variants: any[];
  availableForSale: boolean;
  handle: string;
  defaultVariantId?: string;
  stylesClass?: string;
}

export const AddToCart = ({
  variants,
  availableForSale,
  handle,
  defaultVariantId,
  stylesClass = '',
}: AddToCartProps) => {
  const isOpen = useStore(cartIsOpen);

  const addToCart = async () => {
    if (!defaultVariantId) return;
    cartIsOpen.set(!isOpen);
  };

  if (!availableForSale) {
    return (
      <button
        aria-label="Sold out"
        disabled
        className={`btn btn-outline-primary ${stylesClass}`}
      >
        Sold out
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      onClick={addToCart}
      className={`btn btn-primary ${stylesClass}`}
    >
      Add to cart
    </button>
  );
};
