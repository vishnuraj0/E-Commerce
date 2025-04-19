import React from 'react'
import { useAppContext } from '../context/AppContext'

const AllProducts = () => {

    const { products,searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])
    return (
        <div className='mt-16 flex flex-col '>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All Product</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'> </div>
            </div>

<div>

</div>
        </div>
    )
}

export default AllProducts;