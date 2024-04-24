import Image from "next/image";
import banner from '../public/banner.jpg'
import Navbar from "@/components/Navbar";
import about from '../public/about.jpg'
import menu from '../public/menu.jpg'

export default function Home() {
  return (
    <>
    <section>
      <div className="relative">
        <Image src={banner} className="w-full h-full"/>
        <p className="absolute text-gray-500 bottom-2 font-playfair text-4xl p-6">Le Catering</p>
      </div>
    </section>
    <div className="m-0"><Navbar/></div>
    
    <div className="m-24">
    <section className="grid grid-cols-2">
      <div><Image src={about} className="w-full h-4/5"/></div>
      <div className="mx-10">
        <h1 className=" text-center font-playfair text-4xl tracking-widest mb-10">About Catering</h1>
        <p className="text-center my-5 font-playfair tracking-widest">Tradition since 1889</p>
        <p className=" font-playfair ">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
        <p className="text-gray-700 font-playfair my-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>
    <section className="grid grid-cols-2">
      <div className="mx-10">
        <h1 className=" text-center font-playfair text-4xl tracking-widest mb-10">Our Menu</h1>
        <ul className="">
          <li className="font-playfair tracking-widest text-2xl my-4">Bread Basket</li>
          <li className="font-playfair text-gray-500">Assortment of fresh baked fruit breads and muffins 5.50</li>
        </ul>
        <ul className="">
          <li className="font-playfair tracking-widest text-2xl my-4">Honey Almond Granola with Fruits</li>
          <li className="font-playfair text-gray-500">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</li>
        </ul>
        <ul className="">
          <li className="font-playfair tracking-widest text-2xl my-4">Belgian Waffle</li>
          <li className="font-playfair text-gray-500">AVanilla flavored batter with malted flour 7.50</li>
        </ul>
        <ul className="">
          <li className="font-playfair tracking-widest text-2xl my-4">Scrambled eggs</li>
          <li className="font-playfair text-gray-500">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</li>
        </ul>
        <ul className="">
          <li className="font-playfair tracking-widest text-2xl my-4">Blueberry Pancakes</li>
          <li className="font-playfair text-gray-500">With syrup, butter and lots of berries 8.50</li>
        </ul>
      </div>
      <div><Image src={menu} className="w-full h-4/5"/></div>
    </section>
    </div>
    </>
  );
}
