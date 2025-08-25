function formatString(inputString) {
    // Check if there are uppercase letters
    if (/[A-Z]/.test(inputString)) {
        // Split the string by uppercase letters
        let parts = inputString.split(/(?=[A-Z])/);
        
        // Capitalize the first letter of each part and join with space
        let formattedString = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
        
        return formattedString;
    } else {
        // Capitalize the first letter
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
}

export default formatString