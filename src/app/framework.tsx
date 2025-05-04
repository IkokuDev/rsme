import Footer from '@/components/layout/footer';
import { Header } from '@/components/layout/header'
import { Box } from '@chakra-ui/react'
import React from 'react'

export const Framework = ({
	children,
}: {
	children: React.ReactNode;
}) => {
  return (
    <Box pos="relative" css={{ "&::-webkit-scrollbar": { display: "none" } }}>
        <Header/>
        {children}
        <Footer/>
    </Box>
)
}
