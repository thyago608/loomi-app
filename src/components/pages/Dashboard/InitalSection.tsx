import { SimpleGrid, Text } from "@chakra-ui/react";
import { Card } from "components/Header";
import { Carrousel } from "components/Carousel";
import { useCardData } from "hooks/useCardData";

interface InitialSectionProps {
  isDesktop: boolean;
}

export function InitialSection({ isDesktop }: InitialSectionProps) {
  const { cards, isLoading } = useCardData();

  if (isLoading) {
    return (
      <Text
        display="flex"
        w="full"
        h="200px"
        alignItems="center"
        justifyContent="center">
        Carregando..
      </Text>
    );
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
