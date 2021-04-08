import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (

      <div className="App">
        <nav id="navBar">
          <div id="logo">
            <img src="img/logo.jpg" alt="Logo" />
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services-container">Services</a></li>
            <li><a href="#client-section">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        <section id="home">
            <h1 className="h-primary">Wel-Come To MyOnlineMeal</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <p>Est lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non.</p>
            <button type="button" name="button" className="btn11">Order Now</button>
        </section>

        <section id="services-container">
          <h1 className="h-primary center">Our Services</h1>
          <div id="services">
            <div className="box">
               <img src="img/1.jpg" alt="image" />
               <h2 className="h-secondary center">Food Catering </h2>
               <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
            <div className="box">
               <img src="img/2.jpg" alt="image" />
               <h2 className="h-secondary center">Bulk Ordering</h2>
               <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
            <div className="box">
               <img src="img/3.jpg" alt="image" />
               <h2 className="h-secondary center">Food Ordering</h2>
               <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
          </div>
        </section>

        <section id="client-section">
          <h1 className="h-primary center">Our Sponsers</h1>
          <div id="clients">
            <div className="client-item">
              <img src="img/haldiram.jpg" alt="image" />
            </div>
            <div className="client-item">
              <img src="img/cocaCola.jpg" alt="image" />
            </div>
            <div className="client-item">
              <img src="img/temptin.jpg" alt="image" />
            </div>
            <div className="client-item">
              <img src="img/kisan.jpg" alt="image" />
            </div>
          </div>
        </section>

        <section id="contact">
          <h1 className="h-primary center">Contact Us</h1>
          <div id="contact-box">
            <form className="form" action="#" method="post">
              <div className="form-group">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="enter your name" />
              </div>
              <div className="form-group">
                <label for="email">Email: </label>
                <input type="text" name="email" id="email" placeholder="enter your email" />
              </div>
              <div className="form-group">
                <label for="phone">Phone No.: </label>
                <input type="text" name="phone" id="phone" placeholder="enter your phone no." />
              </div>
              <div className="form-group">
                <label for="msg">Message: </label>
                <textarea name="msg" rows="8" cols="80"></textarea>
              </div>
              <button className="btn btn-outline-primary btn-lg" type="button" name="button">Send</button>
            </form>
          </div>
        </section>

        <footer>
          <div className="center">
            <p style= {{textAlign:'center', marginTop:'40px', color: 'grey'}}>Copyright &copy; 2021&nbsp;|&nbsp;Developed By <span style= {{color: 'black', fontWeight:'bold'}}>Divya Basatwar</span></p>
          </div>
        </footer>
    <br/>
      </div>


  );
}

export default App;
