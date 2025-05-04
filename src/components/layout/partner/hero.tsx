import { Container, Stack, Heading, Text, Center } from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <Center
      bgGradient="linear-gradient(to right, #1A365D, #8B1A2F)"
      py={20}
      h="70vh"
      color="white"
    >
      <Container maxW="7xl">
        <Stack gap={6} textAlign="center">
          <Heading size="2xl">Why Partner with the Rebel SME Summit?</Heading>
          <Text fontSize="xl" maxW="3xl" mx="auto" >
            The inaugural Rebel SME Summit marks a pivotal moment in Nigeria&apos;s
            economic landscape, aiming to transform the SME sector through
            strategic collaborations and policy advocacy. By partnering with us,
            you position your brand at the forefront of this transformative
            journey.
          </Text>
        </Stack>
      </Container>
    </Center>
  );
};
