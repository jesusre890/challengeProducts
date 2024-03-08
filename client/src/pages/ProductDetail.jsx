import { Card, List, ListItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Message from "../components/Message";

const ProductDetail = () => {
  const {id}=useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductById = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Error al obtener el producto");
        setIsLoading(false);
      }
    };
    getProductById();
  }, [id]);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Message />
  ) : (
    <div className="flex justify-center my-10">
      <div className="flex flex-col justify-center md:flex-row lg:gap-10 lg:w-3/4">
        <div>
          <img
            className="h-auto w-96 rounded-2xl object-cover object-center"
            src={product.image_url}
            alt={product.name}
          />
        </div>
        <Card placeholder={undefined} className="w-96 m-auto">
          <List placeholder={undefined}>
            <h1 className="text-4xl font-medium">{product?.name}</h1>

            <ListItem placeholder={undefined}>
              Precio: ${product.price}
            </ListItem>

            <ListItem placeholder={undefined}>{product.description}</ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
