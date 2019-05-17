import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import Breadcrumb from '../components/Breadcrumb'
import common from './css/common.scss'
import css from './css/productDetail.scss'
import axios from 'axios'
import formatNumber from '../utils/formatNumber'

class ProductDetail extends Component {

    condition = {
        new: 'Novo',
        used: 'Usado',
    }

    static getInitialProps = async ({ query }) => {
        const { id } = query

        const { data } = await axios.get(`/api/items/${id}`)

        return Object.assign({
            id
        }, data)
    }

    render() {
        const { id, item, categories } = this.props

        const {
            title,
            price,
            city,
            picture,
            condition,
            free_shipping,
            description
        } = item

        return (
            <div className={common.mainContainer}>
                <SearchBar />
                <div className={common.wrapper}>
                    <Breadcrumb items={categories} />
                    <div className={css.container}>
                        <div className={css.mainContent}>
                            <div style={{ backgroundImage: `url(${picture})` }} className={css.picture} />
                            <div className={css.content}>
                                <span>{this.condition[condition]}</span>
                                <h1>
                                    {title}
                                </h1>
                                <h2>
                                    $ {formatNumber(price.amount)}<span>{price.decimals.toString().padStart(2, '0')}</span>
                                    {
                                        free_shipping && <img src='/static/ic_shipping@2x.png.png' />
                                    }
                                </h2>
                                <div className={common.buyButton}>Comprar</div>
                            </div>
                        </div>
                        <div className={css.description}>
                            <h2>Descrição do Produto</h2>
                            <p>
                                {
                                    description.split('\n').map((desc, index) =>
                                        <span key={index}>
                                            {desc}
                                            <br />
                                        </span>
                                    )
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail