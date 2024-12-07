import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/app/common/ProductCardSkeleton";

function Products(props) {
  const productData = useSelector((state) => state.productData.data);
  const productLoading = useSelector((state) => state.productData.loading);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between pt-16">
        <h1 className="text-3xl font-bold mb-4 sm:mb-8">{props.title}</h1>
        <button
          type="button"
          className="h-10 px-14 py-2 m-1 text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productLoading
          ? [1, 2, 3, 4].map((item) => <ProductCardSkeleton key={item} />)
          : productData &&
            productData.length > 0 &&
            productData?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
    </>
  );
}

export default Products;
