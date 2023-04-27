import { Box, Avatar, Flex, Text, HStack, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import chatsCss from "./chats.module.css";
import { AiOutlineSend } from "react-icons/ai";

export const ChatsUi = ({ selectedMessages }: any) => {
  const [imageUrl, setImageUrl] = React.useState(selectedMessages.image);
  const [userName, setUserName] = React.useState(selectedMessages.username);
  const [myImageUrl] = React.useState("https://bit.ly/ryan-florence");
  const [messageText, setMessageText] = React.useState('');

  React.useEffect(() => {
    setImageUrl(selectedMessages.image);
    setUserName(selectedMessages.username);
  }, [selectedMessages]);

  const onSendMessage = () => {
    //   selectedMessages.chats.append({message: messageText, sentByMe: true});
    //   setMessageText('');
  }

  return (
    <Box className={chatsCss["body"]}>
      <Box className={chatsCss["header"]}>
        <HStack>
          <Avatar
            size="sm"
            borderRadius="100%"
            name="John Doe"
            boxSize="60px"
            src={imageUrl}
            marginLeft="20px"
          />
          <Text>{userName}</Text>
        </HStack>
      </Box>
      <Box className={chatsCss["chat--box"]}>
        {selectedMessages.chats.map((chat: any) => {
          return (
            <>
              {!chat.sentByMe ? (
                <Flex className={chatsCss["senderBody"]}>
                  <HStack>
                    <Avatar
                      size="sm"
                      borderRadius="100%"
                      name="John Doe"
                      boxSize="60px"
                      src={imageUrl}
                    />
                    <Text className={chatsCss["message--text"]}>{chat.message}</Text>
                  </HStack>
                </Flex>
              ) : (
                <Flex className={chatsCss["myBody"]}>
                  <HStack>
                    <Text className={chatsCss["message--text"]}>{chat.message}</Text>
                    <Avatar
                      size="sm"
                      borderRadius="100%"
                      name="John Doe"
                      boxSize="60px"
                      src={myImageUrl}
                    />
                  </HStack>
                </Flex>
              )}
            </>
          );
        })}
      </Box>

      <Flex position="fixed" bottom="0" width="70%">
        <Input placeholder="Type your message here" className={chatsCss["inputContainer"]} onChange={(e) => setMessageText(e.target.value)}/>
        <AiOutlineSend className={chatsCss["sendIcon"]} onClick={onSendMessage}/>
      </Flex>
    </Box>
  );
};
