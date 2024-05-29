import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';



const root = ReactDOM.createRoot(
 document.getElementById('root'));
root.render(
 <>
 <header>header</header>
  <section>
    <div className="row">
     <Card />
     <Card />
     <Card />
    </div>
  </section>
   <footer>footer</footer>
 

 </>
);

