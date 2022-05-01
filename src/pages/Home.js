import { WarningTwoIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "../App.css";
import { useCallback, useEffect } from "react";
import Button from "../components/Button";
import { Flex, Link, Text } from "@chakra-ui/react";
import Bg from '../images/home.png'
import { useHistory } from "react-router-dom";


const Home = ({ logout, login }) => {
  const account = window.walletConnection.account().accountId;
  const history = useHistory();
  
  const initAnnouncements = useCallback(async () => {
    if (account) {
      history.push("/announcements");
    }
  });

  useEffect(() => {
    initAnnouncements();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={Bg} className="App-logo" alt="logo" />
        <Text className="App-link" target="_blank" rel="noopener noreferrer">
          Near Announcements
        </Text>
        {account ? (
          <Flex flexDirection='column'>
            <Link href="/announcements">
              Go to Announcements
            </Link>
            <Button
              rightIcon={<WarningTwoIcon />}
              colorScheme="red"
              variant="solid"
              onClick={() => logout()}
              mt='1.5rem'
            >
              Disconnect
            </Button>
          </Flex>
        ) : (
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="solid"
            onClick={() => login()}
          >
            Connect
          </Button>
        )}
      </header>
    </div>
  );
};

export default Home;
