export interface Product {
    title: string
    information: string
    id: number
    category: string
    price: number
    //image: ImageData   (?)
}

export const mockedProducts: Product[] = [{
    title: "First Ducky",
    information: "Lorem ipsum jdksjdksajdajkd jdksaljdkasjdklas jdlsjdsajdlsa",
    category: "starter",
    price: 5,
    id: 1,
}, {
    title: "Second Ducky",
    information: "Lorem ipsum jdksjdksajdajkd jdksaljdkasjdklas jdlsjdsajdlsa",
    category: "starter",
    price: 5,
    id: 2,
}, {
    title: "Third Ducky",
    information: "Lorem ipsum jdksjdksajdajkd jdksaljdkasjdklas jdlsjdsajdlsa",
    category: "starter",
    price: 5,
    id: 3,
}, {
    title: "Forth Ducky",
    information: "Lorem ipsum jdksjdksajdajkd jdksaljdkasjdklas jdlsjdsajdlsa",
    category: "starter",
    price: 5,
    id: 4,
},
]

export interface User{
    username: string
    password: string
    isAdmin: boolean
}


export const mockedUsers: User[] = [
    {
        username: "Regular-User",
        password: "User",
        isAdmin: false,
    }, {
        username: "Admin-User",
        password: "Admin",
        isAdmin: true,
    }
]