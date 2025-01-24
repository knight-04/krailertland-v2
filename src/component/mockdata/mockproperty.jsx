import location1 from '../../../public/image/DDproperty-Thailand-Property-Market-Outllok-2024-cover-article-1.jpg';
import location2 from '../../../public/image/1588579761966-44037829_285474768844736_7681322402126495744_o.webp';
import location3 from '../../../public/image/2566-8-18-Supalai-Park-Ville-Khao-Ngoo-Clubhouse-M.jpg';
import location4 from '../../../public/image/Astera-Pride-พระราม-2-1024x685.jpg';
import Logo from '../../../public/image/Screenshot 2567-12-25 at 21.37.16.png';
import hillton1 from '../../../public/images/3โครงการ/hillton/3.png';
import hillton2 from '../../../public/images/3โครงการ/hillton/4_1.jpg';
import hillton3 from '../../../public/images/3โครงการ/hillton/310540111_194787002934505_7212663915766555420_n.jpg';
import hillton4 from '../../../public/images/3โครงการ/hillton/310593283_194787016267837_4187648500976461274_n.jpg';
import hillton5 from '../../../public/images/3โครงการ/hillton/5.png';
import hillton6 from '../../../public/images/3โครงการ/220709_0.jpg';

import hampton1 from '../../../public/images/3โครงการ/hampton/1.jpg';
import hampton2 from '../../../public/images/3โครงการ/hampton/2.jpg';
import hampton3 from '../../../public/images/3โครงการ/hampton/3.jpg';
import hampton4 from '../../../public/images/3โครงการ/hampton/4.jpg';
import hampton5 from '../../../public/images/3โครงการ/hampton/5.jpg';
import hampton6 from '../../../public/images/3โครงการ/220708_0.jpg';




export const properties = [
  {
    id: 1,
    status: "SOLD OUT",
    title: "Hillton",
    image: [hillton3,hillton4,hillton1,hillton2,hillton5,hillton6],
    price: 'ปิดโครงการ',
    description: "บ้านเดี่ยวสุดหรูใจกลางราชบุรี เอกสิทธิ์ แห่งการใช้ชีวิตเหนือระดับ 24หลัง หลังจากไกรเลิศ พร้อมบรรยากาศ โครงการวิวภูเขา บนถนนเจดีย์หัก"
  },
  {
    id: 2,
    status: "NEW PROJECT",
    title: "Hampton",
    image: [hampton1,hampton5,hampton3,hampton4,hampton2,hampton6],
    price: 'เริ่มต้นที่ 2.79-3.99 ล้านบาท',
    description: "เหนือกว่าด้วยการออกแบบทุกองศาของ การอยู่อาศัย เพิ่มพื้นที่ที่เติมเต็ม ชีวิตดีๆ ในแบบของคุณกับบ้านเดี่ยว บ้านแฝด และ บ้านอิสระ ใจกลางเมืองราชบุรี ติด ถนนเพชรเกษม"

  },
  // {
  //   id: 3,
  //   featured: true,
  //   status: "Available",
  //   address: "5/8 สุขาภิบาล แยก10 สายไหม",
  //   title: "เคหะพรพระร่วงฯ",
  //   beds: 2,
  //   baths: 1,
  //   sqft: 1529,
  //   image: house3,
  //   price: '31.2',
  //   type: "villa",
  //   description: "บ้านเดี่ยวสุดหรูใจกลางบางแสน เอกสิทธิ์แห่งการใช้ชีวิตเหนือระดับ เพียง 41 หลังจากมณีรินทร์ พร้อมบรรยากาศโครงการที่ร่มรื่น บนถนนข้าวหลาม บางแสน"

  // }
];

export const locations = [
  {
    image: location1,
    status: 'พร้อมเข้าอยู่',
    type: 'บ้านเดี่ยว',
    location: 'รังสิต',
    price: '4.69',

  },
  {
    image: location2,
    status: 'โครงการใหม่',
    type: 'บ้านเดี่ยว',
    location: 'ดอนเมือง',
    price: '13',

  },
  {
    image: location3,
    status: 'พร้อมเข้าอยู่',
    logo: Logo,
    type: 'วิลล่า',
    location: 'ลาดพร้าว',
    price: '16.9',

  },
  {
    image: location4,
    status: 'โครงการใหม่',
    logo: Logo,
    type: 'อาคารพาณิชย์',
    location: 'สายไหไม',
    price: '40',

  }
];

export const timelineData = [
  {
    year: '2560 (ปีที่ 1)',
    projects: [
      {
        name: 'โครงการบ้านรุ่ง สบทอง',
        value: '11,000,000'
      },
      {
        name: 'โครงการบ้านรุ่ง ท่าช้าง',
        value: '201,000,000'
      }
    ]
  },
  {
    year: '2563 (ปีที่ 3)',
    projects: [
      {
        name: 'โครงการบ้านรุ่ง แสนสุข',
        value: '64,000,000'
      },
      {
        name: 'โครงการบ้านรุ่ง นางตะเคียน',
        value: '76,000,000'
      }
    ]
  },
  {
    year: '2564 (ปีที่ 4)',
    projects: [
      {
        name: 'โครงการบ้านรุ่ง เบญจมาศ 1',
        value: '48,000,000'
      },
      {
        name: 'โครงการบ้านรุ่ง เบญจมาศ 2',
        value: '206,000,000'
      }
    ]
  },
  {
    year: '2565 (ปีที่ 5)',
    projects: [
      {
        name: 'โครงการบ้านรุ่ง เกษตรสาย 1',
        value: '61,000,000'
      },
      {
        name: 'โครงการบ้านรุ่ง เกษตร - ทางเกวียน',
        value: '64,000,000'
      }
    ]
  },
  {
    year: '2566 (ปีที่ 6)',
    projects: [
      {
        name: 'โครงการบ้านรุ่ง เกษตรสาย 2',
        value: '53,000,000'
      },
      {
        name: 'โครงการบ้านรุ่ง เบญจมาศ 3',
        value: '227,000,000'
      },
    ]
  },
  {
    year: '2566-2567 (ปีที่ 7)',
    highlight: 'NEW BRAND',
    title: 'The Quality จันทบุรี',
    value: '297,000,000'
  }
];