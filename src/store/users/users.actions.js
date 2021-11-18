import database from '../../middleWare/firebase/database'

export default {
    getUsers: async ({commit}) => {

        const users = await database.read('users')

        commit('setUsers', users)

    },

    getUsersProducts: async ({state, commit}) => {

        let products = []

        const productsId = await database.getUserItemsId({entity: 'users', userId: state.userId})

        for (const id in productsId) {
            const product = await database.getProductById({entity:'products', id})
            products.push(product)
        }

        commit('setUsersProducts', products)

    },

    insertUser: async ({state, commit, dispatch}, id) => {
        let item = {name: window.user.displayName, email: window.user.email, imgUrl: window.user.photoURL, phone: window.user.phoneNumber}
        await database.updateProducts({entity: 'users', id: window.user.uid, item: {[id]: id}})
        await database.update({entity: `users`, id: window.user.uid, item})
    },

    removeProductFromUser: async ({state, commit, dispatch}, itemId) =>  {
        await database.removeProductsFromUsers({entity: 'users', id: window.user.uid, itemId})

        commit('deleteUserProduct', itemId)
    }
}