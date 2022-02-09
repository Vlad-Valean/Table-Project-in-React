import React, {useEffect, useState} from 'react';
import './Table.css';


function Table() {

    const TableHead = () => {
        return (
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

        const TableRow = (props: props) => {
            return (
                <tr>
                    <td><span className='h-text'>Product Name: </span>{props.product}</td>
                    <td><span className='h-text'>Product Code: </span>{props.code}</td>
                    <td><span className='h-text'>Available: </span>{props.available}</td>
                    <td><span className='h-text'>Price: </span>${props.price}</td>
                    <td><span className='h-text'>Rating: </span>{props.rating}</td>
                    <td>
                        <button className={'details-btn'}>
                            <div className={'fa fa-pen'}> </div>
                            <p>Details</p>
                        </button>
                    </td>
                    <td>
                        <button className={'trash-btn'}>
                            <div className={'fa fa-trash'}> </div>
                            <p>Delete</p>
                        </button>
                    </td>
                </tr>
            )
        }
        //
        //  const products = await (async () => {
        //         try {
        //             let url = "http://localhost:3333/products?=cart";
        //             var r = await fetch(url);
        //             r = await r.json();
        //             return r;
        //         } catch (e) {
        //             console.log(e);
        //             return;
        //         }
        // })();

        const[state, setState] = useState([])
        useEffect(() => {
            let url = "http://localhost:3333/products";
            fetch(url).then(res => res.json()).then(res => setState(res));
        })

        return (
            <tbody>
            {
                state.map((p: { productName: string; productCode: string; releaseDate: string; price: number; starRating: number; }) =>(
                <TableRow
                    product={p.productName}
                    code={p.productCode}
                    available={p.releaseDate}
                    price={p.price}
                    rating={p.starRating}
                />
                ))}
            </tbody>
        );
    }

    return (
        <table className={'table-container'}>
            <TableHead/>
            <TableBody/>
        </table>
    );
}


export default Table;
