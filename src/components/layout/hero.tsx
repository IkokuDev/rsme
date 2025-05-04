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
	Center,
	Menu,
	CloseButton,
} from "@chakra-ui/react";
import { Menu01Icon, ArrowDown01Icon } from "hugeicons-react";
import { motion, AnimatePresence } from "framer-motion";
import { Countdown } from "../countdown";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const menuVariants = {
	hidden: { opacity: 0, y: -5 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.2,
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.2 },
	},
};

export const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [drawerOpen, drawerSetOpen] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			drawerSetOpen(true);
		}, 120000);

		return () => clearInterval(interval);
	}, []);

	const navItems = [
		{
			label: "Register",
			href: "",
			menuItems: [
				{ label: "About Us", href: "/about" },
				{ label: "Ticket Options", href: "/pricing" },
				{ label: "How To Register", href: "/register" },
				{ label: "Additional Information & Support", href: "/info" },
			],
		},
		{
			label: "Event Agenda",
			href: "/event-agenda",
		},
		{
			label: "Partner",
			href: "/partner",
			menuItems: [
				{
					label: "Why Partner With The Rebel SME Summit",
					href: "/speakers/keynotes",
				},
				{ label: "Partnership Opportunities", href: "#partnership" },
				{ label: "Ready To Sign Up", href: "/speakers/experts" },
			],
		},
		{
			label: "Media Partnership",
			href: "/event-agenda",
		},
		{
			label: "Success Evangelist",
			href: "/partner",
			menuItems: [
				{
					label: "Overview",
					href: "/speakers/keynotes",
				},
				{ label: "7 Day ACtion Plan", href: "#partnership" },
				{ label: "Resources", href: "/speakers/experts" },
			],
		},
	];

	const sponsorMenuItems = [
		{ label: "Sponsor Overview", href: "#benefits" },
		{ label: "Sponsor Benefits", href: "#sponsorship-tiers" },
		{ label: "Sign Up", href: "#contact" },
	];

	const exhibitorMenuItems = [
		{ label: "Exhibition Overview", href: "#spaces" },
		{ label: "Exhibitor Opportunities", href: "#package" },
		{ label: "Exhibitor Guides & Resources", href: "#apply" },
		{ label: "FAQ", href: "#apply" },
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
									src="/images/logo-v2.png"
									alt="Summit SME Logo"
									height="60px"
									width="100px"
									objectFit="cover"
								/>
								<Center
									flexDir="column"
									color="primary"
									fontSize="0.7rem"
									fontWeight="600"
								>
									<Text fontFamily="var(--font-inter)">
										11 - 13 September 2025{" "}
									</Text>
								</Center>
							</Flex>

							{/* Desktop Nav */}
							<HStack gap={6} display={{ base: "none", md: "flex" }}>
								<Menu.Root>
									<Menu.Trigger>
										<MotionButton
											bg="summit-secondary"
											color="white"
											fontFamily="var(--font-inter)"
											_hover={{ bg: "accent.hover" }}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.97 }}
											transition={{ duration: 0.2 }}
										>
											Become A Sponsor
											<ArrowDown01Icon />
										</MotionButton>
									</Menu.Trigger>
									<Portal>
										<Menu.Positioner>
											<Menu.Content bg="gray.800" borderColor="gray.700">
												<AnimatePresence>
													<MotionBox
														initial="hidden"
														animate="visible"
														exit="hidden"
														variants={menuVariants}
													>
														{sponsorMenuItems.map((item) => (
															<MotionBox
																key={item.label}
																variants={itemVariants}
															>
																<Menu.Item value={item.label} cursor="pointer">
																	<Text
																		color="white"
																		px={4}
																		py={2}
																		_hover={{ color: "accent" }}
																	>
																		{item.label}
																	</Text>
																</Menu.Item>
															</MotionBox>
														))}
													</MotionBox>
												</AnimatePresence>
											</Menu.Content>
										</Menu.Positioner>
									</Portal>
								</Menu.Root>

								<Menu.Root>
									<Menu.Trigger>
										<MotionButton
											bg="summit-secondary"
											color="white"
											fontFamily="var(--font-inter)"
											_hover={{ bg: "accent.hover" }}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.97 }}
											transition={{ duration: 0.2 }}
										>
											Reasons An Exhibitor
											<ArrowDown01Icon />
										</MotionButton>
									</Menu.Trigger>
									<Portal>
										<Menu.Positioner>
											<Menu.Content bg="gray.800" borderColor="gray.700">
												<AnimatePresence>
													<MotionBox
														initial="hidden"
														animate="visible"
														exit="hidden"
														variants={menuVariants}
													>
														{exhibitorMenuItems.map((item) => (
															<MotionBox
																key={item.label}
																variants={itemVariants}
															>
																<Menu.Item value={item.label} cursor="pointer">
																	<Text
																		color="white"
																		px={4}
																		py={2}
																		_hover={{ color: "accent" }}
																	>
																		{item.label}
																	</Text>
																</Menu.Item>
															</MotionBox>
														))}
													</MotionBox>
												</AnimatePresence>
											</Menu.Content>
										</Menu.Positioner>
									</Portal>
								</Menu.Root>
								<Drawer.Root
									open={isOpen}
									placement="end"
									size="sm"
									onOpenChange={(details) => setIsOpen(details.open)}
								>
									<Drawer.Trigger asChild>
										<IconButton
											aria-label="Open menu"
											as={Menu01Icon}
											color="white"
											onClick={() => setIsOpen(true)}
											variant="ghost"
											fontSize="24px"
											_hover={{
												bg: "transparent",
												color: "accent",
												transform: "scale(1.1)",
											}}
											_active={{
												bg: "transparent",
												transform: "scale(0.97)",
											}}
											transition="all 0.2s"
										/>
									</Drawer.Trigger>
									<Portal>
										<Drawer.Backdrop onClick={() => setIsOpen(false)} />
										<Drawer.Positioner>
											<Drawer.Content>
												<Drawer.Body>
													<VStack
														align="start"
														fontFamily="var(--font-raleway)"
														fontWeight="500"
														gap={3}
													>
														<Flex justifyContent="space-between" w="100%">
															<Flex gap="0.5rem">
																<Image
																	src="/images/logo-v2.png"
																	alt="Summit SME Logo"
																	height="60px"
																	width="100px"
																	objectFit="cover"
																/>
																<Center
																	flexDir="column"
																	color="primary"
																	fontSize="0.7rem"
																	fontWeight="600"
																>
																	<Text fontFamily="var(--font-inter)">
																		11 - 13 September 2025{" "}
																	</Text>
																</Center>
															</Flex>
															<Center>
																<CloseButton
																	color="summit-secondary"
																	onClick={() => setIsOpen(false)}
																	size="lg"
																	_hover={{
																		color: "accent",
																		bg: "transparent",
																		transform: "scale(1.1)",
																	}}
																	_active={{
																		transform: "scale(0.97)",
																	}}
																	transition="all 0.2s"
																/>
															</Center>
														</Flex>
														{navItems.map((item) => (
															<NavLink
																key={item.label}
																href={item.href}
																menuItems={item.menuItems}
																onClose={() => setIsOpen(false)}
															>
																{item.label}
															</NavLink>
														))}
														<Menu.Root>
															<Menu.Trigger>
																<MotionButton
																	bg="summit-secondary"
																	color="white"
																	fontFamily="var(--font-inter)"
																	_hover={{ bg: "accent.hover" }}
																	whileHover={{ scale: 1.05 }}
																	whileTap={{ scale: 0.97 }}
																	transition={{ duration: 0.2 }}
																>
																	Become A Sponsor
																	<ArrowDown01Icon />
																</MotionButton>
															</Menu.Trigger>
															<Portal>
																<Menu.Positioner>
																	<Menu.Content
																		bg="gray.800"
																		borderColor="gray.700"
																	>
																		<AnimatePresence>
																			<MotionBox
																				initial="hidden"
																				animate="visible"
																				exit="hidden"
																				variants={menuVariants}
																			>
																				{sponsorMenuItems.map((item) => (
																					<MotionBox
																						key={item.label}
																						variants={itemVariants}
																					>
																						<Menu.Item
																							value={item.label}
																							cursor="pointer"
																						>
																							<Text
																								color="white"
																								px={4}
																								py={2}
																								_hover={{ color: "accent" }}
																							>
																								{item.label}
																							</Text>
																						</Menu.Item>
																					</MotionBox>
																				))}
																			</MotionBox>
																		</AnimatePresence>
																	</Menu.Content>
																</Menu.Positioner>
															</Portal>
														</Menu.Root>

														<Menu.Root>
															<Menu.Trigger>
																<MotionButton
																	bg="summit-secondary"
																	color="white"
																	fontFamily="var(--font-inter)"
																	_hover={{ bg: "accent.hover" }}
																	whileHover={{ scale: 1.05 }}
																	whileTap={{ scale: 0.97 }}
																	transition={{ duration: 0.2 }}
																>
																	Reasons An Exhibitor
																	<ArrowDown01Icon />
																</MotionButton>
															</Menu.Trigger>
															<Portal>
																<Menu.Positioner>
																	<Menu.Content
																		bg="gray.800"
																		borderColor="gray.700"
																	>
																		<AnimatePresence>
																			<MotionBox
																				initial="hidden"
																				animate="visible"
																				exit="hidden"
																				variants={menuVariants}
																			>
																				{exhibitorMenuItems.map((item) => (
																					<MotionBox
																						key={item.label}
																						variants={itemVariants}
																					>
																						<Menu.Item
																							value={item.label}
																							cursor="pointer"
																						>
																							<Text
																								color="white"
																								px={4}
																								py={2}
																								_hover={{ color: "accent" }}
																							>
																								{item.label}
																							</Text>
																						</Menu.Item>
																					</MotionBox>
																				))}
																			</MotionBox>
																		</AnimatePresence>
																	</Menu.Content>
																</Menu.Positioner>
															</Portal>
														</Menu.Root>
													</VStack>
												</Drawer.Body>
											</Drawer.Content>
										</Drawer.Positioner>
									</Portal>
								</Drawer.Root>
							</HStack>
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
						<Countdown targetDate="2025-09-11T00:00:00" />
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	menuItems?: { label: string; href: string }[];
	onClose?: () => void;
}

