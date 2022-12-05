import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";
import { Carrousel } from "components/Carousel";
import { useConversionsList } from "hooks/useConversionsList";

interface ListsConversionsCardsProps {
  isDesktop: boolean;
}

export function ListsConversionsCards({
  isDesktop,
}: ListsConversionsCardsProps) {
  const { cards, isLoading } = useConversionsList();

  if (isLoading) {
    return <p>carregando...</p>;
  }

  return isDesktop ? (
    <SimpleGrid w="100%" columns={6} spacingX="30px" spacingY="20px">
      {cards.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          type={item.type}
          footerAmount={item.footerAmount}
          footerLabel={item.footerLabel}
          subtitleAmount={item.subtitleAmount}
          variant={item.variant}
          bodyLabel={item.bodyLabel}
        />
      ))}
    </SimpleGrid>
  ) : (
    <Carrousel>
      {cards.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          type={item.type}
          footerAmount={item.footerAmount}
          footerLabel={item.footerLabel}
          subtitleAmount={item.subtitleAmount}
          variant={item.variant}
          bodyLabel={item.bodyLabel}
        />
      ))}
    </Carrousel>
  );
}
