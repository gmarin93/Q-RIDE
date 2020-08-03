import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Suscribe from './components/Suscribe';
import Destiny from './components/Destiny';
import Productos from './components/Productos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';


function App() {

  var infoNacional=[
    "The Los Altos Beach Resort and Spa is located in Manuel Antonio, Costa Rica. Set on a hillside overlooking the bay, the resort is exquisitely designed and set up on lush and expansive grounds"
    ,
    "Villas Bungalows Ballena has 2 treatment plants to treat wastewater Large 80-square-meter pool with terrace, slide and waterfall Project with perimeter fences, wide security and restricted access We have four bungalow-style villas for 5 to 8 people each A bungalow-style villa for 2 to 4 people Kid's play zone Parking for 8 vehicles Wireless internet 2 BBQ ranches"
    ,
    "Hotel Boutique Le Caméléon offers beach accommodation in the tropical forest of Puerto Viejo, Limón. The 23 rooms are located around the pool and surrounded by lush tropical gardens. Our white rooms are minimalist in style and decorated with brightly colored brush strokes"
    ,
    "Selina La Fortuna is located in the center of town and is the perfect starting point for all your adventures. Stay in our private rooms, suites, and more. Here you will feel at home, while meeting travellers from all around for the same great experience."
    ,
    "The Occidental Tamarindo hotel is an all-inclusive experience, located in the northwest of Costa Rica, just 2 km from the city center of Tamarindo, on a fantastic beach surrounded by exceptional beauty and wealth. The biodiversity of this magnificent country at your fingertips.In addition, it has exuberant views of the beach and the beautiful sunsets"
    
  ];

  var infoInternacional=[
    "Icon Hotel offers accommodation in Las Condes community in Santiago. With a swimming pool and rooftop bar, where you can appreciate panoramic views of the Andes and the city. Rooms include air conditioning, a flat-screen TV with cable channels, and a private bathroom with a shower, bidet, hairdryer, and free toiletries."
    ,
    "This luxury resort is located in a quiet hotel zone in Cancun and offers private white sand beaches with stunning views of the Caribbean Sea and the Nichupté Lagoon.The property has a private beach, 4 outdoor pools and the Heavenly Spa."
    ,
    "The Almanac Barcelona establishment is located in an exclusive place, with a short walking distance from Paseo de Gracia and the central Plaza Cataluña. This luxurious hotel has a panoramic bar, rooftop terrace and an exclusive swimming pool with a solarium. The property also has fitness and wellness areas, a treatment room, a steam sauna and a relaxation room."
    ,
    "Located in front of the Bávaro Beach, in Punta Cana, the Barceló Bávaro Palace offers 4 swimming pools, a golf course, 3 km of private beach and activities for children and adults. The 11 restaurants serve specialty à la carte dishes. Miramar Buffet serves international cuisine and Bohio Dominicano has local dishes."
    ,
    "Located in Tokyo, within 5 km of Hatomori Hachiman Shrine and 6 km of Min-On Concert Association, Mitsui Garden Hotel Jingu Gaien Tokyo Premier provides accommodation with a restaurant and a fitness centre, and free WiFi."
    
  ];

  var InfoNacionalPrices=[
    "$136 for night",
    "$77 for night",
    "$470 for night",
    "$122 for night",
    "$270 for night",
  ];

  var InfoInternacionalPrices=[
    "$113 for night",
    "$271 for night",
    "$127 for night",
    "$171 for night",
    "$269 for night",
  ];

  var imagesNationals=["portfolio-5.jpg","portfolio-4.jpg","portfolio-3.jpg","portfolio-2.jpg","portfolio-1.jpg"];


  var imagesInternationals=["portfolio-6.jpg","portfolio-7.jpg","portfolio-8.jpg","portfolio-10.jpg","portfolio-9.jpg"];

  var namesNationals=["Occidental Tamarindo","Selina","Los Altos Resort ","Le Caméléon","Bungalows Ballena"];

  var namesInternationals=["Mitsui Garden Hotel Gotanda","Barcelo Bavaro Palace","Icon","Almanac","The Westin Resort"];

  return (
    <div className="App">
      <body>
        <Home />
        <Navbar />
        <AboutUs />
        <Services />
        <Suscribe />
        <Destiny title={"National's Hotels"} images={imagesNationals}
        names={namesNationals} infoNacional={infoNacional} InfoNacionalPrices={InfoNacionalPrices}/>
        <Destiny title={"International Hotels"}  infoNacional={infoInternacional} images={imagesInternationals}
        names={namesInternationals} InfoNacionalPrices={InfoInternacionalPrices}/>
        <Productos title={"Special promotions"}/>
         <Terms/>
        <Contact />
        <Footer />

      </body>
    </div>
  );
}

export default App;
