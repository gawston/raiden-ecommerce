import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto h-screen">
      <div className="relative overflow-hidden rounded-lg">
        <p className="md:block hidden absolute bottom-0 p-4 text-white text-xl mt-2 z-[2]">
          ความสงบสุขและความมั่นคงของ Inazuma คือหน้าที่อันสูงสุดของข้า 
          ข้าเป็นผู้ปกครองที่ยึดมั่นในความศักดิ์สิทธิ์แห่งนิรันดร์กาล อุดมการณ์นี้ไม่ใช่สิ่งที่ข้าสร้างขึ้นเพื่อตัวเอง 
          แต่มันคือสิ่งที่ข้าได้รับจากบรรพบุรุษ และข้าได้แบกรับเอาไว้เป็นภาระที่ยิ่งใหญ่...นิรันดร์กาลคือสิ่งที่ข้าเชื่อว่าเป็นความสมบูรณ์แบบ 
          ข้าได้เห็นการเปลี่ยนแปลง การล่มสลาย และการเริ่มต้นใหม่ครั้งแล้วครั้งเล่า ในสายตาของข้า ความเปลี่ยนแปลงนั้นไม่ใช่สิ่งที่ดีงาม 
          มันเป็นเพียงการพังทลายของสิ่งที่เคยมั่นคง และข้าจะไม่ยอมให้สิ่งนั้นเกิดขึ้นกับ Inazuma 
          นี่คือเหตุผลที่ข้าได้ก้าวเข้าสู่ Euthymia และทิ้งสิ่งอื่นไว้เบื้องหลัง ข้าจะไม่ปล่อยให้ Inazuma ล่มสลายไปพร้อมกับการเปลี่ยนแปลง 
          ข้าจะยืนหยัด ณ จุดนี้ ดั่งหินผาที่ไม่สั่นไหวในสายลมของกาลเวลา
        </p>
        <div className="absolute bg-gradient-to-t from-black h-full w-full opacity-80 z-[1]"></div>
        <Image src="/images/raiden.jpg" width={5000} height={5000} className="h-64 md:h-96 object-cover mt-4 rounded-lg" />
      </div>
    </div>
  );
}
