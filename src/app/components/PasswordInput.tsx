"use client"
import { useState } from "react"
import { Flex, Box, Heading, Text, VStack, Button, Icon } from "@chakra-ui/react"
import { LuRefreshCcw } from "react-icons/lu"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ClipboardIconButton, ClipboardRoot } from "@/components/ui/clipboard"
import { usePasswordStoreContext } from "@/providers/PasswordStoreProvider"
import { Toaster, toaster } from "@/components/ui/toaster"

export const PasswordInput = () => {

  const { password, setPassword } = usePasswordStoreContext((state) => state)

  const [characterLength, setCharacterLength] = useState([8])
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const handleGeneratePassword = () => {
    if (uppercase === false && lowercase === false && numbers === false && symbols === false) {
      toaster.create({
        title: "Error on password generation. ",
        description: "At least one option must be selected.",
        type: "error"
      })
      return
    }
    
    const options: Options = {
      characters: characterLength[0],
      uppercase,
      lowercase,
      numbers,
      symbols
    }
    setPassword(options)
  }

  return (
    <Flex 
      fontSize=".9rem"
      as="article"
      rounded="md"
      p="1.5rem"
      shadow="sm"
      mt="1.5rem"
      w={{ base: '100%', md: '60%', lg:"40%" }}
      display="flex"
      flexDir="column"
      spaceY="1rem"
    >
      <Toaster />
      <Box>
        <Heading as="h2">Choose the options</Heading>
        <Text fontSize=".8rem">Mange the options for create the password</Text>
      </Box>

      <Flex 
        w="full"
        padding="1rem"
        bgColor={{ base:"blue.100", _dark:"gray.900"}}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize={{base:".7rem", md:".9rem"}}>{password === "" ? "Your password is gonna appear here." : password}</Text>
        </Box>
        <ClipboardRoot value={password}>
          <ClipboardIconButton size="xs" colorPalette="blue" />
        </ClipboardRoot>
      </Flex>

      <Box>
        <Slider 
          value={characterLength} 
          colorPalette="blue" 
          defaultValue={[8]} 
          label={`Length: ${characterLength}`}
          min={8} 
          max={32} 
          onValueChange={(evt) => setCharacterLength(evt.value)}
        />
      </Box>

      <Box>
        <Heading as="h2" fontSize=".9rem" mb=".5rem">Options</Heading>
        <Flex w="full" flexDir={{ base: "column", md: "row" }} spaceY={{ base: "1rem", md: "0" }} justifyContent="space-between" alignItems="center">
          <VStack spaceY=".5rem">
            <Checkbox colorPalette="blue" checked={uppercase} onCheckedChange={(evt) => setUppercase(!!evt.checked)}>Uppercase (A-Z)</Checkbox>
            <Checkbox colorPalette="blue" checked={lowercase} onCheckedChange={(evt) => setLowercase(!!evt.checked)}>Lowercase (a-z)</Checkbox>
          </VStack>
          <VStack spaceY=".5rem" alignItems="flex-start">
            <Checkbox colorPalette="blue" checked={numbers} onCheckedChange={(evt) => setNumbers(!!evt.checked)}>Numbers (0-9)</Checkbox>
            <Checkbox colorPalette="blue" checked={symbols} onCheckedChange={(evt) => setSymbols(!!evt.checked)}>Symbols (!@#$%^&*)</Checkbox>
          </VStack>
        </Flex>
      </Box>
      <Flex
        w="full"
        p="1rem"
        justifyContent="space-between"
        alignItems="center"
        bgColor={{ base:"blue.100", _dark:"gray.900"}}
      >
        <Text textTransform="uppercase" fontSize=".7rem" fontWeight="bold" letterSpacing="2px">Strength</Text>
      </Flex>
      <Button onClick={handleGeneratePassword} fontSize=".9rem" colorPalette="blue">
        <Icon>
          <LuRefreshCcw />
        </Icon>
        Generate Password
      </Button>
    </Flex>
  )
}