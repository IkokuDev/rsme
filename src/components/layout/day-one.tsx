"use client";

import {
	Box,
	Container,
	Heading,
	Text,
	Stack,
	Grid,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface TimeSlotProps {
	time: string;
	title: string;
	description?: string[];
	location?: string;
}

interface ScheduleItem {
	time: string;
	title: string;
	description?: string[];
	location?: string;
	subItems?: string[];
}

interface DaySchedule {
	date: string;
	title: string;
	morning: ScheduleItem[];
	midday: ScheduleItem[];
	afternoon: ScheduleItem[];
}

const eventSchedule: DaySchedule[] = [
	{
		date: "Thursday, September 11, 2025",
		title: "Day 1: Building the Foundation",
		morning: [
			{
				time: "8:00 AM – 9:00 AM",
				title: "Registration & Check-In",
				location: "Main Entrance, ICC",
				description: [
					"Collect your digital badge and Rebel Summit welcome kit",
					"Activate the Rebel Summit app for real-time updates",
				],
			},
			{
				time: "9:00 AM – 9:45 AM",
				title: "Opening Keynote",
				description: [
					"A dynamic keynote to inspire and set the stage for transformative change",
				],
			},
		],
		midday: [
			{
				time: "10:00 AM – 12:30 PM",
				title: "Breakout Sessions & Keynotes",
				description: [
					"Engage in thought-provoking discussions led by industry pioneers",
				],
				subItems: [
					"Innovative Financing for Rebel SMEs: Beyond Traditional Banks",
					"AI as the Great Equalizer: Empowering SMEs to Compete with Giants",
					"Ruthless Execution: The Standout Capability of Rebel SMEs",
					"Building a Rebel Brand: Marketing Strategies for SMEs",
					"Tech-Savvy SMEs: Leveraging Emerging Technologies for Growth",
					"Going Continental: AFCFTA Expansion Strategies for SMEs",
					"United We Stand: How Rebel SMEs Can Shape Policy for a Fairer Playing Field",
					"How Innovative Asset Management is Reviving Family & State-Owned Enterprises",
					"How Changes in SEC are Spurring Growth for SMEs",
				],
			},
			{
				time: "12:30 PM – 2:00 PM",
				title: "Networking Lunch",
				description: [
					"Connect with fellow innovators over a curated meal featuring Nigerian & Intercontinental cuisine",
				],
			},
		],
		afternoon: [
			{
				time: "2:00 PM – 4:30 PM",
				title: "Breakout Sessions (Continued)",
				description: [
					"Deep-dive into keynote topics with interactive Q&A and practical applications",
				],
			},
			{
				time: "4:30 PM – 5:00 PM",
				title: "Daily Wrap-Up & Day 2 Preview",
				description: [
					"Recap key insights and get a sneak peek into the next day's agenda",
				],
			},
		],
	},
	{
		date: "Friday, September 12, 2025",
		title: "Day 2: Execution Excellence",
		morning: [
			{
				time: "8:00 AM – 9:00 AM",
				title: "Early Networking & Check-In",
				description: [
					"Secure premium seating and network with key players before the sessions begin",
				],
			},
			{
				time: "9:00 AM – 9:45 AM",
				title: "Keynote on Execution Excellence",
				description: [
					"Learn actionable strategies for driving SME success through precision and innovation",
				],
			},
		],
		midday: [
			{
				time: "10:00 AM – 12:30 PM",
				title: "Workshops & Case Studies",
				subItems: [
					"Workshop 1: The Secrets of Guerrilla Marketing - Launch a Guerrilla Marketing Manifesto to redefine SME outreach",
					"Workshop 2: Recruitment Revolution - Explore innovative talent acquisition strategies for SMEs",
					"Case Study: How to Build a Pressure Group - Learn how to unite SMEs for collective advocacy and impact",
					"Growth Strategies: Crowdfunding & Growth Board",
					"Talent Support: Contract Management & Outsourcing",
				],
			},
			{
				time: "12:30 PM – 2:00 PM",
				title: "Power Networking Lunch",
				description: [
					"Build connections with investors, mentors, and peers in a vibrant setting",
				],
			},
		],
		afternoon: [
			{
				time: "2:00 PM – 4:30 PM",
				title: "Workshops & Growth Strategy Sessions",
				description: [
					"Hands-on training to implement guerrilla marketing, talent strategies, and growth plans",
				],
			},
			{
				time: "4:30 PM – 5:00 PM",
				title: "Daily Wrap & Day 3 Preview",
				description: [
					"Summarize the day's takeaways and tease the final day's highlights",
				],
			},
		],
	},
	{
		date: "Saturday, September 13, 2025",
		title: "Day 3: The SME Takeover",
		morning: [
			{
				time: "8:00 AM – 9:00 AM",
				title: "Final Check-In & Networking Prep",
				description: [
					"Last chance to network and prepare for a high-impact day",
				],
			},
			{
				time: "9:00 AM – 9:45 AM",
				title: "Strategy Session",
				description: [
					"Leadership in Crisis: Turning Challenges into Opportunities",
					"A candid discussion on navigating uncertainty with resilience",
				],
			},
		],
		midday: [
			{
				time: "10:00 AM – 12:30 PM",
				title: "Tactical Sessions & Challenges",
				subItems: [
					"Guerrilla Leadership Challenge - Test your leadership skills in real-world SME scenarios",
					"The MIND of the Entrepreneur in a DVUCA World - Explore strategies for thriving in a dynamic, volatile, uncertain, complex, and ambiguous environment",
				],
			},
			{
				time: "12:30 PM – 2:00 PM",
				title: "Collaborative Lunch & Idea Exchange",
				description: [
					"Forge partnerships and share bold ideas in an energizing setting",
				],
			},
		],
		afternoon: [
			{
				time: "2:00 PM – 4:30 PM",
				title: "SME Pressure Group Launch",
				description: [
					"Official launch of the SME Pressure Group to advocate for small businesses",
					"Collaborate with the Small Business Administration for policy influence",
				],
			},
			{
				time: "4:30 PM – 5:00 PM",
				title: "Closing Ceremony & Call to Action",
				description: [
					"A powerful finale to inspire post-summit action and shape the future of Nigerian SMEs",
				],
			},
		],
	},
];

const TimeSlot = ({ time, title, description, location }: TimeSlotProps) => (
	<MotionBox
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
		p={{ base: 4, md: 6 }}
		borderRadius="xl"
		border="1px solid"
		borderColor="gray.700"
		bg="rgba(0, 0, 0, 0.3)"
		_hover={{ bg: "rgba(0, 0, 0, 0.4)" }}
		w="full"
	>
		<Stack h="15rem" gap={4}>
			<Text
				color="accent"
				fontSize={{ base: "md", md: "lg" }}
				fontWeight="bold"
			>
				{time}
			</Text>
			<Heading as="h3" fontSize={{ base: "lg", md: "xl" }} color="white">
				{title}
			</Heading>
			{location && (
				<Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>
					Location: {location}
				</Text>
			)}
			{description && (
				<VStack align="start" gap={2}>
					{description.map((desc, index) => (
						<Text
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							color="gray.300"
							fontSize={{ base: "xs", md: "sm" }}
							pl={4}
							position="relative"
							_before={{
								content: '"•"',
								position: "absolute",
								left: 0,
								color: "accent",
							}}
						>
							{desc}
						</Text>
					))}
				</VStack>
			)}
		</Stack>
	</MotionBox>
);

export const EventSchedule = () => {
	return (
		<Box py="10rem">
			<Container maxW="8xl" px={{ base: 4, md: 6, lg: 8 }}>
				<VStack gap={{ base: 16, md: 24 }}>
					<Box textAlign="center">
						<Heading
							as="h1"
							fontSize={{ base: "5xl", md: "6xl" }}
							lineHeight="normal"
							css={{
								background: "linear-gradient(to right, #7928CA, #FF0080)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								textFillColor: "transparent",
							}}
						>
							EVENT AGENDA
						</Heading>
						<Text
							fontSize={{ base: "lg", md: "xl" }}
							color="gray.400"
							maxW="3xl"
							mx="auto"
						>
							Topics Overview
						</Text>
					</Box>

					{eventSchedule.map((day, dayIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<VStack key={dayIndex} gap={{ base: 8, md: 12 }} w="full">
							<Heading
								as="h2"
								fontSize={{ base: "3xl", md: "4xl" }}
								textAlign="center"
								color="white"
							>
								{day.title}
								<Text
									as="span"
									display="block"
									fontSize={{ base: "md", md: "lg" }}
									color="gray.400"
									mt={2}
								>
									{day.date}
								</Text>
							</Heading>

							<Grid
								templateColumns={{
									base: "1fr",
									md: "repeat(2, 1fr)",
									lg: "repeat(3, 1fr)",
								}}
								gap={{ base: 6, md: 8 }}
								w="full"
							>
								{["morning", "midday", "afternoon"].map((period) => (
									<VStack key={period} gap={{ base: 4, md: 6 }} w="full">
										<Heading
											as="h3"
											fontSize={{ base: "2xl", md: "3xl" }}
											color="accent"
											textTransform="capitalize"
										>
											{period}
										</Heading>
										{day[
											period as keyof Pick<
												DaySchedule,
												"morning" | "midday" | "afternoon"
											>
										].map((slot, index) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<TimeSlot key={index} {...slot} />
										))}
									</VStack>
								))}
							</Grid>
						</VStack>
					))}
				</VStack>
			</Container>
		</Box>
	);
};
