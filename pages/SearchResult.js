import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import Breadcrumb from '../components/Breadcrumb'
import common from './css/common.scss'
import ProductCard from '../components/ProductCard';

class SearchResult extends Component {

    static getInitialProps = async ({ query }) => {

        const { q } = query

        const { data } = await axios.get('/api/items', {
            params: {
                q
            }
        })

        return Object.assign({
            q,
        }, data)
    }

    render() {
        const { q, items, categories } = this.props

        return (
            <div className={common.mainContainer}>
                <SearchBar value={q} />
                <div className={common.wrapper}>
                    <Breadcrumb items={categories} />

                    {
                        items.map(item => <ProductCard {...item} key={item.id} />)
                    }
                </div>
            </div>
        )
    }
}

export default SearchResult