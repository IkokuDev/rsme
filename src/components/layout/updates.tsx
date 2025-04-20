"use client";
import {
	Box,
	Container,
	Heading,
	Input,
	Button,
	VStack,
	Text,
	Stack,
	Checkbox,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

export const Updates = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toaster.create({
			title: "Success!",
			description: "Thank you for signing up for updates.",
			type: "success",
			duration: 5000,
		});
	};

	return (
		<Box py={{ base: 8, md: 16 }}>
			<Container maxW="110rem" minH={{ base: "auto", md: "40vh" }}>
				<Stack
					direction={{ base: "column", md: "row" }}
					gap={8}
					h="100%"
					alignItems="stretch"
				>
					<Box
						flex={1}
						bgGradient="linear-gradient(to right, #8B1A2F, #1f0010)"
						display="flex"
						alignItems="center"
						border="1px solid"
						borderColor="border"
						justifyContent="center"
						borderRadius="lg"
						p={8}
					>
						<Heading
							size={{ base: "xl", md: "2xl" }}
							color="white"
							textAlign="center"
						>
							Sign Up for Exclusive Updates
						</Heading>
					</Box>

					<Box
						as="form"
						flex={{ base: 1, md: 2 }}
						onSubmit={handleSubmit}
						display="flex"
						borderRadius="lg"
						border="1px solid"
						borderColor="border"
						alignItems="center"
						p={{ base: 4, md: 8 }}
					>
						<VStack alignItems="center" gap={4} w="100%">
							<Stack w="100%" direction={{ base: "column", sm: "row" }} gap={4}>
								<Input
									placeholder="Enter your email"
									size="lg"
									bg="white"
									required
									type="email"
								/>
								<Input
									placeholder="Enter your Name"
									size="lg"
									bg="white"
									required
									type="name"
								/>
							</Stack>

							<Checkbox.Root>
								<Checkbox.HiddenInput />
								<Checkbox.Control />
								<Checkbox.Label>
									I agree to receive newsletters and marketing communications
								</Checkbox.Label>
							</Checkbox.Root>

							<Text
								fontSize="sm"
								color="gray.500"
								mt={2}
								textAlign="center"
								px={{ base: 2, md: 8 }}
							>
								By submitting this form, you agree to receive promotional
								updates, newsletters, and marketing communications. You can
								unsubscribe at any time. View our Privacy Policy for more
								information.
							</Text>

							<Button
								type="submit"
								size="lg"
								w={{ base: "100%", md: "auto" }}
								minW="200px"
								bg="summit-secondary"
								color="white"
								_hover={{ bg: "accent.hover" }}
							>
								Subscribe Now
							</Button>
						</VStack>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};
