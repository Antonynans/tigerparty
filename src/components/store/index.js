import React from 'react';
import Navbar from '../navbar/Navbar';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <div title="Store" description="This is the Store page" >
            <Navbar />
            <div style={{width:'50%'}} >
                <div className="text-center mt-5">
                    <h1>Store</h1>
                    <p>This is the Store Page.</p>
                </div>
                <ProductsGrid/>
            </div>
        </div>
     );
}
 
export default Store;