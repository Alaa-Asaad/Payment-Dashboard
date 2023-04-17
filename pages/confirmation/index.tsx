import { Button, Container, Stack, Text } from '@mantine/core';
import { IconSquareRoundedCheck } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import React from 'react';

import StepperComponent from '@/src/components/stepper';

function Confirmation() {
  const router = useRouter();
  return (
    <Container size="xl" style={{ minHeight: '40rem' }}>
      <Stack align="center" justify="center" spacing={50} mt={20}>
        <StepperComponent method="paypal" active={3} />
        <IconSquareRoundedCheck size="13rem" strokeWidth={2} color="#40bf4a" />
        <Text size="2rem">Order Complete</Text>
        <Text size="2rem">Thank You for purchase</Text>
        <Button onClick={() => router.replace('/')} size="lg">
          Home
        </Button>
      </Stack>
    </Container>
  );
}

export default Confirmation;
