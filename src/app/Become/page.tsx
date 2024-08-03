import Categor from "../components/category";
import JobDescription from "../components/JobDescription";
import PricingTable from "../components/PricingTable";
import Topbar from "../components/topbar";

export default function Become(){
    return(
        <div className="bg-bgdefault w-screen h-screen">
            <div className="pb-10">
            <Topbar></Topbar>
            </div>
            <div className="">
            <JobDescription></JobDescription>
            </div>
            <div className="pt-8">
            <Categor></Categor>
            </div>
            <div>
                <h1 className="pl-14 text-2xl font-inter text-textdarkblue pt-12 pb-9">
                    Pricing
                </h1>
            </div>
            <div className= "bg-bgdefault  flex items-center justify-center pl-5">
            <PricingTable></PricingTable>
            </div>
        </div>
    )
}