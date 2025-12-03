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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            The Local Guide Grid - Our dedicated team of travel professionals committed to crafting your perfect journey
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center transform hover:-translate-y-2 border border-gray-100 hover:border-[#198754]"
            >
              {/* Circular Headshot with border */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-[#ffc42d] transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  title={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Name */}
              <h3 className="font-bold text-gray-900 mb-1 text-center text-sm sm:text-base">
                {member.name}
              </h3>
              {/* Title */}
              <p className="text-xs sm:text-sm text-gray-600 text-center leading-tight">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

