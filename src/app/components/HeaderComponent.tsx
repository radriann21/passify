import { Box, Flex, Heading, Mark } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export const HeaderComponent = () => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Heading fontSize="1.5rem">
          Pass
          <Mark color="blue.500" fontStyle="italic">ify</Mark>
        </Heading>
      </Box>
      <ColorModeButton />
    </Flex>
  )
}