
import styled from 'styled-components'
import { Fragment, useState } from 'react'
import Home from './Home'
import Menu from './Menu'
import { searchProducts } from '../services/search-products'

const Box = styled.div`
    width: 100%;
    height: 100vh;
    display: block;
    position: relative;

    * {
        -webkit-font-smoothing: antialiased;
    }
     a {
        transition: opacity .5s;
        &:hover {
            opacity: 0.7;
        }
        &:visited {
            color: inherit;
        }
    }

    div.inner {
        width: 100%;
        height: auto;
        background-color: rgb(150, 0, 0);
    }
`

export default function App() {
    const [showBackground, setShowBackground]= useState(true)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const [searchText, setSearchText] = useState('')

    function search(searchText) {
            setShowBackground(false)
            setLoading(true)
            setProducts([])
            setError('')
            setSearchText(searchText)
            searchProducts(searchText, ({ error, data }) => {
                setLoading(false)
                if (error) {
                    setError(error)
                } else {
                    setProducts(data)
                }
            })
    }

    function renderHome() {
        if (loading=== true) {
            return <div><img src='img/loader.gif' alt='loading...' /> </div>
        }
        return <Home products={products} error={error}  showBackground={showBackground} searchText={searchText} />
   }

   function clearUp(){
        setShowBackground(true)
        setProducts([])
        setError('')
        setSearchText('')
   }

    return <Box>
        <Menu
           onSearchTextEntered={searchText => search(searchText)}
           onSearchCanceled={()=> clearUp()}
        />
       {renderHome()}
    </Box>
}