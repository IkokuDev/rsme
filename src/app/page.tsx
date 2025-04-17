import { Highlight } from "@/components/layout/highlight";
import { Box, Button } from "@chakra-ui/react";

import SimpleSlider from "@/components/layout/slider";
import { Hero } from "@/components/layout/hero";
import { CaseStudy } from "@/components/layout/case-study";
import Footer from "@/components/layout/footer";
import MembershipTiers from "@/components/layout/membership-tiers";

export default function Home() {
	return (
		<Box>
			<Hero />
			<SimpleSlider />
			<Highlight />
			<MembershipTiers />
			<CaseStudy />
			<Footer />
			<Box
				position="fixed"
				bottom="10px"
				left="50%"
				transform="translateX(-50%)"
				zIndex="overlay"
			>
				<Button
					bg="accent"
					color="white"
					size="lg"
					px={8}
					_hover={{ bg: "accent.hover" }}
					borderRadius="full"
					boxShadow="lg"
				>
					Sign Up
				</Button>
			</Box>
		</Box>
	);
}
