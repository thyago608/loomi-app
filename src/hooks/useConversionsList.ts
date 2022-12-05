import { useQuery } from "@tanstack/react-query";
import { ITicket } from "types/Ticket";
import { cards } from "utils/conversionFunnelCardsList";
import { api } from "services/api";

interface ConversionResume {
  "total-per-day": ITicket;
  "products-view-per-month": ITicket;
  "product-page-conversion-per-month": ITicket;
  "add-to-cart-per-month": ITicket;
  "checkout-email-per-month": ITicket;
  "checkout-registration-per-month": ITicket;
  "checkout-shipping-per-month": ITicket;
}

async function fetchConversionsResume(): Promise<ConversionResume> {
  const response = await api.get("/conversions-resume");

  return response.data;
}

export function useConversionsList() {
  const { data, isLoading, isError } = useQuery(
    ["conversions"],
    fetchConversionsResume,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );

  const conversionsList = Object.entries(data ?? {});

  const conversionsListFormatted: ITicket[] = conversionsList.map(
    ([key, value]) => value
  );

  const cardsFormatted = cards.map((item, index) => {
    return {
      ...item,
      subtitleAmount: Math.abs(conversionsListFormatted[index]?.growth),
      footerAmount: String(conversionsListFormatted[index]?.value),
    };
  });

  return {
    isLoading,
    isError,
    cards: cardsFormatted,
  };
}
