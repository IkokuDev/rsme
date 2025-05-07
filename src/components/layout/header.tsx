"use client";

import {
	Box,
	Flex,
	Button,
	HStack,
	Image,
	Text,
	Center,
	Menu,
	Drawer,
	Portal,
	VStack,
	IconButton,
	CloseButton,
	Container,
} from "@chakra-ui/react";
import { Menu01Icon, ArrowDown01Icon } from "hugeicons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{
			label: "Register",
			href: "",
			menuItems: [
				{ label: "About Us", href: "/register/about" },
				{ label: "Ticket Options", href: "/pricing" },
				{ label: "How To Register", href: "/register" },
				{ label: "Additional Information & Support", href: "/info" },
			],
		},
		{
			label: "Partner",
			href: "/partner",
		},
		{
			label: "Event Agenda",
			href: "/event-agenda",
		},
		{
			label: "Media Partnership",
			href: "/media",
		},
		{
			label: "Success Evangelist",
			href: "",
			menuItems: [
				{
					label: "Overview",
					href: "/evangelist/overview",
				},
				{ label: "7 Day Action Plan", href: "/evangelist/action-plan" },
				{ label: "Resources", href: "/evangelist/resources" },
			],
		},
	];

	const sponsorMenuItems = [
		{ label: "Sponsor Overview", href: "#benefits" },
		{ label: "Sponsor Benefits", href: "#sponsorship-tiers" },
		{ label: "Sign Up", href: "#contact" },
	];

	const exhibitorMenuItems = [
		{ label: "Exhibition Overview", href: "/exhibition/overview" },
		{ label: "Exhibitor Opportunities", href: "#package" },
		{ label: "Exhibitor Guides & Resources", href: "#apply" },
		{ label: "FAQ", href: "#apply" },
	];

	return (
		<MotionBox
			as="header"
			color="fg.default"
			pos="relative"
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<Container maxW="7xl" px="0">
				<Flex
					align="center"
					w="100%"
					py={6}
					gap="0.5rem"
					px={{ base: 4 }}
					pos="absolute"
					zIndex={10}
					justify="space-between"
				>
					<Flex gap="0.5rem" flex="1">
						<Link href="/">
							<Image
								src="/images/logo-v2.png"
								alt="Summit SME Logo"
								height="60px"
								width="100px"
								objectFit="cover"
							/>
						</Link>
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
					<HStack
						gap={6}
						display={{ base: "none", lg: "flex" }}
						flex="2"
						justify="center"
					>
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
					</HStack>
					<Flex gap={6} display={{ base: "none", lg: "flex" }}>
						<Menu.Root>
							<Menu.Trigger>
								<MotionButton
									bg="summit-secondary"
									color="white"
									fontSize="0.8rem"
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
													<MotionBox key={item.label} variants={itemVariants}>
														<Menu.Item value={item.label} cursor="pointer">
															<Link href={item.href}>
																<Text
																	color="white"
																	px={4}
																	py={2}
																	_hover={{ color: "accent" }}
																>
																	{item.label}
																</Text>
															</Link>
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
									fontSize="0.8rem"
									fontFamily="var(--font-inter)"
									_hover={{ bg: "accent.hover" }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.97 }}
									transition={{ duration: 0.2 }}
								>
									Become An Exhibitor
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
													<MotionBox key={item.label} variants={itemVariants}>
														<Menu.Item value={item.label} cursor="pointer">
															<Link href={item.href}>
																<Text
																	color="white"
																	px={4}
																	py={2}
																	_hover={{ color: "accent" }}
																>
																	{item.label}
																</Text>
															</Link>
														</Menu.Item>
													</MotionBox>
												))}
											</MotionBox>
										</AnimatePresence>
									</Menu.Content>
								</Menu.Positioner>
							</Portal>
						</Menu.Root>
					</Flex>
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
								display={{ base: "block", lg: "none" }}
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
													isMobile={true} // Add this prop
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
																			<Menu.Item
																				value={item.label}
																				cursor="pointer"
																			>
																				<Link href={item.href}>
																					<Text
																						color="white"
																						px={4}
																						py={2}
																						_hover={{ color: "accent" }}
																					>
																						{item.label}
																					</Text>
																				</Link>
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
														Become An Exhibitor
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
																			<Menu.Item
																				value={item.label}
																				cursor="pointer"
																			>
																				<Link href={item.href}>
																					<Text
																						color="white"
																						px={4}
																						py={2}
																						_hover={{ color: "accent" }}
																					>
																						{item.label}
																					</Text>
																				</Link>
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
				</Flex>
			</Container>
		</MotionBox>
	);
};

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	menuItems?: { label: string; href: string }[];
	onClose?: () => void;
	isMobile?: boolean; // Add this prop
}

