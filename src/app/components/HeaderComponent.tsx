import { Box, Flex, Heading, Mark, Button, Separator, Icon } from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";
import Link from "next/link";

export const HeaderComponent = () => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Heading fontSize="1.5rem" fontWeight="bold">
          Pass
          <Mark color="blue.500" fontStyle="italic">ify</Mark>
        </Heading>
      </Box>
      <Flex spaceX=".5rem">
        <ColorModeButton />
        <Separator orientation="vertical" />
        <Link href="https://github.com/radriann21/passify" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost">
          <Icon>
            <LuGithub />
          </Icon>
          Code
        </Button>
        </Link>
      </Flex>
    </Flex>
  )
}