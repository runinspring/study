export function ToBoolean(value:any):boolean{
    if(typeof value == 'boolean'){
        return value;
    }
    switch (value.toLocaleLowerCase()){
        case "true":
            return true;
        case "false":
            return false;
        default :
            return false;
    }
}