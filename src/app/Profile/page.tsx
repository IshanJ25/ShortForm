import Media from "../components/Media";
import Profile from "../components/Profile";
import Topbar from "../components/topbar";


export default function ProfilePage(){
    return(
    <div className="bg-bgdefault">  

        <Topbar></Topbar>
        <main className="min-h-screen flex bg-bgdefault">
            
            <div className="w-96">
            <Profile>
            </Profile>
            </div>
            
            <Media>
            </Media>
            
        </main>
    </div>
    )
}