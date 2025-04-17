import {
  Box,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

const tiers = [
  {
    title: "Super Early Bird",
    description: "Get exclusive early access at the lowest rate.",
    price: "$99",
    gradient: "linear-gradient(to right, #8B1A2F, #1f0010)",
    priceGradient: "linear-gradient(to right, #FF416C, #FF4B2B)", // neon pinkish-red
    textColor: "white",
    buttonColor: "#FF416C",
    shadow: "0 0 12px #FF416C", // neon glow
  },
  {
    title: "Early Bird",
    description: "Secure your spot before general tickets sell out.",
    price: "$149",
    gradient: "linear-gradient(to bottom right, #A54B56, #2C0A13)",
    priceGradient: "linear-gradient(to bottom right, #FF5F6D, #FFC371)", // warm neon
    textColor: "white",
    buttonColor: "#FF5F6D",
    shadow: "0 0 12px #FF5F6D",
  },
  {
    title: "Regular",
    description: "Standard admission to all summit experiences.",
    price: "$199",
    gradient: "linear-gradient(to bottom right, #B8B8B8, #2A2A2A)",
    priceGradient: "linear-gradient(to right, #B8B8B8, #F0F0F0)", // icy metallic neon
    textColor: "#F9FAFB",
    buttonColor: "#B8B8B8",
    shadow: "0 0 10px #B8B8B8",
  },
];

const MembershipTiers = () => {
  return (
    <Box py={20}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={10}
        maxW="7xl"
        mx="auto"
        px={6}
      >
        {tiers.map((tier, index) => (
          <Box
            key={index}
            bgImage={tier.gradient}
            borderRadius="2xl"
            p={8}
            boxShadow="xl"
            color={tier.textColor}
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.03)" }}
          >
            <Stack gap={5}>
              <Heading fontSize="2xl">{tier.title}</Heading>
              <Text fontSize="md">{tier.description}</Text>
              <Text
                fontSize="4xl"
                fontWeight="extrabold"
                bgGradient={tier.priceGradient}
                bgClip="text"
              >
                {tier.price}
              </Text>
              <Button
                size="lg"
                bg={tier.buttonColor}
                color={tier.textColor === "white" ? "#F9FAFB" : "white"}
                _hover={{ opacity: 0.9 }}
              >
                Get Access
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MembershipTiers;
