import { Fragment } from 'react'
import styled from 'styled-components'
import { respond } from '../styles/media'

const Box = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 100px 20px 0;
    background-image: url('/img/header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
`

const Box1 = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 100px 20px 0;

    ${respond('medium', `
            padding: 150px 20px 0;
     `)}

    .content {
        max-width: var(--site - width);
        margin: 0 auto;
        color: #000;

    }

    .search-text {
        font-size: 40px;
        font-weight: 200;
        text-transform: capitalize;
    }

    .search-result-h3 {
        text-align: center;
        margin: 10px;
    }

    .search-result {
        width: 100%;

        display: flex;
        flex-wrap: wrap;
    }

    .product {
        width: 25%;
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid #ffeeee;

        ${respond('medium', `
             width: 50%;
        `)}

        ${respond('small', `
             width: 100%;
        `)}
    }

    .product-name {
        display: flex;
        justify-content: center;
        height: 100px;
        font-size: 25px;
        text-align: center;
    }

    .product-img {
        display: flex;
        justify-content: center;
        img {
            height: 246px;
            width: auto;
        }
        margin: 10px 0px;
    }

    .product-add-to-bag {
        margin-top: 10px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        .product-price {
            font-size: 20px;
            font-weight: 600;
        }

        button {
            background-color: #000;
            color: #fff;
            padding: 7px;
            border-radius: 3px;
            cursor: pointer;
        }
    }

    .not-found {
       margin: 0 auto;
       margin-top: 100px;
       max-width:  80%;
       line-height: 145%;
       font-size: 25px;
    }

    .error {
        color: red;
    }

`

export default function Home({ showBackground, searchText, products, error }) {

    function renderError(error) {
        if (error !== '') {
            return <div className='error'>
                {error}
            </div>
        }
        return <Fragment />
    }


    function renderProducts(products) {
        if (error === '') {
            if (products.length === 0) {
                return <div className='not-found'>
                    NO RESULTS FOUND. WE SUGGEST DOUBLE-CHECKING THE SPELLING,
                    SEARCHING FOR A SIMILAR TERM, OR EXPLORING THE LATEST FROM M·A·C.
                  </div>
            }
            return <div>
                <div className='search-text'>{searchText}</div>
                <hr />
                <h3  className='search-result-h3'>Search Result</h3>
                <div className='search-result'>
                    {
                        products.map(product =>
                            <div className='product' key={product._id}>
                                <div className='product-info'>
                                    <div className='product-name'>{product.name}</div>
                                </div>
                                <div className='product-img'>
                                    <img src={product.picture} alt='productimage' />
                                </div>
                                <div className='product-add-to-bag'>
                                    <div className='product-price'>{product.price}</div>
                                    <button >ADD TO BAG</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        }


    }

    if (showBackground === true) {
        return <Box />
    }

    return <Box1>
        <div className="content">
            {renderError(error)}
            {renderProducts(products)}
        </div>
    </Box1>
}