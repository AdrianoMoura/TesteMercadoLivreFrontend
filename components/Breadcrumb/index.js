import React, { Component } from 'react'
import Link from 'next/link'
import css from './styles.scss'

class Breadcrumb extends Component {

    render() {

        const { items } = this.props

        return (
            <div className={css.container}>
                {
                    items.map((item, index) =>
                        <Link href={`/items?q=${item}`}>
                            <a key={index} className={css.item}>{item}<span className={css.separator}>></span></a>
                        </Link>
                    )
                }
            </div>
        )
    }
}

export default Breadcrumb