// src/components/Footer.js
import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  Divider,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const bgColor = useColorModeValue('gray.800', 'gray.100');
  const textColor = useColorModeValue('white', 'gray.800');
  
  return (
    <Box bg={bgColor} color={textColor} py={10}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          {/* Branding Section */}
          <Flex justify="space-between" align="center" wrap="wrap">
            <Text fontSize="2xl" fontWeight="bold" letterSpacing="wider">
              Tixy Ticketing
            </Text>
            <HStack spacing={4} mt={{ base: 4, md: 0 }}>
              <IconButton
                as={ChakraLink}
                href="https://twitter.com/"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="outline"
                colorScheme="teal"
                size="lg"
              />
              <IconButton
                as={ChakraLink}
                href="https://facebook.com/"
                aria-label="Facebook"
                icon={<FaFacebookF />}
                variant="outline"
                colorScheme="teal"
                size="lg"
              />
              <IconButton
                as={ChakraLink}
                href="https://instagram.com/"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="outline"
                colorScheme="teal"
                size="lg"
              />
              <IconButton
                as={ChakraLink}
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                icon={<FaLinkedinIn />}
                variant="outline"
                colorScheme="teal"
                size="lg"
              />
            </HStack>
          </Flex>

          <Divider borderColor={useColorModeValue('gray.700', 'gray.300')} />

          {/* Navigation Links */}
          <HStack spacing={8} justify="center" wrap="wrap">
            <ChakraLink href="/about" color={textColor} fontSize="sm" _hover={{ textDecoration: 'underline' }}>
              About Us
            </ChakraLink>
            <ChakraLink href="/events" color={textColor} fontSize="sm" _hover={{ textDecoration: 'underline' }}>
              Events
            </ChakraLink>
            <ChakraLink href="/contact" color={textColor} fontSize="sm" _hover={{ textDecoration: 'underline' }}>
              Contact
            </ChakraLink>
          </HStack>

          {/* Copyright Section */}
          <Text fontSize="sm" textAlign="center">
            &copy; {new Date().getFullYear()} Tixy Ticketing. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
