"use client";

import {
	Box,
	Container,
	Stack,
	Heading,
	Text,
	Image,
	useBreakpointValue,
} from "@chakra-ui/react";

export const CaseStudy = () => {
	const headingSize = useBreakpointValue({
		base: "xl",
		sm: "2xl",
		md: "3xl",
	});

	const textSize = useBreakpointValue({
		base: "sm",
		sm: "md",
		md: "lg",
	});

	return (
		<Box py={{ base: 12, md: 20 }} color="fg.light">
			<Container maxW="110rem" px={{ base: 8 }}>
				<Heading
					size={{ base: "lg", sm: "2xl", md: "4xl" }}
					mb={{ base: 4, md: 6 }}
					color="primary"
					lineHeight="shorter"
					fontWeight="bold"
          textAlign="center"
				>
					What's Different
				</Heading>

				<Stack
					direction={{ base: "column", md: "row" }}
					gap={{ base: 10, md: 16 }}
					align="center"
					justify="space-between"
				>
					<Box flex={1}>
						<Image
							src="/images/success.jpg"
							alt="3M at CES"
							borderRadius="2xl"
							boxShadow="2xl"
							objectFit="cover"
							w="full"
							h="auto"
							maxH={{ md: "400px" }}
						/>
					</Box>
					<Stack flex={1} gap={6}>
						<Heading fontSize={headingSize} color="summit-secondary">
							Case Study: GrowTech at SME Summit
						</Heading>
						<Text fontSize={textSize} color="fg.soft" opacity={0.9}>
							GrowTech, a fast-rising agri-tech SME from Nairobi, used SME
							Summit 2025 to scale their presence beyond East Africa. By
							showcasing their AI-powered crop analytics platform, they
							attracted over 12,000 booth visitors, doubled their investor
							pipeline, and landed a distribution deal in Southeast Asia.
						</Text>
						<Text fontSize={textSize} color="fg.soft" opacity={0.85}>
							With 95% of attendees representing SMEs or SME-focused investors,
							the summit offered GrowTech targeted exposure, meaningful
							partnerships, and global credibility.
						</Text>
						<Text fontSize="lg" fontWeight="semibold" color="summit-accent">
							Ready to scale your SME? Join the leaders shaping tomorrow at SME
							Summit 2026.
						</Text>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};
