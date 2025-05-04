import { Box, Container, Heading, SimpleGrid, VStack, List, Text } from '@chakra-ui/react'
import { ArrowUpLeft01Icon } from 'hugeicons-react'
import React from 'react'

export const MediaFeatures = () => {
    const features =   [
        {
          title: "Summit Buzz & Digital Exclusives",
          features: [
            "Early Access",
            "Social Media Takeovers",
            "Influencer Synergy",
          ],
        },
        {
          title: "On-Site & Hybrid Experiences",
          features: ["The Rebel Command Center", "Immersive Story Pods"],
        },
        {
          title: "Digital Integration & Analytics",
          features: [
            "Real-Time Analytics Dashboard",
            "Exclusive Content Collaborations",
          ],
        },
      ]
  return (
    <Box bg="gray.50" py={20}>
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
      {features.map((section) => (
          <VStack
            key={section.title}
            bg="white"
            p={6}
            borderRadius="xl"
            shadow="md"
            gap={4}
            align="start"
          >
            <Heading size="md" color="summit.primary">
              {section.title}
            </Heading>
            <List.Root gap={3}>
              {section.features.map((feature) => (
                <List.Item key={feature} display="flex" alignItems="center">
                  <ArrowUpLeft01Icon />
                  <Text>{feature}</Text>
                </List.Item>
              ))}
            </List.Root>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  </Box>

)
}

