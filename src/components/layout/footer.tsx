import {
  Box,
  Button,
  Container,
  Separator,
  Flex,
  HStack,
  IconButton,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TwitterIcon, Linkedin01Icon, InstagramIcon } from "hugeicons-react";

const Footer = () => {
  return (
    <Box bg="#09090B" color="primary" py={12}>
      <Container maxW="110rem">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          gap={12}
        >
          {/* Brand & Description */}
          <Stack gap={4} maxW="300px">
            <Text fontSize="xl" fontWeight="bold" color="#8B1A2F">
              Summit Co.
            </Text>
            <Text fontSize="sm">
              Elevating voices. Inspiring innovation. Join us for an
              unforgettable experience.
            </Text>
            <HStack gap={3} pt={2}>
              <IconButton
                aria-label="Twitter"
                variant="ghost"
                color="#B8B8B8"
                _hover={{ color: "#A54B56" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                variant="ghost"
                color="#B8B8B8"
                _hover={{ color: "#A54B56" }}
              >
                <Linkedin01Icon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                variant="ghost"
                color="#B8B8B8"
                _hover={{ color: "#A54B56" }}
              >
                <InstagramIcon />
              </IconButton>
            </HStack>
          </Stack>

          {/* Navigation Links */}
          <HStack gap={16} align="flex-start">
            <Stack gap={3}>
              <Text fontWeight="semibold" color="#A54B56">
                Event
              </Text>
              <Link href="#" _hover={{ color: "accent" }}>
                Speakers
              </Link>
              <Link href="#" _hover={{ color: "accent" }}>
                Schedule
              </Link>
              <Link href="#" _hover={{ color: "accent" }}>
                Workshops
              </Link>
            </Stack>

            <Stack gap={3}>
              <Text fontWeight="semibold" color="#A54B56">
                Company
              </Text>
              <Link href="#" _hover={{ color: "accent" }}>
                About
              </Link>
              <Link href="#" _hover={{ color: "accent" }}>
                Contact
              </Link>
              <Link href="#" _hover={{ color: "accent" }}>
                Careers
              </Link>
            </Stack>

            <Stack gap={3}>
              <Text fontWeight="semibold" color="#A54B56">
                Legal
              </Text>
              <Link href="#" _hover={{ color: "accent" }}>
                Privacy Policy
              </Link>
              <Link href="#" _hover={{ color: "accent" }}>
                Terms of Service
              </Link>
            </Stack>
          </HStack>

          {/* Newsletter Signup */}
          <Stack gap={4} maxW="sm" w="full">
            <Text fontWeight="semibold" color="#A54B56">
              Subscribe to our newsletter
            </Text>
            <Text fontSize="sm">
              Get the latest updates on speakers, topics, and exclusive content.
            </Text>
            <HStack as="form" gap={2}>
              <Input
                placeholder="Enter your email"
                size="md"
                // focusBorderColor="#A54B56"
                _placeholder={{ color: "#B8B8B8" }}
                borderColor="#B8B8B8"
              />
              <Button
                bg="#8B1A2F"
                color="white"
                _hover={{ bg: "#A54B56" }}
                size="lg"
              >
                Subscribe
              </Button>
            </HStack>
          </Stack>
        </Flex>

        <Separator my={10} borderColor="#B8B8B8" opacity={0.2} />

        <Text fontSize="sm" textAlign="center" color="#6B7280">
          © {new Date().getFullYear()} Summit Co. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
