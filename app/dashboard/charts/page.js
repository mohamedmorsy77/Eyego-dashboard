"use client";
import { fetchProducts } from "@/network/productApi";
import { productSelectors } from "@/redux/slices/productSlice";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
  Cell,
  Pie,
  PieChart,
} from "recharts";

function Page() {
  const { loading } = useSelector((state) => state.products);
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"];
  const chartData = useMemo(() => {
    return products.map((product) => ({
      title: product.title,
      category: product.category,
      rating: product.rating,
      price: product.price,
    }));
  }, [products]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts({ skip: 0, limit: 30 }));
    }
  }, [dispatch, products.length]);

  return (
    <section className="charts dashboard bg-gray-100 min-h-screen w-[86%] p-4 ml-[14%]">
      <div className="container content mx-auto">
        <h1 className="text-green-700 my-6 relative text-3xl font-bold flex items-center gap-2">
          <i className="ri-bar-chart-2-line"></i> Charts
        </h1>

        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <h2 className="text-xl text-green-700 font-semibold mb-2">
                Price & Rating Chart
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" hide />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="price" fill="#3498db" />
                  <Bar dataKey="rating" fill="#2ecc71" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white shadow-lg p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-green-700  mb-2">
                Category & Rating Chart
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rating" fill="#f39c12" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" hide />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#3498db"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="rating"
                    stroke="#2ecc71"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="rating"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {chartData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Page;
