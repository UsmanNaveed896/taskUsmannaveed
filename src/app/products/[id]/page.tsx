'use client'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from '../../../components/navbar';
import { useCourcesHook } from '../../../hooks/useCoarsesHooks';

const ProductDetail = () => {
  const params = useParams();
  const id = params.id as string; 

  const cousrces = useCourcesHook();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => cousrces.fetchProductById(id),
    enabled: !!id, 
  });

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error loading product details</div>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-4 lg:p-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={data.images[0]}
            alt={data.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-10 ">
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-700 mb-2">{data.brand}</p>
          <p className="text-gray-500 mb-4">{data.category}</p>
          <p className="text-green-500 text-2xl font-bold mb-4">${data.price}</p>
          <p className="text-gray-700 mb-6">{data.description}</p>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="text-gray-700 mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              defaultValue="1"
              className="border rounded px-2 py-1"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
