"use client";

import {
	Box,
	Container,
	VStack,
	Heading,
	Text,
	List,
	ListItem,
	Card,
	Badge,
	Icon,
	SimpleGrid,
} from "@chakra-ui/react";
import { MdInfo } from "react-icons/md";
import { motion } from "framer-motion";
import { CheckmarkCircle01Icon } from "hugeicons-react";

const MotionBox = motion(Box);

interface DayPlanProps {
	day: string;
	title: string;
	tasks: string[];
	why: string;
}

const DayPlan = ({ day, title, tasks, why }: DayPlanProps) => (
	<MotionBox
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
	>
		<Card.Root
			bg="whiteAlpha.100"
			p={6}
			borderRadius="xl"
			position="relative"
			_hover={{ transform: "translateY(-4px)" }}
			transition="transform 0.2s"
		>
			<Badge
				position="absolute"
				top={4}
				right={4}
				colorScheme="purple"
				fontSize="sm"
			>
				{day}
			</Badge>

			<VStack align="start" gap={4}>
				<Heading size="md" color="summit.secondary">
					{title}
				</Heading>

				<List.Root gap={3}>
					{tasks.map((task, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<ListItem gap={3} key={index} display="flex" color="gray.300">
							<Icon mt={1} color="green.500">
								<CheckmarkCircle01Icon />
							</Icon>

							{/* <ListIcon as={MdCheckCircle} color="green.500" mt={1} /> */}
							<Text>{task}</Text>
						</ListItem>
					))}
				</List.Root>

				<Box bg="whiteAlpha.200" p={4} borderRadius="md" w="full">
					<Text fontSize="sm" fontStyle="italic" color="gray.400">
						<Icon as={MdInfo} mr={2} />
						Why It Works: {why}
					</Text>
				</Box>
			</VStack>
		</Card.Root>
	</MotionBox>
);

export const DayActionPlan = () => {
	const actionPlan = [
		{
			day: "Day 1",
			title: "Personal Commitment",
			tasks: [
				"Send registration link to 5 close contacts",
				"Set up WhatsApp Group (include 'Rebel Summit' in name)",
				"Record and forward the Voice Note",
				"Tap ✅ in the Kick-Off Task Check poll",
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
		<Box py="10rem" bg="gray.900">
			<Container maxW="7xl">
				<VStack gap={16}>
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
							7-DAY SUCCESS EVANGELIST ACTION PLAN
						</Heading>
						<Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
							A structured approach to help you make maximum impact with minimum
							effort
						</Text>
					</MotionBox>

					{/* Timeline */}
					<SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} w="full">
						{actionPlan.map((day, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<DayPlan key={index} {...day} />
						))}
					</SimpleGrid>

					{/* Final Notes */}
					<Card.Root bg="whiteAlpha.100" p={8} borderRadius="xl" w="full">
						<Heading size="md" color="summit.secondary" mb={6}>
							Final Notes
						</Heading>
						<List.Root gap={4}>
							{[
								"No Spam Promise: We'll never send unrelated content—only seven clear, valuable messages.",
								"Task-Based Polls in Action: After each task prompt, a simple yes/no poll appears.",
								"Weekly Summary: Every Sunday, we'll share a leaderboard highlighting top evangelists.",
								"Real Impact: This structured approach lets you start anytime.",
								"We've Got You: Any questions? Just tag @RebelTeam—we respond fast.",
							].map((note, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<ListItem gap={3} key={index} display="flex" color="gray.300">
									<Icon mt={1} color="green.500">
										<CheckmarkCircle01Icon />
									</Icon>

									<Text>{note}</Text>
								</ListItem>
							))}
						</List.Root>
					</Card.Root>
				</VStack>
			</Container>
		</Box>
	);
};
