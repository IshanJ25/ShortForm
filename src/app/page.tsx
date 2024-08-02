import CreatorBox from "./components/CreatorBox";
import Topbar from "./components/topbar";



export default function Home() {
  return (
    <div className="w-full h-screen bg-bgdefault">
        <Topbar></Topbar>
        <CreatorBox></CreatorBox>
    </div>
      
  );
}
