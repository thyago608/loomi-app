import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";
import { Carrousel } from "components/Carousel";
import { cards } from "mocks/card";

interface InitialSectionProps {
  isDesktop: boolean;
}

export function InitialSection({
  isDesktop,
}: InitialSectionProps) {
  return (
    <>
      {isDesktop ? (
        <SimpleGrid
          w="100%"
          columns={6}
          spacingX="30px"
          spacingY="20px">
          {cards.map((card) => (
            <Card
              key={card.heading.title}
              heading={card.heading}
              body={card.body}
              footer={card.footer}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Carrousel>
          {cards.map((card) => (
            <Card
              key={card.heading.title}
              heading={card.heading}
              body={card.body}
              footer={card.footer}
            />
          ))}
        </Carrousel>
      )}
    </>
  );
}
