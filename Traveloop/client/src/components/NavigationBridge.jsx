import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const routeByLabel = new Map([
  ["dashboard", "/dashboard"],
  ["my trips", "/my-trips"],
  ["create trip", "/create-trip"],
  ["create new trip", "/create-trip"],
  ["itinerary", "/itinerary"],
  ["itinerary view", "/itinerary"],
  ["trip itinerary", "/itinerary"],
  ["itinerary builder", "/builder"],
  ["budget", "/budget"],
  ["budget breakdown", "/budget"],
  ["packing", "/packing"],
  ["packing checklist", "/packing"],
  ["city search", "/city-search"],
  ["explore destinations", "/city-search"],
  ["activity search", "/activity-search"],
  ["activities", "/activity-search"],
  ["shared trips", "/shared"],
  ["shared itineraries", "/shared"],
  ["shared itinerary", "/shared"],
  ["profile settings", "/profile"],
  ["settings", "/profile"],
  ["trip notes", "/notes"],
  ["notes", "/notes"],
  ["admin", "/admin"],
]);

const actionableSelector = [
  ".menu-item",
  ".logo",
  ".view-all",
  ".view-btn",
  ".publish-btn",
  ".share-btn",
  ".download-btn",
  ".explore-btn",
  ".logout-btn",
].join(",");

const normalize = (value) => {
  return value
    .replace(/^[+]\s*/, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
};

export default function NavigationBridge() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest(actionableSelector);

      if (!target) return;

      const label = normalize(target.textContent || "");

      if (label === "logout") {
        event.preventDefault();
        logout();
        navigate("/");
        return;
      }

      if (target.classList.contains("logo")) {
        event.preventDefault();
        navigate("/dashboard");
        return;
      }

      if (target.classList.contains("view-all")) {
        event.preventDefault();
        navigate("/my-trips");
        return;
      }

      if (target.classList.contains("view-btn")) {
        event.preventDefault();
        navigate("/itinerary");
        return;
      }

      if (target.classList.contains("publish-btn")) {
        event.preventDefault();
        navigate("/shared");
        return;
      }

      if (target.classList.contains("share-btn")) {
        event.preventDefault();
        navigate("/shared");
        return;
      }

      if (target.classList.contains("download-btn")) {
        event.preventDefault();
        window.print();
        return;
      }

      if (target.classList.contains("explore-btn")) {
        event.preventDefault();
        navigate(location.pathname === "/city-search" ? "/activity-search" : "/city-search");
        return;
      }

      const route = routeByLabel.get(label);

      if (route) {
        event.preventDefault();
        navigate(route);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [location.pathname, logout, navigate]);

  return null;
}
