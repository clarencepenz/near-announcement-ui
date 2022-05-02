import React, { useCallback, useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import LOGO from "../../images/logo.png";
import { accountBalance } from "../../config/near";

export default function Nav({ logout }) {
  const [balance, setBalance] = useState("0");
  const account = window.walletConnection.account();

  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <Flex bg="beige" w="full">
      <Link href="/near-announcement-ui" textDecoration="none" mr="auto">
        <Image src={LOGO} h="50px" w="50px" ml="20px" />
      </Link>
      <Box>
        <Menu>
          <MenuButton
            colorScheme="teal"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            m="8px 18px 8px 8px"
          >
            Ⓝ {balance}
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px">
              <Avatar
                 m={2} size="xs" name={`${account.accountId[0]}`} 
                mr="12px"
              />
              <span style={{ color: '#000'}}>{account.accountId}</span>
            </MenuItem>
            <MenuItem minH="40px">
              <span
                style={{ color: '#000', textAlign: "center", width: "83%"}}
                onClick={() => logout()}
              >
                Disconnect
              </span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
