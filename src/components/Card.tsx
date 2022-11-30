import {
  Card as ChakraCard,
  CardHeader as ChakraCardHeader,
  CardBody as ChakraCardBody,
  CardFooter as ChakraCardFooter,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

interface Heading {
  title: string;
  subtitle: number;
  type: "porcentage" | "day";
}

interface Body {
  content: string;
  type: "base" | "danger";
}

interface Footer {
  type: "money" | "others";
  amount: number;
  label?: string;
}

function CardHeader({ type, title, subtitle }: Heading) {
  return (
    <ChakraCardHeader p={0}>
      <Heading
        size="sm"
        color="#4E5D66"
        mb={2}
        fontFamily="Ubuntu"
        fontWeight="bold">
        {title}
      </Heading>
      <Text
        as="span"
        py={1}
        px={2}
        color={
          type === "porcentage" ? "#109E8E" : "#D6628E"
        }
        fontFamily="Ubuntu"
        fontSize="sm"
        fontWeight="bold"
        boxShadow="base"
        rounded="full"
        bg="white">
        {type === "porcentage"
          ? `+ ${subtitle} %`
          : `há ${subtitle} dias`}
      </Text>
    </ChakraCardHeader>
  );
}

function CardBody({ type, content }: Body) {
  return (
    <ChakraCardBody p={0}>
      <Text
        color={type === "base" ? "#109E8E" : "#D6628E"}
        fontFamily="Ubuntu">
        {content}
      </Text>
    </ChakraCardBody>
  );
}

function CardFooter({ type, label, amount }: Footer) {
  return (
    <ChakraCardFooter p={0}>
      {type === "money" ? (
        <Flex
          as="p"
          color="#4E5D66"
          gap="10px"
          fontFamily="Ubuntu">
          R$
          <Text as="span" fontWeight="bold">
            {amount}
          </Text>
        </Flex>
      ) : (
        <Flex
          as="p"
          color="#4E5D66"
          gap="10px"
          fontFamily="Ubuntu">
          <Text as="span" fontWeight="bold">
            {amount}
          </Text>
          {label}
        </Flex>
      )}
    </ChakraCardFooter>
  );
}

export interface CardProps {
  heading: Heading;
  body?: Body;
  footer: Footer;
}

export function Card({ heading, body, footer }: CardProps) {
  return (
    <ChakraCard
      bg="#FFF"
      w={220}
      h={170}
      flex="none"
      variant="elevated"
      gap={3}
      px={3}
      py={4}
      justify="space-between">
      <CardHeader
        type={heading.type}
        title={heading.title}
        subtitle={heading.subtitle}
      />
      {body && (
        <CardBody type={body.type} content={body.content} />
      )}
      <CardFooter
        type={footer.type}
        label={footer.label}
        amount={footer.amount}
      />
    </ChakraCard>
  );
}
