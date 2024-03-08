import { Button } from "@material-tailwind/react";

export default function Loading() {
  return (
    <Button
      placeholder={undefined}
      variant="text"
      loading={true}
      className="flex justify-center items-center my-28"
    >
      Cargando...
    </Button>
  );
}
