"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  List,
  ListItem,
  Button,
  Badge,
  Link,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckmarkCircle01Icon, WhatsappIcon } from "hugeicons-react";

const MotionBox = motion(Box);

// Add after imports

export const Overview = () => {
  return (
    <Box py="10rem" bg="gray.900">
      <Container maxW="7xl">
        <VStack gap={12}>
          {/* Welcome Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            w="full"
          >
            <Heading
              size="2xl"
              mb={6}
              bgGradient="linear-gradient(to right, #B8B8B8, #8B1A2F)"
              lineHeight="normal"
              css={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Welcome, Success Evangelist!
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
              Thank you for joining the Rebel SME Movement. Your role is
              vital—and we promise: we won&apos;t clutter your inbox or pester you.
            </Text>
          </MotionBox>

          {/* Mission & Rewards Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            w="full"
          >
            <Card.Root bg="whiteAlpha.100" borderRadius="xl">
              <CardHeader>
                <Heading size="md" color="summit-secondary">
                  Your Mission
                </Heading>
              </CardHeader>
              <CardBody>
                <List.Root gap={3}>
                  <ListItem gap={3} display="flex" color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Text>
                      Personally invite SME founders, business owners, and
                      serious side-hustlers
                    </Text>
                  </ListItem>
                  <ListItem display="flex" gap={3} color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Link
                      color="accent"
                      href="https://bit.ly/3FMhjSG"
                      target="_blank"
                    >
                      Share the RebelSME Registration link
                    </Link>
                  </ListItem>
                  <ListItem display="flex" gap={3} color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Text>Encourage them to register early</Text>
                  </ListItem>
                </List.Root>
              </CardBody>
            </Card.Root>
            </MotionBox>

            <Card.Root bg="whiteAlpha.100" borderRadius="xl">
              <CardHeader>
                <Heading size="md" color="summit-secondary">
                  Your Rewards
                </Heading>
              </CardHeader>
              <CardBody>
                <List.Root gap={3}>
                  <ListItem display="flex" gap={3} color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Text>
                      Free access to all breakout sessions (valued at ₦200,000)
                    </Text>
                  </ListItem>
                  <ListItem display="flex" gap={3} color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Text>Preview exclusive summit content and resources</Text>
                  </ListItem>
                </List.Root>
              </CardBody>
            </Card.Root>
          </SimpleGrid>

          {/* WhatsApp Group Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            w="full"
          >
          <Card.Root bg="whiteAlpha.100" borderRadius="xl" w="full">
            <CardHeader>
              <Heading size="md" color="summit-secondary">
                WhatsApp Accountability Group
              </Heading>
            </CardHeader>
            <CardBody>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                <List.Root gap={4}>
                  <ListItem display="flex" gap={3} color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Text>Brief, high-value updates only</Text>
                  </ListItem>
                  <ListItem gap={3} display="flex" color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Text>
                      Quick task-based polls with ✅ completion tracking
                    </Text>
                  </ListItem>
                  <ListItem display="flex" gap={3} color="gray.300">
                    <Icon mt={1} color="green.500">
                      <CheckmarkCircle01Icon />
                    </Icon>

                    <Text>
                      Access to flyer, voice notes, and reminder texts
                    </Text>
                  </ListItem>
                </List.Root>
                <VStack align="start" gap={4}>
                  <Button
                    aria-label="Whatsapp"
                    variant="ghost"
                    color="#B8B8B8"
                    _hover={{ color: "summit-secondary" }}
                  >
                    <WhatsappIcon />
                    Join WhatsApp Group
                  </Button>
                  <Text color="gray.400" fontSize="sm">
                    Co-admin: +234 916 733 8000
                  </Text>
                </VStack>
              </SimpleGrid>
            </CardBody>
          </Card.Root>
          </MotionBox>

          {/* Important Dates */}
          <Card.Root bg="whiteAlpha.100" borderRadius="xl" w="full">
            <CardHeader>
              <Heading size="md" color="summit-secondary">
                Important Dates
              </Heading>
            </CardHeader>
            <CardBody>
            <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            w="full"
          >
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <Box>
                  <Badge colorPalette="red">Cut-off</Badge>
                  <Text color="white" mt={2}>
                    August 30, 2025
                  </Text>
                </Box>
                <Box>
                  <Badge colorPalette="green">Event</Badge>
                  <Text color="white" mt={2}>
                    Sept 11–13, 2025
                  </Text>
                  <Text color="gray.400" fontSize="sm">
                    International Conference Center (ICC)
                  </Text>
                </Box>
              </SimpleGrid>
              </MotionBox>
            </CardBody>
          </Card.Root>
        </VStack>
      </Container>
    </Box>
  );
};
