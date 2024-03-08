import { Button } from "@material-tailwind/react";

export default function Loading() {
  return (
    <Button placeholder={undefined} variant="text" loading={true}>
      Cargando...
    </Button>
  );
}
