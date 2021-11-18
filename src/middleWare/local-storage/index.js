export default {
    insertToLocal(list, item) {
        item.id = new Date().getTime()

        let arrayOfItems = this.getFromLocal(list)
        arrayOfItems.push(item)
       localStorage.setItem(list, JSON.stringify(arrayOfItems))
    },

    getFromLocal(list) {
        let res = localStorage.getItem(list)
        if (!res) res = '[]'
        return JSON.parse(res)

    },

    remove(list, id) {
//    select the relevant item from the array
        const arrayOfItems = this.getFromLocal(list)
        let foundIndex = this._getIndexById(list, id)

        if (foundIndex === undefined) return


//    remove the relevant item from the array
        arrayOfItems.splice(foundIndex, 1)

//    update the the localStorage
        localStorage.setItem(list, JSON.stringify(arrayOfItems))
    },


    update(list, id, item) {
//    select the relevant item from the array
        const arrayOfItems = this.getFromLocal(list)
        let foundIndex = this._getIndexById(list, id)

        if (foundIndex === undefined) return

//    update the relevant item from the array
        const targetItem = arrayOfItems[foundIndex]
        for (let key in item) {
            if (item[key]) targetItem[key] = item[key]
        }

//    update the the localStorage

        localStorage.setItem(list, JSON.stringify(arrayOfItems))
    },

    getItemById(list, id) {
        const arrayOfItems = this.getFromLocal(list)
        return arrayOfItems.find(item => item.id === +id)
    },


    _getIndexById(list, id) {
        const arrayOfItems = this.getFromLocal(list)
        for (let i = 0; i < arrayOfItems.length; i++) {
            let item = arrayOfItems[i]
            if (item.id === id) {
                return i
            }
        }
    }
}


//BackUp --------------------------------- Do notTouch
// function insertToLocal(list, item) {
//     item.id = new Date().getTime()
//
//     let arrayOfItems = getFromLocal(list)
//     arrayOfItems.push(item)
//     localStorage.setItem(list, JSON.stringify(arrayOfItems))
// }
//
// function getFromLocal(list) {
//     let res = localStorage.getItem(list)
//     if (!res) res = '[]'
//     return JSON.parse(res)
//
// }
//
// function remove(list, id) {
// //    select the relevant item from the array
//     const arrayOfItems = getFromLocal(list)
//     let foundIndex = getIndexById(list, id)
//
//     if (foundIndex === undefined) return
//
//
// //    remove the relevant item from the array
//     arrayOfItems.splice(foundIndex,1)
//
// //    update the the localStorage
//     localStorage.setItem(list, JSON.stringify(arrayOfItems))
// }
//
//
// function update(list, id, item) {
// //    select the relevant item from the array
//     const arrayOfItems = getFromLocal(list)
//     let foundIndex = getIndexById(list, id)
//
//     if (foundIndex === undefined) return
//
// //    update the relevant item from the array
//     const targetItem = arrayOfItems[foundIndex]
//     for (let key in item) {
//         if (item[key]) targetItem[key] = item[key]
//     }
//
// //    update the the localStorage
//     localStorage.setItem(list, JSON.stringify(arrayOfItems))
// }
//
// function getIndexById(list, id) {
//     const arrayOfItems = getFromLocal(list)
//     for (let i = 0; i <arrayOfItems.length ; i++) {
//         let item = arrayOfItems[i]
//         if (item.id === id) {
//             return  i
//         }
//     }
// }







