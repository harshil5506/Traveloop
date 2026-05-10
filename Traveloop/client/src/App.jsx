import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, PublicRoute } from "./components/ProtectedRoute";
import NavigationBridge from "./components/NavigationBridge";

import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import MyTrips from "./pages/MyTrips";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import ItineraryView from "./pages/ItineraryView";
import CitySearch from "./pages/CitySearch";
import ActivitySearch from "./pages/ActivitySearch";
import BudgetBreakdown from "./pages/BudgetBreakdown";
import PackingChecklist from "./pages/PackingChecklist";
import SharedItinerary from "./pages/SharedItinerary";
import ProfileSettings from "./pages/ProfileSettings";
import TripNotes from "./pages/TripNotes";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationBridge />
        <Routes>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-trip"
            element={
              <ProtectedRoute>
                <CreateTrip />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-trips"
            element={
              <ProtectedRoute>
                <MyTrips />
              </ProtectedRoute>
            }
          />
          <Route
            path="/builder"
            element={
              <ProtectedRoute>
                <ItineraryBuilder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/itinerary-builder"
            element={<Navigate to="/builder" replace />}
          />
          <Route
            path="/itinerary"
            element={
              <ProtectedRoute>
                <ItineraryView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/city-search"
            element={
              <ProtectedRoute>
                <CitySearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/activity-search"
            element={
              <ProtectedRoute>
                <ActivitySearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/budget"
            element={
              <ProtectedRoute>
                <BudgetBreakdown />
              </ProtectedRoute>
            }
          />
          <Route
            path="/packing"
            element={
              <ProtectedRoute>
                <PackingChecklist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shared"
            element={
              <ProtectedRoute>
                <SharedItinerary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <TripNotes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trips"
            element={<Navigate to="/my-trips" replace />}
          />
          <Route
            path="/settings"
            element={<Navigate to="/profile" replace />}
          />
          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
