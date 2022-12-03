import { ReactNode, useRef } from "react";
import {
  Button,
  Flex,
  ChakraProps,
} from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "phosphor-react";
import styles from "./styles.module.css";

interface CarrouselProps extends ChakraProps {
  children: ReactNode;
  arrows?: boolean;
}

export function Carrousel({
  children,
  arrows = true,
  ...rest
}: CarrouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function handleLeftClick() {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -=
        carouselRef.current?.offsetWidth;
    }
  }

  function handleRightClick() {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft +=
        carouselRef.current?.offsetWidth;
    }
  }
  return (
    <Flex
      w="100%"
      flex="none"
      justifyItems="center"
      position="relative">
      <Flex
        ref={carouselRef}
        overflowX="auto"
        scrollBehavior="smooth"
        paddingX="50px"
        gap="30px"
        className={styles.list}
        {...rest}>
        {children}
      </Flex>
      {arrows && (
        <Flex
          w="100%"
          justify="space-between"
          position="absolute"
          top="30%">
          <Button
            onClick={handleLeftClick}
            title="previous"
            rounded="full"
            leftIcon={<CaretLeft size={30} weight="bold" />}
            bg="none"
            iconSpacing={0}
          />
          <Button
            onClick={handleRightClick}
            title="next"
            rounded="full"
            bg="none"
            leftIcon={
              <CaretRight size={30} weight="bold" />
            }
            iconSpacing={0}
          />
        </Flex>
      )}
    </Flex>
  );
}
