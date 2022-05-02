import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/all";

import React from "react";
import DateUtil from "../../utils/DateUtil";

export function Card({ item, account, likeFunc, dislikeFunc, deleteFunc }) {
  return (
    <Flex
      width={{ base: "340px", md: "450px" }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={2}
      mt={4}
      bg="white"
    >
      <Avatar m={2} size="lg" name={`${item.announcer[0]}`} />{" "}
      <Box p={4} flex="1">
        <Box display="flex" alignItems="baseline">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="baseline"
            mr="auto"
          >
            <Badge
              textTransform="lowercase"
              borderRadius="full"
              px="2"
              colorScheme="teal"
            >
              {item.announcer}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
            >
              {DateUtil(item.createdAt)} &bull;
            </Box>
          </Box>
          {account !== item.announcer ? null : (
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2"
              cursor="pointer"
              _hover={{ color: "red" }}
            >
              {<FaTrash onClick={deleteFunc} />}
            </Box>
          )}
        </Box>

        <Text
          mt="1"
          lineHeight="tight"
          color="black"
          textAlign="left"
          fontSize={18}
        >
          {item.text}
        </Text>

        <Flex justify="flex-end" alignItems="baseline" py="2">
          <Flex color="gray.500" ml="2">
            <Flex cursor="pointer" mx="5px" variant="ghost" onClick={likeFunc}>
              <Box mr="2px" _hover={{ color: "blue" }} color={ item.like.includes(account) ? "blue" : 'gray'}>
                {item.like.length} like
              </Box>
            </Flex>{" "}
            <Flex
              cursor="pointer"
              mx="5px"
              variant="ghost"
              onClick={dislikeFunc}
            >
              <Box mr="2px" _hover={{ color: "blue" }} color={ item.dislike.includes(account) ? "blue" : 'gray'}>
                {item.dislike.length} dislike
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
