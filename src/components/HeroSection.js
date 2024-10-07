// src/components/HeroSection.js
import React from 'react';
import { Box, Flex, Heading, Text, Button, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box 
      bgImage="url('/path/to/your/background.jpg')" // Add your own background image
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="100vh"
      w="100%"
      color="white"
    >
      <Flex 
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        h="100%"
        bg="rgba(0, 0, 0, 0.6)" // Optional: dark overlay for better text contrast
        px={4}
      >
        {/* Hero Content */}
        <VStack spacing={6} maxW="800px">
          <Heading 
            as="h1" 
            fontSize={{ base: '2.5rem', md: '4rem' }} 
            fontWeight="bold"
            lineHeight="1.2"
          >
            Experience the Future of Ticketing
          </Heading>
          
          <Text 
            fontSize={{ base: '1rem', md: '1.25rem' }}
            opacity={0.8}
          >
            Tixy is a decentralized, secure, and fraud-proof NFT-based ticketing platform. Buy, sell, and manage your event tickets with ease and security.
          </Text>

          {/* Call to Action Button */}
          <Button 
            size="lg" 
            colorScheme="teal" 
            bg="teal.400" 
            _hover={{ bg: "teal.600" }}
            _active={{ bg: "teal.700" }}
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            Get Started
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HeroSection;