export const NavLink = ({
	href,
	children,
	menuItems,
	onClose,
}: NavLinkProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleScroll = (targetHref: string) => {
		const targetId = targetHref.replace("#", "");
		const element = document.getElementById(targetId);
		if (element) {
			const yOffset = -80;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
		setIsOpen(false);
		if (onClose) onClose();
	};

	if (menuItems) {
		return (
			<VStack align="start" gap={1}>
				<MotionButton
					variant="ghost"
					fontFamily="var(--font-inter)"
					color="primary"
					_hover={{ color: "accent" }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.97 }}
					onClick={() => setIsOpen(!isOpen)}
					transition={{ duration: 0.2 }}
				>
					{children}
				</MotionButton>

				<AnimatePresence>
					{isOpen && (
						<MotionBox
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={menuVariants}
						>
							{menuItems.map((item) => (
								<MotionBox key={item.label} variants={itemVariants}>
									<Text
										color="primary"
										fontSize="sm"
										pl={4}
										py={2}
										cursor="pointer"
										onClick={() => {
											handleScroll(item.href);
											setIsOpen(false);
											if (onClose) onClose();
										}}
										_hover={{ color: "accent" }}
									>
										{item.label}
									</Text>
								</MotionBox>
							))}
						</MotionBox>
					)}
				</AnimatePresence>
			</VStack>
		);
	}

	return (
		<Box as="button" onClick={() => handleScroll(href)}>
			<MotionButton
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
		</Box>
	);
};
