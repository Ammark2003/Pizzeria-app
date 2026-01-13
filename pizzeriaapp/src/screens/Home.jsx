import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-5">Our Story</h1>
        <p className="lead text-muted mt-3">
          We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on
          our Facebook fan page. Fans were given situations where they had to
          come up with wacky and fun excuses. The person with the best excuse
          won the Best Excuse Badge and won Pizzeria&apos;s vouchers. Their
          enthusiastic response proved that Pizzeria&apos;s Fresh Pan Pizza is
          the Tastiest Pan Pizza. Ever!
          <br />
          <br />
          Ever since we launched the Tastiest Pan Pizza, ever, people have not
          been able to resist the softest, cheesiest, crunchiest, butteriest
          Pizzeria&apos;s Fresh Pan Pizza. They have been leaving the stage in
          the middle of a performance and even finding excuses to be
          disqualified in a football match.
          <br />
          <br />
          We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
          page. Fans were given situations where they had to come up with wacky
          and fun excuses. The person with the best excuse won the Best Excuse
          Badge and won Pizzeria&apos;s vouchers. Their enthusiastic response
          proved that Pizzeria&apos;s Fresh Pan Pizza is the Tastiest Pan Pizza.
          Ever!
        </p>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/1485276713/display_1500/stock-photo-flat-lay-composition-with-dough-and-fresh-ingredients-for-pizza-on-grey-table-1485276713.jpg"
            alt="Ingredients"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Ingredients</h3>
          <p>
            We&apos;re ruthless about goodness. We have no qualms about tearing
            up a day-old lettuce leaf (straight from the farm), or steaming a
            baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While
            they&apos;re still young and fresh - that&apos;s our motto. It
            makes the kitchen a better place.
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/437116033/display_1500/stock-photo-happy-chef-437116033.jpg"
            alt="Chef"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="mb-3">Our Chefs</h3>
          <p>
            They make sauces sing and salads dance. They create magic with skill,
            knowledge, passion, and stirring spoons (among other things). They
            make goodness so good, it doesn&apos;t know what to do with itself.
            We do though. We send it to you.
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <h3 className="mb-3">45 Minute Delivery</h3>
          <p>
            Fast and reliable delivery service. We guarantee your pizza will
            arrive hot and fresh within 45 minutes of your order, or it&apos;s
            on us!
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/669255388/display_1500/stock-photo-vintage-analog-kitchen-countdown-timer-with-classical-clock-face-and-red-remaining-time-display-669255388.jpg"
            alt="Timer"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;