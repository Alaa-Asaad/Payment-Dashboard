import { Stepper } from '@mantine/core';
import React from 'react';

interface Props {
  active: number;
}

function StepperComponent({ active }: Props) {
  return (
    <Stepper active={active} breakpoint="sm">
      <Stepper.Step label="First step" description="Create an Order">
        Step 1 : Create an Order
      </Stepper.Step>
      <Stepper.Step label="Second step" description="Approve Order">
        Next Step 1 : Approve your Order
      </Stepper.Step>
      <Stepper.Step label="Final step" description="Order Done">
        Step 2 : Order Done
      </Stepper.Step>
    </Stepper>
  );
}

export default StepperComponent;
