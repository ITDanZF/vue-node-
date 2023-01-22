const STORAGE_KEY = 'mall'


export default {
    setItem(key, value, moduleName) {
        if (moduleName) {
            let val = this.getItem(moduleName)
            val[key] = value;
            this.setItem(moduleName, val)
        } else {
            let val = this.getStorage()
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))

        }
    },
    //利用递归的方式获取某个模块下的user的userName
    getItem(key, moduleName) {
        if (moduleName) {
            let val = this.getItem(moduleName)
            if(val) return val[key]
        }
        return this.getStorage()[key]
        // if (!key) {
        //     return null;
        // } else {
        //     var obj = this.getStorage()[key]
        // }
        //  this.getItem(moduleName, obj)




    },

    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key, moduleName) {
        let val = this.getStorage()
        if (moduleName) {
            if(!val[moduleName]) return;
            delete val[moduleName][key]
        } else {
            delete val[key]
        }
        this.setItem(STORAGE_KEY ,JSON.stringify(val))
    }
}