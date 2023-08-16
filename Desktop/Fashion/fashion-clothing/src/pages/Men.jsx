import { useState } from 'react'
import '../pages/Men.css'
import Navbar from '../components/Navbar'

const Men = () => {

  const [toggle, setToggle] = useState(false)

  const products = [

    { name: '', price: 'R389,56', image: 'https://media.istockphoto.com/id/890289344/photo/the-perfect-outfit-means-a-perfect-day.webp?b=1&s=170667a&w=0&k=20&c=p4a8h-OP4iS6EKBD0r6y-NmyRqd9-0H6W25JoGY9Yoo=' },
    { name: '', price: 'R599,98', image: 'https://media.istockphoto.com/id/1365136838/photo/smiling-young-man-against-brown-background.jpg?s=612x612&w=0&k=20&c=xwhpFiI0_06ciTdQHdcNO6sO16CJ6afNN8FtEMVutrg=' },
    { name: '', price: 'R1599,58', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1lbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { name: '', price: 'R2599,56', image: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBtZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: '', price: 'R3496,56', image: 'https://images.unsplash.com/photo-1581381685617-4dc270458aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBtZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: '', price: 'R699,65', image: 'https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBtZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: '', price: 'R7899,59', image: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: '', price: 'R9998,78', image: 'https://images.unsplash.com/photo-1519831296458-9341fc9d2b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1lbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },

  ]


  return (
    <div>
      <Navbar/>
       <br />
       <br />
      <h1 className='hd-heading'>Men</h1>
      <div className="grid-container">
        {
          products.map(product => {
            return (
              <div className="card" >
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text"><>{product.price}</></p>
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

export default Men