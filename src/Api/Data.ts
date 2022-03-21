import postnord from '../assets/ShippingLogos/postnord-short.svg'
import schenker from '../assets/ShippingLogos/schenker-square.jpg'
import instabox from '../assets/ShippingLogos/instabox-short.png'
import CreditCardIcon from "@mui/icons-material/CreditCard";
import klarna from "../assets/PaymentLogos/klarna-square.jpg";
import swish from "../assets/PaymentLogos/swish.svg";
import { SvgIcon } from '@mui/material';

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

export interface User {
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

export interface Delivery {
    name: string
    altText: string
    shippingTime: number
    price: number
    logo: string,
    id: number
}


export const deliveryOptions: Delivery[] = [
    {
        name: "Postnord",
        altText: "Leverans i brevlådan, 1-3 arbetsdagar",
        shippingTime: 3,
        price: 19,
        logo: postnord,
        id: 1
    }, {
        name: "Schenker",
        altText: "Spårbar leverans, 1-2 arbetsdagar",
        shippingTime: 2,
        price: 29,
        logo: schenker,
        id: 2
    }, {
        name: "Instabox",
        altText: "Leverans till box, 1-2 arbetsdagar",
        shippingTime: 2,
        price: 29,
        logo: instabox,
        id: 3
    }
]

export interface Payment {
    name: string
    altText: string
    id: number
    logo?: string
    icon?: typeof SvgIcon
}


export const paymentOptions: Payment[] = [
    {
        name: "Klarna",
        altText: "Välj att delbetala, betala senare, eller i slutet av månaden",
        logo: klarna,
        id: 1
    }, {
        name: "Swish",
        altText: "Betala enkelt med mobilen",
        logo: swish,
        id: 2
    }, {
        name: "Kortbetalning",
        altText: "Betala med Visa / Mastercard / Maestro",
        icon: CreditCardIcon,
        id: 3
    }
]
