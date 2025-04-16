import { toast } from "react-toastify";
import { useCart } from "../Context/CartContext";
import products from "../data/products";

const ProductLists = () => {
  const { cartState, dispatch } = useCart();
  const addToCart = (product) => {
    const existingItem = cartState.find((item) => item.id === product.id);

    if (existingItem) {
      toast.error("The given item is already present in the cart!")
      return;
    }

    dispatch({
      type: "ADD",
      newEntry: {
        ...product,
        quantity: 1,
      },
    });
    toast.success("Added to the cart!")
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <div className="flex ">
                <div className="grow">
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="cursor-pointer self-center bg-indigo-600 p-2 capitalize text-gray-50 rounded-md hover:bg-indigo-700 ease-in-out duration-150"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
