"use client";

import {
	Box,
	Container,
	Stack,
	Heading,
	Text,
	Image,
	useBreakpointValue,
	VStack,
	HStack,
	IconButton,
} from "@chakra-ui/react";
import { ArrowRightDoubleIcon } from "hugeicons-react";

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

	const differentItems = [
		{
			title: "Practical Funding Strategies",
			desc: "How to attract capital without waiting for banks",
		},
		{
			title: "Execution Frameworks",
			desc: "Tools to structure and scale even with poor infrastructure",
		},
		{
			title: "Regulatory Navigation Guides",
			desc: "How to grow within the system, not despite it",
		},
		{
			title: "Market Access Playbooks",
			desc: "Proven ways to find, attract, and keep customers",
		},
		{
			title: "Business Engineering Workshops",
			desc: "Build a business that runs without you",
		},
		{
			title: "Innovation Boosters",
			desc: "Real methods to create, not just copy",
		},
		{
			title: "Talent Building Kits",
			desc: "Find, inspire, and keep your A-team",
		},
	];

	return (
		<Box py={{ base: 12, md: 20 }} color="fg.light">
			<Container maxW="110rem" px={{ base: 8 }}>
				<Heading
					size={{ base: "lg", sm: "2xl", md: "4xl" }}
					mb="10"
					color="white"
					lineHeight="shorter"
					fontWeight="bold"
					textAlign="center"
				>
					What&apos;s Different
				</Heading>

				<Stack
					direction={{ base: "column", md: "row" }}
					gap={{ base: 10, md: 16 }}
					align="center"
					justify="space-between"
				>
					<Box flex={1}>
						<Image
							src="/images/different.jpg"
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
							Why the RebelSME Summit is Different
						</Heading>

						<VStack align="start" gap={4}>
							{differentItems.map((item, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Box key={index} w="full">
									<HStack align="start" gap={3}>
										<IconButton
											aria-label="Twitter"
											variant="ghost"
											color="accent"
											_hover={{ color: "summit-secondary" }}
										>
											<ArrowRightDoubleIcon />
										</IconButton>

										<VStack align="start" gap={0}>
											<Text
												fontSize={textSize}
												fontWeight="semibold"
												color="summit-secondary"
											>
												{item.title}
											</Text>
											<Text fontSize={textSize} color="fg.soft" opacity={0.9}>
												{item.desc}
											</Text>
										</VStack>
									</HStack>
								</Box>
							))}
						</VStack>

						<VStack
							align="start"
							gap={2}
							pt={4}
							borderTop="1px solid"
							borderColor="whiteAlpha.200"
						>
							<Text
								fontSize="xl"
								fontWeight="semibold"
								color="summit-secondary"
							>
								The RebelSME Summit isn&apos;t just another conference.
							</Text>
							<Text fontSize={textSize} color="fg.soft" fontStyle="italic">
								It&apos;s where SMEs become movements. Where visionaries become
								builders. And where success stories are not just told — they are
								made.
							</Text>
						</VStack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};
