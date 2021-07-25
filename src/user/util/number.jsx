const number = {
    shortcutNumber: str => (str > 1000 ? (str/1000).toFixed(1) + "k" : str),
    convertToHour: number => Math.floor(number / 60)
    
}

export default number;