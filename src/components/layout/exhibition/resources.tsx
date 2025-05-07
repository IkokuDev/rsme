"use client";

import {
	Box,
	Container,
	VStack,
	Heading,
	Text,
	SimpleGrid,
	Card,
	Icon,
	Button,
	List,
	ListItem,
	Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
	ClipboardIcon,
	RulerIcon,
	Shield01Icon,
	ComputerIcon,
	CompassIcon,
	ArrowRight01Icon,
} from "hugeicons-react";

const MotionBox = motion(Box);

interface ResourceSectionProps {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
	items: string[];
}

const ResourceCard = ({
	icon,
	title,
	subtitle,
	items,
}: ResourceSectionProps) => (
	<MotionBox
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
	>
		<Card.Root
			bg="whiteAlpha.50"
			borderRadius="2xl"
			overflow="hidden"
			position="relative"
			_hover={{
				bg: "whiteAlpha.100",
				transform: "translateY(-8px)",
			}}
			transition="all 0.3s"
		>
			{/* Visual Header */}
			<Box bg="whiteAlpha.100" p={6}>
				<Flex align="center" gap={4}>
					<Box color="summit.secondary">{icon}</Box>
					<Box>
						<Heading size="md" color="white">
							{title}
						</Heading>
						<Text color="gray.400" fontSize="sm">
							{subtitle}
						</Text>
					</Box>
				</Flex>
			</Box>

			{/* Content */}
			<Box p={6}>
				<List.Root gap={4}>
					{items.map((item, index) => (
						<ListItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							display="flex"
							alignItems="flex-start"
							gap={3}
							color="gray.300"
							_hover={{ color: "white" }}
							transition="color 0.2s"
							cursor="pointer"
						>
							<Icon as={ArrowRight01Icon} mt={1} />
							<Text>{item}</Text>
						</ListItem>
					))}
				</List.Root>
			</Box>
		</Card.Root>
	</MotionBox>
);

export const ExhibitorResources = () => {
	const resources: ResourceSectionProps[] = [
		{
			icon: <ClipboardIcon size={32} />,
			title: "Registration & Onboarding",
			subtitle: "Start Strong",
			items: [
				"Easy Registration: Follow a streamlined process to secure your exhibition space",
				"Onboarding Checklist: Use our printable checklist for complete setup",
			],
		},
		{
			icon: <RulerIcon size={32} />,
			title: "Planning & Support",
			subtitle: "Blueprint for a Disruptive Experience",
			items: [
				"Booth Configurations: Review comprehensive floor plans",
				"On-Site Logistics: Get detailed checklists and timelines",
				"Vendor Partnerships: Access a vetted list of local vendors",
				"ROI & Success Metrics: Track engagement and performance",
			],
		},
		{
			icon: <Shield01Icon size={32} />,
			title: "Services & Safety",
			subtitle: "Exhibit with Confidence",
			items: [
				"On-Site Support: Benefit from dedicated technical assistance",
				"Safety & Security Guidelines: Review comprehensive protocols",
				"Local Vendor Assistance: Connect with trusted partners",
			],
		},
		{
			icon: <ComputerIcon size={32} />,
			title: "Digital Integration & Analytics",
			subtitle: "Hybrid is the New Normal",
			items: [
				"Digital Engagement Tools: Integrate interactive features",
				"Performance Tracking: Access detailed analytics",
			],
		},
		{
			icon: <CompassIcon size={32} />,
			title: "Navigating the Summit",
			subtitle: "Master the Rebel Terrain",
			items: [
				"Networking Strategies: Discover best practices for engagement",
				"Real-Time Updates: Stay informed via digital signage and notifications",
			],
		},
	];

	return (
		<Box py="10rem" bg="gray.900">
			<Container maxW="7xl">
				<VStack gap={16}>
					{/* Hero Section */}
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						textAlign="center"
						w="full"
					>
						<Heading
							size="2xl"
							mb={6}
							bgGradient="linear-gradient(to right, #B8B8B8, #8B1A2F)"
							lineHeight="normal"
							css={{
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								textFillColor: "transparent",
							}}
						>
							Exhibitor Resources
						</Heading>
						<Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
							Everything you need to create an unforgettable brand experience at
							the Rebel SME Summit.
						</Text>
					</MotionBox>

					{/* Resource Cards Grid */}
					<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
						{resources.map((resource, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<ResourceCard key={index} {...resource} />
						))}
					</SimpleGrid>

					{/* Contact Box */}
					<MotionBox
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						w="full"
					>
						<Card.Root
							bg="whiteAlpha.100"
							p={8}
							borderRadius="2xl"
							position="relative"
							overflow="hidden"
						>
							<Box
								position="absolute"
								top={0}
								left={0}
								right={0}
								h="4px"
								bgGradient="linear(to-r, summit.primary, summit.secondary)"
							/>
							<VStack gap={6} align="center">
								<Heading size="lg" color="white">
									Need Support?
								</Heading>
								<Text color="gray.300" textAlign="center" maxW="xl">
									Our team is ready to help you make the most of your exhibition
									experience.
								</Text>
								<SimpleGrid
									columns={{ base: 1, md: 3 }}
									gap={4}
									w="full"
									maxW="2xl"
								>
									<Button
										colorScheme="whiteAlpha"
										size="lg"
										onClick={() => {
											window.location.href =
												"mailto:exhibitors@smerebelsummit.com";
										}}
									>
										Email Support
									</Button>
									<Button
										colorScheme="whiteAlpha"
										size="lg"
										onClick={() => {
											window.location.href = "tel:+2349167338000";
										}}
									>
										Call Now
									</Button>
									<Button colorScheme="purple" size="lg" variant="solid">
										Submit Inquiry
									</Button>
								</SimpleGrid>
							</VStack>
						</Card.Root>
					</MotionBox>
				</VStack>
			</Container>
		</Box>
	);
};
