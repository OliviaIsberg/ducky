import postnord from '../assets/ShippingLogos/postnord-short.svg';
import schenker from '../assets/ShippingLogos/schenker-square.jpg';
import instabox from '../assets/ShippingLogos/instabox-short.png';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import klarna from '../assets/PaymentLogos/klarna-square.jpg';
import swish from '../assets/PaymentLogos/swish.svg';
import { SvgIcon } from '@mui/material';

export interface Product {
  title: string;
  information: string;
  id: number;
  category: string;
  price: number;
  imgURL: string;
}

export enum MockedCategories {
  Famous = 'Kända',
  Animals = 'Djur',
  Hobby = 'Hobby',
  Misc = 'Övriga',
}

export const Categories: MockedCategories[] = [
  MockedCategories.Famous,
  MockedCategories.Animals,
  MockedCategories.Hobby,
  MockedCategories.Misc,
];

export const mockedProducts: Product[] = [
  {
    title: 'Ducktrix',
    information:
      'Ducktrix gummianka. Denna science fiction-anka är baserad på filmen The Matrix med Keanu Reeves som Neo, "The One" cyberbrottsling kontaktad av Morpheus för att träffa Oracle. Se upp för agenten Smith... Perfekt present till ett Matrix-fan. På baksidan står det "Enter Ducktrix". Grönt tryck, lyser i mörkret!',
    category: MockedCategories.Famous,
    price: 99,
    id: 1,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2019/08/Ducktrix-rubber-duck-front-Amsterdam-Duck-Store-1.jpg',
  },
  {
    title: 'Unicorn',
    information:
      'Rosa enhörning gummianka. Köp den legendariska varelsen. Rosa med lila hår och gult horn.',
    category: MockedCategories.Animals,
    price: 79,
    id: 2,
    imgURL:
      'https://amsterdamduckstore.com/wp-content/uploads/2016/05/unicorn-rubber-duck-front.jpg',
  },
  {
    title: 'Corona',
    information:
      'Corona gummianka. Denna specialutgåva bär en grön ansiktsmask.',
    category: MockedCategories.Misc,
    price: 89,
    id: 3,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2021/07/Corona-Rubber-Duck-Pink-front-Amsterdam-Duck-Store-III.jpg',
  },
  {
    title: 'Eskimo',
    information:
      'Eskimo med bebis gummianka. Hon bär sin bebis i en vit filt, klädd i en röd traditionell skinnparkas för att tåla den arktiska kylan. Fin present till en vän som älskar vinterväder med snö och is.',
    category: MockedCategories.Misc,
    price: 75,
    id: 4,
    imgURL:
      'https://amsterdamduckstore.com/wp-content/uploads/2019/12/Eskimo-with-baby-rubber-duck-front-Amsterdam-Duck-Store.jpg',
  },
  {
    title: 'Cow',
    information:
      'Svartvit ko gummianka. En typisk holländsk ko med vackra fläckar och en koklocka. Kommer direkt från gården. Ge den till en bondvän eller någon som verkligen älskar mjölk!',
    category: MockedCategories.Animals,
    price: 49,
    id: 5,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2015/07/cow-black-and-white-rubber-duck-front-e1569759638189.jpg',
  },
  {
    title: 'Fitness',
    information:
      'Fitness gummianka. Lyfter vikter och visar hans sexpack. Klädd i röda träningsshorts.',
    category: MockedCategories.Hobby,
    price: 39,
    id: 6,
    imgURL:
      'https://amsterdamduckstore.com/wp-content/uploads/2016/11/Fitness-Rubber-Duck-front-Amsterdam-Duck-Store-2.jpg',
  },
  {
    title: 'Gamer Girl',
    information:
      'Gamer Girl gummianka . Hon kan bara inte sluta spela. Iklädd blå skjorta med tryck "Gamer girl" och blått headset, med rosa hår och en spelkonsol. Fin present till en gamervän.',
    category: MockedCategories.Hobby,
    price: 69,
    id: 7,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2020/11/gamer-girl-rubber-duck-front-amsterdam-duck-store-.jpg',
  },
  {
    title: 'Gamer Boy',
    information:
      'Gamer Boy gummianka. Han kan spela hela natten med vänner online. Iklädd röd skjorta med tryck "Game over" och blå keps, håller en spelkonsol. perfekt present till en gamervän.',
    category: MockedCategories.Hobby,
    price: 69,
    id: 8,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2020/11/gamer-boy-rubber-duck-front-amsterdam-duck-store-.jpg',
  },
  {
    title: 'Donkey',
    information:
      'Åsnka gummianka. Denna underbara varelse har en ljusgrå päls och en svart svans. Ge den här åsnan till någon älskar åsnor.',
    category: MockedCategories.Animals,
    price: 59,
    id: 9,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2022/02/Donkey-rubber-duck-front-Amsterdam-duckstore.jpeg',
  },
  {
    title: 'Liberty',
    information:
      'Liberty gummianka. Denna fyr i New York ger frihet för alla våra gummiankor. Oavsett färg, tro eller livsstil. Fin present till vänner som älskar att besöka New York',
    category: MockedCategories.Famous,
    price: 89,
    id: 10,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2015/09/liberty-rubber-duck-front-e1569407748113.jpg',
  },
  {
    title: 'BatDuck',
    information:
      'Batman gummianka. Han kommer bara ut på natten till säkra ankor i nöd. Styr kanalerna och skrämmer bort skurkar. Gör denna mörka hjälte till din egen skyddsängel!',
    category: MockedCategories.Famous,
    price: 69,
    id: 11,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2018/01/dark-rubber-duck-front-Amsterdam-Duck-Store.jpg',
  },
  {
    title: 'SpiderDuck',
    information:
      'Spiderman gummianka. I rött och blått med spindeltryck. Denna spiderman gummianka är en trevlig present att ge bort till en spiderman älskande vän.',
    category: MockedCategories.Famous,
    price: 69,
    id: 12,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2015/08/spidy-rubber-duck-front-e1569408181344.jpg',
  },
  {
    title: 'SkeleDuck',
    information: 'Skelett gummianka. Perfekt goding för halloween.',
    category: MockedCategories.Famous,
    price: 69,
    id: 13,
    imgURL:
      'https://www.amsterdamduckstore.com/wp-content/uploads/2015/09/skeleton-rubber-duck-front.jpg',
  },
];

export interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}

export const mockedUsers: User[] = [
  {
    username: 'Regular-User',
    password: 'User',
    isAdmin: false,
  },
  {
    username: 'Admin-User',
    password: 'Admin',
    isAdmin: true,
  },
];

export interface Delivery {
  name: string;
  altText: string;
  shippingTime: number;
  price: number;
  logo: string;
  id: string;
}

export const deliveryOptions: Delivery[] = [
  {
    name: 'Postnord',
    altText: 'Leverans i brevlådan, 1-3 arbetsdagar',
    shippingTime: 3,
    price: 19,
    logo: postnord,
    id: 'postnord',
  },
  {
    name: 'Schenker',
    altText: 'Spårbar leverans, 1-2 arbetsdagar',
    shippingTime: 2,
    price: 29,
    logo: schenker,
    id: 'schenker',
  },
  {
    name: 'Instabox',
    altText: 'Leverans till box, 1-2 arbetsdagar',
    shippingTime: 2,
    price: 29,
    logo: instabox,
    id: 'instabox',
  },
];

export interface Payment {
  name: string;
  altText: string;
  id: string;
  logo?: string;
  icon?: typeof SvgIcon;
}

export const paymentOptions: Payment[] = [
  {
    name: 'Klarna',
    altText: 'Välj att delbetala, betala senare, eller i slutet av månaden',
    logo: klarna,
    id: 'klarna',
  },
  {
    name: 'Swish',
    altText: 'Betala enkelt med mobilen',
    logo: swish,
    id: 'swish',
  },
  {
    name: 'Kortbetalning',
    altText: 'Betala med Visa / Mastercard / Maestro',
    icon: CreditCardIcon,
    id: 'card',
  },
];
