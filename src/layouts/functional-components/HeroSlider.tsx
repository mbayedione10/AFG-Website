
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { Product } from "@/data/products";

const HeroSlider = ({ products }: { products: Product[] }) => {
  const featuredProducts = products.filter((product) => product.tags.includes("featured"));

  if (!featuredProducts || featuredProducts.length === 0) {
    return null;
  }

  return (
    <Swiper
      pagination={{
        clickable: true,
        bulletClass: "banner-pagination-bullet",
        bulletActiveClass: "banner-pagination-bullet-active",
      }}
      modules={[Pagination]}
    >
      {featuredProducts.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="row items-center px-7 xl:px-16">
            <div className="sm:col-12 lg:col-6 order-2 lg:order-0">
              <div className="text-center py-20 lg:py-32">
                {item.description && (
                  <p className="mb-4 lg:mb-6 text-light dark:text-darkmode-light font-medium md:text-2xl">
                    {item.description}
                  </p>
                )}
                <div className="row">
                  <h1 className="mb-8 lg:mb-12 col-10 sm:col-8 lg:col-12 mx-auto">
                    {item.title}
                  </h1>
                </div>
                <div className="flex gap-4 justify-center">
                  <a className="btn btn-lg btn-primary font-medium" href="/contact">
                    Obtenir un devis gratuit →
                  </a>
                  <a className="btn btn-lg btn-outline-primary font-medium" href="/products">
                    Découvrir nos produits
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:col-12 lg:col-6">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                className="mx-auto w-[388px] lg:w-full"
                width="507"
                height="385"
                alt="Fresh Food Distribution"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
