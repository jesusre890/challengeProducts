import { Alert } from "@material-tailwind/react";

export default function Message() {
  return (
    <Alert
      color="red"
      className=" flex justify-center pl-14 text-center max-w-80"
    >
      Error al obtener los productos
    </Alert>
  );
}
