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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BrushIcon, MarketingIcon, ShieldKeyIcon } from "hugeicons-react";

const MotionBox = motion(Box);

const PreShowFeature = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => (
	<Card.Root
		bg="whiteAlpha.100"
		p={6}
		borderRadius="xl"
		_hover={{ transform: "translateY(-4px)" }}
		transition="transform 0.2s"
	>
		<Icon mt={1} color="summit-secondary">
			{icon}
		</Icon>
		<Heading size="md" color="summit-secondary" mb={3}>
			{title}
		</Heading>
		<Text color="gray.300">{description}</Text>
	</Card.Root>
);

export const ExhibitionOverview = () => {
	const preShowFeatures = [
		{
			icon: <MarketingIcon size={32} />,
			title: "Early Promotion",
			description:
				"Leverage our targeted pre-summit communication channels—including email blasts and social media micro-campaigns—to announce your innovations.",
		},
		{
			icon: <BrushIcon size={32} />,
			title: "Customizable Promotional Tools",
			description:
				"Access our Rebel Toolkit featuring on-brand graphics and rebellious messaging templates, so you can promote your exhibit with ease.",
		},
		{
			icon: <ShieldKeyIcon size={32} />,
			title: "Exclusive Registration Codes",
			description:
				"Empower your network by offering special codes that give your prospects discounted or free registration to the event.",
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
							Amplify Your Brand in a Revolutionary Environment
						</Heading>
						<Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
							At the Rebel SME Summit, we&apos;re shaking up the traditional SME
							playbook. Exhibiting at our summit is your chance to get off the
							beaten path and position your brand at the forefront of disruptive
							innovation.
						</Text>
					</MotionBox>

					{/* Pre-Show Features */}
					<Box w="full">
						<Heading size="lg" mb={8} color="white" textAlign="center">
							Pre-Show Buzz
						</Heading>
						<SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
							{preShowFeatures.map((feature, index) => (
								<MotionBox
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<PreShowFeature {...feature} />
								</MotionBox>
							))}
						</SimpleGrid>
					</Box>

					{/* Bottom Message */}
					<MotionBox
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						bg="whiteAlpha.100"
						p={6}
						borderRadius="xl"
						w="full"
					>
						<Text color="gray.300" fontSize="lg" textAlign="center">
							This proactive exposure ensures that your brand is already on
							attendees&apos; radars before the doors even open.
						</Text>
					</MotionBox>
				</VStack>
			</Container>
		</Box>
	);
};
