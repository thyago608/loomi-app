import { useQuery } from "@tanstack/react-query";
import { ITicket } from "types/Ticket";
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
  return useQuery(["conversions"], fetchConversionsResume, {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
