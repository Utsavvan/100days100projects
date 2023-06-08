const converterApi = async () => {

    const response = await fetch("https://www.floatrates.com/daily/inr.json")
    const data = await response.json()
    return data;
}

export default converterApi;