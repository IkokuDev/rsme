import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react";
import { CheckListIcon } from "hugeicons-react";
import React from "react";

export const Cover = () => {
  return (
    <Box py={20}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <VStack align="start" gap={6}>
            <Heading color="summit.primary">
              Why Cover the Rebel Movement?
            </Heading>
            <List.Root gap={4}>
              {[
                "Local Triumphs & Radical Change",
                "Behind-the-Scenes Access",
                "Real-World Impact",
              ].map((item) => (
                <ListItem gap={3} key={item} display="flex" alignItems="start">
                  <CheckListIcon />
                  <Text>{item}</Text>
                </ListItem>
              ))}
            </List.Root>
          </VStack>
          {/* Add an image or illustration here */}
          <Box
            bgImage="url(/images/media-coverage.jpg)"
            bgSize="cover"
            backgroundPosition="center"
            borderRadius="xl"
            h="300px"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};
