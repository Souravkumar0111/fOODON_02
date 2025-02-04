import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'

function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://foodon-backend.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1])
  }

  useEffect(() => {
    loadData()
  }, [])







  return (
    <div>
      <div><Navbar /></div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <div className="d-flex justify-content-center" >
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&ga=GA1.1.111827027.1710567713&semt=sph" className="d-block w-100" style={{filter:"brightness(40%)" }}alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?size=626&ext=jpg&ga=GA1.1.111827027.1710567713&semt=sph" className="d-block w-100" style={{filter:"brightness(40%)" }}alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/table-full-food-including-rice-curry-plate-food_900958-7307.jpg?size=626&ext=jpg&ga=GA1.1.111827027.1710567713&semt=sph" className="d-block w-100" style={{filter:"brightness(40%)" }}alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
      </div>
      <div className="container">
        {
           foodCat.length !== 0
           ? foodCat.map((data)=>{
             return (
             <div className='row mb-3'>
             <div key={data._id} className="fs-3 m-3">
              {data.CategoryName}
              </div>
              <hr/>
              {foodItem.length !== 0
              ? 
              foodItem.filter((item)=>(item.CategoryName===data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
              .map(filterItems=>{
                 return (
                  <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                     <Card 
                     //foodName = {filterItems.name}
                     foodItems={filterItems}
                     options={filterItems.options[0]}
                    // ImgSrc = {filterItems.img}
                     ></Card>
                    </div>
                 )


              }

              
                
              ):<div>NO SUCH DATA FOUND</div>}
              </div>
             )
           })
           :""
        }
       

      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
