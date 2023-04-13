/* eslint-disable semi */
export default interface PayPalOrder {
  id: string;
  intent?: string;
  status: string;
  purchase_units?: {
    reference_id: string;
    amount: {
      currency_code: string;
      value: string;
      breakdown: {
        item_total: {
          currency_code: string;
          value: string;
        };
      };
    };
    payee: {
      email_address: string;
      merchant_id: string;
    };
    items: {
      name: string;
      unit_amount: {
        currency_code: string;
        value: string;
      };
      quantity: string;
      description: string;
    }[];
  }[];
  create_time?: string;
  links: {
    href: string;
    rel: string;
    method: string;
  }[];
}
