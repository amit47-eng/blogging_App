import React from "react";
import { FaUser } from "react-icons/fa";

function Main() {
  return (
    <main>
      <section id="about">
        <FaUser />
        <p>examperUserName</p>
      </section>

      <section id="services">
        <article>
          <h2>Benefits of Morning Exercise</h2>
          <p>
            Exercising in the morning boosts your metabolism and improves mood
            throughout the day.
          </p>
          <p>It also helps in weight management and increases focus.</p>
        </article>
      </section>
    </main>
  );
}

export default Main;
