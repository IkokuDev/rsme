"use client";

import {
	Box,
	Container,
	Heading,
	Text,
	VStack,
	Button,
	Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiPhone01Icon, Mail01Icon } from "hugeicons-react";

const MotionBox = motion(Box);

export const SignUp = () => {
	return (
		<Box as="section" bg="gray.50" py={20}>
			<Container maxW="6xl">
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<VStack gap={8} textAlign="center">
						<Heading
							size="2xl"
							color="summit-primary"
							fontFamily="var(--font-poppins)"
						>
							Ready to Make an Impact?
						</Heading>

						<Text
							fontSize="xl"
							maxW="2xl"
							color="gray.600"
							fontFamily="var(--font-inter)"
						>
							Join us in shaping the future of Nigeria&apos;s SMEs. For
							partnership inquiries and to explore customized opportunities,
							contact us at:
						</Text>

						<Flex gap={6} flexWrap="wrap" justify="center" mt={8}>
							<Button
								size="lg"
								bg="summit-secondary"
								color="white"
								px={8}
								_hover={{
									bg: "accent.hover",
									transform: "translateY(-2px)",
								}}
								transition="all 0.2s"
							>
								<Mail01Icon />
								partnerships@rebelsmesummit.com
							</Button>

							<Button
								size="lg"
								bg="summit-secondary"
								color="white"
								px={8}
								_hover={{
									bg: "accent.hover",
									transform: "translateY(-2px)",
								}}
								transition="all 0.2s"
							>
								<AiPhone01Icon />
								+234 916 733 8000
							</Button>
						</Flex>

						<Text
							fontSize="lg"
							maxW="3xl"
							mt={8}
							color="gray.600"
							fontStyle="italic"
							fontFamily="var(--font-inter)"
						>
							By partnering with the inaugural Rebel SME Summit, you&apos;re not
							just sponsoring an event—you&apos;re investing in the growth and
							success of Nigeria&apos;s small and medium enterprises.
						</Text>
					</VStack>
				</MotionBox>
			</Container>
		</Box>
	);
};
