'use client';

import Image from 'next/image';
import { Users, MapPin, Award, Heart, Globe, Target } from 'lucide-react';

export default function VNDMCAbout() {
  const stats = [
    { icon: Users, value: '20K+', label: 'Happy Customers' },
    { icon: MapPin, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '100%', label: 'Satisfaction Rate' },
    { icon: Globe, value: '50+', label: 'Destinations' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize your satisfaction and strive to exceed expectations in every interaction.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering exceptional travel experiences with attention to detail.',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Our active, energetic, and professionally trained workforce is dedicated to your journey.',
    },
  ];

  return (
    <>
 
     
      {/* About Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  VNDMC Vietnam Destination Management gratefully thanks customers and business partners
                  for their support and cooperation. The workforce of VNDMC is very active, energetic,
                  professionally trained, and committed to the tourism business.
                </p>
                <p>
                  With the tagline "with you on every trip," we strive to evolve and improve in order to
                  provide clients with the most rewarding and fulfilling experiences. In addition to
                  providing packaged travel packages, we also construct individual excursions based on
                  customer specifications, resulting in distinct and separate travels for each customer.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hanoi-9D8N/danang.jpg"
                alt="Vietnam Travel"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/hanoi-9D8N/goldenbridge.png"
                alt="Vietnam Experiences"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In addition to domestic trips (golf, exploration, leisure, MICE), VNDMC Vietnam
                  Destination Management also offers outward vacations (Thailand, Korea, Singapore, and
                  Hong Kong). We strive to always listen, comprehend, and act for our customers.
                </p>
                <p>
                  In addition to organizing tours, we also specialize in event planning, team development,
                  automobile rental, Visa advice services, and domestic and international aircraft
                  brokerage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#198754] to-[#147048] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100">
            VNDMC Vietnam Destination Management will constantly provide the best level of customer
            pleasure and contentment by leveraging its skills, experience, and guiding principle.
            VNDMC Vietnam Destination Management tries ceaselessly to be the top travel agency in Da
            Nang and the Central area.
          </p>
        </div>
      </section>
    </>
  );
}

