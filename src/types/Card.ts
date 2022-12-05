export interface ICard {
  variant?: "primary" | "secondary";
  type: "money" | "others";
  title: string;
  subtitleAmount: number;
  bodyLabel?: string;
  footerLabel: string;
  footerAmount: string;
}
