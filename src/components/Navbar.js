// src/components/Navbar.js
import React, { useState } from 'react';
import { Box, Flex, Button, HStack, useColorModeValue, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');

  // Polygon Network Chain IDs
  const POLYGON_MAINNET_ID = '0x89';
  const POLYGON_MUMBAI_TESTNET_ID = '0x13881';

  // Function to connect MetaMask wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts', []); // Request access to the user's wallet
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        // Check the network
        const { chainId } = await provider.getNetwork();
        if (chainId !== POLYGON_MAINNET_ID && chainId !== POLYGON_MUMBAI_TESTNET_ID) {
          alert('Please switch to the Polygon network.');
          return;
        }

        setWalletAddress(address); // Set wallet address in state
      } catch (err) {
        console.error('Error connecting wallet:', err);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature!');
    }
  };

  return (
    <Box bg={useColorModeValue('teal.500', 'teal.800')} px={4} py={3}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Tixy
        </Text>

        {/* Navbar Links */}
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <Button variant="ghost" colorScheme="whiteAlpha">
            Home
          </Button>
          <Button variant="ghost" colorScheme="whiteAlpha">
            Events
          </Button>
          <Button variant="ghost" colorScheme="whiteAlpha">
            About Us
          </Button>
          <Button variant="ghost" colorScheme="whiteAlpha">
            Contact
          </Button>
        </HStack>

        {/* Connect Wallet Button */}
        <Button
          onClick={connectWallet}
          colorScheme="teal"
          variant="solid"
          size="md"
        >
          {walletAddress
            ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`
            : 'Connect Wallet'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
