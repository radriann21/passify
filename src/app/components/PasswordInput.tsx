import { Flex, Box, Heading, Text, VStack, Button, Icon } from "@chakra-ui/react"
import { LuRefreshCcw } from "react-icons/lu"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

export const PasswordInput = () => {
  return (
    <Flex 
      fontSize=".9rem"
      as="article"
      rounded="md"
      p="1.5rem"
      shadow="sm"
      mt="2rem"
      w={{ base: '100%', md: '40%' }}
      display="flex"
      flexDir="column"
      spaceY="1rem"
    >
      <Box>
        <Heading as="h2">Choose the options</Heading>
        <Text fontSize=".8rem">Mange the options for create the password</Text>
      </Box>

      <Box>
        <Slider colorPalette="blue" defaultValue={[8]} label="Length:" min={8} max={32} />
      </Box>

      <Box>
        <Heading as="h2" fontSize=".9rem" mb=".5rem">Options</Heading>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <VStack spaceY=".5rem">
            <Checkbox colorPalette="blue" defaultChecked>Uppercase (A-Z)</Checkbox>
            <Checkbox colorPalette="blue" defaultChecked>Lowercase (a-z)</Checkbox>
          </VStack>
          <VStack spaceY=".5rem" align="start">
            <Checkbox colorPalette="blue" defaultChecked>Numbers (0-9)</Checkbox>
            <Checkbox colorPalette="blue" defaultChecked>Symbols (!@#$%^&*)</Checkbox>
          </VStack>
        </Flex>
      </Box>
      <Button fontSize=".9rem" colorPalette="blue">
        <Icon>
          <LuRefreshCcw />
        </Icon>
        Generate Password
      </Button>
    </Flex>
  )
}