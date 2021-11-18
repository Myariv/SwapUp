import database from '../../middleWare/firebase/database'

export default {
    getItems: async ({state, commit}) => {

        const items = await database.read({entity: 'products'})

        commit('setItems', items)
    },

    deleteItem: async ({state, commit, dispatch}) => {
        const itemId = state.editedItemId

        await database.removeFromProducts({entity: 'products', id: itemId})

        await dispatch('users/removeProductFromUser' ,itemId, {root:true})

        await database.removeImg(itemId)

        commit('resetEditedItemId')

        commit('deleteItem', itemId)

        // commit('resetEditedItem')
    },

    updateItem: async ({state, commit}, target) => {

        if (target) {
            await database.update({entity: 'products', id: target.id, item: target})
                return
        }

        const item = {}

        Object.assign(item, state.editedItem)

        item.id = state.editedItemId

        //save in DB
        await database.update({entity: 'products', id: item.id, item})

        //save in store
        commit('resetEditedItem')

        commit('resetEditedItemId')

        commit('editItem', item)
    },

    insertItem: async ({state, commit, dispatch}) => {
        const item = {}

        Object.assign(item, state.editedItem)

        // save in DB
        item.id = database.create({entity: 'products', item})

        dispatch('users/insertUser',item.id, {root: true})

        item.url = await dispatch('uploadImg', {item})
        // update DB with img

        dispatch('updateItem', item)

        //save in store
        commit('resetEditedItem')

        commit('insertItem', item)

    },

    setEditedItemById: async ({state, commit}) => {

        let item = {}
        
        if (state.items.length && state.items.find(item => item.id === state.editedItemId)) {
            item = state.items.find(item => item.id === state.editedItemId)
        } else {
            item = await database.getById({entity: 'products', id: state.editedItemId})
        }

        commit('setEditedItem', item)
    },

    uploadImg({state}, item) {
        return  database.uploadImg(item).then(res => res)
    },



}