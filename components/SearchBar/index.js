import React, { Component } from 'react'
import Router from 'next/router'
import css from './styles.scss'

class SearchBar extends Component {

    state = {
        q: null
    }

    constructor(props) {
        super(props)

        this.state = {
            q: props.value
        }
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.doSearch()
        }
    }

    doSearch = () => {
        const { q } = this.state
        Router.push({
            pathname: '/items',
            query: {
                q
            }
        })
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    render() {

        const { q } = this.state

        return (
            <div className={css.container}>
                <div className={css.wrapper}>
                    <div className={css.logo} onClick={() => Router.push('/')} />
                    <div className={css.input}>
                        <input name="q" value={q} placeholder="Buscar" onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
                        <div className={css.button} onClick={this.doSearch} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar