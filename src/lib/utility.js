module.exports = {
    NumUtil: {
        isInt: (query) => {
            return !isNaN(query) && +query !== NaN && parseInt(query) !== NaN;
        },
        isFloat: (query) => {
            return !isNaN(query) && +query !== NaN && parseFloat(query) !== NaN;
        }
    },

    DateUtil: {
        getDateString: () => {
            const date_ob = new Date();

            const year = date_ob.getFullYear();
            const month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
            const date = ('0' + date_ob.getDate()).slice(-2);
            
            const hours = date_ob.getHours();
            const minutes = date_ob.getMinutes();
            const seconds = date_ob.getSeconds();
            
            return `${year}-${month}-${date}:${hours}-${minutes}-${seconds}`;
        }
    }
}