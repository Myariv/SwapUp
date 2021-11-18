
export default {
    setItems: ((state, items) => {

        state.items = items
    }),

    setEditedItemId: ((state, id) => state.editedItemId = id),

    setEditedItem: ((state, item) => {

        state.editedItem = item
    }),

    resetEditedItemId: ((state) => {

        state.editedItemId = ''
    }),

    resetEditedItem: ((state) => {

        for (const key in state.editedItem) {
            if (key === 'img') {
                state.editedItem[key] = []
            } else {
                state.editedItem[key] = ''
            }

        }
        delete state.editedItem.id
    }),

    editItem: ((state, item) => {

        const index = state.items.findIndex(p => p.id === item.id)

        state.items.splice(index, 1, item)

    }),

    deleteItem: ((state, itemId) => {
        const index = state.items.findIndex(p => p.id === itemId)
        state.items.splice(index, 1)
    }),

    insertItem: ((state, item) => {

        state.items.push(item)
    })


}