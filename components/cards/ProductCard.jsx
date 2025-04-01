import Image from "next/image";
import React from "react";

function ProductCard({product}) {
  return (
    <tr key={product.id} className="hover:bg-gray-100 transition">
      <td className="product-info grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-3 items-center p-3 border border-gray-300">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="w-20 h-20 object-cover rounded"
          width={80}
          height={80}
        />
        <div>
          <h4 className="font-semibold text-green-700">{product.title}</h4>
          <p className="text-gray-500 hidden sm:block">{product.description}</p>
        </div>
      </td>
      <td className="p-3 border border-gray-300">{product.category}</td>
      <td className="p-3 border border-gray-300 font-bold text-green-600">
        ${product.price}
      </td>
      <td className="p-3 border border-gray-300">⭐ {product.rating}</td>
    </tr>
  );
}

export default ProductCard;
