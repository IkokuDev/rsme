"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  List,
  ListItem,
  Icon,
  Tabs,
  Badge,
  Clipboard,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckmarkCircle01Icon, WhatsappIcon } from "hugeicons-react";

const MotionBox = motion(Box);

export const Materials = () => {
  const dailyReminders = [
    {
      day: "Day 1",
      text: `Real SMEs don’t wait for miracles. They build movements. Register now for RebelSME Summit. https://bit.ly/3FMhjSG`,
    },
    {
      day: "Day 2",
      text: "Funding, Structure, Talent, Growth — learn it all at the RebelSME Summit. Entry is free. https://bit.ly/3FMhjSG",
    },
    {
      day: "Day 3",
      text: "Nigeria needs Rebels, not spectators. Secure your seat for the RebelSME Summit. https://bit.ly/3FMhjSG",
    },
    {
      day: "Day 4",
      text: "Your breakthrough won’t come by chance. It starts with action. Register now: https://bit.ly/3FMhjSG",
    },
    {
      day: "Day 5",
      text: "The future belongs to Rebels who build. Don’t miss the RebelSME Summit. https://bit.ly/3FMhjSG",
    },    
  ];

  return (
    <Box py="10rem" bg="gray.900">
      <Container maxW="7xl">
        <VStack gap={12}>
          {/* Header */}
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
              Success Evangelist Resources
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
              Everything you need to implement the 7-DAY SUCCESS EVANGELIST
              ACTION PLAN
            </Text>
          </MotionBox>

          {/* Resources Tabs */}
          <Tabs.Root variant="enclosed" defaultValue="flyer" w="full">
            <Tabs.List bg="gray.800" px={4} gap={4}>
              <Tabs.Trigger
                value="flyer"
                _selected={{
                  bg: "summit.secondary",
                  color: "white",
                }}
                color="gray.400"
                py={4}
              >
                Flyer
              </Tabs.Trigger>
              <Tabs.Trigger
                _selected={{
                  bg: "summit.secondary",
                  color: "white",
                }}
                color="gray.400"
                py={4}
                value="voice-note-script"
              >
                Voice Note Script
              </Tabs.Trigger>
              <Tabs.Trigger
                _selected={{
                  bg: "summit.secondary",
                  color: "white",
                }}
                color="gray.400"
                py={4}
                value="daily-reminder"
              >
                Daily Reminder
              </Tabs.Trigger>
              <Tabs.Trigger
                _selected={{
                  bg: "summit.secondary",
                  color: "white",
                }}
                color="gray.400"
                py={4}
                value="key-info"
              >
                Key Info
              </Tabs.Trigger>
            </Tabs.List>

            {/* Flyer Panel */}
            <Tabs.Content value="flyer">
              <Card.Root bg="whiteAlpha.100" borderRadius="xl">
                <CardBody>
                  <VStack gap={6} align="start">
                    <Heading size="lg" color="white">
                      REBELSME SUMMIT 2025
                    </Heading>
                    <Text color="accent" fontSize="xl" fontWeight="bold">
                      Be Part of the SME Revolution!
                    </Text>
                    <Text color="gray.300">
                      Are you an SME Owner, Founder, or Hustler ready to grow
                      beyond limits?
                    </Text>
                    <Box>
                      <Text color="white" fontWeight="bold" mb={2}>
                        Learn:
                      </Text>
                      <List.Root gap={2} color="gray.300">
                        {[
                          "How to attract funding",
                          "Structure your business for growth",
                          "Find and keep loyal customers",
                          "Innovate and hire a real A-team",
                        ].map((item, index) => (
                          <ListItem gap={3} key={index} display="flex">
                            {/* <ListIcon as={MdCheck} color="green.500" mt={1} /> */}
                            <Icon mt={1} color="green.500">
                              <CheckmarkCircle01Icon />
                            </Icon>

                            <Text>{item}</Text>
                          </ListItem>
                        ))}
                      </List.Root>
                    </Box>
                    <Text color="gray.300">Sept 11–13, 2025 | Abuja ICC</Text>
                    <Clipboard.Root value="Register now: https://bit.ly/3FMhjSG">
                      <Clipboard.Trigger asChild>
                        <Link as="span" color="#8B1A2F" textStyle="sm">
                          <Clipboard.Indicator />
                          <Clipboard.ValueText />
                        </Link>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  </VStack>
                </CardBody>
              </Card.Root>
            </Tabs.Content>

            {/* Voice Note Script Panel */}
            <Tabs.Content value="voice-note-script">
              <Card.Root bg="whiteAlpha.100" borderRadius="xl">
                <CardBody>
                  <VStack gap={4} align="start">
                    <Text color="gray.300" fontStyle="italic">
                      Hello! Quick one — the RebelSME Summit is coming this
                      September in Abuja! If you run a business or plan to, you
                      must be there. Register now, it&apos;s free! Click here:
                      https://bit.ly/3FMhjSG Be a Rebel. Build the Future.
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      (Remember the link should be pasted in the body of your
                      message)
                    </Text>
                    <Clipboard.Root value="Hello! Quick one — the RebelSME Summit is coming this September in Abuja! If you run a business or plan to, you must be there. Register now, it&apos;s free! Click here: https://bit.ly/3FMhjSG Be a Rebel. Build the Future.">
                      <Clipboard.Trigger asChild>
                        <Link as="span" color="#8B1A2F" textStyle="sm">
                          <Clipboard.Indicator />
                          <Clipboard.ValueText />
                        </Link>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  </VStack>
                </CardBody>
              </Card.Root>
            </Tabs.Content>

            {/* Daily Reminders Panel */}
            <Tabs.Content value="daily-reminder">
              <VStack gap={4} align="stretch">
                {dailyReminders.map((reminder, index) => (
                  <Card.Root key={index} bg="whiteAlpha.100" borderRadius="xl">
                    <CardBody>
                      <VStack gap={4} align="start">
                        <Badge colorScheme="purple">{reminder.day}</Badge>
                        <Text color="gray.300">{reminder.text}</Text>
                        <Clipboard.Root value={reminder.text}>
                          <Clipboard.Trigger asChild>
                            <Link as="span" color="#8B1A2F" textStyle="sm">
                              <Clipboard.Indicator />
                              <Clipboard.ValueText />
                            </Link>
                          </Clipboard.Trigger>
                        </Clipboard.Root>
                      </VStack>
                    </CardBody>
                  </Card.Root>
                ))}
              </VStack>
            </Tabs.Content>

            {/* Key Info Panel */}
            <Tabs.Content value="key-info">
              <Card.Root bg="whiteAlpha.100" borderRadius="xl">
                <CardBody>
                  <VStack gap={6} align="start">
                    <Box>
                      <Heading size="md" color="summit.secondary" mb={4}>
                        Key Reminder
                      </Heading>
                      <Text color="gray.300">
                        The goal is not just numbers — it&apos;s bringing in the
                        right people: SME owners, entrepreneurs, business
                        managers, serious hustlers.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="md" color="summit.secondary" mb={4}>
                        WhatsApp Group Setup
                      </Heading>
                      <List.Root gap={3} color="gray.300">
                        <ListItem display="flex" gap={3}>
                          <Icon mt={1} color="green.500">
                            <WhatsappIcon />
                          </Icon>

                          <Text>Add (+234 9167338000) as an Admin</Text>
                        </ListItem>
                        <ListItem display="flex" gap={3}>
                          <Icon mt={1} color="green.500">
                            <CheckmarkCircle01Icon />
                          </Icon>

                          <Text>Include Rebel Summit in group name</Text>
                        </ListItem>
                      </List.Root>
                    </Box>
                  </VStack>
                </CardBody>
              </Card.Root>
            </Tabs.Content>
          </Tabs.Root>
        </VStack>
      </Container>
    </Box>
  );
};
