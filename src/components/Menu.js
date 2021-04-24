
import { useState } from 'react';
import styled from 'styled-components'

const Box = styled.header`
    width: 100%;
    position: relative;
    z-index: 10;

    .menu-container {
        width: 100%;
        background-color: black;
        padding: 0 20px;
        text-align: left;

        .menu-holder {
            position: relative;
            width: 100%;
            max-width: $siteWidth;
            margin: 0 auto;
        }

        h1 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 24px;
            line-height:  var(--line-height-for-nav);
            color: white;
            text-align: left;
            display: inline-block;
        }
        nav {
            display: inline-block;
            margin-left: 60px;

            i {
                color: white;
                font-size: 30px;
                line-height:  var(--line-height-for-nav);
            }
            i.search {
                position: absolute;
                right: 10px;
                top: 0;
            }

            a.nav-item {
                font-family: Helvetica, Arial, Sans-Serif;
                font-size: 17px;
                line-height:  var(--line-height-for-nav);
                text-transform: uppercase;
                text-decoration: none;
                white-space: nowrap;
                border-bottom: 1px solid transparent;
                color: #FFF;
                margin-right: 20px;
            }
        }
    }

    .search-container {
        position: absolute;
        background-color: white;
        z-index: 20;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        width: 100%;
        padding: 5px;
        border-bottom: 1px solid #CCC;
        display: flex;

        justify-content: center;

        input[type='text'] {
            min-width: 100%;
            font-size: 36px;
            line-height: var(--line-height-for-search);
            border: 1px solid #CCC;
            padding: 0 10px;
        }

        i.close {
            position: absolute;
            right: 10px;
            top: 5px;
            font-size: 36px;
            line-height: var(--line-height-for-search);
        }
    }

`

export default function Menu({ onSearchTextEntered, onSearchCanceled }) {
    const [showingSearch, setShowingSearch] = useState(false)
    const [searchText, setSearchText] = useState('')

    function renderSearch() {
        if (showingSearch === true) {
            return <div className='search-container'>
                <input
                    type='text'
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    onKeyUp={async e => {
                        e.preventDefault()
                        if (e.key === 'Enter') {
                            onSearchTextEntered(searchText)
                            setSearchText('')
                            setShowingSearch(false)
                        }
                    }}
               />
                <button onClick={e => {
                     onSearchCanceled()
                     setSearchText('')
                     setShowingSearch(false)
                }}>
                    <i className='material-icons close'>close</i>
                </button>
            </div>
        }
    }
    return <Box>
        <div className='menu-container'>
            <div className='menu-holder'>
                <h1>ELC</h1>
                <nav>
                    <a href='#' className='nav-item'>HOLIDAY</a>
                    <a href='#' className='nav-item'>WHAT'S NEW</a>
                    <a href='#' className='nav-item'>PRODUCTS</a>
                    <a href='#' className='nav-item'>BESTSELLERS</a>
                    <a href='#' className='nav-item'>GOODBYES</a>
                    <a href='#' className='nav-item'>STORES</a>
                    <a href='#' className='nav-item'>INSPIRATION</a>

                    <a href='#' onClick={e => setShowingSearch(true)}>
                        <i className='material-icons search'>search</i>
                    </a>
                </nav>
                {renderSearch()}
            </div>

        </div>

    </Box>
}


