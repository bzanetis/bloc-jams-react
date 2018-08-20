import React from 'react';
import './Landing.css';


const Landing = () => (
<body>


    <h1 className="cover-heading">Turn the music up!</h1>
  <section className="selling-points">
    <div className="point">
     <h2 className="point-title">Choose your music</h2>
     <p className="lead">The world is full of music; why should you have to listen to music that someone else chose?</p>
   </div>
   <div className="point">
     <h2 className="point-title">Unlimited, streaming, ad-free</h2>
     <p className="lead">No arbitrary limits. No distractions.</p>
   </div>
   <div className="point">
     <h2 className="point-title">Mobile enabled</h2>
     <p className="lead">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
   </div>
 </section>

 </body>
);

export default Landing;