export const NavLink = ({
	href,
	children,
	menuItems,
	onClose,
	isMobile = false,
}: NavLinkProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname(); // Add this

	const isActive =
		pathname === href ||
		menuItems?.some((item) => pathname === item.href) ||
		(pathname?.startsWith(href) && href !== "");

	console.log(pathname);
	console.log(menuItems?.some((item) => item.href));
	console.log(menuItems?.some((item) => pathname === item.href));

	console.log("Current pathname:", pathname);
	console.log("Menu Items:", menuItems);
	console.log("Current href:", href);
	console.log("Is Active:", isActive);

	const handleNavigation = (targetHref: string) => {
		if (targetHref.startsWith("#")) {
			// Handle scroll for anchor links
			const targetId = targetHref.replace("#", "");
			const element = document.getElementById(targetId);
			if (element) {
				const yOffset = -80;
				const y =
					element.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: "smooth" });
			}
		} else {
			// Handle page navigation
			router.push(targetHref);
		}
		setIsOpen(false);
		if (onClose) onClose();
	};

	if (menuItems && isMobile) {
		return (
			<VStack align="start" gap={2} w="full">
				<MotionButton
					variant="ghost"
					bg="pink"
					fontFamily="var(--font-inter)"
					onClick={() => setIsOpen(!isOpen)}
					color={isActive ? "summit-secondary" : "primary"}
					_hover={{ color: "accent" }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.97 }}
					transition={{ duration: 0.2 }}
				>
					{children}
					<ArrowDown01Icon />
				</MotionButton>

				<AnimatePresence>
					{isOpen && (
						<MotionBox
							initial={{ opacity: 0, y: -5 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -5 }}
							w="full"
						>
							{menuItems.map((item) => (
								<Text
									key={item.label}
									color={
										pathname === item.href ? "summit-secondary" : "gray.400"
									}
									fontSize="sm"
									py={2}
									cursor="pointer"
									onClick={() => handleNavigation(item.href)}
									_hover={{ color: "accent" }}
								>
									{item.label}
								</Text>
							))}
						</MotionBox>
					)}
				</AnimatePresence>
			</VStack>
		);
	}

	// In the NavLink component, update the menuItems condition:
	if (menuItems) {
		return (
			<Menu.Root>
				<Menu.Trigger>
					<MotionButton
						variant="ghost"
						fontFamily="var(--font-inter)"
						color={isActive ? "summit-secondary" : "primary"}
						fontSize="0.8rem"
						_hover={{ color: "accent" }}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						{children}
						<ArrowDown01Icon />
					</MotionButton>
				</Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content bg="gray.800" borderColor="gray.700" minW="200px">
							{menuItems.map((item) => (
								<Menu.Item
									key={item.label}
									onClick={() => handleNavigation(item.href)}
									value=""
								>
									<Text
										color={
											pathname === item.href ? "summit-secondary" : "white"
										}
										px={4}
										cursor="pointer"
										py={2}
										_hover={{ color: "accent" }}
									>
										{item.label}
									</Text>
								</Menu.Item>
							))}
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu.Root>
		);
	}

	return (
		<Box as="button" onClick={() => handleNavigation(href)}>
			<MotionButton
				variant="ghost"
				fontFamily="var(--font-inter)"
				color={isActive ? "summit-secondary" : "primary"}
				fontSize="0.8rem"
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
