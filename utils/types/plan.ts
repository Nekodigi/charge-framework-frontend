export type Plan = {
  id: string;
  priceId: string;
  currency: string;
  price: number;
  mode: string;
  quota: number;
  quotaLeak: number;
};
