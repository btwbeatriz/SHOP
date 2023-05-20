import AsyncStorage from "@react-native-async-storage/async-storage"

export const setData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log('saving error', key, e)
    }
}

export const mergeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.mergeItem(key, jsonValue)
    }
    catch (e) {
        console.log('removing error', key, e)
    }
}

export const getData = async (CallBack, key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        CallBack(value != null ? JSON.parse(value) : null)
    } catch (e) {
        console.log('reading error', key, e)
    }
}

export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    }
    catch (e) {
        console.log('removing error', key, e)
    }
}