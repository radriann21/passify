import { Flex, Heading, Box, Text, Mark } from "@chakra-ui/react"
import { PasswordInput } from "./PasswordInput"

export const PasswordContainer = () => {
  return (
    <Flex
      as="section"
      w="full"
      minH="full"
      mt="1.5rem"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Box
        w={{base:"100%", lg:"50%"}}
        textAlign="center"
        spaceY=".5rem"
      >
        <Heading fontSize="1.5rem" fontWeight="bold">
          Pass
          <Mark color="blue.500" fontStyle="italic">ify</Mark>
        </Heading>
        <Text>
          Generate strong passwords quickly and easily, get an immediate assessment of their strength, and have the confidence to use them.
        </Text>
      </Box>
      <PasswordInput />
    </Flex>
  )
}