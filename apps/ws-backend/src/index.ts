import { WebSocketServer, WebSocket } from "ws";
import jwt from "jsonwebtoken";
import {prismaClient} from "@repo/db/client"
const wss = new WebSocketServer({port : 8080});

const prisma = new prismaClient();
interface User{
    ws: WebSocket,
    rooms: string[],
    userId: string
}
const users: User[] = []

wss.on('connection', function connection(ws, request){
    const url = request.url;
    if(!url)
        return
    const queryParam = new URLSearchParams(url.split('?')[1]);
    const token = queryParam.get('token')||"";
    const decoded = jwt.verify(token, "TheCurryGuy")
    if(!decoded){
        ws.close();
        return;
    }
    if(typeof decoded === 'string'){
        ws.close();
        return;
    }
    const userId = decoded.userId;
    if(userId == null)
        return

    users.push({
        userId,
        rooms: [],
        ws
    })




    ws.on('message', async function message(data){
        //the data that arrives is always of thee format string hence need to jsonify first
        const parsedData = JSON.parse(data as unknown as string)

        if(parsedData.type === "join_room"){
            const user = users.find((x)=> x.ws === ws);
            user?.rooms.push(parsedData.roomId)
        }
        if(parsedData.type === "leave_room"){
            const user = users.find((x)=> x.ws === ws)
            if(!user)
                return
            user.rooms = user?.rooms.filter(x => x === parsedData.roomId)
        }
        if(parsedData.type === "chat"){
            const room = parsedData.roomId
            const message = parsedData.message
            await prisma.chat.create({
                data: {
                    message,
                    roomId: room,
                    userId
                }
            })
            users.forEach((x) => {
                if(x.rooms.includes(room)){
                    x.ws.send(JSON.stringify({
                        type : "chat",
                        message : message,
                        roomId : room

                    }))
                }
            })

        }

    });
});