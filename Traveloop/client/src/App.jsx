import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import MyTrips from "./pages/MyTrips";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import ItineraryView from "./pages/ItineraryView";
import CitySearch from "./pages/CitySearch";
// import ActivitySearch from "./pages/ActivitySearch";
// import BudgetBreakdown from "./pages/BudgetBreakdown";
// import PackingChecklist from "./pages/PackingChecklist";
// import SharedItinerary from "./pages/SharedItinerary";
// import ProfileSettings from "./pages/ProfileSettings";
// import TripNotes from "./pages/TripNotes";
// import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/builder" element={<ItineraryBuilder />} />
        <Route path="/itinerary" element={<ItineraryView />} />
        <Route path="/city-search" element={<CitySearch />} />
        <Route path="/activity-search" element={<ActivitySearch />} />
        <Route path="/budget" element={<BudgetBreakdown />} />
        <Route path="/packing" element={<PackingChecklist />} />
        <Route path="/shared" element={<SharedItinerary />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/notes" element={<TripNotes />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;