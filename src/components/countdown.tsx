"use client";

import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface CountdownProps {
  targetDate: string | number | Date;
}

const getTimeRemaining = (target: Date) => {
  const total = +target - +new Date();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

export const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(new Date(targetDate)));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(new Date(targetDate));
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <VStack gap={1}>
      <MotionBox
        p={4}
        bg="summit-secondary"
        color="white"
        rounded="2xl"
        minW="70px"
        textAlign="center"
        fontFamily="var(--font-inter)"
        fontWeight="bold"
        fontSize={{ base: "2xl", md: "3xl" }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {String(value).padStart(2, "0")}
      </MotionBox>
      <Text
        fontSize="sm"
        color="fg.light"
        fontFamily="var(--font-inter)"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        {label}
      </Text>
    </VStack>
  );

  return (
    <HStack gap={{ base: 4, md: 6 }} justify="center" >
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </HStack>
  );
};
