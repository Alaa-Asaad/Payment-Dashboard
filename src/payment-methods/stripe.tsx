import { Button, Container, Stack, Text } from '@mantine/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import Image from 'next/image';
import React, { useState } from 'react';

import StepperComponent from '../components/stepper';
import getPaymentIntent from '../fetcher/stripe/getPaymentFetcher';

function Stripe() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);

  const confirmPayment = async (clientSecret: string) => {
    if (!stripe || !elements) {
      setLoading(true);
      setLoading(false);
    } else {
      // here you call confirmPayment api endpoint
      setLoading(true);
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) as StripeCardElement,
        },
      });
      setLoading(false);
      setActive(3);
      console.log(result);
    }
  };

  const createPaymentIntent = async () => {
    try {
      setLoading(true);
      const { data } = await getPaymentIntent();
      const { clientSecret } = data;
      setLoading(false);
      setActive(2);
      confirmPayment(clientSecret);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={50} mt={20}>
      <StepperComponent method="stripe" active={active} />
      <Container
        style={{
          borderLeft: '2px dotted blue',
          borderRight: '2px dotted blue',
          borderBottom: '2px dotted blue',
        }}
      >
        <Image alt="productImage" height={350} width={350} src="/tshirt.jpg" />
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
