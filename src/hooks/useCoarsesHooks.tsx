import axios from "axios";


export const useCourcesHook = () => {
  
    const fetchProducts = async () => {
        const res = await axios.get("https://dummyjson.com/products/");
        return res.data;
      };
      const fetchProductById = async (id: any) => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        return response.data;
      };

  return {
    fetchProducts,
   fetchProductById
  };
};