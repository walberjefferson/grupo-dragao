export default {
    set(key, value) {
        window.sessionStorage[key] = value;
        return window.localStorage[key];
    },
    get(key, defaultValue = null) {
        return window.sessionStorage[key] || defaultValue;
    },
    getObject(key) {
        return JSON.parse(window.sessionStorage[key] || null);
    },
    setObject(key, value) {
        window.sessionStorage[key] = JSON.stringify(value);
        return this.getObject(key);
    },
    remove(key) {
        window.sessionStorage.removeItem(key);
    }
}
