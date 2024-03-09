import {Card,Input,Button,Typography} from "@material-tailwind/react";
import {useMutation} from "react-query";
import axios from "axios";
import {useState} from "react";
import {Toaster,toast} from "sonner";

const CreateProducts=() => {
  
  const createProductMutation = useMutation(async (productData) => {
    const response = await axios.post(
      "/products",
      productData
    );
    return response.data;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProductMutation.mutateAsync({
        name,
        description,
        image_url,
        price,
      });
      toast.success("Producto creado con éxito!");
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [price,setPrice]=useState("");

  return (
    <Card color="transparent" shadow={false} className=" mt-10 ">
      <Toaster position="bottom-center" />
      <Typography variant="h4" color="blue-gray">
        Crear Producto
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col mx-auto  bg-white p-5 rounded-3xl"
        onSubmit={handleSubmit}
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
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          Crear
        </Button>
      </form>
    </Card>
  );
};

export default CreateProducts;
