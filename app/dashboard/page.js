"use client";

import DashboardContent from "@/components/dashboardContent/DashboardContent";

import { fetchProducts } from "@/network/productApi";
import { productSelectors } from "@/redux/slices/productSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectSortValue, setSortValue] = useState("");
  console.log(selectSortValue);
  const { user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.products);
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  const handleDecrease = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    if (currentPage < 3) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  // filter product by category and title
  const filteredProduct = useMemo(() => {
    return searchQuery
      ? products.filter((product) => {
          return (
            product.category
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        })
      : products;
  }, [searchQuery, products]);

  // Sorting
  const sortedProduct = useMemo(() => {
    return selectSortValue
      ? selectSortValue === "price"
        ? [...filteredProduct].sort((a, b) => {
            return b.price - a.price;
          })
        : [...filteredProduct].sort((a, b) => {
            return b.rating - a.rating;
          })
      : filteredProduct;
  }, [selectSortValue, filteredProduct]);
  console.log(sortedProduct);
  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    setSortValue("");
    dispatch(fetchProducts({ skip, limit }));
  }, [dispatch, currentPage, skip]);
  return (
    <section className="dashboard flex h-screen">
      <ToastContainer />
      <DashboardContent
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handlePagination={handlePagination}
        user={user}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
        loading={loading}
        sortedProduct={sortedProduct}
        setSortValue={setSortValue}
      />
    </section>
  );
}

export default Page;
