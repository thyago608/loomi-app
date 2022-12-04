import { Flex } from "@chakra-ui/react";
import { Spinner } from "phosphor-react";
import styles from "./styles.module.css";

export function Loading() {
  return (
    <Flex
      w="full"
      h="500px"
      align="center"
      justify="center"
      className={styles.loading}>
      <Spinner size={50} weight="bold" color="#5A4CA7" />
    </Flex>
  );
}
