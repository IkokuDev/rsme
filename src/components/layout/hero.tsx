"use client";

import { useEffect, useState } from "react";
import {
	Box,
	Heading,
	Text,
	Button,
	Stack,
	Flex,
	Image,
	HStack,
	Drawer,
	Container,
	IconButton,
	Dialog,
	VStack,
	Portal,
	Link,
	Center,
} from "@chakra-ui/react";
import { Menu01Icon } from "hugeicons-react";
import { motion } from "framer-motion";
import { Countdown } from "../countdown";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [drawerOpen, drawerSetOpen] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			drawerSetOpen(true);
		}, 35000); 

		return () => clearInterval(interval);
	}, []);

	const navItems = [
		{ label: "About", href: "/#about" },
		{ label: "Schedule", href: "/#schedule" },
		{ label: "Speakers", href: "/#speakers" },
	];
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
					{/* Header Section */}
					<MotionBox
						as="header"
						color="fg.default"
						pt={6}
						initial={{ y: -30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<Flex align="center" justify="space-between">
							<Flex gap="0.5rem">
								<Image
									src="/images/logo/logo.png"
									alt="Summit SME Logo"
									height="60px"
									width="100px"
									objectFit="cover"
								/>
								<Center flexDir="column" color="primary" fontSize="0.7rem" fontWeight="600">
									<Text fontFamily="var(--font-inter)">
										28 - 29 May 2025{" "}
									</Text>
									<Text fontFamily="var(--font-inter)">
										SME Summit 2025
									</Text>
								</Center>
							</Flex>

							{/* Desktop Nav */}
							<HStack gap={6} display={{ base: "none", md: "flex" }}>
								{navItems.map((item: { label: string; href: string }) => (
									<NavLink key={item.label} href={item.href}>
										{item.label}
									</NavLink>
								))}
								<MotionButton
									bg="summit-secondary"
									color="white"
									fontFamily="var(--font-inter)"
									_hover={{ bg: "accent.hover" }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.97 }}
									transition={{ duration: 0.2 }}
								>
									Who Should Attend
								</MotionButton>
								<MotionButton
									bg="summit-secondary"
									color="white"
									fontFamily="var(--font-inter)"
									_hover={{ bg: "accent.hover" }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.97 }}
									transition={{ duration: 0.2 }}
								>
									Reasons To Attend
								</MotionButton>
							</HStack>

							{/* Mobile Menu Toggle */}
							<Drawer.Root
								open={isOpen}
								placement="start"
								size="xs"
								onOpenChange={(details) => drawerSetOpen(details.open)}
							>
								<Drawer.Trigger asChild>
									<IconButton
										aria-label="Open menu"
										as={Menu01Icon}
										onClick={() => setIsOpen(true)}
										display={{ md: "none" }}
										variant="ghost"
									/>
								</Drawer.Trigger>
								<Portal>
									<Drawer.Backdrop />
									<Drawer.Positioner>
										<Drawer.Content>
											<Drawer.Body>
												<VStack
													align="start"
													fontFamily="var(--font-raleway)"
													fontWeight="500"
													gap={2}
												>
													{navItems.map((item) => (
														<NavLink key={item.label} href={item.href}>
															{item.label}
														</NavLink>
													))}
													<MotionButton
														bg="accent"
														color="white"
														fontFamily="var(--font-inter)"
														_hover={{ bg: "accent.hover" }}
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.97 }}
														transition={{ duration: 0.2 }}
													>
														Who Should Attend
													</MotionButton>
													<MotionButton
														bg="accent"
														color="white"
														fontFamily="var(--font-inter)"
														_hover={{ bg: "accent.hover" }}
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.97 }}
														transition={{ duration: 0.2 }}
													>
														Reasons To Attend
													</MotionButton>
												</VStack>
											</Drawer.Body>
										</Drawer.Content>
									</Drawer.Positioner>
								</Portal>
							</Drawer.Root>
						</Flex>
					</MotionBox>

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
												setIsOpen(true);
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
						<Countdown targetDate="2025-06-15T09:00:00" />
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
	return (
		<Link href={href}>
			<MotionButton
				as="a"
				variant="ghost"
				fontFamily="var(--font-inter)"
				color="primary"
				_hover={{ color: "accent" }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2 }}
			>
				{children}
			</MotionButton>
		</Link>
	);
};
