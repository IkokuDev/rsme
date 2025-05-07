"use client";

import {
	Box,
	Container,
	Heading,
	Text,
	VStack,
	SimpleGrid,
	List,
	ListItem,
	Icon,
	Stat,
	StatLabel,
	HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
	ChartBreakoutSquareIcon,
	UserGroupIcon,
	Idea01Icon,
	GlobeIcon,
	CellularNetworkIcon,
	Agreement01Icon,
	DocumentAttachmentIcon,
} from "hugeicons-react";

const MotionBox = motion(Box);

const opportunities = [
	{
		title: "Brand Engagement",
		icon: ChartBreakoutSquareIcon,
		items: [
			"Prominent logo placement across event materials and digital platform",
			"Customized branding opportunities within summit venue",
		],
	},
	{
		title: "Lead Generation",
		icon: UserGroupIcon,
		items: [
			"Exhibition booths in high-traffic areas",
			"Access to attendee data (in compliance with data protection regulation)",
		],
	},
	{
		title: "Thought Leadership",
		icon: Idea01Icon,
		items: [
			"Participating in panel discussions and keynote sessions",
			"Contributing to whitepapers and research publications",
		],
	},
	{
		title: "Strategic Networking",
		icon: CellularNetworkIcon,
		items: [
			"Exclusive networking events with industry leaders and policymakers",
			"Facilitated introductions to potential partners and clients",
		],
	},
];

const impactMetrics = [
	{
		label: "Expected Attendees",
		value: "15,000+",
		icon: UserGroupIcon,
	},
	{
		label: "Coverage",
		value: "Global",
		icon: GlobeIcon,
	},
	{
		label: "Strategic Partnerships",
		value: "10+",
		icon: Agreement01Icon,
	},
	{
		label: "Policy Briefs",
		value: "5",
		icon: DocumentAttachmentIcon,
	},
];

const Partnership = () => {
	return (
		<Box bg="gray.900" py={{ base: 10, md: 20 }}>
			<Container maxW="7xl">
				<VStack gap={{ base: 10, md: 16 }}>
					<Heading
						as="h2"
						fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
						color="white"
						textAlign="center"
					>
						Sponsorhip & Partnership Opportunities
					</Heading>

					<SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
						{opportunities.map((opportunity, index) => (
							<MotionBox
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								bg="gray.800"
								p={6}
								borderRadius="xl"
							>
								<VStack align="start" gap={4}>
									<HStack gap={4}>
										<Icon as={opportunity.icon} boxSize={6} color="accent" />
										<Heading as="h3" fontSize="xl" color="white">
											{opportunity.title}
										</Heading>
									</HStack>
									<List.Root gap={3}>
										{opportunity.items.map((item, idx) => (
											<ListItem
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={idx}
												color="gray.400"
												fontSize="sm"
												display="flex"
												alignItems="start"
											>
												<Text as="span" color="accent" mr={2}>
													•
												</Text>
												{item}
											</ListItem>
										))}
									</List.Root>
								</VStack>
							</MotionBox>
						))}
					</SimpleGrid>

					<Box w="full">
						<Heading
							as="h3"
							fontSize={{ base: "2xl", md: "3xl" }}
							color="white"
							mb={8}
							textAlign="center"
						>
							Anticipated Impact Metrics
						</Heading>
						<SimpleGrid
							columns={{ base: 1, sm: 2, md: 4 }}
							gap={{ base: 6, md: 8 }}
						>
							{impactMetrics.map((metric, index) => (
								<MotionBox
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									<Stat.Root
										bg="gray.800"
										p={6}
										borderRadius="xl"
										textAlign="center"
									>
										<Icon as={metric.icon} boxSize={8} color="accent" mb={4} />
										<Stat.ValueText
											fontSize={{ base: "3xl", md: "4xl" }}
											color="white"
											mb={2}
										>
											{metric.value}
										</Stat.ValueText>
										<StatLabel fontSize="sm" color="gray.400">
											{metric.label}
										</StatLabel>
									</Stat.Root>
								</MotionBox>
							))}
						</SimpleGrid>
					</Box>
				</VStack>
			</Container>
		</Box>
	);
};

export default Partnership;
