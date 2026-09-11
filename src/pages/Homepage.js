import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>

          <h2>Chicago</h2>

          <p>
            We are a family-owned Mediterranean restaurant
            located in Chicago.
          </p>

          <Link
            to="/reservations"
            className="btn"
          >
            Reserve a Table
          </Link>
        </div>

        <div>
          <img
            src="/images/restaurant.jpg"
            alt="Little Lemon restaurant"
          />
        </div>
      </section>
    </main>
  );
}

export default Homepage;