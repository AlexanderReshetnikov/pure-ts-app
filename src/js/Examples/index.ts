const s:string = "Hello"
const n:number = 20
const b:boolean = true

//const b2:boolean = 6 err

const any_obj:any = 60 || "string"

const numb_arr:number[] = [10,20,50]
//numb_arr.push("asdr") err

const str_arr:string[] = ["fsd", "fdss", "s"]

const obj_arr:Object[] = [{}, {age: 26}, {'name': 'ss'}, new Object()]

//functions
function test():void{
    console.log('VOID')
}

function sum(x:number,y:number):number{
    return x + y
}

function getObj(name?:string):Object{
    if(name){
        return {
            name: name
        }
    }
    else {
        return null
    }
}
function getNull():string{
    return null
}

//objects
interface IWizzard {age:number, name:string, isStick:boolean, petName?:string}

interface ISuperWizard extends IWizzard, human { superMagick?: Function }

interface human { parents? :string[] }

const testObj:IWizzard = {
    age:45,
    name:"Harry",
    isStick:true,
    petName:""
}

const herma:IWizzard = {
    age:32,
    name : "Herma",
    isStick: true
}

const Dambledor:ISuperWizard = {
    age:500,
    name:"Dambledor",
    isStick: true,
    superMagick: () => { console.log("big water") },
    parents: ["father", "mother"]
    
}

function callWizard(wizard:IWizzard):void{
    console.log(wizard)
}

//callWizard(50) err