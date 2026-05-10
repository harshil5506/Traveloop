
export default function ActivitySearch() {
    const activities = [
        {
            id: 1,
            title: "Scuba Diving Adventure",
            location: "Maldives",
            image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
            price: "₹12,000",
            rating: "4.9",
            category: "Adventure",
        },

        {
            id: 2,
            title: "Luxury Desert Safari",
            location: "Dubai",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
            price: "₹8,500",
            rating: "4.8",
            category: "Experience",
        },

        {
            id: 3,
            title: "Tokyo Night Food Tour",
            location: "Tokyo",
            image:
                "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2070&auto=format&fit=crop",
            price: "₹6,200",
            rating: "4.7",
            category: "Food",
        },

        {
            id: 4,
            title: "Paris River Cruise",
            location: "Paris",
            image:
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop",
            price: "₹10,000",
            rating: "4.9",
            category: "Luxury",
        },
    ];

    return (
        <>
            <div className="activity-page">
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
                            City Search
                        </div>

                        <div className="menu-item active">
                            Activity Search
                        </div>

                        <div className="menu-item">
                            My Trips
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
                            <h1>Discover Activities</h1>

                            <p>
                                Explore premium adventures and travel
                                experiences worldwide.
                            </p>
                        </div>

                        <button className="explore-btn">
                            Explore Experiences
                        </button>
                    </div>

                    {/* SEARCH + FILTER */}
                    <div className="search-filter">
                        <input
                            type="text"
                            placeholder="Search activities, experiences..."
                        />

                        <select>
                            <option>All Categories</option>
                            <option>Adventure</option>
                            <option>Luxury</option>
                            <option>Food</option>
                            <option>Experience</option>
                        </select>

                        <select>
                            <option>All Locations</option>
                            <option>Maldives</option>
                            <option>Dubai</option>
                            <option>Tokyo</option>
                            <option>Paris</option>
                        </select>
                    </div>

                    {/* FEATURED CARD */}
                    <div className="featured-card">
                        <div className="overlay"></div>

                        <div className="featured-content">
                            <span>Trending Experience</span>

                            <h2>Luxury Yacht Sunset Cruise</h2>

                            <p>
                                Enjoy a premium private yacht dinner
                                with breathtaking sunset ocean views.
                            </p>

                            <button>Book Experience</button>
                        </div>
                    </div>

                    {/* ACTIVITIES GRID */}
                    <div className="activities-grid">
                        {activities.map((activity) => (
                            <div
                                className="activity-card"
                                key={activity.id}
                            >
                                <div
                                    className="activity-image"
                                    style={{
                                        backgroundImage: `url(${activity.image})`,
                                    }}
                                >
                                    <div className="image-overlay"></div>

                                    <div className="category">
                                        {activity.category}
                                    </div>
                                </div>

                                <div className="activity-content">
                                    <div className="activity-header">
                                        <div>
                                            <h2>{activity.title}</h2>

                                            <span>
                                                📍 {activity.location}
                                            </span>
                                        </div>

                                        <div className="rating">
                                            ★ {activity.rating}
                                        </div>
                                    </div>

                                    <div className="activity-footer">
                                        <div>
                                            <p>Starting From</p>

                                            <h3>{activity.price}</h3>
                                        </div>

                                        <button>View</button>
                                    </div>
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

        .activity-page {
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

        /* SEARCH FILTER */

        .search-filter {
          display: flex;
          gap: 18px;
          margin-bottom: 35px;
        }

        .search-filter input,
        .search-filter select {
          height: 56px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.05);
          color: white;
          padding: 0 18px;
          outline: none;
        }

        .search-filter input {
          flex: 1;
        }

        /* FEATURED CARD */

        .featured-card {
          height: 320px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          margin-bottom: 40px;

          background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop");

          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to right,
            rgba(0,0,0,0.85),
            rgba(0,0,0,0.2)
          );
        }

        .featured-content {
          position: absolute;
          z-index: 2;
          top: 50%;
          transform: translateY(-50%);
          left: 50px;
          max-width: 520px;
        }

        .featured-content span {
          color: #66d9ff;
          font-size: 14px;
        }

        .featured-content h2 {
          font-size: 48px;
          margin: 16px 0;
        }

        .featured-content p {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .featured-content button {
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

        /* GRID */

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .activity-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: 0.3s;
          backdrop-filter: blur(20px);
        }

        .activity-card:hover {
          transform: translateY(-6px);
        }

        .activity-image {
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
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.1)
          );
        }

        .category {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 2;

          background: rgba(255,255,255,0.15);
          padding: 8px 14px;
          border-radius: 50px;
          backdrop-filter: blur(10px);
          font-size: 13px;
        }

        .activity-content {
          padding: 24px;
        }

        .activity-header {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .activity-header h2 {
          margin-bottom: 8px;
          font-size: 24px;
        }

        .activity-header span {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
        }

        .rating {
          background: rgba(255,255,255,0.08);
          padding: 8px 14px;
          border-radius: 50px;
          height: fit-content;
          font-size: 13px;
        }

        .activity-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .activity-footer p {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          margin-bottom: 6px;
        }

        .activity-footer h3 {
          color: #57c7ff;
        }

        .activity-footer button {
          height: 46px;
          padding: 0 22px;
          border: none;
          border-radius: 12px;
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .activity-footer button:hover {
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

          .search-filter {
            flex-direction: column;
          }

          .featured-content {
            left: 25px;
            right: 25px;
          }

          .featured-content h2 {
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