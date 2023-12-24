import React,{useState} from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

function App() {
  let data=[
    {
        item:"Fancy Product",
        prices:"$40.00 - $80.00",
        
    },
    {
        item:"Special Item",
        prices:"$18.00",
        original:"$20.00",
        review:true
    },
    {
        item:"Sale Item",
        prices:"$25.00",
        original:"$50.00",
    },
    {
        item:"Popular Item",
        prices:"$40.00",
        review:true,
        
    },
    {
        item:"Sale Item",
        prices:"$25.00",
        original:"$50.00",
    },
    {
        item:"Fancy Product",
        prices:"$120.00 - $280.00",
       
    },
    {
        item:"Special Item",
        prices:"$18.00",
        review:true,
        original:"$20.00",
    },
    {
        item:"Popular Item",
        prices:"$40.00",
        review:true,
        
        
    },
]
  let [cart,setCart]=useState(0)
  return <>
      <TopBar cart={cart} setCart={setCart} />
      <Header/>
    

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e,i)=>{
                 return <Card data={e} cart={cart} setCart={setCart} key={i}/>
              })
              }
            
          </div>
        </div>
      </section>
      <Footer/>
    </>
  
}

export default App;
