
// pages/index.tsx
"use client";
import { useCourcesHook } from "@/hooks/useCoarsesHooks";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Navbar from "../components/navbar";
import * as Yup from "yup";
import { useFormik } from "formik";
import Link from "next/link"; 
import CoursesCard from "@/components/coursesCard";



const searchSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Search term must be at least 2 characters")
    .max(50, "Search term must be 50 characters or less")
    .required("Search term is required"),
});

const Products = () => {
  const cousrces = useCourcesHook();
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: cousrces.fetchProducts,
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: searchSchema,
    onSubmit: (values) => {
    
    },
  });

  const filteredProducts = data?.products?.filter(
    (product: any) =>
      product.title
        .toLowerCase()
        .includes(formik.values.search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(formik.values.search.toLowerCase())
  );

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading courses
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="flex justify-center ">
        <div className="container max-w-[1200px] mt-20">
          <div className="flex md:justify-between px-0 md:px-6 lg:justify-between xl:justify-between flex-col md:flex-row lg:flex-row xl:flex-row justify-start flex-wrap my-5 items-center">
            <h1 className="text-2xl font-bold mb-4 ">Products</h1>
            <form onSubmit={formik.handleSubmit} className="flex">
              <input
                placeholder="Search by Category or Name"
                name="search"
                value={formik.values.search}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded py-3 px-2 border text-xs w-[200px] "
              />
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 md:px-6 lg:px-2 xl:px-2">
            {filteredProducts &&
              filteredProducts.map((product: any) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                    <div className="flex justify-center">
                  <CoursesCard
                    image={product.images[0]}
                    title={product.title}
                    brand={product.brand}
                    category={product.category}
                    price={product.price}
                  />
                </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
