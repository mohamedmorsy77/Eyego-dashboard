import React from "react";
import ProductCard from "../cards/ProductCard";
import Header from "../header/Header";

function DashboardContent({
  handleDecrease,
  handleIncrease,
  handlePagination,
  user,
  setSearchQuery,
  currentPage,
  selectSortValue,
  loading,
  sortedProduct,
  setSortValue,
}) {
  return (
    <div className="content  bg-gray-200 w-[86%] p-4 ml-[14%] ">
      <div className="container">
        {" "}
        <Header user={user} setSearchQuery={setSearchQuery} />
        <h1 className="relative my-10 mb text-4xl font-bold">Our Products</h1>
        <div className="flex justify-center p-5 items-center gap-2 pagination">
          <button
            className="rounded-full px-2 sm:px-4 py-2 bg-gray-500 text-white cursor-pointer transition hover:bg-gray-600 disabled:bg-gray-300"
            disabled={currentPage === 1}
            onClick={handleDecrease}
          >
            Previous
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`cursor-pointer text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full transition ${
                currentPage === page
                  ? "bg-green-600"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => handlePagination(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="rounded-full px-2 sm:px-4 py-2 bg-gray-500 text-white cursor-pointer transition hover:bg-gray-600"
            disabled={currentPage === 3}
            onClick={handleIncrease}
          >
            Next
          </button>
        </div>
        <div className="sort-products">
          <select
            onChange={(e) => setSortValue(e.target.value)}
            className="bg-green-600 text-white p-2 font-semibold focus:outline-0"
            value={selectSortValue}
          >
            <option value="">Sort by (none)</option>
            <option className="" value="price">
              Sort by higher price
            </option>
            <option className="" value="rate">
              Sort by higher rate
            </option>
          </select>
        </div>
        <div className="overflow-x-auto py-8">
          {loading ? (
            <h5>loading.....</h5>
          ) : sortedProduct.length > 0 ? (
            <table className="w-full ">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-3">Product Info</th>
                  <th className="p-3 ">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Rating</th>
                </tr>
              </thead>
              <tbody className="bg-white  text-center  transition-all">
                {sortedProduct.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-5 flex justify-center items-center bg-gray-700 text-white">
              No products available for this category or title
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
