import { Button, Container, Stack, Text } from '@mantine/core';
import { CardElement, useElements } from '@stripe/react-stripe-js';
import Image from 'next/image';
import React, { useState } from 'react';

import StepperComponent from '../components/stepper';
import getPaymentIntent from '../fetcher/stripe/getPaymentFetcher';

function Stripe() {
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const createPaymentIntent = async () => {
    try {
      setLoading(true);
      const { data } = await getPaymentIntent();
      const { clientSecret } = data;
      setLoading(false);
      console.log(clientSecret);
      confirmPayment(clientSecret);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const confirmPayment = async (clientSecret: string) => {
    console.log(clientSecret);
    console.log(elements?.getElement(CardElement));
    // here you call confirmPayment api endpoint
  };

  return (
    <Stack spacing={50} mt={20}>
      <StepperComponent method="stripe" active={1} />
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
      <CardElement />
      <Button onClick={() => createPaymentIntent()} loading={loading}>
        Pay
      </Button>
    </Stack>
  );
}

export default Stripe;
