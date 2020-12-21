
export function write(value) {
    console.log(value)
}

// export const validate = value => {
//     if(value !== '')
//         return true
//     else
//         return false
// }

export const validate = (value, min = 2, callback) => {
    if(value.length <= min)
        callback({statusCode: 4001, message: `uppfyller inte kravet på ${min} tecken`})
    else
        callback({statusCode: 2001, message: `uppfyller kravet på ${min} tecken`})
}


