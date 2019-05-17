import React, { Component } from 'react'
import css from './styles.scss'
import Link from 'next/link'
import formatNumber from '../../utils/formatNumber'

class ProductCard extends Component {

    render() {

        const {
            id,
            title,
            price,
            city,
            free_shipping,
            picture,
        } = this.props

        return (
            <Link href={`/items?id=${id}`} as={`/items/${id}`}>
                <a className={css.card}>
                    <div className={css.picture} style={{ backgroundImage: `url(${picture.replace(/-I.jpg/g, '-O.jpg')})` }} />
                    <div className={css.content}>
                        <div className={css.price}>
                            $ {formatNumber(price.amount)}
                            {
                                free_shipping && <img src='/static/ic_shipping@2x.png.png' />
                            }
                        </div>
                        <div className={css.description}>
                            {title}
                        </div>
                    </div>
                    <div className={css.city}>
                        {city}
                    </div>
                </a>
            </Link >
        )
    }
}

export default ProductCard