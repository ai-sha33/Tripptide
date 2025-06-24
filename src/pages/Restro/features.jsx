import { UtensilsCrossed, Coffee, IceCream, Users, Star, Camera, Calendar, ForkKnife } from 'lucide-react';

const features = [
  {
    icons: [<UtensilsCrossed key="1" />, <Coffee key="2" />, <IceCream key="3" />],
    title: "Find the best places to eat",
    description: "4.3 million restaurants — everything from street food to fine dining",
  },
  {
    icons: [<Users key="1" />, <Star key="2" />, <Camera key="3" />],
    title: "See the latest reviews",
    description: "Millions of restaurant reviews and photos from our global travel community",
  },
  {
    icons: [<ForkKnife key="1" />, <Calendar key="2" />],
    title: "Reserve a table",
    description: "Make online reservations at restaurants worldwide",
  },
];

export default function Features() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 bg-white">
      {features.map((feature, index) => (
        <div
          key={index}
          className="max-w-sm text-center border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-center gap-2 mb-4 text-green-500">
            {feature.icons.map((icon, idx) => (
              <div key={idx} className="bg-green-100 p-2 rounded-full">
                {icon}
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
