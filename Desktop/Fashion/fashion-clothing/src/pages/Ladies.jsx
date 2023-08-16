import { useState } from 'react'
import '../pages/Ladies.css'

const Ladies = () => {
  
    const [toggle, setToggle] = useState(false)
  
const products = [  
  
 

  { name: '', price: 'R389,56', image: 'https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  { name: '', price: 'R599,98', image: 'https://images.unsplash.com/photo-1590400516695-36708d3f964a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' },
  { name: '', price: 'R1599,58', image: 'https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
  { name: '', price: 'R2599,56', image: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
  { name: '', price: 'R3496,56', image: 'https://images.unsplash.com/photo-1665023020589-83da7630a47a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
  { name: '', price: 'R699,65', image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
  { name: '', price: 'R7899,59', image: 'https://images.unsplash.com/photo-1665023006776-9c78a6a72e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
  { name: '', price: 'R9998,78', image: '' },
]


return (
  <div>
    <h1 className='hd-heading'>Ladies</h1>
    <div className="grid-container">
      {
        products.map(product => {
          return (
            <div className="card" >
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text"><del>{product.price}</del></p>
                <a href="#" className="btn btn-primary">Price Views</a>
              </div>
            </div>
          )
        })

      }

    </div>
  </div>
  
  )
}

export default Ladies