import { Box, Avatar, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { ChatsUi } from "../messages/chats";
import MessageListCss from "./messageLists.module.css";

export const MessageList  = () => {
  const [messages, setChatData] = React.useState([
    {
      id: 1,
      username: "Alice",
      image: "https://bit.ly/dan-abramov",
      chats: [
        { message: "Hello, how are you?", sentByMe: true },
        {
          message: "I'm good, thanks for asking. How about you?",
          sentByMe: false,
        },
        { message: "I'm doing great, thanks!", sentByMe: true },
        {
          message: "That's good to hear. What have you been up to?",
          sentByMe: false,
        },
      ],
    },
    {
      id: 2,
      username: "Bob",
      image: "https://bit.ly/dan-abramov",
      chats: [
        { message: "Hey, what's up?", sentByMe: false },
        {
          message: "Not much, just hanging out. How about you?",
          sentByMe: true,
        },
        {
          message: "Same here. Have you seen any good movies lately?",
          sentByMe: false,
        },
        {
          message:
            "Yeah, I watched The Godfather the other day. It was amazing!",
          sentByMe: true,
        },
      ],
    },
    {
      id: 3,
      username: "Charlie",
      image: "https://bit.ly/dan-abramov",
      chats: [
        { message: "Hey, can you help me with something?", sentByMe: true },
        { message: "Sure, what do you need help with?", sentByMe: false },
        {
          message:
            "I'm trying to install a new software on my computer, but I'm having some issues.",
          sentByMe: true,
        },
        { message: "Okay, let me take a look.", sentByMe: false },
      ],
    },
  ]);

  const [selectedMessages, setSelectedMessages] = React.useState(null);

  const onSelectMessage = (list: any) => {
    setSelectedMessages(list);
  };

  return (
    <Box>
      <HStack>
        <Box width="30%" className={MessageListCss["HStack--box"]}>
          {messages.map((list: any) => {
            return (
              <HStack onClick={() => onSelectMessage(list)} className={MessageListCss["userName"]}>
                <Avatar size="sm" borderRadius="100%" name="John Doe" boxSize="60px" src={list.image} marginLeft="20px" />
                <Text className={MessageListCss["userName--Text"]}>{list.username}</Text>
              </HStack>
            );
          })}
        </Box>
        <Box width="70%">
          {selectedMessages && <ChatsUi selectedMessages={selectedMessages} />}
        </Box>
      </HStack>
    </Box>
  );
};
