"use client";

import {
	Box,
	Container,
	VStack,
	Heading,
	Text,
	SimpleGrid,
	Card,
	Button,
	Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
	MarketingIcon,
	BrushIcon,
	ShieldKeyIcon,
	Layout01Icon,
	Billiard01Icon,
	ComputerIcon,
	UserGroupIcon,
	News01Icon,
	Video01Icon,
	Wallet01Icon,
	Agreement01Icon,
	Speaker01Icon,
} from "hugeicons-react";

const MotionBox = motion(Box);

interface FeatureProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const Feature = ({ title, description, icon }: FeatureProps) => (
	<Card.Root
		bg="whiteAlpha.100"
		p={6}
		borderRadius="xl"
		_hover={{ transform: "translateY(-4px)" }}
		transition="transform 0.2s"
	>
		<Icon mb={4} color="#8B1A2F">
			{icon}
		</Icon>
		<Heading size="md" color="#8B1A2F" mb={3}>
			{title}
		</Heading>
		<Text color="gray.300">{description}</Text>
	</Card.Root>
);

interface SectionProps {
	title: string;
	description?: string;
	features: FeatureProps[];
}

const Section = ({ title, description, features }: SectionProps) => (
	<Box w="full">
		<Heading size="lg" mb={4} color="white" textAlign="center">
			{title}
		</Heading>
		{description && (
			<Text color="gray.300" textAlign="center" mb={8} maxW="3xl" mx="auto">
				{description}
			</Text>
		)}
		<SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
			{features.map((feature, index) => (
				<MotionBox
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				>
					<Feature {...feature} />
				</MotionBox>
			))}
		</SimpleGrid>
	</Box>
);

export const ExhibitionOpportunities = () => {
	const sections: SectionProps[] = [
		{
			title: "Pre-Show Buzz",
			features: [
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
			],
		},
		{
			title: "On-Site & Digital Branding",
			description:
				"Command the Space with our comprehensive branding solutions",
			features: [
				{
					icon: <Layout01Icon size={32} />,
					title: "Customized Booths",
					description:
						"Create an immersive experience with display options designed for disruptive brands—whether it's a raw, industrial setup or a sleek digital experience.",
				},
				{
					icon: <Billiard01Icon size={32} />,
					title: "Strategic On-Site Visibility",
					description:
						"Benefit from prime placements including banners, digital kiosks, and interactive activations, ensuring your presence is impossible to ignore.",
				},
				{
					icon: <ComputerIcon size={32} />,
					title: "Digital Integration",
					description:
						"Take advantage of our live-streaming sessions, virtual tours, and online directories to engage with a global audience.",
				},
			],
		},
		{
			title: "Thought Leadership & Media Engagement",
			description: "Elevate Your Voice in the SME Revolution",
			features: [
				{
					icon: <News01Icon size={32} />,
					title: "Rebel PR Opportunities",
					description:
						"Drive mass media attention with curated press kits, exclusive interview slots, and sponsored sessions that put your brand in the spotlight.",
				},
				{
					icon: <Video01Icon size={32} />,
					title: "Media Briefings",
					description:
						"Offer engaging multimedia content that highlights your products and services through professional B-roll and media packages.",
				},
				{
					icon: <Speaker01Icon size={32} />,
					title: "Featured Content",
					description:
						"Get a dedicated spot on our summit's digital platforms—ensuring your brand narrative reaches an audience hungry for change.",
				},
			],
		},
		{
			title: "Partnership Options",
			description: "Tailored Solutions for Every Vision",
			features: [
				{
					icon: <Wallet01Icon size={32} />,
					title: "Flexible Packages",
					description:
						"Whether you're a startup making a splash or an established brand seeking new markets, we offer packages that fit every budget and vision.",
				},
				{
					icon: <Agreement01Icon size={32} />,
					title: "Strategic Sponsorships",
					description:
						"Align your objectives with our disruptive agenda through exclusive sponsorship opportunities—enhancing your visibility across the summit.",
				},
				{
					icon: <UserGroupIcon size={32} />,
					title: "Investor Access",
					description:
						"Gain direct access to a curated network of investors and corporate decision-makers eager to back radical ideas.",
				},
			],
		},
	];

	return (
		<Box py="10rem" bg="gray.900">
			<Container maxW="7xl">
				<VStack gap={20}>
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
							Exhibition Opportunities
						</Heading>
						<Text fontSize="xl" color="gray.300" maxW="3xl" mx="auto">
							Join a movement where daring ideas are celebrated, and every booth
							is an opportunity to challenge the status quo.
						</Text>
					</MotionBox>

					{/* Feature Sections */}
					{sections.map((section, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Section key={index} {...section} />
					))}

					{/* CTA Section */}
					<MotionBox
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						bg="whiteAlpha.100"
						p={8}
						borderRadius="xl"
						w="full"
						textAlign="center"
					>
						<Heading size="lg" color="white" mb={6}>
							Ready to Break the Mold?
						</Heading>
						<Text color="gray.300" fontSize="lg" mb={8}>
							Transform your brand&apos;s trajectory by joining the rebellion.
						</Text>
						<Button
							size="lg"
							bg="summit-secondary"
							color="white"
							_hover={{ bg: "accent.hover" }}
							onClick={() => {
								window.location.href = "mailto:exhibitor@rebelsmesummit.com";
							}}
						>
							Contact Our Exhibitor Team
						</Button>
					</MotionBox>
				</VStack>
			</Container>
		</Box>
	);
};
