import { Box, Container, Heading, VStack, Text, Flex, Button } from '@chakra-ui/react'
import { AiPhone01Icon, Mail01Icon } from 'hugeicons-react'
import React from 'react'

export const Contact = () => {
  return (
    <Box py={20}>
    <Container maxW="7xl" textAlign="center">
      <VStack gap={8}>
        <Heading color="summit.primary">
          Ready to Rewrite Nigeria&apos;s Narrative?
        </Heading>
        <Text maxW="2xl" mx="auto">
          Step into the heartbeat of innovation. Cover the stories that
          matter and celebrate the relentless spirit of Nigerian
          entrepreneurs.
        </Text>
        <Flex gap={4} flexWrap="wrap" justify="center">
          <Button colorScheme="blue" size="lg">
            <Mail01Icon />
            media@smerebelsummit.com
          </Button>
          <Button colorScheme="blue" size="lg" variant="outline">
            <AiPhone01Icon />
            +234-XXX-XXXX-XXX
          </Button>
        </Flex>
      </VStack>
    </Container>
  </Box>
  )
}

