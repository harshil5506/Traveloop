import React from "react";

export default function CitySearch() {
    const cities = [
        {
            id: 1,
            name: "Paris",
            country: "France",
            image:
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
            description:
                "Romantic city with iconic architecture and luxury experiences.",
        },

        {
            id: 2,
            name: "Tokyo",
            country: "Japan",
            image:
                "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
            description:
                "Modern technology blended with traditional Japanese culture.",
        },

        {
            id: 3,
            name: "Dubai",
            country: "UAE",
            image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
            description:
                "Luxury lifestyle, skyscrapers, desert adventures, and shopping.",
        },

        {
            id: 4,
            name: "Maldives",
            country: "Maldives",
            image:
                "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070&auto=format&fit=crop",
            description:
                "Crystal-clear beaches and premium island relaxation experiences.",
        },
    ];

    return (
        <>
            <div className="city-page">
                {/* SIDEBAR */}
                <div className="sidebar">
                    <div className="logo">
                        <div className="logo-icon">◉</div>
                        <h2>Traveloop</h2>
                    </div>

                    <div className="menu">
                        <div className="menu-item">
                            Dashboard
                        </div>

                        <div className="menu-item">
                            My Trips
                        </div>

                        <div className="menu-item active">
                            City Search
                        </div>

                        <div className="menu-item">
                            Activities
                        </div>

                        <div className="menu-item">
                            Settings
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="main-content">
                    {/* TOPBAR */}
                    <div className="topbar">
                        <div>
                            <h1>Discover Cities</h1>

                            <p>
                                Explore trending destinations around
                                the world.
                            </p>
                        </div>

                        <button className="explore-btn">
                            Explore More
                        </button>
                    </div>

                    {/* SEARCH SECTION */}
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Search cities, countries, destinations..."
                        />

                        <select>
                            <option>All Regions</option>
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>Middle East</option>
                            <option>America</option>
                        </select>
                    </div>

                    {/* FEATURED BANNER */}
                    <div className="featured-banner">
                        <div className="overlay"></div>

                        <div className="banner-content">
                            <span>Trending Destination</span>

                            <h2>Explore The Beauty Of Paris</h2>

                            <p>
                                Luxury hotels, iconic landmarks, and
                                unforgettable romantic experiences.
                            </p>

                            <button>View Destination</button>
                        </div>
                    </div>

                    {/* CITY GRID */}
                    <div className="city-grid">
                        {cities.map((city) => (
                            <div className="city-card" key={city.id}>
                                <div
                                    className="city-image"
                                    style={{
                                        backgroundImage: `url(${city.image})`,
                                    }}
                                >
                                    <div className="image-overlay"></div>
                                </div>

                                <div className="city-content">
                                    <div className="city-header">
                                        <div>
                                            <h2>{city.name}</h2>

                                            <span>{city.country}</span>
                                        </div>

                                        <div className="rating">
                                            ★ 4.8
                                        </div>
                                    </div>

                                    <p>{city.description}</p>

                                    <button>
                                        Explore Destination
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          background: #050816;
        }

        .city-page {
          min-height: 100vh;
          display: flex;
          background: #050816;
          color: white;
        }

        /* SIDEBAR */

        .sidebar {
          width: 260px;
          background: #0b1020;
          border-right: 1px solid rgba(255,255,255,0.08);
          padding: 30px 20px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 50px;
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            #57c7ff,
            #8f7cff
          );

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo h2 {
          font-size: 24px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .menu-item {
          padding: 14px 18px;
          border-radius: 14px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: 0.3s;
        }

        .menu-item:hover,
        .menu-item.active {
          background: rgba(255,255,255,0.08);
          color: white;
        }

        /* MAIN CONTENT */

        .main-content {
          flex: 1;
          padding: 40px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .topbar h1 {
          font-size: 42px;
          margin-bottom: 8px;
        }

        .topbar p {
          color: rgba(255,255,255,0.6);
        }

        .explore-btn {
          height: 54px;
          padding: 0 28px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* SEARCH */

        .search-section {
          display: flex;
          gap: 20px;
          margin-bottom: 35px;
        }

        .search-section input,
        .search-section select {
          height: 56px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.05);
          color: white;
          padding: 0 18px;
          outline: none;
        }

        .search-section input {
          flex: 1;
        }

        .search-section select {
          width: 220px;
        }

        /* FEATURED BANNER */

        .featured-banner {
          height: 320px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          margin-bottom: 40px;

          background-image: url("https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop");

          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to right,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.2)
          );
        }

        .banner-content {
          position: absolute;
          z-index: 2;
          top: 50%;
          transform: translateY(-50%);
          left: 50px;
          max-width: 500px;
        }

        .banner-content span {
          color: #66d9ff;
          font-size: 14px;
        }

        .banner-content h2 {
          font-size: 48px;
          margin: 16px 0;
        }

        .banner-content p {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .banner-content button {
          height: 54px;
          padding: 0 26px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* CITY GRID */

        .city-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .city-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: 0.3s;
          backdrop-filter: blur(20px);
        }

        .city-card:hover {
          transform: translateY(-6px);
        }

        .city-image {
          height: 240px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .image-overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to top,
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.1)
          );
        }

        .city-content {
          padding: 24px;
        }

        .city-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .city-header h2 {
          margin-bottom: 6px;
        }

        .city-header span {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }

        .rating {
          background: rgba(255,255,255,0.08);
          padding: 8px 14px;
          border-radius: 50px;
          font-size: 13px;
        }

        .city-content p {
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .city-content button {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .city-content button:hover {
          background: rgba(255,255,255,0.14);
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .sidebar {
            display: none;
          }

          .main-content {
            padding: 20px;
          }
        }

        @media (max-width: 700px) {
          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .search-section {
            flex-direction: column;
          }

          .search-section select {
            width: 100%;
          }

          .banner-content {
            left: 25px;
            right: 25px;
          }

          .banner-content h2 {
            font-size: 34px;
          }

          .topbar h1 {
            font-size: 34px;
          }
        }
      `}</style>
        </>
    );
}