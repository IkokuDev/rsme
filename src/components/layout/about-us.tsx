"use client";

import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	VStack,
	List,
	ListItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckListIcon, CheckmarkCircle01Icon } from "hugeicons-react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const benefits = [
	{
		title: "Actionable Strategies",
		description: "Workshops that cut through traditional business advice.",
	},
	{
		title: "Alternative Funding",
		description:
			"Access new funding options and insights to secure non-traditional capital.",
	},
	{
		title: "Networking",
		description:
			"Connect with investors, policymakers, and disruptive SME founders.",
	},
	{
		title: "Scalable Impact",
		description:
			"Gain immediate tools and a roadmap to post-event acceleration.",
	},
];

const AboutUs = () => {
	return (
		<Box
			bg="gray.900"
			py={{ base: 10, md: 16, lg: 20 }}
			px={{ base: 4, md: 6 }}
			id="#about"
		>
			<Container maxW="7xl">
				<Grid
					templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
					gap={{ base: 8, md: 10, lg: 20 }}
				>
					{/* Left Column */}
					<MotionBox
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<VStack align="start" gap={{ base: 4, md: 6 }}>
							<Heading
								as="h2"
								fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
								color="white"
								fontWeight="bold"
								lineHeight="shorter"
							>
								About Us
							</Heading>
							<Text
								fontSize={{ base: "md", sm: "lg", md: "xl" }}
								color="gray.400"
							>
								September 11 – 13, 2025
							</Text>
							<Text
								fontSize={{ base: "sm", sm: "md", md: "lg" }}
								color="gray.300"
							>
								Location: Abuja, Nigeria (Hybrid Format – In-Person & Virtual)
							</Text>
							<MotionText
								fontSize={{ base: "sm", sm: "md", md: "lg" }}
								color="gray.300"
								lineHeight={{ base: "tall", md: "taller" }}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.5 }}
								viewport={{ once: true }}
							>
								The Rebel SME Summit is not just an event—it's a national
								movement to redefine SME success in Nigeria. Here, founders
								reject conventional models and adopt radical, guerrilla tactics
								for real change.
							</MotionText>
						</VStack>
					</MotionBox>

					{/* Right Column */}
					<MotionBox
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<VStack align="start" gap={{ base: 6, md: 8 }}>
							<Heading
								as="h3"
								fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
								color="accent"
								mb={{ base: 2, md: 4 }}
							>
								Key Benefits
							</Heading>
							<List.Root gap={{ base: 4, md: 6 }}>
								{benefits.map((benefit, index) => (
									<MotionBox
										key={benefit.title}
										as={ListItem}
										display="flex"
										alignItems="flex-start"
										gap={3}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1, duration: 0.5 }}
										viewport={{ once: true }}
									>
										<Box flexShrink={0} mt={1} color="accent">
											<CheckmarkCircle01Icon size={18} />
										</Box>
										<Box>
											<Text
												color="white"
												fontSize={{ base: "md", sm: "lg", md: "xl" }}
												fontWeight="semibold"
												mb={1}
											>
												{benefit.title}
											</Text>
											<Text
												color="gray.400"
												fontSize={{ base: "sm", sm: "md", md: "lg" }}
											>
												{benefit.description}
											</Text>
										</Box>
									</MotionBox>
								))}
							</List.Root>
						</VStack>
					</MotionBox>
				</Grid>
			</Container>
		</Box>
	);
};

export default AboutUs;
