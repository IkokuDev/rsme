import { Box, Button } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

import SimpleSlider from "@/components/layout/slider";
import { Hero } from "@/components/layout/hero";
import { CaseStudy } from "@/components/layout/case-study";
import MembershipTiers from "@/components/layout/membership-tiers";
import { Updates } from "@/components/layout/updates";
import { SaleTag02Icon } from "hugeicons-react";
import Partnership from "@/components/layout/partner/partnership";
import { Evangelist } from "@/components/layout/evangelist";

export default function Home() {
	return (
		<Box css={{ "&::-webkit-scrollbar": { display: "none" } }}>
			<Hero />
			<SimpleSlider />
			<Box id="pricing">
				<MembershipTiers />
			</Box>
			<Box id="partnership">
				<Partnership />
			</Box>
			<CaseStudy />
			<Evangelist />
			<Updates />
			{/* Fixed Button */}
			<Box
				position="fixed"
				top={{ base: "auto", md: "50%" }}
				bottom={{ base: "20px", md: "auto" }}
				right={{ base: "50%", md: "-60px" }}
				transform={{
					base: "translateX(50%)",
					md: "translateX(-50%)",
				}}
				zIndex="overlay"
			>
				<Tooltip
					content="Ticketing opens July 1, 2025"
					positioning={{ placement: "left" }}
				>
					<Button
						bg="summit-secondary"
						color="white"
						size={{ base: "md", md: "lg" }}
						display="flex"
						alignItems="center"
						gap={2}
						fontSize="small"
						px={4}
						_hover={{ bg: "accent.hover" }}
						borderRadius="full"
						boxShadow="lg"
						w={{ base: "auto", md: "auto" }}
					>
						Buy Ticket
						<Box color="white">
							<SaleTag02Icon size={20} />
						</Box>
					</Button>
				</Tooltip>
			</Box>
		</Box>
	);
}
