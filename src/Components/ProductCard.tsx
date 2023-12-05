import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import ProductCardSkeleton from "./ProductCardSkeleton";
import {
  Navigate,
  Navigation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

interface ProductProps {
  product: {
    image: string;
    title: string;
    sku: string;
    price: string;
    quantity: number;
    liked: boolean;
  };
}

// const ProductCard = ({ product }: ProductProps) => {
//   const [liked, setLiked] = useState(false);
//   const handleLikeToggle = () => {
//     setLiked(!liked);
//   };

//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg">
//       <div className=" m-auto border-2 border-red-600 p-4 ">
//         <img
//           className=" object-cover object-center"
//           src={product.image}
//           alt={product.title}
//         />
//       </div>
//       <div className="px-6 py-4">
//         <div className="font-bold text-lg mb-2">{product.title}</div>
//         <p className="text-gray-600 mb-2">Product Code: {product.code}</p>
//         <p className="text-gray-800 font-semibold mb-2">${product.price}</p>
//         {product.discount && (
//           <p className="text-red-500 mb-2">Discount: {product.discount}% off</p>
//         )}
//         <p className="text-gray-600 mb-2">Supplier: {product.supplier}</p>
//         <p className="text-gray-600 mb-2">
//           Delivery by: {product.deliveryDate}
//         </p>
//         <div className="flex items-center">
//           <input
//             type="number"
//             className="border rounded py-1 px-2 mr-2"
//             value={product.quantity}
//             onChange={(e) => console.log(e.target.value)} // Handle quantity change
//           />
//           <button onClick={handleLikeToggle} className="text-red-500">
//             {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProductCard = ({ product }: ProductProps) => {
  const isLoading = useSelector((state: any) => state.app.isLoading);

  // console.log(isLoading, "@Productcard outside");

  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);

  const navigate = useNavigate();

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleProudctPage = () => {
    navigate(`/product/${encodeURIComponent(product.sku)}`);
  };

  if (isLoading) {
    console.log(isLoading, "@Productcard inside");
    return <ProductCardSkeleton />;
  }

  return (
    <div className="cursor-pointer max-w-xs border border-gray-300 rounded overflow-hidden shadow-lg">
      <div className=" bg-slate-200 px-4 md:w-full md:m-2 md:h-40 w-full m-auto h-24  flex justify-center items-center">
        <img
          className="w-full h-full object-cover object-center"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div onClick={handleProudctPage} className="px-4 py-4">
        <div className="font-bold text-sm  md:text-base  ">{product.title}</div>

        <p className="text-gray-400 mb-2 text-xs font-semibold">
          {product.sku}
        </p>
        <p className="text-gray-800 text-sm font-semibold mb-2 text-s">
          ${product.price}
        </p>
        {
          <p className="text-cyan-500 text-sm text-s hidden md:flex">
            {"Saving % 4.60"}
          </p>
        }
        <p className="text-gray-600 text-sm text-s hidden md:flex">
          Supplier: {"Supplier"}
        </p>
        <p className="text-gray-600 text-sm mb-2 text-s hidden md:flex">
          Delivery by: {"22nd Jan"}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex bg-white px-1 border rounded-md">
            <button onClick={handleDecreaseQuantity} className="">
              -
            </button>
            <input
              type="text"
              disabled
              className=" w-8 md:w-12 text-center  py-1 px-2 mx-1"
              value={product.quantity}
              onChange={(e: any) => setQuantity(e.target.value)}
            />
            <button onClick={handleIncreaseQuantity} className="">
              +
            </button>
          </div>
          <button
            onClick={handleLikeToggle}
            className="text-cyan-500 md:mr-5 mr-0"
          >
            {product.liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
