const Data = require('../models/dataSchema');
const fetch = require('node-fetch');

const saveData = async () => {

    try {
        //fetching data from API and converting to arrray of objects
        const response = await fetch("https://api.wazirx.com/api/v2/tickers");
        const responseJson  = await response.json();
        const responseJsonArray = Object.values(responseJson);

        //Empty previous data
        await Data.deleteMany({});

        //iterating first 10 entries of data and pushing it to array
        for(let i=0;i<10;i++)
        {
            const {name,last,buy,sell,volume,base_unit} = responseJsonArray[i];
            const tempObj = {name,last,buy,sell,volume,base_unit};

            //creating model for data
            const data = new Data(tempObj);
            data.save();
        }
        console.log("Data stored successfully");
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = saveData;