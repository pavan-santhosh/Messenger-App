//d.ts ==> we don't need to import them anywhere, which means they are available thorughout the application

interface User {
    id: string
    name: string
    email: string
    image: string
}

interface Chat {
    id: string
    messages: Message[]
  }
  
  interface Message {
    id: string
    senderId: string
    receiverId: string
    text: string
    timestamp: number
  }
  
  interface FriendRequest {
    id: string
    senderId: string
    receiverId: string
  }