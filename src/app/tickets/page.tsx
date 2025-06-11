'use client';

import { Box, Flex, Heading, Text, Stack } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';
import TicketTierCard from '@/components/layout/tickets/ticket-tier-card';

// Initialize Stripe (we'll add the key later from environment variables)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function TicketsPage() {
  const ticketTiers = [
    {
      name: 'General Virtual Ticket',
      price: '10,000',
      description: 'Founders and SME enthusiasts who want to access the summits high-energy sessions from anywhere.',
      features: [
        'Early Bird: N8,000',
        'Live streaming of all sessions',
        '30-day Review Event on-demand access',
        'Access one(1) paid session for FREE',
      ],
      priceId: 'early_bird_price_id' // We'll replace this with actual Stripe price ID
    },
    {
      name: 'SME Growth Pass',
      price: '50,000',
      description: 'Entrepreneurs who want a hands-on experience with in-person workshops and networking.',
      features: [
        'Early Bird: N40,000',
        'Full access to all 3-day in-person sessions',
        'Workshop materials',
        'Priority seating for interactive Q&A sessions',
      ],
      priceId: 'standard_price_id'
    },
    {
      name: 'VIP Founder Pass',
      price: '150,000',
      description: 'Visionary founders who are ready to scale big with exclusive access and premium experiences.',
      features: [
        'Early Bird: ₦130,000',
        'Front-row seating at keynotes',
        'Premium lunch and dedicated investor-speed networking slot',
        'Private mixer with industry leaders',
        
      ],
      priceId: 'vip_price_id'
    },
    {
      name: 'Investor & Mastermind Access',
      price: '500,000',
      description: 'Visionary founders who are ready to scale big with exclusive access and premium experiences.',
      features: [
        'Entry to exclusive closed-door sessions',
        'Curated SME profiles for direct matchmaking',
        'Private executive dinner with policymakers',
        'Option to moderate sessions or join panels',
        
      ],
      priceId: 'master_price_id'
    },
  ];  return (
    <Box pt={{ base: 28, md: 32 }} pb={12}>
      <Box maxW="7xl" mx="auto" px={4}>
        <Stack gap={8} align="center" mb={12}>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl' }}
            textAlign="center"
          >
            Choose Your Ticket
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            textAlign="center"
            maxW="2xl"
          >
            Select the perfect ticket tier for your SME Summit experience. Join us for an unforgettable event of learning, networking, and growth.
          </Text>
        </Stack>        <Flex 
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 6, lg: 8 }}
          justify="center"
          align="stretch"
          flexWrap="wrap"
        >
          {ticketTiers.map((tier) => (
            <Box key={tier.name} flex={{ lg: '1 1 calc(50% - 2rem)' }} maxW={{ lg: 'calc(50% - 2rem)' }}>
              <TicketTierCard {...tier} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
