// src/components/MintTicketForm.js
import React, { useState } from 'react';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Textarea,
  Text,
} from '@chakra-ui/react';

const MintTicketForm = ({ onMint }) => {
  const [eventName, setEventName] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !ticketPrice || !eventDescription || !numberOfTickets) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onMint({ eventName, ticketPrice, eventDescription, numberOfTickets });
    clearForm();
  };

  const clearForm = () => {
    setEventName('');
    setTicketPrice('');
    setEventDescription('');
    setNumberOfTickets('');
  };

  return (
    <Box 
      p={6}
      maxW="500px"
      mx="auto"
      mt={10}
      boxShadow="lg"
      borderRadius="md"
      bg="white"
    >
      <VStack spacing={6} align="start">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" w="100%">
          Mint Event Tickets
        </Text>

        <FormControl id="eventName" isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl id="ticketPrice" isRequired>
          <FormLabel>Ticket Price (Poly)</FormLabel>
          <Input
            type="number"
            placeholder="Enter ticket price in Poly"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl id="eventDescription" isRequired>
          <FormLabel>Event Description</FormLabel>
          <Textarea
            placeholder="Enter event description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl id="numberOfTickets" isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <Input
            type="number"
            placeholder="Enter number of tickets"
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(e.target.value)}
            focusBorderColor="teal.400"
          />
        </FormControl>

        <Button
          colorScheme="teal"
          size="lg"
          w="full"
          onClick={handleSubmit}
          _hover={{ bg: "teal.600" }}
        >
          Mint Tickets
        </Button>
      </VStack>
    </Box>
  );
};

export default MintTicketForm;
