import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import { CiTrash } from "react-icons/ci";

const CardItem = (product) => {
  const { id, name, price, description, image_url, handleDeleteProduct } =
    product;

  return (
    <div>
      <Card className=" w-72">
        <Link to={`/${id}`}>
          <CardHeader shadow={false} floated={false} className=" h-44">
            <img
              src={image_url}
              alt={name}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                ${price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {description}
            </Typography>
          </CardBody>
        </Link>
        <CardFooter className="pt-0 flex justify-around">
          <Link to={`/edit/${id}`}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
            >
              Editar
            </Button>
          </Link>
          <button
            onClick={() => {
              handleDeleteProduct(product.id);
            }}
            className=" text-2xl hover:text-3xl transition-all"
          >
            <CiTrash />
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardItem;
