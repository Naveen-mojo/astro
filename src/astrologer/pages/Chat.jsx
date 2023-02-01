import Message from "./Message"
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import { apiEndPoint } from "../../enviroment";
import Conversation from "./Conversation";


export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    // const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();
    const [status, setstatus] = useState(0)


    useEffect(() => {
        socket.current = io("http://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user.id);
        socket.current.on("getUsers", (users) => {
            // setOnlineUsers(
            //     user.followings.filter((f) => users.some((u) => u.userId === f))
            // );
        });
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(`${apiEndPoint}conversation/` + user?.id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
        // eslint-disable-next-line
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`${apiEndPoint}message/` + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user.id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user.id
        );

        socket.current.emit("sendMessage", {
            senderId: user.id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post(`${apiEndPoint}message/add`, message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const openChat = () => {
        document.getElementById('open-chat').style.display = 'flex';
        document.getElementById('close-chat').style.display = 'flex';
        setstatus(1)
    }

    const closeChat = () => {
        document.getElementById('open-chat').style.display = 'none';
        document.getElementById('close-chat').style.display = 'none';
        setstatus(0)
    }


    const updateProfile = () => {
        var formdata = new FormData();
        formdata.append("status", status);

        const config = {
            method: 'PATCH',
            url: `${apiEndPoint}astro/update/status/${user.id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: formdata
        }

        axios(config).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        updateProfile()
    }, [status])


    return (
        <>
            <section style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", height: "100vh" }}>
                <div className="messenger">
                    <div className="chatMenu">
                        <div className="chatMenuWrapper">
                            <div className="chatbox-open" onClick={openChat}>
                                {conversations.map((c, index) => (
                                    <div key={index} onClick={() => setCurrentChat(c)} >
                                        <Conversation conversation={c} currentUser={user} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="chatbox-open">
                    
                </div> */}
                <button className="chatbox-close" onClick={closeChat} id="close-chat">
                    <i className="fa fa-close fa-2x" aria-hidden="true" />
                </button>
                <section className="chatbox-popup" id="open-chat">
                    <header className="chatbox-popup__header">
                        <aside style={{ flex: 3 }}>
                            <i className="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true" />
                        </aside>
                        <aside style={{ flex: 8 }}>
                            <h1>User</h1> Agent (Online)
                        </aside>
                    </header>
                    <main className="chatbox-popup__main">
                        {currentChat ? (
                            <>
                                <div className="chatBoxTop">
                                    {messages.map((m, index) => (
                                        <div ref={scrollRef} key={index} >
                                            <Message message={m} own={m.sender === user.id} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <span className="text-center h5">
                                Open a conversation to start a chat.
                            </span>
                        )}
                    </main>
                    <footer className="chatbox-popup__footer">
                        <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                            <i className="fa fa-camera" aria-hidden="true" />
                        </aside>
                        <aside style={{ flex: 10 }}>
                            <textarea
                                className="chatMessageInput"
                                placeholder="write something..."
                                onChange={(e) => setNewMessage(e.target.value)}
                                value={newMessage}
                            ></textarea>
                        </aside>
                        <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                            <button className="chatSubmitButton" onClick={handleSubmit}>
                                Send
                            </button>
                        </aside>
                    </footer>
                </section>
            </section>
        </>
    );
}
