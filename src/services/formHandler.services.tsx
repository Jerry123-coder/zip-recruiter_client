function formHandler (formelements: Array<any>, key: string){
    try{
        //return index with sub object named key from the array in the prop
        const formDetails =[...formelements].find(({name})=> name === key)?.value || null
        // return [...formelements].find(({name})=> name === key)?.value || null
       
        console.log("output from form handle "+formDetails)
        return formDetails
    }catch(e){
        console.error(e)
        return null
    }
    
}

export default formHandler