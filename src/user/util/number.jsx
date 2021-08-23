const number = {
    shortcutNumber: str => (str > 1000 ? (str/1000).toFixed(1) + "k" : str),
    convertToHour: number => Math.floor(number / 60),
    convertToMoney: str =>{
        str += "";
        const length = str.length;

        for(let i = length - 4; i >= 0; i -= 3){
            str = str.substring(0, i + 1) + "." +  str.substring(i + 1);
            
        }

        return str;
    }
    
}

export default number;