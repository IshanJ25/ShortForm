import CreatorBox from "./components/CreatorBox";
import Genre from "./components/Genre";
import Topbar from "./components/topbar";
import TopCreators from "./components/TopCreators";



export default function Home() {
  return (
    <div className="w-full h-full bg-bgdefault">
        <Topbar></Topbar>
        <CreatorBox></CreatorBox>
        <Genre></Genre>
        <TopCreators></TopCreators>
        
    </div>
      
  );
}
