"use client";

import {
	Box,
	Container,
	VStack,
	Heading,
	Text,
	Accordion,
	Input,
	SimpleGrid,
	Button,
	Icon,
	Badge,
	Group,
	Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Search01Icon } from "hugeicons-react";
import { useState } from "react";

const MotionBox = motion(Box);

interface FAQItem {
	question: string;
	answer: React.ReactNode;
	category: string;
}

const FAQSection = ({
	title,
	items,
	searchQuery,
}: {
	title: string;
	items: FAQItem[];
	searchQuery: string;
}) => {
	const filteredItems = items.filter(
		(item) =>
			item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
			String(item.answer).toLowerCase().includes(searchQuery.toLowerCase()),
	);

	if (filteredItems.length === 0) return null;

	return (
		<Box mb={8}>
			<Heading size="md" color="white" mb={4}>
				{title}
				<Badge ml={2} colorScheme="purple">
					{filteredItems.length}
				</Badge>
			</Heading>
			<Accordion.Root multiple>
				{filteredItems.map((item, index) => (
					<Accordion.Item
						value={item.category}
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						border="none"
						mb={4}
					>
						<Accordion.ItemTrigger
							bg="whiteAlpha.50"
							_hover={{ bg: "whiteAlpha.100" }}
							borderRadius="lg"
							p={4}
						>
							<Box flex="1" textAlign="left" color="gray.100">
								{item.question}
							</Box>
						</Accordion.ItemTrigger>
						<Accordion.ItemContent pb={4} pt={6} px={4} color="gray.300">
							{item.answer}
						</Accordion.ItemContent>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</Box>
	);
};

export const SummitFAQ = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const faqData: { [key: string]: FAQItem[] } = {
		General: [
			{
				question: "When and where is the SME Rebel Summit 2025?",
				answer:
					"11–13 September 2025 in Abuja, Nigeria, hosted at the International Conference Centre (ICC).",
				category: "General",
			},
			{
				question: "What are the Summit's core objectives?",
				answer: (
					<VStack align="start" gap={3}>
						<Text>
							Our mission is to revolutionize the SME landscape through:
						</Text>
						<Text>• Challenging conventional SME approaches</Text>
						<Text>• Unlocking alternative funding sources</Text>
						<Text>• Building founder resilience & self-leadership</Text>
						<Text>• Solving talent challenges</Text>
						<Text>• Establishing a sustainable National SME movement</Text>
					</VStack>
				),
				category: "General",
			},
		],
		"Registration & Tickets": [
			{
				question: "How do I register for the summit?",
				answer: (
					<VStack align="start" gap={3}>
						<Text>Registration is a simple process:</Text>
						<Text>1. Click the Register Now button</Text>
						<Text>2. Choose your ticket type</Text>
						<Text>3. Provide your details</Text>
						<Text>4. Make a secure payment</Text>
						<Text fontWeight="bold">
							Early bird discounts are available until August 10, 2025!
						</Text>
					</VStack>
				),
				category: "Registration",
			},
			{
				question: "What ticket types are available?",
				answer: (
					<VStack align="start" gap={3}>
						<Text>
							• General Virtual Ticket (Access one (1) Paid Session for FREE)
						</Text>
						<Text>- Live-Stream access</Text>
						<Text>- 30-day Review Event on-demand</Text>
						<Text>• SME Growth Pass</Text>
						<Text>- Physical Access</Text>
						<Text>- Event Materials</Text>
						<Text>• VIP Founder Pass</Text>
						<Text>- Front-row seating</Text>
						<Text>- Investor Speed-Networking</Text>
						<Text>- Premium Lunch</Text>
						<Text>• Investor & Mastermind Access</Text>
						<Text>- Exclusive closed-door sessions</Text>
						<Text>- Premium Lunch</Text>
						<Text>- Curated SME Profiles for Direct Matchmaking</Text>
						<Text>
							- Private Executive Dinner with Policy Makers & Industry Experts
						</Text>
					</VStack>
				),
				category: "Registration",
			},
			{
				question: "What are the prices and discounts?",
				answer: (
					<Box>
						<SimpleGrid columns={{ base: 1, md: 4 }} gap={4} mb={4}>
							<Text fontWeight="bold" color="white">
								Ticket Type
							</Text>
							<Text fontWeight="bold" color="white">
								Regular Price
							</Text>
							<Text fontWeight="bold" color="white">
								Early Bird
							</Text>
							<Text fontWeight="bold" color="white">
								Bulk Price
							</Text>

							<Text>General Virtual</Text>
							<Text>₦10,000</Text>
							<Text>₦8,500</Text>
							<Text>₦7,000 (5+)</Text>

							<Text>SME Growth Pass</Text>
							<Text>₦50,000</Text>
							<Text>₦40,000</Text>
							<Text>₦30,000 (3+)</Text>

							<Text>VIP Founder Pass</Text>
							<Text>₦150,000</Text>
							<Text>₦130,000</Text>
							<Text>₦110,000 (2+)</Text>

							<Text>Investor & Mastermind</Text>
							<Text>₦500,000</Text>
							<Text>₦450,000</Text>
							<Text>Custom</Text>
						</SimpleGrid>
					</Box>
				),
				category: "Registration",
			},
			{
				question: "Can I transfer my ticket?",
				answer:
					"Yes—name transfers are permitted up to 14 days before the event via your Summit dashboard.",
				category: "Registration",
			},
			{
				question: "Is there a refund policy?",
				answer:
					"All sales are final; no refunds. However, you can use your ticket for the next event. Please choose your options carefully when registering.",
				category: "Registration",
			},
		],
	};

	return (
		<Box py="10rem" bg="gray.900">
			<Container maxW="7xl">
				<VStack gap={12}>
					{/* Header */}
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
							Frequently Asked Questions
						</Heading>
						<Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
							Everything you need to know about the Rebel SME Summit
						</Text>
					</MotionBox>

					{/* Search */}
					<Center w="full">
						<Group>
							<Icon as={Search01Icon} color="gray.400" />
							<Input
								placeholder="Search FAQ..."
								bg="whiteAlpha.50"
								border="none"
								_placeholder={{ color: "gray.500" }}
								_hover={{ bg: "whiteAlpha.100" }}
								_focus={{ bg: "whiteAlpha.100" }}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</Group>
					</Center>

					{/* FAQ Sections */}
					<Box w="full">
						{Object.entries(faqData).map(([category, items]) => (
							<FAQSection
								key={category}
								title={category}
								items={items}
								searchQuery={searchQuery}
							/>
						))}
					</Box>

					{/* Contact Support */}
					<Box
						bg="whiteAlpha.100"
						p={8}
						borderRadius="xl"
						w="full"
						textAlign="center"
					>
						<Heading size="md" color="white" mb={4}>
							Still have questions?
						</Heading>
						<Text color="gray.300" mb={6}>
							Contact our support team for assistance
						</Text>
						<SimpleGrid
							columns={{ base: 1, md: 2 }}
							gap={4}
							maxW="md"
							mx="auto"
						>
							<Button
								bg="summit-secondary"
								color="white"
								onClick={() => {
									window.location.href = "mailto:info@rebelsmesummit.com";
								}}
							>
								Email Support
							</Button>
							<Button variant="outline" bg="summit-secondary" color="white">
								Live Chat
							</Button>
						</SimpleGrid>
					</Box>
				</VStack>
			</Container>
		</Box>
	);
};
