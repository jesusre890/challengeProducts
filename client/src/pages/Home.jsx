import CardItem from "../components/CardItem";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import Loading from "../components/Loading";
import Message from "../components/Message";
//import { CiTrash } from "react-icons/ci";

const Home = () => {
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
    refetch,
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
    <div className="flex justify-center items-center my-44">
      <Loading />
    </div>
  ) : isError ? (
    <div className="flex justify-center items-center my-44">
      <Message />
    </div>
  ) : products.length > 0 ? (

      <ul className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-7 my-14">
        {products.map((product) => (
          <li key={product.id} className="flex justify-center">
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

  ) : (
    <p className="flex justify-center my-44">
      No hay productos. Por favor cree uno
    </p>
  );
};

export default Home;
