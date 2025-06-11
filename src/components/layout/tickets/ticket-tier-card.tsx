'use client';

import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

interface TicketTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  // TODO: Will be needed when implementing Stripe checkout
  // priceId: string;
}

export default function TicketTierCard({ name, price, description, features }: TicketTierProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      // We'll implement the checkout logic here later
      // It will create a Stripe Checkout session and redirect to checkout
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };  const getGradient = () => {
    switch(name.toLowerCase()) {
      case 'general virtual ticket':
        return 'linear(to-r, red.600, red.500)';
      case 'sme growth pass':
        return 'linear(to-r, red.600, orange.400)';
      case 'vip founder pass':
        return 'linear(to-r, red.600, gray.400)';
      case 'investor mastermind access':
        return 'linear(to-r, red.600, yellow.400)';
      default:
        return 'linear(to-r, red.600, red.500)';
    }
  };

  return (    <Box      maxW={'450px'}
      w={'full'}
      bgGradient={getGradient()}
      boxShadow={'0 4px 20px rgba(220, 38, 38, 0.25)'}
      rounded={'2xl'}
      overflow={'hidden'}
      transition="transform 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
      }}
    >      <VStack
        textAlign={'center'}
        p={6}
        color={'white'}
        align={'center'}
        gap={3}
      >
        <Text          fontSize={'sm'}
          fontWeight={500}
          bg={'white'}
          p={2}
          px={3}
          color={'summit-secondary'}
          rounded={'full'}
        >
          {name}
        </Text>
        <HStack align={'center'} justify={'center'}>
          <Text fontSize={'3xl'}>$</Text>
          <Text fontSize={'6xl'} fontWeight={800}>
            {price}
          </Text>
        </HStack>      </VStack><Box px={6} py={10} color="white">        <Text mb={4}>
          {description}
        </Text>        <VStack align="stretch" gap={3}>
          {features.map((feature, index) => (
            <HStack key={index} gap={2}>
              <Text>•</Text>
              <Text>{feature}</Text>
            </HStack>
          ))}
        </VStack>        <Button          mt={10}
          w={'full'}
          bg="white"
          color="summit-secondary"
          _hover={{ bg: 'gray.100' }}
          rounded={'xl'}
          onClick={handlePurchase}
          loading={isLoading}
        >
          Purchase Ticket
        </Button>
      </Box>
    </Box>
  );
}
