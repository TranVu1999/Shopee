const Number = {
    shortcutNumber: str => (str > 1000 ? (str/1000).toFixed(1) + "k" : str),
    convertToHour: number => Math.floor(number / 60),
    convertToMoney: str =>{
        str += "";
        const length = str.length;

        for(let i = length - 4; i >= 0; i -= 3){
            str = str.substring(0, i + 1) + "." +  str.substring(i + 1);
            
        }

        return str;
    },
    formatToNumber: (number, numDigit = 2) => {
        const lengthNumber = number.toString().length;
        let res = "";

        for(let i = lengthNumber + 1; i <= numDigit; i++) {
            res += "0";
        }
        
        return res + number
    } 
    
}

export default Number;