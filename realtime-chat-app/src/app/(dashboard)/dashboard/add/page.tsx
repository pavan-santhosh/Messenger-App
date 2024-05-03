import AddFriendButton from "@/components/ui/AddFriendButton";
import { FC } from "react";

interface pageProps {
    
}
 
const page : FC = () => {
    return (
        <main className="">
            <h1 className="font-bold text-5xl mb-8 mt-8">Add a friend</h1>
            <AddFriendButton/>
        </main>
    )
}
 
export default page;