import { Button, Container, Loader, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import OrderResponseType from '@/types/order-create-response';

import StepperComponent from '../components/stepper';
import getOrder from '../fetcher/pay-pal/orderFetcher';

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
          return <Link href={order?.links[1].href}>Approve by PayPal</Link>;
        }
        return null;

      default:
        return null;
    }
  };

  return (
    <Stack spacing={50} mt={20}>
      <StepperComponent method="paypal" active={active} />
      <Container
        style={{
          borderLeft: '2px dotted blue',
          borderRight: '2px dotted blue',
          borderBottom: '2px dotted blue',
        }}
      >
        <Image alt="productImage" height={450} width={450} src="/tshirt.jpg" />
      </Container>
      <Text mt={-30}>Price: 10$</Text>
      <Container>{loading ? <Loader /> : currentButton()}</Container>
    </Stack>
  );
}

export default PayPal;
