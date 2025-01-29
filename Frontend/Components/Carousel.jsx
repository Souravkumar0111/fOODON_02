import React from 'react'

function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex" >
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
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
    )
}

export default Carousel