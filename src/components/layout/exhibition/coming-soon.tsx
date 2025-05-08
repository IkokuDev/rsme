"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const ExhibitionComingSoon = () => {

  return (
    <Box py="10rem" bg="gray.900">
      <Container maxW="7xl">
        <VStack gap={16}>
          {/* Hero Section */}
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
              Exhibition Space Coming Soon
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto" mb={8}>
              Join innovative brands showcasing the future of SME solutions at Nigeria&apos;s largest SME gathering.
            </Text>
            <Link href="mailto:partnerships@rebelsmesummit.com">
              <Button
                size="lg"
                bg="summit-secondary"
                color="white"
                _hover={{ bg: "accent.hover" }}
              >
                Contact Exhibition Team
              </Button>
            </Link>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

