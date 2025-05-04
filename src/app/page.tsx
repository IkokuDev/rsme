import { Highlight } from "@/components/layout/highlight";
import { Box, Button } from "@chakra-ui/react";

import SimpleSlider from "@/components/layout/slider";
import { Hero } from "@/components/layout/hero";
import { CaseStudy } from "@/components/layout/case-study";
import MembershipTiers from "@/components/layout/membership-tiers";
import { Updates } from "@/components/layout/updates";
import { SaleTag02Icon } from "hugeicons-react";
import AboutUs from "@/components/layout/about-us";
import Register from "@/components/layout/register";
import Partnership from "@/components/layout/partner/partnership";

export default function Home() {
  return (
    <Box css={{ "&::-webkit-scrollbar": { display: "none" } }}>
      <Hero />
      <SimpleSlider />
      <Highlight />
      <Box id="pricing">
        <MembershipTiers />
      </Box>
      <Box id="partnership">
        <Partnership />
      </Box>
      <Box id="register">
        <Register />
      </Box>
      <CaseStudy />
      <Updates />
      <Box id="about">
        <AboutUs />
      </Box>
      {/* Fixed Button */}
      <Box
        position="fixed"
        top="50%"
        right="-60px"
        transform="translateX(-50%)"
        zIndex="overlay"
      >
        <Button
          bg="summit-secondary"
          color="white"
          size="lg"
          display="flex"
          alignItems="center"
          gap={2}
          fontSize="small"
          px={4}
          _hover={{ bg: "accent.hover" }}
          borderRadius="full"
          boxShadow="lg"
        >
          Buy Ticket
          <Box color="white">
            <SaleTag02Icon size={20} />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
