import { Hero } from "@/components/layout/partner/hero";
import Partnership from "@/components/layout/partner/partnership";
import { SignUp } from "@/components/layout/partner/sign-up";
import { Tooltip } from "@/components/ui/tooltip";
import { Box, Button } from "@chakra-ui/react";
import { SaleTag02Icon } from "hugeicons-react";
import { Fragment } from "react";

export default function Partner() {
	return (
		<Fragment>
			<Hero />
			<Partnership />
			<SignUp />
			 <Box
					position="fixed"
					top="50%"
					right="-60px"
					transform="translateX(-50%)"
					zIndex="overlay"
				  >
					<Tooltip
					  content="Ticketing opens July 1, 2025"
					  positioning={{ placement: "left" }}
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
					</Tooltip>
				  </Box>
		</Fragment>
	);
}
