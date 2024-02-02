import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";

import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, ChannelList, Window, MessageInput, MessageList, Thread, LoadingIndicator } from 'stream-chat-react'
import "stream-chat-react/dist/css/index.css";
// import 'stream-chat-react/dist/css/v2/index.layout.css';
// import 'stream-chat-react/dist/css/v2/index.css';


import logo from '@img/profile-picture.jpg';

import '../css/custom-chat-theme.css'
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

const apiKey = process.env.REACT_APP_STREAM_API_KEY;
const sort = { last_message_at: -1 };
const options = { state: true, watch: true, presence: true, limit: 10 };


export function Chathomefix() {
    const { user_id } = useParams();
    const [client, setClient] = useState(null);
    const [user, setUser] = useState(null);



    useEffect(() => {

        const userIdFromLocalStorage = localStorage.getItem("userbe_id");
        const nameFromLocalStorage = localStorage.getItem("email");
        console.log(nameFromLocalStorage)
        const username = (nameFromLocalStorage === "null" || nameFromLocalStorage === null) ? "User" + userIdFromLocalStorage : nameFromLocalStorage;
        
        console.log(username);

        setUser({
            id: userIdFromLocalStorage,
            name: username,
            image: { logo }
        });
    }, [user_id]);


    useEffect(() => {
        async function init() {
            if (!user) return; // Salir si el usuario no está definido

            const chatClient = StreamChat.getInstance(apiKey);

            await chatClient.connectUser(user, chatClient.devToken(user.id));
            const currentUser = chatClient.user;

            if (!isNaN(user_id)) {
                console.log(user_id);
                // Obtener el id del usuario con quien deseas comunicarte
                const userId = user_id;

                // Crear el canal solo si no existe
                const existingChannel = chatClient.channel('messaging', { members: [user.id, userId] });
                const channelExists = await existingChannel.watch();

                // if (!channelExists) {
                //     const channel = chatClient.channel('messaging', { members: [user.id, userId] });
                //     await channel.watch();
                // }
            }
            else if (isNaN(user_id)) {

            }

            setClient(chatClient);
        }
        init();

        if (client) {
            return () => client.disconnectUser();
        }

    }, [user, user_id, client])

    async function handleContact() {
        if (!client) return;
        const location = useLocation();
        const userId = location.state.userId;
        // Obtener la información del usuario al que quieres contactar (puede ser a través de un producto)
        // const userId = '30'; // Ejemplo: ID del usuario con quien deseas comunicarte

        // Abrir el canal de chat correspondiente
        const channel = client.channel('messaging', { members: [user.id, userId] });
        await channel.watch();
    }

    if (!client) {
        return <LoadingIndicator />;
    }

    // Configurar los filtros después de que user esté definido
    const filters = { type: 'messaging', members: { $in: [user.id] } };

    return (
       <div className="mt-12">
        <Chat client={client} theme={'messaging light'}>
                    <ChannelList
                        filters={filters}
                        sort={sort}
                        options={options} showChannelSearch
                    />
                    <Channel>
                        <Window>
                            <ChannelHeader />
                            <MessageList />
                            <MessageInput focus />
                        </Window>
                        <Thread />
                    </Channel>
                </Chat>
       </div>
                
    );
}

export default Chathomefix;


