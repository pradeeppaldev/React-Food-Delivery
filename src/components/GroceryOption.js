import {GroceryGridCards} from '../utils/GroceriesData'
import GroceryCard from './GroceryCard';

export default function GroceryOption() {
  return (
    <>
      <div className="mt-20 w-[80%] container mx-auto">
        <h1 className='font-bold text-2xl my-5'>Shop groceries on instamart</h1>
        <div className="container mx-auto mt-8 ">
        <div className='flex container gap-6 flex-nowrap overflow-x-auto'>
          {
            GroceryGridCards?.map((foodData) => (<GroceryCard key={foodData.id} foodData={foodData} />))
          }
        </div>
        </div>
      </div>
    </>
  );
}
