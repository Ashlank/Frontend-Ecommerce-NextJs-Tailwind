import { useState } from 'react';
import {
  Button,
  Dialog
} from "../utils/material-tailwind-imports";
import CheckoutForm from './CheckoutForm';

export default function CheckoutModal({ total }: {total: number}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen} size='sm' disabled={!total}>Checkout</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <CheckoutForm />
      </Dialog>
    </>
  );
}