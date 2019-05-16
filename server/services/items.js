const _ = require('lodash')

const { success, error, missingParameters, internalError } = require('../utils/body')
const defaultResponse = require('../utils/defaultResponse')
const searchItems = require('../adapter/searchItems')
const getItem = require('../adapter/getItem')
const getItemDescription = require('../adapter/getItemDescription')
const getCategory = require('../adapter/getCategory')

module.exports = {
    searchItems: async (q) => {
        try {
            if (!q) {
                return missingParameters('You must provide parameters!')
            }

            const searchResult = await searchItems(q)

            const categoryFilter = _.find(searchResult.filters, { id: 'category' })
            const categories = categoryFilter ? categoriesFromRoot(categoryFilter.values[0]) : []

            const result = {
                ...defaultResponse,
                categories,
                items: searchResult.results.slice(0, 4).map(i => makeItem(i))
            }

            return success(result)

        } catch (err) {
            console.log(err)
            return internalError()
        }
    },
    getItem: async (id) => {
        try {
            if (!id) {
                return missingParameters('You must provide parameters!')
            }

            const itemPromise = getItem(id)
            const descriptionPromise = getItemDescription(id)

            const item = await itemPromise
            const description = await descriptionPromise

            const itemCategory = await getCategory(item.category_id)

            const categories = categoriesFromRoot(itemCategory)

            const result = {
                ...defaultResponse,
                categories,
                item: makeItem({...item, ...description}, true)
            }

            return success(result)

        } catch (err) {
            console.log(err)
            return internalError()
        }
    }
}

const categoriesFromRoot = (categoryValue) => {
    if (categoryValue) {
        return categoryValue.path_from_root.map(c => c.name)
    }
}

const makeItem = (item, full = false) => {
    const product = {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: parseInt(item.price),
            decimals: parseInt((item.price - parseInt(item.price)) * 100)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
    }

    if (full) {
        return Object.assign({}, product, {
            sold_quantity: item.sold_quantity,
            description: item.text || item.plain_text
        })
    }

    return product
}