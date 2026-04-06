'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Ms. Sam', title: 'Director', image: '/team/sam.webp' },
  { name: 'Kunal', title: 'Business Head', image: '/team/kunal.webp' },
  { name: 'Ms. Shu', title: 'Executive Assistant Director', image: '/team/shu.webp' },
  { name: 'Gaurav', title: 'Sales Head', image: '/team/gaurav.webp' },
  { name: 'Ms. April', title: 'Sales Manager', image: '/team/april.webp' },
  { name: 'Mr. Alex', title: 'Assistant Sales Manager', image: '/team/alex.webp' },
  { name: 'Ms. Lynn', title: 'Senior Sales Executive', image: '/team/lynn.webp' },
  { name: 'Ms. Sarah', title: 'Senior Sales Executive', image: '/team/sarah.webp' },
  { name: 'Mr. Mo', title: 'Senior Sales Executive', image: '/team/mo.webp' },
  { name: 'Ms. Anna', title: 'Sales Executive', image: '/team/anna.webp' },
  { name: 'Ms. Annie', title: 'Sales Executive', image: '/team/annie.webp' },
  { name: 'Ms. Daisy', title: 'Sales Executive', image: '/team/daisy.webp' },
  { name: 'Ms. Lina', title: 'Sales Executive', image: '/team/lina.webp' },
  { name: 'Ms. Lyly', title: 'Sales Executive', image: '/team/lyly.webp' },
  { name: 'Ms. Naomi', title: 'Sales Executive', image: '/team/naomi.webp' },
  { name: 'Ms. Nina', title: 'Sales Executive', image: '/team/nina.webp' },
  { name: 'Ms. Pink', title: 'Sales Executive', image: '/team/pink.webp' },
  { name: 'Mr. Mark', title: 'Sales Executive', image: '/team/mark.webp' },
  { name: 'Ms. My', title: 'Sales Admin', image: '/team/my.webp' },
  { name: 'Ms. Thao', title: 'Marketing', image: '/team/thao.webp' },
  { name: 'Ms. Ha', title: 'Accountant', image: '/team/ha.webp' },
  { name: 'Ms. Tung', title: 'Accountant', image: '/team/tung.webp' },
  { name: 'Ms. Dung', title: 'Data Entry', image: '/team/dung.webp' },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Meet Our Team
          </h2>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center transform hover:-translate-y-2 border border-gray-100 hover:border-[#198754]"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-[#ffc42d] transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  title={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-center text-sm sm:text-base">
                {member.name}
              </h3>
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
