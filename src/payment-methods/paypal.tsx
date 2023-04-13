import { Button, Container, Loader, Stack } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import OrderResponseType from '@/types/order-create-response';

import StepperComponent from '../components/stepper';
import getOrder from '../fetcher/orderFetcher';

function PayPal() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<OrderResponseType>();
  const createOrder = async () => {
    setLoading(true);
    const { data } = await getOrder();

    setLoading(false);
    setOrder(data);
    setActive((prv) => prv + 1);
  };
  // console.log(order);
  const currentButton = () => {
    switch (active) {
      case 0:
        return (
          <Button size="lg" onClick={createOrder}>
            Create PayPal Order
          </Button>
        );

      case 1:
        if (order?.links !== undefined) {
          return <Link href={order?.links[1].href}>PayPal</Link>;
        }
        return null;

      default:
        return null;
    }
  };

  return (
    <Stack spacing={50}>
      <StepperComponent active={active} />
      <Image alt="productImage" height={500} width={500} src="/dell.png" />
      <Container>{loading ? <Loader /> : currentButton()}</Container>
    </Stack>
  );
}

export default PayPal;
