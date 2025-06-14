import {
  Box,
  Container,
  Separator,
  Flex,
  HStack,
  IconButton,
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
            <Text fontSize="xl" fontWeight="bold" color="summit-secondary">
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
                _hover={{ color: "summit-secondary" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                variant="ghost"
                color="#B8B8B8"
                _hover={{ color: "summit-secondary" }}
              >
                <Linkedin01Icon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                variant="ghost"
                color="#B8B8B8"
                _hover={{ color: "summit-secondary" }}
              >
                <InstagramIcon />
              </IconButton>
            </HStack>
          </Stack>

          {/* Navigation Links */}
          <HStack gap={16} align="flex-start">
            <Stack gap={3}>
              <Text fontWeight="semibold" color="summit-secondary">
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
              <Text fontWeight="semibold" color="summit-secondary">
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
              <Text fontWeight="semibold" color="summit-secondary">
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
