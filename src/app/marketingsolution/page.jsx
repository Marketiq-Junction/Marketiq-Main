"use client"
import Socialmedia from "@/components/Marketingsolution/Socialmedia";
import Drive from "@/components/Marketingsolution/Drive/Drive";
import Engage from "@/components/Marketingsolution/Engage/Engage";
import Advertising from "@/components/Marketingsolution/Advertising/Advertising";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const page=()=>{
    return(
    <div>
        <Navbar />
        <Socialmedia />
        <Drive />
        <Engage />
        <Advertising />
        <Footer />
    </div>
    );
    
};
export default page;