import React from "react";
import { ChakraProvider, Box, Heading, Text, Input, Button, VStack, Flex, Avatar, HStack } from "@chakra-ui/react";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const LoginPage = () => (
  <Box p={8}>
    <Heading mb={8}>Sign In</Heading>
    <VStack spacing={4} align="stretch">
      <Input placeholder="Username or Email" />
      <Input type="password" placeholder="Password" />
      <Button colorScheme="blue">Sign In</Button>
      <Text>
        Don't have an account? <a href="/register">Create Account</a>
      </Text>
    </VStack>
  </Box>
);

const RegisterPage = () => (
  <Box p={8}>
    <Heading mb={8}>Create Account</Heading>
    <VStack spacing={4} align="stretch">
      <Input placeholder="Name" />
      <Input placeholder="Username or Email" />
      <Input type="password" placeholder="Password" />
      <Button colorScheme="blue">Create Account</Button>
    </VStack>
  </Box>
);

const ChatPage = () => {
  const contacts = [
    { name: "John Doe", pic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTI3MDgyODN8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { name: "Jane Smith", pic: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjcwODI4NHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { name: "Bob Johnson", pic: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyNzA4Mjg1fDA&ixlib=rb-4.0.3&q=80&w=1080' },
  ];

  const messages = [
    { text: "Hey, how are you?", from: "them" },
    { text: "Doing great, thanks! How about you?", from: "me" },
    { text: "Not too bad. Have any plans for the weekend?", from: "them" },
    { text: "I think I might go hiking, weather permitting.", from: "me" },
  ];

  return (
    <Flex h="100vh">
      <Box w="30%" bg="gray.100" p={4}>
        <HStack spacing={4} mb={8}>
          <Avatar size="md" name="John Doe" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTI3MDgyODN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Box>
            <Heading size="md">John Doe</Heading>
            <Text>Online</Text>
          </Box>
        </HStack>
        <Input placeholder="Search contacts" mb={8} />
        <VStack spacing={4} align="stretch">
          {contacts.map((contact, i) => (
            <HStack key={i} spacing={4} p={2} bg="white" borderRadius="md">
              <Avatar size="sm" name={contact.name} src={contact.pic} />
              <Text>{contact.name}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
      <Box flex={1} p={4}>
        <Flex direction="column" h="100%">
          <HStack spacing={4} mb={8}>
            <Avatar size="md" name="Jane Smith" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjcwODI4NHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Heading size="lg">Jane Smith</Heading>
          </HStack>
          <Box flex={1} overflowY="auto">
            {messages.map((msg, i) => (
              <Box key={i} p={2} bg={msg.from === "me" ? "blue.100" : "gray.100"} borderRadius="md" mb={2} maxW="80%" ml={msg.from === "me" ? "auto" : 0}>
                {msg.text}
              </Box>
            ))}
          </Box>
          <HStack mt={4}>
            <Input placeholder="Type a message" flex={1} />
            <Button colorScheme="blue">
              <FaArrowRight />
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

const Index = () => {
  return (
    <ChakraProvider>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <ChatPage />
    </ChakraProvider>
  );
};

export default Index;
