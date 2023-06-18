import React from "react";
import ReactDOM from "react-dom/client";


/*
 -Header
    -Logo
    -Nav-Items
 -Body
    -Search
    -Restaurant Container
      -Restaurant Card
        - Image, Name, Rating, Cuisine,ETA etc.
 -Footer
    -Copyright
    -links
    -Address
    -Contact
*/

const ResCard =(props) => {
   const {resName,cuisine, rating, eta} =props;

   return (
      <div className="res-card">
         <img
           className="res-logo"
           alt="res-logo" 
           src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi" />
         <h3>{props.resName}</h3>
         <h4>{props.cuisine}</h4>
         <h4>{rating}</h4>
         <h4>{eta}</h4>
      </div>
   )
}

const Body =() => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
             <ResCard 
                resName="Meghna Foods" 
                cuisine="Biryani, Andhra, South Indian"
                rating="4.4*"
                eta="38 minutes"
                />
             <ResCard 
                resName="KFC" 
                cuisine="Burger, FastFood"
                rating="4.1*"
                eta="35 minutes"
                />

         </div>
      </div>
   )
}

const Header =() =>{
   return(
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://s3u.tmimgcdn.com/800x0/u2303654/b244617e9ebe04335271ad9c556afc72.jpg"
             alt="food-order" />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   )
}

const AppLayout= () => {
   return (
      <div className="app">
      <Header />
      <Body />
      {/* <AppFooter /> */}
      </div>
   )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
