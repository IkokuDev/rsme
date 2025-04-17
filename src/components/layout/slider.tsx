"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Heading, Text, Button, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const SimpleSlider = () => {
	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const slides = [
		{
			image: "/images/avatar.jpg",
			name: "John Doe",
			topic: "AI-Driven Growth for SMEs",
			text: "John is a tech innovator and CEO at NovaTech, helping small businesses scale through accessible AI tools.",
			buttonText: "View Profile",
			buttonLink: "/speakers/john-doe",
		},
		{
			image: "/images/avatar-1.jpg",
			name: "Fatima Ali",
			topic: "Social Media as a Sales Engine",
			text: "As CMO of BrightReach, Fatima crafts data-driven strategies that convert content into revenue.",
			buttonText: "View Profile",
			buttonLink: "/speakers/fatima-ali",
		},
		{
			image: "/images/avatar-2.jpg",
			name: "Marcus Ng",
			topic: "Bootstrap to Breakthrough: Funding Tactics",
			text: "Founder of SeedWise Capital, Marcus mentors early-stage entrepreneurs on securing smart investments.",
			buttonText: "View Profile",
			buttonLink: "/speakers/marcus-ng",
		},
		{
			image: "/images/avatar-3.jpg",
			name: "Lena Hartmann",
			topic: "Design Thinking for Product Innovation",
			text: "Lena, Product Lead at Formix, specializes in user-centered design and scalable MVPs.",
			buttonText: "View Profile",
			buttonLink: "/speakers/lena-hartmann",
		},
		{
			image: "/images/avatar-4.jpg",
			name: "James Bello",
			topic: "The Future of Remote Teams",
			text: "As COO of TeamSphere, James empowers SMEs with systems for managing global remote workforces.",
			buttonText: "View Profile",
			buttonLink: "/speakers/james-bello",
		},
		{
			image: "/images/avatar.jpg",
			name: "Naomi Santos",
			topic: "Digital Marketing on a Budget",
			text: "Naomi is a marketing strategist at LocalEdge, focusing on high-impact campaigns for small budgets.",
			buttonText: "View Profile",
			buttonLink: "/speakers/naomi-santos",
		},
	];

	return (
		<Box>
			<Container maxW="110rem" mx="auto" py={10} px={{ base: 8 }}>
				<Heading
					fontFamily="var(--font-inter)"
					fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
					lineHeight="short"
					mb={10}
					textAlign="center"
					color="fg.default"
				>
					Speakers
				</Heading>
				<Slider {...settings}>
					{slides.map((slide) => (
						<Box key={slide.name} position="relative">
							<Image
								src={slide.image}
								alt={slide.name}
								borderRadius="xl"
								objectFit="cover"
								w="full"
								h={{ base: "300px", md: "400px" }}
							/>
							<MotionBox
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								position="absolute"
								top="0"
								left="0"
								w="full"
								h="full"
								bg="rgba(0, 0, 0, 0.6)"
								color="fg.light"
								display="flex"
								flexDirection="column"
								alignItems="center"
								justifyContent="center"
								textAlign="center"
								px={6}
							>
								<Heading
									as="h3"
									fontSize={{ base: "2xl", md: "3xl" }}
									mb={4}
									color="fg.light"
								>
									{slide.name}
								</Heading>
								<Text
									fontSize={{ base: "md", md: "lg" }}
									mb={6}
									color="fg.evenDarkerSoft"
									maxW="sm"
								>
									{slide.topic}
								</Text>
								<Text
									fontSize={{ base: "sm", md: "md" }}
									mb={6}
									color="fg.darkerSoft"
									maxW="md"
								>
									{slide.text}
								</Text>
								<MotionButton
									as="a"
									href={slide.buttonLink}
									target="_blank"
									rel="noopener noreferrer"
									bg="secondary"
									color="fg.light"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									transition={{ duration: 0.2 }}
									_hover={{ bg: "accent" }}
									size="lg"
									fontWeight="medium"
									borderRadius="full"
									px={8}
									// eslint-disable-next-line @typescript-eslint/no-explicit-any
									{...({} as any)}
								>
									{slide.buttonText}
								</MotionButton>
							</MotionBox>
						</Box>
					))}
				</Slider>
			</Container>
		</Box>
	);
};

export default SimpleSlider;
