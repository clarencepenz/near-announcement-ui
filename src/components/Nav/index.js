import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import LOGO from '../../images/logo.png';
import React from "react";

export default function Nav({ logout }) {
  return (
    <Flex bg='beige' w='full'>
      <Link href='/near-announcement-ui' textDecoration='none' mr='auto'>
        <Image src={LOGO} h='50px' w='50px' ml='20px'/> 
      </Link>
      <Box>
        <Button
          rightIcon={<WarningTwoIcon />}
          colorScheme="red"
          variant="solid"
          onClick={() => logout()}
          m='8px 18px 8px 8px'
        >
          Disconnect
        </Button>
      </Box>
    </Flex>
  );
}
