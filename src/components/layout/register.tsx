"use client";

import {
	Box,
	Container,
	Heading,
	VStack,
	HStack,
	Text,
	Button,
	Icon,
	List,
	ListItem,
	Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
	BrowserIcon,
	Shield01Icon,
	Tag01Icon,
	Ticket01Icon,
} from "hugeicons-react";

const MotionListItem = motion(ListItem);

const registrationSteps = [
	{
		title: "Access the Registration Portal",
		icon: BrowserIcon,
		details: [
			"Visit www.rebelsmesummit.com (launching May 2025)",
			"The registration form is designed to be mobile-friendly, secure, and intuitive",
		],
	},
	{
		title: "Choose Your Ticket Tier",
		icon: Ticket01Icon,
		details: [
			"Review the ticket options and select the one that aligns with your engagement level",
		],
	},
	{
		title: "Apply Your Discounts",
		icon: Tag01Icon,
		details: [
			"Enter any applicable early bird or other discount codes during checkout",
		],
	},
	{
		title: "Secure Your Seat",
		icon: Shield01Icon,
		details: [
			"Payments via Card, Bank Transfer, or Mobile Wallet",
			"On completion, receive an instant email and WhatsApp confirmation with your summit access details",
		],
	},
];

const Register = () => {
	return (
		<Box bg="gray.900" py={{ base: 10, md: 20 }}>
			<Container maxW="7xl">
				<VStack gap={{ base: 8, md: 12 }}>
					<Heading
						as="h2"
						fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
						color="white"
						textAlign="center"
					>
						How to Register
					</Heading>

					<List.Root gap={{ base: 6, md: 8 }} w="full">
						{registrationSteps.map((step, index) => (
							<MotionListItem
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<HStack
									bg="gray.800"
									p={{ base: 4, md: 6 }}
									borderRadius="xl"
									gap={4}
									align="start"
								>
									<Box
										bg="accent"
										p={3}
										borderRadius="lg"
										color="white"
										flexShrink={0}
									>
										<Icon as={step.icon} boxSize={6} />
									</Box>

									<VStack align="start" gap={2}>
										<Text
											fontSize={{ base: "lg", md: "xl" }}
											fontWeight="bold"
											color="white"
										>
											Step {index + 1}: {step.title}
										</Text>
										{step.details.map((detail, idx) => (
											<Text
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={idx}
												fontSize={{ base: "sm", md: "md" }}
												color="gray.400"
											>
												{detail}
											</Text>
										))}
									</VStack>
								</HStack>
							</MotionListItem>
						))}
					</List.Root>

					<Link href="https://www.rebelsmesummit.com" target="_blank">
						<Button
							size="lg"
							bg="accent"
							color="white"
							gap={2}
							_hover={{ bg: "accent.hover" }}
						>
							Register Now
						</Button>
					</Link>
				</VStack>
			</Container>
		</Box>
	);
};

export default Register;
