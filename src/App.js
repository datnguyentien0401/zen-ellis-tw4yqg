import "./styles.css";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MessageSeparator,
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Conversation,
  ConversationList,
  ConversationHeader,
  Avatar,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  TypingIndicator,
  localSender,
  EllipsisButton,
  Search
} from "@chatscope/chat-ui-kit-react";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "500px",
          width: "50%"
        }}
      >
        <ConversationList>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <EllipsisButton border orientation="vertical" />
            <span> Conversations</span>
            <Search placeholder="Search..." />
          </div>

          <Conversation
            name="Lilly"
            lastSenderName="Lilly"
            info="Yes i can do it for you"
          ></Conversation>

          <Conversation
            name="Joe"
            lastSenderName="Joe"
            info="Yes i can do it for you"
          ></Conversation>

          <Conversation
            name="Emily"
            lastSenderName="Emily"
            info="Yes i can do it for you"
          ></Conversation>

          <Conversation
            name="Kai"
            lastSenderName="Kai"
            info="Yes i can do it for you"
          ></Conversation>

          <Conversation
            name="Akane"
            lastSenderName="Akane"
            info="Yes i can do it for you"
          ></Conversation>

          <Conversation
            name="Eliot"
            lastSenderName="Eliot"
            info="Yes i can do it for you"
          ></Conversation>

          <Conversation
            name="Zoe"
            lastSenderName="Zoe"
            info="Yes i can do it for you"
          ></Conversation>

          <Conversation
            name="Patrik"
            lastSenderName="Patrik"
            info="Yes i can do it for you"
          ></Conversation>
        </ConversationList>
      </div>
      <div
        style={{
          height: "500px",
          width: "50%"
        }}
      >
        <ChatContainer>
          <MessageList
            typingIndicator={<TypingIndicator content="Joe is typing" />}
          >
            <MessageSeparator content={new Date().toDateString()} />

            <Message
              model={{
                message: "Hello my friend, this has been a great help for me",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "single"
              }}
            >
              {" "}
              <Message.Footer
                sender="Emily"
                sentTime={new Date().toDateString()}
              />
            </Message>

            <Message
              model={{
                message:
                  "The project was great and I am looking for ward to it",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "single"
              }}
            >
              {" "}
              <Message.Footer
                sender="Raj"
                sentTime={new Date().toDateString()}
              />
            </Message>

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "first"
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "normal"
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "normal"
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "last"
              }}
            ></Message>

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "first"
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "normal"
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "normal"
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "last"
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "first"
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "last"
              }}
            ></Message>

            <MessageSeparator content="Saturday, 31 November 2019" />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "single"
              }}
            ></Message>

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "single"
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "first"
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "normal"
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "normal"
              }}
            >
              <Message.Footer sender="Emily" sentTime="just now" />
            </Message>

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "first"
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "normal"
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "normal"
              }}
            >
              <Message.Footer sender="Emily" sentTime="just now" />
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: localSender,
                direction: "outgoing",
                position: "last"
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "first"
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Joe",
                direction: "incoming",
                position: "last"
              }}
            >
              <Message.Footer sender="Emily" sentTime="just now" />
            </Message>
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </div>
      <div
        style={{
          height: "500px",
          width: "50%",
          position: "relative"
        }}
      >
        <MessageInput
          sendButton={false}
          placeholder="upload your file here..."
          style={{ display: "flex", position: "absolute", bottom: "0" }}
        />
      </div>
    </div>
  );
}
