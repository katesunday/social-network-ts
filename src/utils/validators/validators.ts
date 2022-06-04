export const required = (value:number)=>{
 return  value? undefined : 'Field is required'
}

export const maxLengthCreator = (maxLength:number)=>{
    return(value:string)=>{
       return  value.length >maxLength ? `Max length is ${maxLength} symbols`: undefined
    }
}