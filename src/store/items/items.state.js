export default {
    items: [],
    editedItemId: '',

    editedItem: {
        category: '',
        brand: '',
        name: '',
        condition: '',
        description: '',
        img: [],
        date: `s${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    }
}