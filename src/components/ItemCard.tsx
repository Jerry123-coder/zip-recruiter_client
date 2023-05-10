import React from 'react'
import { FaShippingFast, FaUsers } from 'react-icons/fa'

interface IItemsStat {
    itemIsUser: boolean
  }

const ItemCard = ({itemIsUser}: IItemsStat) => {
  return (
    <div>
    <div className="statsContainer">
      { (itemIsUser) ?
        ( <>
        <div className='iconContainer'><FaUsers /></div>
        <div className="textContainer">
            <p>Total Users</p>
            <h2>1,400</h2>
            <h5>registered users</h5>
        </div>
        </>) : (
          <>
           <div className='iconContainer1'><FaShippingFast /></div>
           <div className="textContainer">
               <p>Total Deliveries </p>
               <h2>140,000</h2>
               <h5>successfully completed</h5>
           </div>
           </>
        )
      }
    </div>

</div>
  )
}

export default ItemCard
