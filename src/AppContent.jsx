// AppContent.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomeTab from './components/hometab';

import Landing from './pages/landing';
import Login from './pages/signin';
import Signup from './pages/signup';
import Hotels from './pages/Hotels'; // This works because of index.jsx
import ThingsToDo from './pages/ThingsToDo'; // Same here
import Restro from './pages/Restro';
import Flights from './pages/Flights';
import AboutUs from './pages/AboutUs';
import Bookings from './pages/Bookings';
import Review from './pages/Review';
import Profile from './pages/Profile';

export default function AppContent() {
  const { pathname } = useLocation();

  const isAuthPage = pathname === '/login' || pathname === '/signup';
 const showHomeTab = pathname === '/hotels' || pathname === '/things-to-do' || pathname === '/restaurants' || pathname === '/flights' ;


  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Navbar />}
      {showHomeTab && <HomeTab />}

      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
         <Route path="/restaurants" element={<Restro />} />
        <Route path="/flights" element={<Flights />} />
           <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/bookings" element={<Bookings />} />
                <Route path="/review" element={<Review />} />
                 <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}
