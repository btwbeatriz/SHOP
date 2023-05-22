import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("saving error", key, e);
  }
};

export const mergeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, jsonValue);
  } catch (e) {
    console.log("removing error", key, e);
  }
};

export const getData = async (Callback, key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    Callback(value != null ? JSON.parse(value) : null);
  } catch (e) {
    console.log("reading error", key, e);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("removing error", key, e);
  }
};

export const getProducts = () => {
  return [
    {
      title: "Alface",

      descrition: "Unidade",

      descritionAll:
        "A alface crespa tem esse nome por conta das pequenas ondulações nas pontas de suas folhas. É o tipo de alface mais comum entre todos os tipos de alface, não é a tôa que quase toda salada têm alface crespa! Diferente da alface americana que é crocante, suas folhas são bastante flexíveis, longas e abertas. A alface crespa é rica em fibras e auxilia no processo de digestão.",

      price: 3,

      img: require("../../../assets/alface.png"),
    },

    {
      title: "Cenoura",

      descrition: "o kilo",

      descritionAll: "Unidade",

      price: 7,

      img: require("../../../assets/cenouras.png"),
    },

    {
      title: "Tomate",

      descrition: "o kilo",

      descritionAll: "Unidade",

      price: 10,

      img: require("../../../assets/tomates.png"),
    },
  ];
};
