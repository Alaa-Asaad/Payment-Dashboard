type Link = {
  href: string;
  rel: string;
  method: string;
};

type OrderResponseType = {
  id: string;
  status: string;
  links: Link[] | undefined;
};
export default OrderResponseType;
