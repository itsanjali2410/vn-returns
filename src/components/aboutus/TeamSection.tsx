'use client';

import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  order?: number;
}

export default function TeamSection() {
  // Arrange team members by designation hierarchy
  const teamMembers: TeamMember[] = [
    // Top Management
    {
      name: 'Ms. Sam',
      title: 'Director',
      image: '/PMQ Travel_s Profile/Ms. Sam - Director/Le Thi Dieu Hoang.png',
      order: 1,
    },
    {
      name: 'Kunal',
      title: 'Business Head',
      image: '/Kunal Headshot image.png',
      order: 2,
    },
    {
      name: 'Ms. Shu',
      title: 'Executive Assistant Director',
      image: '/PMQ Travel_s Profile/Ms. Shu - Executive Assistant Director/Lê Thị Lệ Thu.png',
      order: 3,
    },
    {
      name: 'Gaurav',
      title: 'Sales Head',
      image: '/gaurav.jpeg',
      order: 4,
    },
    // Sales Management
    {
      name: 'Ms. April',
      title: 'Sales Manager',
      image: '/PMQ Travel_s Profile/Ms. April - Sales Manager/z7100791786062_f3e74722a42a634586f78f6dc2f53035.jpg',
      order: 5,
    },
    {
      name: 'Mr. Alex',
      title: 'Assistant Sales Manager',
      image: '/PMQ Travel_s Profile/Mr. Alex - Assistant Sales Manager/Nguyen Duc Chi - Alex.jpg',
      order: 6,
    },
    // Senior Sales Executives
    {
      name: 'Ms. Lynn',
      title: 'Senior Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Lynn - Senior Sale Executive/Nguyễn Mai Linh - Lynn.jpg',
      order: 7,
    },
    {
      name: 'Ms. Sarah',
      title: 'Senior Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Sarah - Senior Sale Executive/Trần Thị Duy Phước - Senior Sales Executive.png',
      order: 8,
    },
    {
      name: 'Mr. MO',
      title: 'Senior Sale Executive',
      image: '/PMQ Travel_s Profile/Mr. MO - Senior Sale Executive/z7100956334594_a20f2a22d641352272687d667712cd34.jpg',
      order: 9,
    },
    // Sales Executives
    {
      name: 'Ms. Anna',
      title: 'Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Anna - Sale Executive/Nguyễn Thị Diệu Ân.png',
      order: 10,
    },
    {
      name: 'Ms. Annie',
      title: 'Sales Executive',
      image: '/PMQ Travel_s Profile/Ms. Annie - Sales Executive/Tô Thị Thanh Truyền.png',
      order: 11,
    },
    {
      name: 'Ms. Daisy',
      title: 'Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Daisy - Sale Executive/Quynh Chi.jpg',
      order: 12,
    },
    {
      name: 'Ms. Lina',
      title: 'Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Lina - Sale Executive/Thuy Linh.jpg',
      order: 13,
    },
    {
      name: 'Ms. Lyly',
      title: 'Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Lyly - Sale Executive/Tran Thi Ly Ly - Lyly.jpg',
      order: 14,
    },
    {
      name: 'Ms. Naomi',
      title: 'Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Naomi - Sale Executive/Đào Thị Nhẫm.jpg',
      order: 15,
    },
    {
      name: 'Ms. Nina',
      title: 'Sales Executive',
      image: '/PMQ Travel_s Profile/Ms. Nina - Sales Executive/IMG_1416.JPG',
      order: 16,
    },
    {
      name: 'Ms. Pink',
      title: 'Sale Executive',
      image: '/PMQ Travel_s Profile/Ms. Pink - Sale Executive/Nguyễn Thị Thanh Bình.jpg',
      order: 17,
    },
    {
      name: 'Mr. Mark',
      title: 'Sale Executive',
      image: '/PMQ Travel_s Profile/Mr. Mark - Sale Excutives/Võ Văn Mạnh.jpg',
      order: 18,
    },
    // Support Staff
    {
      name: 'Ms. My',
      title: 'Sales Admin',
      image: '/PMQ Travel_s Profile/Ms. My - Sales Admin/2025-10-09_Original.JPG',
      order: 19,
    },
    {
      name: 'Ms. Thao',
      title: 'Marketing',
      image: '/PMQ Travel_s Profile/Ms. Thao - Marketing/Tran Nguyen Phuong Thao.png',
      order: 20,
    },
    {
      name: 'Ms. Ha',
      title: 'Accountant',
      image: '/PMQ Travel_s Profile/Ms. Ha - Accountant/Nguyen Thi Ha.png',
      order: 21,
    },
    {
      name: 'Ms. Tung',
      title: 'Accountant',
      image: '/PMQ Travel_s Profile/Ms. Tung - Accountant/Nguyễn Thị Tùng.jpg',
      order: 22,
    },
    {
      name: 'Ms. Dung',
      title: 'Data Entry',
      image: '/PMQ Travel_s Profile/Ms. Dung - Data Entry/z7098802670883_baa54376816cb228276aa292d88ea743.jpg',
      order: 23,
    },
  ].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          The Local Guide Grid
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Meet our dedicated team of travel professionals
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center"
            >
              {/* Circular Headshot */}
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  title={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              {/* Name */}
              <h3 className="font-bold text-black mb-1 text-center">{member.name}</h3>
              {/* Title */}
              <p className="text-sm text-green-600 text-center">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

