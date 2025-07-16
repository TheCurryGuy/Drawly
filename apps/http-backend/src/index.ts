import express from "express";
import {CreateUserSchema, RoomSchema} from "@repo/common/types";
import {prismaClient} from "@repo/db/client"
import {JWT_SECRET} from "@repo/backend-common/config"
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";

const prisma = new prismaClient();

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{

})

app.post("/signin", async(req, res) => {
    const parseResult = CreateUserSchema.safeParse(req.body);

    if (!parseResult.success) {
        res.status(400).json({ error: "Invalid data" });
        return;
    }

    const username = parseResult.data.username;
    const password = parseResult.data.password;
    try{
        const user = await prisma.user.findFirst({
            where: {
                email : username,
                password: password
            }
        })
        if(!user){
            res.status(404).json({
            message: "incorrect credentials"
            })
            return;
        }
        const token = jwt.sign({
            userId : user?.id
        }, JWT_SECRET);


        res.json({
            token: token
        })
    }catch(e){
        res.status(404).json({
            message: "incorrect credentials"
        })

    }
    return;
     


});

app.post("/signup", async (req, res) => {
    const parsedData = CreateUserSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message: "Incorrect Data"
        })
        return;
    }
    try{
        await prisma.user.create({
            data: {
                email: parsedData.data?.username,
                password : parsedData.data?.password,
                name: parsedData.data?.name
            }
        })

        res.json({
            message: "User Created Successfully"
        })
    } catch(e){
        res.status(411).json({
            message: "User Exist"
        })
    }
    return;  
})
app.post("/room", middleware, async(req, res) => {
    const safedata = RoomSchema.safeParse(req.body);
    if(!safedata.success){
        res.json({
            message:"incorrect inputs"
        })
        return;
    }
    //@ts-ignore
    const userId = req.userId;
    try{
        const roomId = await prisma.room.create({
            data:{
                slug: safedata.data.name,
                adminId: userId
            }
        })

        res.json({
            room : roomId.id
        })
    }catch(e){
        res.status(404).json({
            message: "Room Already exists"
        })
    }
    return;
})

app.get("/chat/:roomId", async (req, res)=>{
    const roomId = Number(req.params.roomId);
    const data = await prisma.chat.findMany({
        where: {
            roomId: roomId
        },
        orderBy:{
            id:"desc"
        },
        take: 50
    })
    res.json({
        data
    })
})

app.get("/room/:slug", async (req, res)=>{
    const slug = req.params.slug
    const room = await prisma.room.findFirst({
        where: {
            slug
        }
    })

    res.json({
        room
    })
})



app.listen(3001, ()=>{
    console.log("Server running on port 3000");
})