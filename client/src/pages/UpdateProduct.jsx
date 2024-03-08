import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Message from "../components/Message";

const UpdateProduct = () => {
  const { id } = useParams();
  //console.log({ id });
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const getProductById = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setImageUrl(response.data.image_url);
        setPrice(response.data.price);
        setIsLoading(false);
      } catch (error) {
        setError("Error al obtener el producto");
        setIsLoading(false);
      }
    };
    getProductById();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/products/${id}`, {
        name,
        description,
        image_url,
        price,
      });
      toast.success("Producto editado con éxito!");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Message />
  ) : (
    <Card color="transparent" shadow={false} className=" mt-10 ">
      <Toaster position="bottom-center" />
      <Typography variant="h4" color="blue-gray">
        Editar Producto
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col mx-auto  bg-white p-5 rounded-3xl"
        onSubmit={handleUpdate}
      >
        <div className="mb-1 flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nombre
          </Typography>
          <Input
            size="lg"
            placeholder="Nombre Producto"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Imagen
          </Typography>
          <Input
            size="lg"
            placeholder="Imagen  .jpg .jpeg .png .gif"
            name="image"
            type="text"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descripción
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Descripción del producto"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Precio
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="$200"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          Actualizar
        </Button>
      </form>
    </Card>
  );
};

export default UpdateProduct;
