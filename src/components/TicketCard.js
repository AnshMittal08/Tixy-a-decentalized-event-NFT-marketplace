// src/components/TicketCard.js
import React from 'react';
import {
  Box,
  Image,
  Text,
  Badge,
  Button,
  VStack,
  HStack,
  Stack,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

const TicketCard = ({ eventName, eventDate, ticketPrice, imageUrl }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('lg', 'dark-lg');
  const priceBg = useColorModeValue('teal.100', 'teal.700');

  return (
    <Box
      bg={bg}
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={cardShadow}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: 'scale(1.03)', boxShadow: '2xl' }}
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      mb={4} // Add bottom margin for spacing between cards
    >
      {/* Event Image */}
      <Image
        src={imageUrl}
        alt={eventName}
        h="200px"
        w="full"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/300" // Placeholder image if imageUrl fails
      />

      {/* Content Section */}
      <Box p={6}>
        <VStack align="start" spacing={4}>
          {/* Event Name */}
          <Text fontSize="xl" fontWeight="bold" noOfLines={1} color={useColorModeValue('gray.800', 'white')}>
            {eventName}
          </Text>

          {/* Event Date and Price */}
          <HStack justify="space-between" w="full" spacing={2}>
            <Text fontSize="sm" color="gray.500">
              {eventDate}
            </Text>
            <Badge bg={priceBg} color="teal.800" p={1} borderRadius="md">
              {ticketPrice} MATIC {/* Changed from ETH to MATIC */}
            </Badge>
          </HStack>

          <Divider />

          {/* Action Button */}
          <Button
            colorScheme="teal"
            size="md"
            w="full"
            _hover={{ bg: "teal.600", transform: 'translateY(-2px)' }}
            _focus={{ outline: 'none' }}
            aria-label={`Buy ticket for ${eventName}`}
          >
            Buy Ticket
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default TicketCard;
