import { Stepper } from '@mantine/core';
import React from 'react';

interface Props {
  active: number;
  method: string;
}

function StepperComponent({ active, method }: Props) {
  if (method === 'stripe') {
    return (
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="Stripe" description="Create an Order">
          Step 1 :Stripe
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Approve Order">
          Next Step : Enter You Card Number and Click Pay
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Order Done">
          Step 2 : Order Done
        </Stepper.Step>
      </Stepper>
    );
  }

  if (method === 'paypal') {
    return (
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="First step" description="Create an Order">
          Step 1 : Create an Order
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Approve Order">
          Next Step : Approve your Order
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Order Done">
          Step 2 : Order Done
        </Stepper.Step>
      </Stepper>
    );
  }
  return (
    <Stepper active={active} breakpoint="sm">
      <Stepper.Step label="First step" description="Create an Order">
        Step 1 : G Play
      </Stepper.Step>
      <Stepper.Step label="Second step" description="Approve Order">
        Next Step : Approve your Order
      </Stepper.Step>
      <Stepper.Step label="Final step" description="Order Done">
        Step 2 : Order Done
      </Stepper.Step>
    </Stepper>
  );
}

export default StepperComponent;
