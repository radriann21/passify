import { Flex, Heading, Box, Text, Mark } from "@chakra-ui/react"

export const PasswordContainer = () => {
  return (
    <Flex
      as="section"
      w="full"
      minH="full"
      mt="2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="50%"
        textAlign="center"
        spaceY=".5rem"
      >
        <Heading fontSize="1.5rem" fontWeight="bold">
          Pass
          <Mark color="blue.500" fontStyle="italic">ify</Mark>
        </Heading>
        <Text>
          Genera contraseñas seguras con facilidad y rapidez, obten una evaluación inmediata de la fortaleza y ten la confianza de usarla.
        </Text>
      </Box>
    </Flex>
  )
}