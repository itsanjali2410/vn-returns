'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Hotel Bookings',
    desc: 'Curated hotel accommodations across all categories and Vietnam destinations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <path d="M3 10h18M3 14h18M10 3L9 21M14 3l1 18" /><rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Airport Transfers & Transportation',
    desc: 'Reliable, punctual transfers and ground transportation solutions throughout Vietnam.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 5v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Tours & Sightseeing',
    desc: "Expertly guided tours covering Vietnam's iconic cultural and natural landmarks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Halong Bay Cruises',
    desc: 'Exclusive cruise packages across the spectacular Halong Bay UNESCO World Heritage site.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <path d="M2 20l2-2h4l2-2h4l2 2h4l2 2" /><path d="M12 4v10" /><path d="M12 4l6 6H6l6-6z" />
      </svg>
    ),
  },
  {
    title: 'FIT & Group Tours',
    desc: 'Tailored individual and group travel packages for all types of travellers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'MICE & Corporate Events',
    desc: 'Full-service corporate meetings, incentives, conferences, and exhibitions management.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Team Building Activities',
    desc: 'Engaging team building programs designed for corporate groups across Vietnam.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Visa Assistance',
    desc: 'Professional visa application support and documentation services for Vietnam.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Flight Bookings & Event Planning',
    desc: 'Domestic and international flights, gala dinners, and complete event production.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

const destinations = [
  { name: 'Hanoi', region: 'North Vietnam' },
  { name: 'Halong Bay', region: 'North Vietnam' },
  { name: 'Sapa', region: 'North Vietnam' },
  { name: 'Da Nang', region: 'Central Vietnam' },
  { name: 'Hoi An', region: 'Central Vietnam' },
  { name: 'Hue', region: 'Central Vietnam' },
  { name: 'Nha Trang', region: 'South-Central' },
  { name: 'Ho Chi Minh City', region: 'South Vietnam' },
  { name: 'Mekong Delta', region: 'South Vietnam' },
  { name: 'Phu Quoc', region: 'Island' },
];

const whyChoose = [
  { title: 'Experienced Vietnam DMC Team', desc: 'Years of deep expertise in the Vietnam tourism industry and ground operations.' },
  { title: 'Strong Local Supplier Network', desc: 'Established partnerships with the best hotels, transport, and experience providers.' },
  { title: 'Fast Quotations & Communication', desc: 'Quick turnaround on quotes and clear, responsive communication at every step.' },
  { title: 'Reliable On-Ground Operations', desc: 'Meticulous coordination and smooth execution from day one to the final transfer.' },
  { title: 'Customized FIT, Group & MICE', desc: 'Flexible and bespoke services tailored to individual travellers, groups, and corporates.' },
  { title: 'Complete Vietnam Ground Handling', desc: 'One partner for everything — hotels, transport, tours, visas, events, and more.' },
  { title: '24/7 Professional Support', desc: 'Our dedicated support team is always available, ensuring peace of mind for you and your clients.' },
];

export default function VNDMCAbout() {
  return (
    <>
      {/* ══ COVER ══ */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        {/* Subtle map pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8 text-xs sm:text-sm tracking-wider uppercase text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffc42d]" />
            Vietnam Destination Management Company
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffc42d]" />
          </div>

          {/* Logo */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            VN <span className="text-[#ffc42d]">DMC</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-6">Your Trusted On-Ground Partner in Vietnam</p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#ffc42d]/50" />
            <div className="w-2 h-2 rotate-45 border border-[#ffc42d]/60" />
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#ffc42d]/50" />
          </div>

          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Complete ground handling services and travel solutions for travel agents, tour operators, and MICE planners worldwide — across every destination in Vietnam.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-gray-400">
            <span className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc42d]" /> Da Nang, Vietnam
            </span>
            <span className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc42d]" /> Hotels · Transfers · Tours · MICE
            </span>
            <span className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc42d]" /> 24/7 Support
            </span>
          </div>
        </div>
      </section>

      {/* ══ INTRO STRIP ══ */}
      <div className="bg-[#ffc42d]">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-start gap-4">
          <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-sm bg-gray-900/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm sm:text-base text-gray-900 leading-relaxed font-medium">
            VN DMC is a Vietnam Destination Management Company providing complete ground handling services across Vietnam for travel agents, tour operators, and MICE planners worldwide — ensuring smooth and reliable execution for every trip.
          </p>
        </div>
      </div>

      {/* ══ ABOUT US ══ */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ffc42d] font-semibold text-xs uppercase tracking-widest mb-3">About Us</p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to <span className="text-[#ffc42d] italic">VN DMC</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  We are your trusted Vietnam Destination Management Company and on-ground partner, based in Da Nang, Vietnam. We specialize in providing complete ground handling services and travel solutions for travel agents, tour operators, and MICE planners worldwide.
                </p>
                <p>
                  From hotel bookings and transportation to tours, cruises, and corporate events, we manage every aspect of the journey with professionalism and attention to detail. With our experienced team, strong local network, and deep destination knowledge, we ensure that every trip across Vietnam is smooth, well-organized, and memorable for your clients.
                </p>
              </div>
            </div>

            {/* Visual cards */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 text-white">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Based In</p>
                <p className="text-3xl sm:text-4xl font-bold text-[#ffc42d] mb-2">Da Nang</p>
                <p className="text-sm text-gray-400">Vietnam — serving all major destinations from north to south</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { num: '10+', label: 'Destinations covered' },
                  { num: '11', label: 'Service categories' },
                  { num: '24/7', label: 'Support team' },
                  { num: 'FIT', label: 'Group & MICE focus' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.num}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className="bg-gray-950 py-14 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#ffc42d] font-semibold text-xs uppercase tracking-widest mb-8">Our Mission</p>
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-light leading-relaxed italic mb-8">
            &ldquo;Our mission is to become a reliable and long-term ground handling partner for travel companies by delivering high-quality services, smooth operations, and professional support across Vietnam — helping our partners grow their Vietnam business.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#ffc42d]/40" />
            <p className="text-sm text-gray-500">VN DMC — Da Nang, Vietnam</p>
            <div className="w-8 h-px bg-[#ffc42d]/40" />
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ffc42d] font-semibold text-xs uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Complete Ground <span className="text-[#ffc42d] italic">Handling</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-10 max-w-2xl">
            We provide end-to-end travel solutions, from planning to execution. Every service is managed in-house with our experienced local team.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#ffc42d]/30 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-[#ffc42d]/10 group-hover:bg-[#ffc42d] flex items-center justify-center mb-4 transition-colors text-[#e6b028] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESTINATIONS ══ */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ffc42d] font-semibold text-xs uppercase tracking-widest mb-3">Destinations</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            All Vietnam, <span className="text-[#ffc42d] italic">Covered</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-10 max-w-2xl">
            From the mountains of the north to the beaches of the south — we operate across every major destination in Vietnam.
          </p>

          <div className="flex flex-wrap gap-3">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-full px-5 py-3 border border-gray-200 hover:border-[#ffc42d]/40 hover:shadow-md transition-all group"
              >
                <span className="w-2 h-2 rounded-full bg-[#ffc42d] group-hover:scale-125 transition-transform" />
                <div>
                  <span className="font-semibold text-gray-900 text-sm">{dest.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{dest.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ffc42d] font-semibold text-xs uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            The <span className="text-[#ffc42d] italic">VN DMC</span> Advantage
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-10 max-w-2xl">
            We handle the operations, so you can focus on your clients.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 bg-white rounded-xl p-6 border border-gray-100 hover:border-[#ffc42d]/30 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl font-bold text-gray-100 group-hover:text-[#ffc42d]/30 transition-colors flex-shrink-0 w-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM QUOTE (before TeamSection) ══ */}
      <section className="bg-gray-950 py-14 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#ffc42d] font-semibold text-xs uppercase tracking-widest mb-8 text-center">Our Team</p>
          <blockquote className="text-xl sm:text-2xl text-white font-light leading-relaxed italic text-center mb-8">
            &ldquo;A successful trip is built on strong coordination, reliable partners, and attention to detail.&rdquo;
          </blockquote>
          <div className="max-w-2xl mx-auto space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed text-center">
            <p>
              Our professional and dedicated team brings many years of experience in the Vietnam tourism industry. From the very first enquiry to the final moment of a trip, our team ensures clear communication, careful planning, and smooth on-ground operations for every single booking.
            </p>
            <p>
              We act as an extension of your business in Vietnam — your eyes, ears, and hands on the ground — so your clients experience Vietnam at its very best.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CONTACT BAR ══ */}
      <div className="bg-[#ffc42d]">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-gray-900 text-lg sm:text-xl">Get in Touch with VN DMC</p>
            <p className="text-sm text-gray-800/70">Your on-ground partner in Vietnam</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-900">
            <span className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Da Nang, Vietnam
            </span>
            <span className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              info@vndmc.com
            </span>
            <Link href="/contact" className="bg-gray-900 text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
