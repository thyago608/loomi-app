import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";
import { ICard } from "types/Card";
import { Carrousel } from "components/Carousel";
import { convertValueToReal } from "utils/convertValueToReal";
import { useCardData } from "hooks/useCardData";

interface InitialSectionProps {
  isDesktop: boolean;
}

interface Card {
  variant?: "primary" | "secondary";
  type: "money" | "others";
  title: string;
  subtitleAmount: number;
  bodyLabel?: string;
  footerLabel: string;
  footerAmount: string;
}

export function InitialSection({ isDesktop }: InitialSectionProps) {
  let cards: ICard[] = [];
  const queryResults = useCardData();

  const isLoading = queryResults.some((query) => query.isLoading);

  if (!isLoading) {
    const [
      ticketDayQuery,
      ticketMonthQuery,
      alertsQuery,
      ordersMonthQuery,
      sellsMonthQuery,
    ] = queryResults;

    cards = [
      {
        variant: "primary",
        type: "money",
        title: "Ticket médio últimas 24h",
        subtitleAmount: Number(ticketDayQuery.data?.growth),
        bodyLabel: "em relação a ontem",
        footerLabel: "",
        footerAmount: convertValueToReal(Number(ticketDayQuery.data?.value)),
      },
      {
        variant: "primary",
        type: "money",
        title: "Ticket médio mensal",
        subtitleAmount: Number(ticketMonthQuery.data?.growth),
        bodyLabel: "em relação a julho",
        footerLabel: "",
        footerAmount: convertValueToReal(Number(ticketMonthQuery.data?.value)),
      },
      {
        variant: "secondary",
        type: "others",
        title: String(alertsQuery.data?.[0].type),
        subtitleAmount: 5,
        footerLabel: "produtos",
        footerAmount: String(alertsQuery.data?.[0].value),
      },
      {
        variant: "secondary",
        type: "others",
        title: String(alertsQuery.data?.[1].type),
        subtitleAmount: 5,
        footerLabel: "produtos",
        footerAmount: String(alertsQuery.data?.[1].value),
      },
      {
        variant: "primary",
        type: "others",
        title: "Pedidos realizados no mês",
        subtitleAmount: Number(ordersMonthQuery.data?.growth),
        bodyLabel: "em relação a julho",
        footerLabel: "pedidos",
        footerAmount: String(ordersMonthQuery.data?.value),
      },
      {
        variant: "primary",
        type: "others",
        title: "Pedidos vendidos no mês",
        subtitleAmount: Number(sellsMonthQuery.data?.growth),
        bodyLabel: "em relação a julho",
        footerLabel: "produtos",
        footerAmount: String(sellsMonthQuery.data?.value),
      },
    ];
  }

  return isDesktop ? (
    <SimpleGrid w="100%" columns={6} spacingX="30px" spacingY="20px">
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          type={card.type}
          footerAmount={card.footerAmount}
          footerLabel={card.footerLabel}
          subtitleAmount={card.subtitleAmount}
          variant={card.variant}
          bodyLabel={card.bodyLabel}
        />
      ))}
    </SimpleGrid>
  ) : (
    <Carrousel>
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          type={card.type}
          footerAmount={card.footerAmount}
          footerLabel={card.footerLabel}
          subtitleAmount={card.subtitleAmount}
          variant={card.variant}
          bodyLabel={card.bodyLabel}
        />
      ))}
    </Carrousel>
  );
}
