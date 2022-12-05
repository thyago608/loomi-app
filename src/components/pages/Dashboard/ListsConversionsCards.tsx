import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";
import { Carrousel } from "components/Carousel";
import { cards } from "utils/conversionFunnelCardsList";
import { useConversionsList } from "hooks/useConversionsList";
import { ITicket } from "types/Ticket";

interface ListsConversionsCardsProps {
  isDesktop: boolean;
}

export function ListsConversionsCards({
  isDesktop,
}: ListsConversionsCardsProps) {
  const { data, isLoading } = useConversionsList();

  const conversionsList = Object.entries(data ?? {});

  const conversionsListFormatted: ITicket[] =
    conversionsList.map(([key, value], index) => value);

  const cardsFormatted = cards.map((item, index) => {
    return {
      ...item,
      subtitleAmount: Math.abs(
        conversionsListFormatted[index]?.growth
      ),
      footerAmount: String(
        conversionsListFormatted[index]?.value
      ),
    };
  });

  if (isLoading) {
    return <p>carregando...</p>;
  }

  return isDesktop ? (
    <SimpleGrid
      w="100%"
      columns={6}
      spacingX="30px"
      spacingY="20px">
      {cardsFormatted.map((card) => (
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
      {cardsFormatted.map((card) => (
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
