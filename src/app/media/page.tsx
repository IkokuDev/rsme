import { Fragment } from "react";
import { Cover } from "@/components/layout/media/cover";
import { Contact } from "@/components/layout/media/contact";
import { Hero } from "@/components/layout/media/hero";
import { SaleTag02Icon } from "hugeicons-react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

export default function Media() {
	return (
		<Fragment>
			<Hero />
			<Cover />
			<Contact />
			<Box
				position="fixed"
				top="50%"
				right="-60px"
				transform="translateX(-50%)"
				zIndex="overlay"
			>
				<VStack gap={2}>
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
					<Text fontSize="xs" color="gray.300" textAlign="center">
						Ticketing opens July 1, 2025
					</Text>
				</VStack>
			</Box>
		</Fragment>
	);
}
