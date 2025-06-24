// // src/components/HomeTabNav.jsx

// // import { Link, useLocation } from 'react-router-dom';

// const tabs = [
//   { name: 'Hotels', path: '/' },
//   { name: 'Things To Do', path: '/things-to-do' },
//   { name: 'Restaurants', path: '/restaurants' },
//   { name: 'Flights', path: '/flights' },
// ];

// const HomeTabNav = () => {
//   const location = useLocation();

//   return (
//     <div className="font-serif border-b fixed top-20 left-0 right-0 z-40 bg-white">
//       <ul className="flex justify-start space-x-6 px-10 pt-4">
//         {tabs.map((tab) => (
//           <li key={tab.name}>
//             <Link
//               to={tab.path}
//               className={`pb-2 text-lg font-semibold ${
//                 location.pathname === tab.path
//                   ? 'text-black border-b-2 border-[#f87849]'
//                   : 'text-gray-700 hover:text-[#f7a283]'
//               }`}
//             >
//               {tab.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomeTabNav;
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
    <div className="font-serif border-b-0 fixed top-20 left-0 right-0 z-40  bg-white ">
      <ul className="flex justify-start space-x-6 px-10 pt-4 mb-4 ">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <Link
              to={tab.path}
              className={`pb-2 text-lg font-semibold ${
                location.pathname === tab.path
                  ? 'text-[#E47C47]  border-b-2 border-[#f87849]'
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
