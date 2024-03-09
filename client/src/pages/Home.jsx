import CardItem from "../components/CardItem";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import Loading from "../components/Loading";
import Message from "../components/Message";
//import { CiTrash } from "react-icons/ci";

const Home=() => {
  
  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  };

  const {
    data: products,
    isLoading,
    isError,
    refetch
  } = useQuery("products", getProducts);

  const deleteProductMutation = useMutation(async (id) => {
    await axios.delete(`/products/${id}`);
  });

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProductMutation.mutateAsync(id);
      refetch();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return isLoading ? (
    <Loading />
  )  : isError ? (
    <Message />
  ) : (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-10">
      {products.map((product) => (
        <li key={product.id} className="flex justify-center mx-4">
          <CardItem
            id={product.id}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            price={product.price}
            handleDeleteProduct={handleDeleteProduct}
          />
        </li>
      ))}
    </ul>
  );
};

export default Home;
