export const loadState = ()=>{
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null)
        {
            //let the reducer generate the initial state itself.
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch(ex){
        return undefined;
    }
}

export const saveState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    }
    catch(err){
        //ignore write error
    }
}