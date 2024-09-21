import Link from "next/link";
import Image from "next/image";

import Imagebanner from "./components/Imagebanner";
import Cardlink from "./components/Cardlink";
import Announcement from "./components/Announcement";
import Productcard from "./components/Productcard";

const cardLinkData = [
  {
    path: "/test",
    img: "/images/heros.png",
    engtext: "Products",
    thtext: "สินค้าทั้งหมด"
  },
  {
    path: "/test",
    img: "/images/heros.png",
    engtext: "Top-up",
    thtext: "เติมเงิน"
  },
  {
    path: "/test",
    img: "/images/heros.png",
    engtext: "Order History",
    thtext: "ประวัติการสั่งซื้อ"
  },
  {
    path: "/test",
    img: "/images/heros.png",
    engtext: "Report",
    thtext: "แจ้งปัญหา"
  },
]

const ProductData = [
  {
    name: "test1sasasasasasasasasasasasasasasasasa",
    price: 999,
    img: "/images/product.jpg",
    path: '/product/id'
  },
  {
    name: "test 2",
    price: 999,
    img: "/images/product.jpg",
    path: '/product/id'
  },
  {
    name: "test 3",
    price: 999,
    img: "/images/product.jpg",
    path: '/product/id'
  },
  {
    name: "test 4",
    price: 999,
    img: "/images/product.jpg",
    path: '/product/id'
  },
  {
    name: "test 5",
    price: 999,
    img: "/images/product.jpg",
    path: '/product/id'
  },
]

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* heros */}
      <Imagebanner img="/images/raiden.jpg" 
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quidem. Vitae blanditiis iure, 
        minima nemo eligendi excepturi. Doloribus nam, cum aliquam vero repellendus dolorum at ex autem aperiam vel, 
        dignissimos eaque debitis expedita placeat consequuntur eius officia possimus fugiat? Molestias 
        repellat odit consectetur accusamus aliquid ut eos nobis. Alias expedita rem laudantium repellat 
        voluptates odio consectetur dicta possimus corporis commodi? Consectetur et reprehenderit voluptatum 
        repellat perspiciatis. Praesentium, voluptatibus. Incidunt nobis temporibus id harum cupiditate ex in, 
        quod aliquam facere aliquid non possimus quis alias, molestias, aut provident fugit doloremque? Doloribus 
        ipsa architecto impedit sequi, eligendi corrupti quam. Earum, maiores eius!"/>
      {/* Link to */}
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-2 md:gap-4">
        {cardLinkData.map((data, index) => (
          <Cardlink key={index} goto={data.path} img={data.img} engtext={data.engtext} thtext={data.thtext} />
        ))}
      </div>
      {/* announcement */}
      <Announcement msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias commodi suscipit placeat, quasi iure, assumenda tenetur aut debitis quia, 
      laborum minima adipisci atque? Natus ipsum, aliquam obcaecati possimus magnam ab?" />
      {/* products for you */}
      <div className="w-full mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">สินค้าแนะนำสำหรับคุณ</h1>
          <Link href="/products" className="font-bold text-purple-400 hover:underline">ดูทั้งหมด</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mt-2">
          {/* product item */}
          {ProductData.map((data, index) => (
            <Productcard key={index} img={data.img} goto={data.path} name={data.name} price={data.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
