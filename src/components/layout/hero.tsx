"use client";

import { useEffect, useState } from "react";
import {
	Box,
	Heading,
	Text,
	Button,
	Stack,
	Flex,
	Container,
	Dialog,
	Portal,
} from "@chakra-ui/react";
import { Countdown } from "../countdown";

export const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [drawerOpen, drawerSetOpen] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			drawerSetOpen(true);
		}, 120000);

		return () => clearInterval(interval);
	}, []);


	return (
		<Box
			h="100vh"
			bgImage="url(/images/black-waves.jpg)"
			bgSize="cover"
			backgroundPosition="center"
			color="fg.default"
		>
			<Container maxW="110rem" h="100%" textAlign="center" px={{ base: 8 }}>
				<Flex flexDir="column" gap="1rem" h="100%">
					<Dialog.Root
						open={drawerOpen}
						size="xs"
						placement="center"
						motionPreset="slide-in-bottom"
						onOpenChange={(details) => {
							drawerSetOpen(details.open);
						}}
					>
						<Portal>
							<Dialog.Backdrop />
							<Dialog.Positioner>
								<Dialog.Content>
									<Dialog.Header>
										<Dialog.Title textAlign="center">
											Join Us Today
										</Dialog.Title>
									</Dialog.Header>
									<Dialog.Body>
										<Button
											w="100%"
											bg="summit-secondary"
											color="white"
											size="lg"
											_hover={{ bg: "accent.hover" }}
											borderRadius="full"
											onClick={() => {
												drawerSetOpen(false);
												setIsOpen(!isOpen);
											}}
										>
											Sign Up Now
										</Button>
									</Dialog.Body>
								</Dialog.Content>
							</Dialog.Positioner>
						</Portal>
					</Dialog.Root>

					{/* Hero Content */}
					<Stack gap={6} h="100%" flex="1" justify="center" align="center">
						<Heading
							fontFamily="var(--font-poppins)"
							fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
							lineHeight="short"
							color="fg.light"
						>
							Welcome to Summit SME
						</Heading>
						<Text
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
							maxW="2xl"
							mx="auto"
							color="fg.light"
							fontFamily="var(--font-inter)"
						>
							Discover insights from top industry leaders. Join us for an
							immersive event focused on innovation, growth, and the future of
							small businesses.
						</Text>
						<Countdown targetDate="2025-09-11T00:00:00" />
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};

