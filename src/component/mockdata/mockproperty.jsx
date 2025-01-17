import location1 from '../../../public/image/DDproperty-Thailand-Property-Market-Outllok-2024-cover-article-1.jpg';
import location2 from '../../../public/image/1588579761966-44037829_285474768844736_7681322402126495744_o.webp';
import location3 from '../../../public/image/2566-8-18-Supalai-Park-Ville-Khao-Ngoo-Clubhouse-M.jpg';
import location4 from '../../../public/image/Astera-Pride-พระราม-2-1024x685.jpg';
import Logo from '../../../public/image/Screenshot 2567-12-25 at 21.37.16.png';
import hillton1 from '../../../public/images/3โครงการ/hillton/4.jpg';
import hillton2 from '../../../public/images/3โครงการ/hillton/5.jpg';
import hillton3 from '../../../public/images/3โครงการ/hillton/310540111_194787002934505_7212663915766555420_n.jpg';
import hillton4 from '../../../public/images/3โครงการ/hillton/310593283_194787016267837_4187648500976461274_n.jpg';
import hillton5 from '../../../public/images/3โครงการ/hillton/1670061832645.jpg';
import hampton1 from '../../../public/images/3โครงการ/hillton/Image03.jpg';
import hampton2 from '../../../public/images/3โครงการ/hillton/Image04.jpg';
import hampton3 from '../../../public/images/3โครงการ/hillton/มุมสูง 1.jpg';
import hampton4 from '../../../public/images/3โครงการ/hillton/มุมสูง-2.jpg';
import hampton5 from '../../../public/images/3โครงการ/hillton/มุมสูง-3.jpg';




export const properties = [
  {
    id: 1,
    featured: true,
    status: "SOLD OUT",
    address: "145 รังสิต อำเภอเมือง ปทุมธานี",
    title: "Hillton",
    beds: 1,
    baths: 2,
    sqft: 1783,
    image: [hillton4,hillton3,hillton2,hillton1,hillton5],
    price: '1.7',
    type: "house",
    description: "บ้านเดี่ยวสุดหรูใจกลางบางแสน เอกสิทธิ์แห่งการใช้ชีวิตเหนือระดับ เพียง 41 หลังจากมณีรินทร์ พร้อมบรรยากาศโครงการที่ร่มรื่น บนถนนข้าวหลาม บางแสน"
  },
  {
    id: 2,
    featured: true,
    status: "NEW PROJECT",
    address: "31/7 ซอยชานเมือง ดินแดง",
    title: "Hampton",
    beds: 4,
    baths: 3,
    sqft: 1666,
    image: [hampton1,hampton2,hampton3,hampton4,hampton5],
    price: '2.1',
    type: "apartment",
    description: "บ้านเดี่ยวสุดหรูใจกลางบางแสน เอกสิทธิ์แห่งการใช้ชีวิตเหนือระดับ เพียง 41 หลังจากมณีรินทร์ พร้อมบรรยากาศโครงการที่ร่มรื่น บนถนนข้าวหลาม บางแสน"

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