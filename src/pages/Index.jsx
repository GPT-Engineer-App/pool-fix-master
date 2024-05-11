import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaTools, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8} centerContent>
      <VStack spacing={8} align="center">
        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjByZXBhaXJ8ZW58MHx8fHwxNzE1NDQ1NzI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Pool Repair" boxSize="400px" objectFit="cover" />
        <Heading as="h1" size="2xl" textAlign="center">
          Premier Pool Repair Services
        </Heading>
        <Text fontSize="xl" textAlign="center">
          We fix everything from leaks to full renovations. Trust us to keep your pool in perfect condition all year round!
        </Text>
        <Button rightIcon={<FaTools />} colorScheme="teal" size="lg">
          Get a Quote
        </Button>
        <Button rightIcon={<FaPhone />} colorScheme="blue" size="lg">
          Call Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
