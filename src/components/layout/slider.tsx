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
		// adaptiveHeight: tru
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
			buttonText: "View Profile",
			buttonLink: "/speakers/john-doe",
		},
		{
			image: "/images/avatar-1.jpg",
			name: "Fatima Ali",
			topic: "Social Media as a Sales Engine",
			buttonText: "View Profile",
			buttonLink: "/speakers/fatima-ali",
		},
		{
			image: "/images/avatar-2.jpg",
			name: "Marcus Ng",
			topic: "Bootstrap to Breakthrough: Funding Tactics",
			buttonText: "View Profile",
			buttonLink: "/speakers/marcus-ng",
		},
		{
			image: "/images/avatar-3.jpg",
			name: "Lena Hartmann",
			topic: "Design Thinking for Product Innovation",
			buttonText: "View Profile",
			buttonLink: "/speakers/lena-hartmann",
		},
		{
			image: "/images/avatar-4.jpg",
			name: "James Bello",
			topic: "The Future of Remote Teams",
			buttonText: "View Profile",
			buttonLink: "/speakers/james-bello",
		},
		{
			image: "/images/avatar.jpg",
			name: "Naomi Santos",
			topic: "Digital Marketing on a Budget",
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
					color="white"
				>
					Speakers
				</Heading>
				<Slider {...settings}>
					{slides.map((slide) => (
						<Box
							key={slide.name}
							bg="rgba(0, 0, 0, 0.6)"
							position="relative"
							pb="80px"
							minH="500px"
						>
							<Image
								src={slide.image}
								alt={slide.name}
								borderRadius="xl"
								objectFit="cover"
								w="full"
								h="300px"
							/>
							<MotionBox
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								color="fg.light"
								display="flex"
								flexDirection="column"
								alignItems="center"
								justifyContent="space-between"
								textAlign="center"
								px={6}
								h="100%"
							>
								<Box>
									<Heading
										as="h3"
										fontSize="2xl"
										my={2}
										mb={4}
										color="fg.light"
									>
										{slide.name}
									</Heading>
									<Text
										fontSize="md"
										mb={6}
										color="fg.evenDarkerSoft"
										maxW="sm"
									>
										{slide.topic}
									</Text>
								</Box>
								<Box
									position="absolute"
									bottom="20px"
									left="50%"
									transform="translateX(-50%)"
								>
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
										// biome-ignore lint/suspicious/noExplicitAny: <explanation>
										{...({} as any)}
									>
										{slide.buttonText}
									</MotionButton>
								</Box>
							</MotionBox>
						</Box>
					))}
				</Slider>
			</Container>
		</Box>
	);
};

export default SimpleSlider;
