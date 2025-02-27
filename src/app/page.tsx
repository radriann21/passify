import { Box } from "@chakra-ui/react";
import { HeaderComponent } from "./components/HeaderComponent";
import { PasswordContainer } from "./components/PasswordContainer";

export default function Home() {
  return (
    <Box 
      as="main" 
      maxW="full" 
      minH="100dvh" 
      bgColor={{ base: 'white', _dark: 'gray.950' }}
      p={{ base: '1.5rem', md: '3rem' }}
    >
      <HeaderComponent />
      <PasswordContainer />
    </Box>
  );
}
