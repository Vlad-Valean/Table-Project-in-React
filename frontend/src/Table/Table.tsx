import React from 'react';
import './Table.css';


function Table() {

    const TableHead = () => {
        return(
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Code</th>
                    <th>Available</th>
                    <th>Price</th>
                    <th>5 Star Rating</th>
                    <th> </th>
                    <th> </th>
                </tr>
            </thead>
        );
    }    

    const TableBody = () => {

        interface props {
            product: string
            code: string
            available: string
            price: number
            rating: number
        }

        const TableRow = (props:props) => {
            return(           
                <tr>
                    <td><span className='h-text'>Product Name: </span>{ props.product }</td>
                    <td><span className='h-text'>Product Code: </span>{ props.code }</td>
                    <td><span className='h-text'>Available: </span>{ props.available }</td>
                    <td><span className='h-text'>Price: </span>${ props.price }</td>
                    <td><span className='h-text'>Rating: </span>{ props.rating }</td>
                    <td>
                        <button className={ 'details-btn' }>
                            <div className={ 'fa fa-pen' }></div>
                            <p>Details</p>
                        </button>
                    </td>
                    <td>
                        <button className={ 'trash-btn' }>
                            <div className={ 'fa fa-trash' }></div>
                            <p>Delete</p>
                        </button>
                    </td>
                </tr>
            )
        }

        return (
            <tbody>
                <TableRow 
                product={ ' Rake' } 
                code={ 'gdn 0011' }
                available={ 'March 19, 2019' }
                price={ 19.95 }
                rating={4}
                />
                <TableRow 
                product={ 'Leaf Rake' } 
                code={ 'gdn 0011' }
                available={ 'March 19, 2019' }
                price={ 19.95 }
                rating={4}
                />
                <TableRow 
                product={ 'Leaf Rake' } 
                code={ 'gdn 0011' }
                available={ 'March 19, 2019' }
                price={ 19.95 }
                rating={4}
                />
                <TableRow 
                product={ 'Leaf Rake' } 
                code={ 'gdn 0011' }
                available={ 'March 19, 2019' }
                price={ 19.95 }
                rating={4}
                />
            </tbody>
        );
    }

    return (
        <table className={'table-container'}>
            <TableHead />
            <TableBody />
        </table>
    );
}


export default Table;