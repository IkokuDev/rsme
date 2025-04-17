"use client";

import { Box, Flex, Button, HStack, Spacer, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const Header = () => {
  return (
    <MotionBox
      as="header"
      bg="secondary"
      color="fg.default"
      px={{ base: 4, md: 8 }}
      borderBottom="1px solid"
      borderColor="border"
      boxShadow="sm"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Flex align="center">
        <Image
          src="logo.jpg"
          alt="Summit SME Logo"
          boxSize="100px"
          objectFit="cover"
        />
        <Spacer />

        {/* Navigation Links */}
        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {["About", "Schedule", "Speakers"].map((item) => (
            <MotionButton
              key={item}
              variant="ghost"
              fontFamily="var(--font-inter)"
              color="fg.default"
              _hover={{ color: "accent" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </MotionButton>
          ))}
        </HStack>

        {/* Register Button */}
        <MotionButton
          ml={4}
          bg="accent"
          color="white"
          fontFamily="var(--font-inter)"
          _hover={{ bg: "accent._hover" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          Register Now
        </MotionButton>
      </Flex>
    </MotionBox>
  );
};
