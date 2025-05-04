import { Container, Heading, VStack, Text, Center } from '@chakra-ui/react'
import React from 'react'

export const Hero = () => {
  return (
 <Center bgGradient="linear-gradient(to bottom right, #1A365D, #8B1A2F)" h="70vh" py={20} >
        <Container maxW="7xl" position="relative" zIndex={2}>
          <VStack gap={6} align="start" color="white">
            <Heading
              size="2xl"
              bgGradient="linear(to-r, summit.primary, summit.secondary)"
              bgClip="text"
            >
              Media Opportunities at Rebel SME Summit
            </Heading>
            <Text fontSize="xl">Capture the Pulse of Naija Innovation</Text>
            <Text maxW="2xl">
              Welcome to the Rebel SME Summit—a disruptive celebration of
              Nigeria&apos;s entrepreneurial spirit where bold ideas meet grassroots
              ingenuity.
            </Text>
          </VStack>
        </Container>
      </Center>
)
}

