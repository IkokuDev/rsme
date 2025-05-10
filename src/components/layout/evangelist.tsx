"use client";

import {
	Box,
	Container,
	VStack,
	Heading,
	Text,
	List,
	ListItem,
	Accordion,
	Button,
	SimpleGrid,
	Card,
	CardHeader,
	CardBody,
	Badge,
	Icon,
	Span,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
	ArrowRightDoubleIcon,
	CheckmarkCircle01Icon,
	WhatsappIcon,
} from "hugeicons-react";

const MotionBox = motion(Box);

export const Evangelist = () => {
	const sevenDayPlan = [
		{
			day: "Day 1",
			title: "Personal Commitment",
			tasks: [
				"Send registration link to 5 close contacts",
				"Set up WhatsApp Group (include 'Rebel Summit' in name)",
				"Share provided voice note",
			],
			why: "Personal asks gets the highest response—plus, you'll feel great seeing immediate sign-ups.",
		},
		{
			day: "Day 2",
			title: "Broadcast to Your Network",
			tasks: [
				"Share our branded flyer on your WhatsApp Status, Instagram Story, Facebook Story, LinkedIn",
				"Add a personal message: 'I'm attending. You should too. Let's build the future together.'",
				"Tap ✅ in the Broadcast Task Check poll",
			],
			why: "Stories and statuses reach 3–5× more people than direct messages.",
		},
		{
			day: "Day 3",
			title: "Group Outreach",
			tasks: [
				"Share the flyer and voice note into at least 3 active WhatsApp Groups",
				"Include message: 'Serious SME owners, this is for you. Register free and let's move forward together.'",
				"Tap ✅ in the Group Outreach Task Check poll",
			],
			why: "Group referrals spark curiosity—and people always ask peers for recommendations.",
		},
		{
			day: "Day 4",
			title: "1-on-1 Reminders",
			tasks: [
				"Privately follow up with the 5–10 people you first shared with",
				"Send message: 'Hi [Name], just checking in! Have you registered for RebelSME yet? It's free and worth it. [Link]'",
				"Tap ✅ in the Follow-Up Task Check poll",
			],
			why: "One-on-one nudges convert 'thinking about it' into 'I'm in.'",
		},
		{
			day: "Day 5",
			title: "Refresh Your Feed",
			tasks: [
				"Share a Daily Reminder Text to your social media or WhatsApp Status",
				"Optional: Post a selfie with caption 'I'm ready to Rebel — are you? Register now: + registration Link'",
				"Tap ✅ in the Refresh Task Check poll",
			],
			why: "Fresh content cuts through the noise and keeps your network engaged.",
		},
		{
			day: "Day 6",
			title: "Ask for Micro-Evangelists",
			tasks: [
				"Message 2–3 registered people: 'Would you like to invite a few more SMEs too? Let's build a strong community.'",
				"Forward them the voice note and flyer if they agree",
				"Tap ✅ in the Empower Task Check poll",
			],
			why: "Peer recommendations are even more powerful—and multiply your impact.",
		},
		{
			day: "Day 7",
			title: "Final Sprint",
			tasks: [
				"Repost the flyer and voice note to all your WhatsApp and social media statuses",
				"Send final reminder: 'Last chance! Sept 11–13, free, don't miss out.'",
				"Celebrate: You've helped build a future-changing movement!",
				"Tap ✅ in the Final Push Task Check poll",
			],
			why: "Last-minute reminders capture those on the fence—plus you'll see the results of your week's efforts.",
		},
	];
	return (
		<Box py={{ base: 12, md: 20 }} bg="gray.900">
			<Container maxW="7xl">
				<VStack gap={12}>
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
							Welcome, Success Evangelist!
						</Heading>
						<Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
							Thank you for joining the Rebel SME Movement. Your role is
							vital—and we promise: we won&apos;t clutter your inbox or pester you.
						</Text>
					</MotionBox>

					{/* Mission & Rewards */}
					<SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
						<Card.Root bg="whiteAlpha.100" borderRadius="xl">
							<CardHeader>
								<Heading size="md" color="summit-secondary">
									Your Mission
								</Heading>
							</CardHeader>
							<CardBody>
								<List.Root gap={3}>
									{[
										"Personally invite SME founders, business owners, and serious side-hustlers",
										"Share the RebelSME Registration link",
										"Encourage them to register early",
									].map((item, index) => (
										<ListItem
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											display="flex"
											gap={3}
											color="gray.300"
										>
											<Icon mt={1} color="green.500">
												<CheckmarkCircle01Icon />
											</Icon>
											{/* <ListIcon as={MdCheckCircle} color="green.500" mt={1} /> */}
											<Text>{item}</Text>
										</ListItem>
									))}
								</List.Root>
							</CardBody>
						</Card.Root>

						<Card.Root bg="whiteAlpha.100" borderRadius="xl">
							<CardHeader>
								<Heading size="md" color="summit-secondary">
									Your Rewards
								</Heading>
							</CardHeader>
							<CardBody>
								<List.Root gap={3}>
									{[
										"Free access to all breakout sessions (valued at ₦200,000)",
										"Preview exclusive summit content and resources",
									].map((item, index) => (
										<ListItem
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											display="flex"
											gap={3}
											color="gray.300"
										>
											<Icon fontSize="lg" color="green.500">
												<CheckmarkCircle01Icon />
											</Icon>
											<Text>{item}</Text>
										</ListItem>
									))}
								</List.Root>
							</CardBody>
						</Card.Root>
					</SimpleGrid>

					{/* 7-Day Plan */}
					<Box w="full">
						<Heading size="lg" mb={8} textAlign="center" color="white">
							7-DAY SUCCESS EVANGELIST ACTION PLAN
						</Heading>
						<Accordion.Root multiple>
							{sevenDayPlan.map((day, index) => (
								<Accordion.Item
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									mb={4}
									value={day.title}
								>
									<Accordion.ItemTrigger cursor="pointer">
										<Span flex="1" color="summit-secondary" fontWeight="bold">
											{day.day}: {day.title}
										</Span>
										<Accordion.ItemIndicator />
									</Accordion.ItemTrigger>
									<Accordion.ItemContent pb={4}>
										<VStack align="start" gap={4}>
											<List.Root gap={3}>
												{day.tasks.map((task, taskIndex) => (
													<ListItem
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														key={taskIndex}
														display="flex"
														color="gray.300"
													>
														<Icon fontSize="lg" color="accent">
															<ArrowRightDoubleIcon />
														</Icon>
														<Text>{task}</Text>
													</ListItem>
												))}
											</List.Root>
											<Box bg="whiteAlpha.100" p={4} borderRadius="md" w="full">
												<Text color="gray.400" fontStyle="italic">
													Why It Works: {day.why}
												</Text>
											</Box>
										</VStack>
									</Accordion.ItemContent>
								</Accordion.Item>
							))}
						</Accordion.Root>
					</Box>

					{/* Important Dates */}
					<Box
						w="full"
						bg="whiteAlpha.100"
						p={6}
						borderRadius="xl"
						textAlign="center"
					>
						<Heading size="md" color="summit-secondary" mb={4}>
							Important Dates
						</Heading>
						<SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
							<Box>
								<Badge colorPalette="red" mb={2}>
									Cut-off
								</Badge>
								<Text color="white">August 30, 2025</Text>
							</Box>
							<Box>
								<Badge colorPalette="green" mb={2}>
									Event
								</Badge>
								<Text color="white">Sept 11–13, 2025</Text>
								<Text color="gray.400" fontSize="sm">
									International Conference Center (ICC)
								</Text>
							</Box>
						</SimpleGrid>
					</Box>

					{/* Contact Button */}
					<Button
						aria-label="Whatsapp"
						variant="ghost"
						color="#B8B8B8"
						_hover={{ color: "summit-secondary" }}
					>
						<WhatsappIcon />
						Join WhatsApp Group
					</Button>
				</VStack>
			</Container>
		</Box>
	);
};
