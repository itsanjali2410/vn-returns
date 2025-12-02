import React from 'react';
import { FaStar, FaUserFriends, FaMapMarkedAlt } from 'react-icons/fa';

interface TrustFactorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustFactor: React.FC<TrustFactorProps> = ({ icon, title, description }) => (
  <div className="bg-white w-full max-w-xs p-6 rounded-xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center">
    <div className="text-yellow-400 text-5xl mb-5">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

const TrustUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-4xl md:text-3xl font-bold mb-12">Why Travelers Trust Us</h2>

      <div className="flex flex-wrap justify-center gap-8">
        <TrustFactor
          icon={<FaStar />}
          title="4.9★ Google Rating"
          description="Rated excellent by hundreds of happy travelers worldwide!"
        />
        <TrustFactor
          icon={<FaUserFriends />}
          title="1000+ Happy Customers"
          description="Our customers love our personalized services and attention to detail."
        />
        <TrustFactor
          icon={<FaMapMarkedAlt />}
          title="Customized Itineraries"
          description="We create tailor-made journeys that fit your unique needs."
        />
      </div>
    </section>
  );
};

export default TrustUs;
