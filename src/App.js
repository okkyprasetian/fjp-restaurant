function App() {
  return (
    <div className="App">

      <nav id="nav">
        <div className="logo"><img src="./images/logo1.png" alt="burger logo" className="logo-img" /></div>
        <ul className="navigations">
          <li className="navigation"><a href="#home">HOME</a></li>
          <li className="navigation"><a href="#products">PRODUCTS</a></li>
          <li className="navigation"><a href="#about">ABOUT</a></li>
          <li className="navigation"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      <div id="home">
        <div className="headline">
          <div className="hl-top neue">IT'S GREAT TIME FOR A GOOD TASTE OF BURGER</div>
          <h1 className="hl-mid alfa"><span className="red underline">BURGER</span> FOR WEEK</h1>
          <p className="hl-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam.</p>
          <button className="btn hl-order">Order</button>
        </div>
      </div>

      <div id="products">
        <h2 className="alfa">CHOOSE & ENJOY</h2>
        <p className="neue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nihil similique excepturi nemo cum, modi delectus minus possimus sequi sunt?</p>
        <div className="cards">
          <div className="card">
            <div className="card-logo"><img src="./images/s2.png" alt="burger" className="card-img" /></div>
            <h5 className="card-title">Big Beef Burger</h5>
            <button className="btn card-order">Order Now</button>
          </div>
          <div className="card">
            <div className="card-logo"><img src="./images/s1.png" alt="burger" className="card-img" /></div>
            <h5 className="card-title">Medium Beef Burger</h5>
            <button className="btn card-order">Order Now</button>
          </div>
          <div className="card">
            <div className="card-logo"><img src="./images/s2.png" alt="burger" className="card-img" /></div>
            <h5 className="card-title">Small Beef Burger</h5>
            <button className="btn card-order">Order Now</button>
          </div>
        </div>
      </div>

      <div id="about">
        <h2>McKingQueen Burger</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat ullam id at molestias reiciendis, dolorum culpa delectus. Similique sunt praesentium dolore quia! Culpa natus fugit eveniet asperiores repellendus cumque!
        </p>
        <button className="btn about-readmore">Read More</button>
      </div>

      <div id="contact">
        <h2>BOOK YOUR TABLE</h2>
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea name="message" id="message" placeholder="Your request in here..."></textarea>
          <button className="btn-form" type="submit">BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default App;
