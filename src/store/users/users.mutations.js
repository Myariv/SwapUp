export default {
    setUser: (state, user) => {
        state.user = user
    },

    setUserId: (state, id) => {
        state.userId = id
    },

    setUsersProducts(state, products) {

        state.user.products = products
    },

    resetUserId: state => {
        state.userId = ''
    },

    deleteUser: (state, userId) => {
        const index = state.users.findIndex(user => user.id === userId)
        state.users.splice(index, 1)
    },

    deleteUserProduct: (state, itemId) => {
        const index = state.user.products.findIndex(p => p.id === itemId)
        state.user.products.splice(index, 1)
    },

    setUsers: (state, users) => {
        state.users = users
    },


}