import firebaseInstance from '../index'


function read(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}`).once('value')
        .then(res => {
            const map = res.val()
            const items = []

            for (let key in map) {
                const item = map[key]
                item.id = key
                items.push(item)
            }
            return items
        })
}

function readUserItems(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}/${options.userId}`).child('products').once('value')
        .then(res => {
            const map = res.val()
            const items = []

            for (const key in map) {
                if (map[key].userId === window.user.uid) {
                    const item = map[key]
                    item.id = key
                    items.push(item)
                }
            }
            return items
        })
}


function getUserItemsId(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}/${options.userId}`).child('products').once('value')
        .then(res => {
            return res.val()
        })

}

function getProductById(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).once('value')
        .then(res => {
            return res.val()
        })
}


function create(options) {
    options.item.userId = window.user.uid
    return firebaseInstance.firebase.database().ref(`${options.entity}`).push(options.item).key

}


function removeFromProducts(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).remove()

}

function removeProductsFromUsers(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).child(`products/${options.itemId}`).remove()

}

function update(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).update(options.item)
}

function updateProducts(options) {
    return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).child('products').update(options.item)
}


function uploadImg(options) {
    const {item} = options
    const {img: file} = options.item
    const {id} = item

    return firebaseInstance.firebase.storage().ref('images').child(id).put(file).then(res => {
        const {_delegate: {metadata: {name: id}}} = res
        return res.ref.getDownloadURL().then(url => {
            return url
        })
    })
}


function removeImg(id) {
    return firebaseInstance.firebase.storage().ref('images').child(id).delete()
}



export default {
    read,
    create,
    removeFromProducts,
    removeProductsFromUsers,
    updateProducts,
    update,
    getProductById,
    getUserItemsId,
    readUserItems,
    uploadImg,
    removeImg,
}


//
// function read(options) {
//     return firebaseInstance.firebase.database().ref(`${options.entity}`).once('value')
//         .then(res => {
//             const map = res.val()
//             const items = []
//
//             for (let key in map) {
//                 const item = map[key]
//                 item.id = key
//                 items.push(item)
//             }
//             return items
//         })
// }
//
// function readMyItems(options) {
//     return firebaseInstance.firebase.database().ref(`${options.entity}`).once('value')
//         .then(res => {
//             const map = res.val()
//             const items = []
//
//             for (const key in map) {
//                 if (map[key].userId === window.user.uid) {
//                     const item = map[key]
//                     item.id = key
//                     items.push(item)
//                 }
//             }
//             return items
//         })
// }
//
//
// function getById(options) {
//     return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).once('value')
//         .then(res => {
//             const item = res.val()
//             item.id = options.id
//             return item
//         })
// }
//
//
// function create(options) {
//     options.item.userId = window.user.uid
//     return firebaseInstance.firebase.database().ref(`${options.entity}`).push(options.item)
//         .then(res => {
//             return res.key
//         })
// }
//
//
// function removeFromProducts(options) {
//     return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).remove()
// }
//
// function removeFromUsers(options) {
//     return firebaseInstance.firebase.database().ref(`users/${options.userId}/${options.productId}`).remove()
//
// }
//
//
// function update(options) {
//     return firebaseInstance.firebase.database().ref(`${options.entity}/${options.id}`).update(options.item)
// }
//
//
// function uploadImg(options) {
//     return firebaseInstance.firebase.storage().ref('images').child(options.itemId).put(options.img).then(res => {
//         const {_delegate: {metadata: {name: id}}} = res
//         return res.ref.getDownloadURL().then(url => {
//             return url
//         })
//     })
// }
//
// function getImgFromWeb(itemId) {
//     return firebaseInstance.firebase.storage().ref('images').child(itemId).getDownloadURL().then(res => {
//         return res
//     })
// }


