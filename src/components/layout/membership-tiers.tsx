import {
	Box,
	Stack,
	Text,
	Heading,
	SimpleGrid,
	Button,
	List,
	ListItem,
} from "@chakra-ui/react";
import { CheckmarkCircle01Icon } from "hugeicons-react";

const tiers = [
	{
		title: "General Virtual Ticket",
		description:
			"Founders and SME enthusiasts who want to access the summit's high-energy sessions from anywhere.",
		price: "₦10,000",
		earlyBird: "₦8,500",
		groupPrice: "₦7,000 (5+ tickets)",
		features: [
			"Live streaming of all sessions",
			"30-day Review Event on-demand access",
			"Access one (1) paid session for FREE",
		],
		gradient: "linear-gradient(to bottom right, #B8B8B8, #2A2A2A)",
		priceGradient: "linear-gradient(to right, #B8B8B8, #F0F0F0)",
		textColor: "#F9FAFB",
		buttonColor: "#B8B8B8",
		shadow: "0 0 10px #B8B8B8",
	},
	{
		title: "SME Growth Pass",
		description:
			"Entrepreneurs who want a hands-on experience with in-person workshops and networking.",
		price: "₦50,000",
		earlyBird: "₦40,000",
		groupPrice: "₦30,000 (3+ tickets)",
		features: [
			"Full access to all 3-day in-person sessions",
			"Event materials",
			"Priority seating for interactive Q&A sessions",
		],
		gradient: "linear-gradient(45deg, #2A2A2A, #1f0010)",
		priceGradient: "linear-gradient(to right, #FF416C, #FF4B2B)",
		textColor: "white",
		buttonColor: "#FF416C",
		shadow: "0 0 12px #FF416C",
	},
	{
		title: "VIP Founder Pass",
		description:
			"Visionary founders who are ready to scale big with exclusive access and premium experiences.",
		price: "₦150,000",
		earlyBird: "₦130,000",
		groupPrice: "₦115,000 (2+ tickets)",
		features: [
			"Front-row seating at keynotes",
			"Premium lunch and dedicated investor-speed networking slot",
			"Private mixer with industry leaders",
		],
		gradient: "linear-gradient(to bottom right, #A54B56, #2C0A13)",
		priceGradient: "linear-gradient(to bottom right, #FF5F6D, #FFC371)",
		textColor: "white",
		buttonColor: "#FF5F6D",
		shadow: "0 0 12px #FF5F6D",
	},
	{
		title: "Investor & Mastermind Access",
		description:
			"Investors, accelerators, and elite mentors seeking high-potential connections.",
		price: "₦500,000",
		features: [
			"Entry to exclusive closed-door sessions",
			"Curated SME profiles for direct matchmaking",
			"Private executive dinner with policymakers",
			"Option to moderate sessions or join panels",
		],
		gradient: "linear-gradient(to right, #8B1A2F, #1f0010)",
		priceGradient: "linear-gradient(to right, #FF416C, #FF4B2B)",
		textColor: "white",
		buttonColor: "#FF416C",
		shadow: "0 0 12px #FF416C",
	},
];

const MembershipTiers = () => {
	return (
		<Box py={20}>
			<Box textAlign="center" mb={16}>
				<Heading
					as="h2"
					fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
					fontWeight="bold"
					color="white"
					mb={4}
				>
					Our Ticketing Tiers
				</Heading>
				<Text
					fontSize={{ base: "md", md: "lg" }}
					color="gray.400"
					maxW="2xl"
					mx="auto"
				>
					Tailored to meet the varied needs of our diverse audience, each ticket
					offers a unique set of benefits.
				</Text>
			</Box>

			<SimpleGrid
				columns={{ base: 1, lg: 4 }}
				gap={10}
				maxW="8xl"
				mx="auto"
				px={6}
			>
				{tiers.map((tier, index) => (
					<Box
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						bgImage={tier.gradient}
						borderRadius="2xl"
						p={8}
						boxShadow={tier.shadow}
						color={tier.textColor}
						transition="transform 0.3s"
						_hover={{ transform: "scale(1.03)" }}
					>
						<Stack gap={5}>
							<Heading fontSize="2xl">{tier.title}</Heading>
							<Text fontSize="sm" color={tier.textColor}>
								{tier.description}
							</Text>
							<Text
								fontSize="4xl"
								fontWeight="extrabold"
								bgGradient={tier.priceGradient}
								bgClip="text"
							>
								{tier.price}
							</Text>
							{tier.earlyBird && (
								<Text fontSize="sm" color={tier.textColor}>
									Early Bird: {tier.earlyBird}
								</Text>
							)}
							{tier.groupPrice && (
								<Text fontSize="sm" color={tier.textColor}>
									Group Price: {tier.groupPrice}
								</Text>
							)}
							<List.Root gap={3}>
								{tier.features.map((feature, idx) => (
									<ListItem
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={idx}
										fontSize="sm"
										display="flex"
										alignItems="start"
										gap={2}
									>
										<Box flexShrink={0} mt={1}>
											<CheckmarkCircle01Icon size={20} />
										</Box>
										<Text>{feature}</Text>
									</ListItem>
								))}
							</List.Root>
						</Stack>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default MembershipTiers;
