const axios = require('axios');

export default {
    get: options => {
        return axios.get(`http://localhost:4000/${options.entity}/${options.id}`)
            .then(res => {
                // handle success
                return res.data
            })
            .catch(error => {
                // handle error
                console.error(error);
            })

    },

    create: options => {
        return axios.post(`http://localhost:4000/${options.entity}`,{item: options.item} )
            .then(res =>  {
                console.log(res)
            })
            .catch(error =>  {
                console.log(error);
            });

    },

    remove: options => {
        return axios.delete(`http://localhost:4000/${options.entity}/${options.id}`)
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.error(err)
            })

    },

    update: options => {
        return axios.put(`http://localhost:4000/${options.entity}/${options.id}`, {item: options.item})
            .then(res => {
                return res.data
            }).catch(err => {
                console.error(err)
                console.log(options.entity,options.id,options.item)
            })
    }
}