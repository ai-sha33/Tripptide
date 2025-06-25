import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { name: 'Hotels', path: '/hotels' },
  { name: 'Things To Do', path: '/things-to-do' },
  { name: 'Restaurants', path: '/restaurants' },
  { name: 'Flights', path: '/flights' },
];

const HomeTabNav = () => {
  const location = useLocation();

  return (
    <div className="font-serif fixed top-20 left-0 right-0 z-40 bg-white shadow-sm border-b">
      <ul className="flex flex-wrap justify-start gap-4 px-4 sm:px-6 md:px-10 pt-4 pb-2">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <Link
              to={tab.path}
              className={`block text-base sm:text-lg font-semibold transition-colors duration-200 ${
                location.pathname === tab.path
                  ? 'text-[#E47C47] border-b-2 border-[#f87849]'
                  : 'text-[#E47C47] hover:text-[#f7a283]'
              }`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTabNav;
