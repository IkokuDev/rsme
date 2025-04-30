import { Highlight } from "@/components/layout/highlight";
import { Box, Button, IconButton } from "@chakra-ui/react";

import SimpleSlider from "@/components/layout/slider";
import { Hero } from "@/components/layout/hero";
import { CaseStudy } from "@/components/layout/case-study";
import Footer from "@/components/layout/footer";
import MembershipTiers from "@/components/layout/membership-tiers";
import { Updates } from "@/components/layout/updates";
import { UserAdd01Icon } from "hugeicons-react";
import DayOne from "@/components/layout/day-one";
import AboutUs from "@/components/layout/about-us";
import Register from "@/components/layout/register";

export default function Home() {
	return (
		<Box css={{ "&::-webkit-scrollbar": { display: "none" } }}>
			<Hero />
			<SimpleSlider />
			<Highlight />
			<Box id="schedule">
				<DayOne />
			</Box>
			<Box id="pricing">
				<MembershipTiers />
			</Box>
			<Box id="register">
				<Register />
			</Box>
			<CaseStudy />
			<Updates />
			<Box id="about">
				<AboutUs />
			</Box>
			<Footer />

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
					gap={2}
					fontSize="small"
					px={4}
					_hover={{ bg: "accent.hover" }}
					borderRadius="full"
					boxShadow="lg"
				>
					Sign Up
					<IconButton aria-label="Twitter" variant="ghost" color="#B8B8B8">
						<UserAdd01Icon />
					</IconButton>
				</Button>
			</Box>
		</Box>
	);
}
