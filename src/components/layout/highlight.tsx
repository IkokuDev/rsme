"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  UserMultiple02Icon,
  Idea01Icon,
  AiNetworkIcon,
} from "hugeicons-react";

// Feature data
const features = [
  {
    icon: UserMultiple02Icon,
    title: "Expert Speakers",
    description:
      "Learn from industry leaders and innovators shaping the future of technology",
  },
  {
    icon: Idea01Icon,
    title: "Cutting-edge Topics",
    description:
      "Explore the latest trends in AI, Cloud Computing, and Quantum Technology",
  },
  {
    icon: AiNetworkIcon,
    title: "Networking Opportunities",
    description:
      "Connect with professionals and thought leaders from around the globe",
  }
];

export const Highlight = () => {
  const headingSize = useBreakpointValue({
    base: "lg",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
  }) as "lg" | "xl" | "2xl" | "3xl";

  const iconSize = useBreakpointValue({
    base: 6,
    sm: 7,
    md: 8,
    lg: 10,
  });

  const cardPadding = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 5,
    lg: 6,
  });

  return (
    <Box
      py={{ base: 6, sm: 8, md: 12, lg: 16, xl: 20 }}
      overflow="hidden"
      position="relative"
    >
      <Container maxW="110rem"px={{base: 8}}>
        <Stack
          gap={{ base: 4, sm: 6, md: 8, lg: 10 }}
          align="center"
          position="relative"
          zIndex={1}
        >
          <Box
            textAlign="center"
            maxW={{ base: "full", sm: "2xl", md: "3xl", lg: "4xl" }}
            px={{ base: 2, sm: 4, md: 6 }}
          >
            <Heading
              size={headingSize}
              mb={{ base: 2, sm: 3, md: 4 }}
              color="white"
              lineHeight="shorter"
              fontWeight="bold"
            >
              Topics
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
              color="fg.muted"
              maxW="2xl"
              mx="auto"
              lineHeight="tall"
              opacity={0.9}
            >
              Discover what makes our summit the premier tech event of the year
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            gap={{ base: 4, sm: 5, md: 2, }}
            w="full"
            maxW="7xl"
            position="relative"
          >
            {features.map((feature, index) => (
              <Box
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                p={cardPadding}
                bg="summit-text"
                h="full"
                borderRadius={{ base: "md", md: "lg" }}
                boxShadow={{ base: "sm", md: "md" }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                }}
                position="relative"
                overflow="hidden"
              >
                <Stack
                  gap={{ base: 2, sm: 3, md: 4 }}
                  align="center"
                  textAlign="center"
                  h="full"
                >
                  <Icon
                    as={feature.icon}
                    w={iconSize}
                    h={iconSize}
                    color="summit-secondary"
                    transition="transform 0.3s ease-in-out"
                    _groupHover={{
                      transform: "scale(1.1)",
                    }}
                  />
                  <Heading
                    size={{ base: "sm", sm: "md" }}
                    color="white"
                    lineHeight="shorter"
                    fontWeight="semibold"
                  >
                    {feature.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "xs", sm: "sm", md: "md" }}
                    color="summit-muted"
                    maxW="300px"
                    px={{ base: 1, sm: 2, md: 0 }}
                    lineHeight="tall"
                    opacity={0.9}
                  >
                    {feature.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
