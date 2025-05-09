import { DayActionPlan } from "@/components/layout/evangelist/7-day-action-plan";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { SaleTag02Icon } from "hugeicons-react";
import { Fragment } from "react";

export default function ActionPlan() {
	return (
		<Fragment>
			<DayActionPlan />
			<Box
				position="fixed"
				top={{ base: "auto", md: "50%" }}
				bottom={{ base: "20px", md: "auto" }}
				right={{ base: "50%", md: "-60px" }}
				transform="translateX(-50%)"
				zIndex="overlay"
			>
				<VStack gap={2}>
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
					<Text fontSize="xs" color="gray.300" textAlign="center">
						Ticketing opens July 1, 2025
					</Text>
				</VStack>
			</Box>
		</Fragment>
	);
}
