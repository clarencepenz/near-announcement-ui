import "../App.css";
import { useCallback, useEffect, useState } from "react";
import {
  getAllAnnouncements,
  dislikeAnc,
  likeAnc,
  deleteAnc,
} from "../config/announcements";
import { Card } from "../components/Card";
import AddAnnouncement from "../components/AddAnnouncement";
import Nav from "../components/Nav";
import { Flex, Image, Text } from "@chakra-ui/react";
import LOGO from "../images/logo.png";
import { useHistory } from "react-router-dom";

const Announcements = ({ logout }) => {
  const account = window.walletConnection.account().accountId;
  const [announcements, setAnnouncements] = useState([]);
  const history = useHistory();

  const initAnnouncements = useCallback(async () => {
    if (!account) {
      history.push("/");
    }
  }, [account]);

  useEffect(() => {
    initAnnouncements();
  }, [initAnnouncements]);

  const fetchAnnouncements = useCallback(async () => {
    if (account) {
      setAnnouncements(await getAllAnnouncements());
    }
  });

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const dislikeFunc = async (id) => {
    await dislikeAnc({ uid: id });
  };

  const likeFunc = async (id) => {
    await likeAnc({ uid: id });
  };

  const deleteFunc = async (id) => {
    await deleteAnc({ uid: id });
  };

  return (
    <div className="App">
      <Nav logout={logout} />
      <AddAnnouncement />
      {announcements
        ?.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((item, index) => (
          <Card
            key={index}
            item={item}
            account={account}
            likeFunc={() => likeFunc(item.uid)}
            dislikeFunc={() => dislikeFunc(item.uid)}
            deleteFunc={() => deleteFunc(item.uid)}
          />
        ))}

      {announcements?.length < 1 && (
        <Flex flexDirection="column" mt="30px">
          <Image h="300px" w="300px" src={LOGO} />
          <Text>No annoucnements</Text>
        </Flex>
      )}
    </div>
  );
};

export default Announcements;
