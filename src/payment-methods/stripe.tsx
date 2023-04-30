import { Button, Container, Stack, Text } from '@mantine/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import Image from 'next/image';
import React, { useState } from 'react';

import Confirmation from '@/pages/confirmation';

import StepperComponent from '../components/stepper';
import getPaymentIntent from '../fetcher/stripe/getPaymentFetcher';

function Stripe() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);

  const [warning, setWarning] = useState<string>();
  const [completeOrder, setCompleteOrder] = useState(false);
  const [error, setError] = useState<string>();

  const confirmPayment = async (clientSecret: string) => {
    if (!stripe || !elements) {
      setWarning('Stripe is Loading please wait ');
    } else {
      // here you call confirmPayment api endpoint or sdk
      setLoading(true);
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) as StripeCardElement,
        },
      });
      setLoading(false);
      setActive(3);
      if (result.paymentIntent) {
        setCompleteOrder(true);
      }
      if (result.error) {
        setError(result.error.message);
      }
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
  if (completeOrder) return <Confirmation />;
  if (error) {
    return (
      <p>
        Sorry, but there is Error:
        {error}
        Please Refresh the page or Try again later
      </p>
    );
  }

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
      {warning ? (
        <p>
          ...
          {warning}
        </p>
      ) : (
        <Button onClick={() => createPaymentIntent()} loading={loading}>
          Pay
        </Button>
      )}
    </Stack>
  );
}

export default Stripe;
