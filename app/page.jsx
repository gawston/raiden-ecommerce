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
    name: "test 1",
    price: 999,
    img: "/images/product.jpg",
    view: "/view",
    buy: "/buy"
  },
  {
    name: "test 2",
    price: 999,
    img: "/images/product.jpg",
    view: "/view",
    buy: "/buy"
  },
  {
    name: "test 3",
    price: 999,
    img: "/images/product.jpg",
    view: "/view",
    buy: "/buy"
  },
  {
    name: "test 4",
    price: 999,
    img: "/images/product.jpg",
    view: "/view",
    buy: "/buy"
  },
  {
    name: "test 5",
    price: 999,
    img: "/images/product.jpg",
    view: "/view",
    buy: "/buy"
  },
]

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* heros */}
      <Imagebanner img="/images/raiden.jpg" 
        msg="ความสงบสุขและความมั่นคงของ Inazuma คือหน้าที่อันสูงสุดของข้า 
              ข้าเป็นผู้ปกครองที่ยึดมั่นในความศักดิ์สิทธิ์แห่งนิรันดร์กาล อุดมการณ์นี้ไม่ใช่สิ่งที่ข้าสร้างขึ้นเพื่อตัวเอง 
              แต่มันคือสิ่งที่ข้าได้รับจากบรรพบุรุษ และข้าได้แบกรับเอาไว้เป็นภาระที่ยิ่งใหญ่...นิรันดร์กาลคือสิ่งที่ข้าเชื่อว่าเป็นความสมบูรณ์แบบ 
              ข้าได้เห็นการเปลี่ยนแปลง การล่มสลาย และการเริ่มต้นใหม่ครั้งแล้วครั้งเล่า ในสายตาของข้า ความเปลี่ยนแปลงนั้นไม่ใช่สิ่งที่ดีงาม 
              มันเป็นเพียงการพังทลายของสิ่งที่เคยมั่นคง และข้าจะไม่ยอมให้สิ่งนั้นเกิดขึ้นกับ Inazuma 
              นี่คือเหตุผลที่ข้าได้ก้าวเข้าสู่ Euthymia และทิ้งสิ่งอื่นไว้เบื้องหลัง ข้าจะไม่ปล่อยให้ Inazuma ล่มสลายไปพร้อมกับการเปลี่ยนแปลง 
              ข้าจะยืนหยัด ณ จุดนี้ ดั่งหินผาที่ไม่สั่นไหวในสายลมของกาลเวลา"/>
      {/* Link to */}
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-2 md:gap-4">
        {cardLinkData.map((data, index) => (
          <Cardlink key={index} path={data.path} img={data.img} engtext={data.engtext} thtext={data.thtext} />
        ))}
      </div>
      {/* announcement */}
      <Announcement msg="ข้าเป็นผู้ที่คงอยู่เพื่อปกป้อง Inazuma และข้าจะทำทุกวิถีทางเพื่อรักษาความสงบนี้ไว้ 
        แม้ว่ามันอาจดูเย็นชาหรือไร้ความรู้สึกในสายตาของคนอื่นๆ แต่ข้ารู้ดีว่าความมั่นคงที่แท้จริงไม่สามารถซื้อได้ด้วยความอ่อนโยน 
        ข้าจะยืนหยัดต่อไปอย่างไม่หวั่นไหว ปกป้องดินแดนนี้และประชาชนของข้า ไม่ว่าจะต้องแลกด้วยอะไร ข้าคือ Raiden Shogun, 
        และข้าจะนำพา Inazuma ไปสู่ความนิรันดร์กาล ไม่มีสิ่งใดจะหยุดยั้งข้าได้" />
      {/* products for you */}
      <div className="w-full mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">สินค้าแนะนำสำหรับคุณ</h1>
          <Link href="/products" className="font-bold text-purple-400 hover:underline">ดูทั้งหมด</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mt-2">
          {/* product item */}
          {ProductData.map((data, index) => (
            <Productcard key={index} img={data.img} view={data.view} buy={data.buy} name={data.name} price={data.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
