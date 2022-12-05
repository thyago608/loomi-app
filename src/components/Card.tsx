import {
  Card as ChakraCard,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

interface CardProps {
  variant?: "primary" | "secondary";
  type: "money" | "others";
  title: string;
  subtitleAmount: number;
  bodyLabel?: string;
  footerLabel: string;
  footerAmount: string;
}

export function Card({
  variant = "primary",
  type = "money",
  footerAmount,
  footerLabel,
  subtitleAmount,
  title,
  bodyLabel,
}: CardProps) {
  const isPrimary =
    variant === "primary" &&
    (type === "money" || type === "others");
  const cardInformation = isPrimary
    ? {
        color: "#109E8E",
        subtitleLabel: `${subtitleAmount} %`,
      }
    : {
        color: "#D6628E",
        subtitleLabel: `há ${subtitleAmount} dias`,
      };

  return (
    <ChakraCard
      flex="none"
      variant="elevated"
      bg="#FFF"
      w={220}
      h={170}
      gap={3}
      px={3}
      py={4}
      justify="space-between">
      <CardHeader p={0}>
        <Heading
          size="sm"
          color="#4E5D66"
          mb={2}
          fontWeight="bold">
          {title}
        </Heading>
        <Text
          as="span"
          py={1}
          px={2}
          color={cardInformation.color}
          fontSize="sm"
          fontWeight="bold"
          boxShadow="base"
          rounded="full"
          bg="white">
          {cardInformation.subtitleLabel}
        </Text>
      </CardHeader>
      <CardBody p={0}>
        <Text color={cardInformation.color}>
          {bodyLabel}
        </Text>
      </CardBody>
      <CardFooter p={0}>
        {type === "money" ? (
          <Flex as="p" color="#4E5D66" gap="10px">
            <Text as="span" fontWeight="bold">
              {footerAmount}
            </Text>
          </Flex>
        ) : (
          <Flex as="p" color="#4E5D66" gap="10px">
            <Text as="span" fontWeight="bold">
              {footerAmount}
            </Text>
            {footerLabel}
          </Flex>
        )}
      </CardFooter>
    </ChakraCard>
  );
}
