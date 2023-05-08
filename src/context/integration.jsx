import axios from 'axios';

//axio
export const GetPaisAxios = (CallBack) => {
    axios({
        method: 'get',
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/paises'
    }).then((resp) => {
        CallBack(resp.data)
    })
}

//fetch
export const GetPaisFetch = async (CallBack) => {
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/paises'
    await fetch(url)
        .then(resp => resp.json())
        .then(res => CallBack(res))
}