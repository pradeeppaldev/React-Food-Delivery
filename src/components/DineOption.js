import { dineoutRestaurants } from "../utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){
    return(
        <div className="w-[80%] mx-auto mt-20">
            <p>Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 mb-2">
                {
                    dineoutRestaurants.map((RestData) => <DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
                }
            </div>
        </div>
    )
}