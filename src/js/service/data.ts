export interface IUser {
    name: string,
    surname: string,
    email: string,
    phone?: string,
    age: number,
    work?: string,
    hobby?: string
}

export const data:IUser[] = [
    {
        name: "Harry",
       surname: "Potter",
       email: "harry@light.com",
       age: 17,
       work: "Министерство магии",
       hobby: "Квидич"
    },
    {
        name: "Hermiona",
       surname: "Whisley",
       email: "herma@light.com",
       phone: "911",
       age: 17,
       work: "Министерство магии",
       hobby: "колдавать"
    },
    {
        name: "Rohn",
       surname: "Whisley",
       email: "wisley@light.com",
       age: 18,
       work: "Школа",
       hobby: "стонать"
    },
    {
        name: "Винни",
       surname: "Пух",
       email: "winny@puh.com",
       age: 25,
       work: "лес",
       hobby: "мед"
    },
    {
        name: "Harry",
       surname: "Potter",
       email: "harry@light.com",
       phone: "95783509",
       age: 17,
       work: "Министерство магии",
       hobby: "Квидич"
    }

]