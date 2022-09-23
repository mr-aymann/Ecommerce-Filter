import React from 'react'
import Categories from './Categories'
import img from '../images/blackShirt.jpg'

function Category() {

    const [data,setData]=React.useState(Categories)

    const FilterResult=(catItem)=>{
        const result= Categories.filter((currData)=>{
            return currData.category===catItem
            })
            setData(result)
    }
    const FilterColor=(colorItem)=>{
        const result= Categories.filter((currData)=>{
            return currData.color===colorItem
            })
            setData(result)
    }

    return (
        <>
            <h1 className='text-center text-info'>Lets Shop</h1>
            <div className="container-fluid mx-2">
                <div className='row mt-5 mx-2'>
                { /* the Side Bar Component */}
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=>FilterResult('men')}>Men</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=>FilterResult('women')}>Women</button>
                        <button className='btn btn-warning w-100 mb-4'onClick={()=>FilterResult('children')}>Children</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=>FilterColor('black')}>black</button>
                        <button className='btn btn-warning w-100 mb-4'onClick={()=>FilterColor('white')}>White</button>
                        <button className='btn btn-warning w-100 mb-4'onClick={()=> setData(Categories)}>All</button>
                    </div>
                   { /* the cards Component */}
                    <div className='col-md-9'>
                        <div className='row'>
                        { /* the cards code */}
                        { data.map((item)=>{  
                            return(
                                <React.Fragment key={item.id} >
                                <div className='col-md-4 mt-4' >
                                    <div className='card' style ={{width:"16 rem"}} >
                                        <img src= {item.img} alt= "img" className='card-img-top'/>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.title}</h5>
                                            <p>Price: ₹{item.price}</p>
                                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <button className='btn btn-dark'>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                </React.Fragment>
                            )
                        }
                        )}

                           
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Category