import { NavLinkType, HeaderRightIconType, ProductType, CategoryType, AdsType, heroCarouselType, FeatureType } from "./type";

export const NavLinks: NavLinkType[] = [
    {
        name: 'Home',
        to: '/',
        status: true
    },
    {
        name: 'Shop',
        to: '/',
        status: true
    },
    {
        name: 'Pages',
        to: '/',
        status: true
    },
    {
        name: 'Blog',
        to: '/',
        status: true
    },
    {
        name: 'About Us',
        to: '/',
        status: true
    },
]


export const HeaderRightIcons: HeaderRightIconType[] = [
    {
        name: 'phone',
        text: '(219) 555-0114',
        to: '/',
        status: true,
        icon: 'PhoneCall1.png'
    },
    {
        name: 'search',
        to: '/',
        status: true,
        icon: 'Search.png'
    },
    {
        name: 'heart',
        to: '/',
        status: true,
        icon: 'Heart.png'
    },
    {
        name: 'bag',
        to: '/',
        status: true,
        icon: 'Bag.png'
    },
    {
        name: 'user',
        to: '/',
        status: true,
        icon: 'user_31.png'
    }
]

export const Products: ProductType[] = [
    {
        name: 'Green Apple',
        price: '$14.99',
        cutPrice: '$20.00',
        status: true,
        thumbnail: '/images/products/product1.png',
        inStock: true,
        saleTag: 'sale 50%',
        rating: 5
    },
    {
        name: 'Chanise Cabbage',
        price: '$14.99',
        cutPrice: '$20.00',
        status: true,
        thumbnail: '/images/products/product2.png',
        inStock: true,
        saleTag: 'sale 50%',
        rating: 3
    },
    {
        name: 'Green Capsicum',
        price: '$14.99',
        cutPrice: '$20.00',
        status: true,
        thumbnail: '/images/products/product3.png',
        inStock: true,
        saleTag: 'sale 50%',
        rating: 4
    },
    {
        name: 'Surjapur Mango',
        price: '$14.99',
        cutPrice: '',
        status: true,
        thumbnail: '/images/products/product4.png',
        inStock: true,
        saleTag: 'sale 50%',
        rating: 5
    },
    {
        name: 'Surjapur Mango',
        price: '$14.99',
        cutPrice: '',
        status: true,
        thumbnail: '/images/products/product4.png',
        inStock: true,
        saleTag: 'sale 50%',
        rating: 5
    },
    {
        name: 'Surjapur Mango',
        price: '$14.99',
        cutPrice: '',
        status: true,
        thumbnail: '/images/products/product4.png',
        inStock: true,
        saleTag: 'sale 50%',
        rating: 5
    },
     {
        name: 'Surjapur Mango',
        price: '$14.99',
        cutPrice: '',
        status: true,
        thumbnail: '/images/products/product4.png',
        inStock: true,
        saleTag: 'sale 50%',
        rating: 5
    }
]


export const Category: CategoryType[] = [
    {
        name: 'Vegetables',
        status: true,
        thumbnail: '/images/category/category1.png',
        inStock: true,
    },
    {
        name: 'Fresh Fruit',
        status: true,
        thumbnail: '/images/category/category2.png',
        inStock: true,
    },
    {
        name: 'River Fish',
        status: true,
        thumbnail: '/images/category/category3.png',
        inStock: true,
    },
    {
        name: 'Meat',
        status: true,
        thumbnail: '/images/category/category4.png',
        inStock: true,
    },
    {
        name: 'Water and Drinks',
        status: true,
        thumbnail: '/images/category/category5.png',
        inStock: true,
    },
    {
        name: 'Snacks',
        status: true,
        thumbnail: '/images/category/category6.png',
        inStock: true,
    }

]


export const AdsData: AdsType[] = [
    {
        thumbnail: '/images/ads/ad3.png',
        to: ''
    },
    {
        thumbnail: '/images/ads/ad1.png',
        to: ''
    },
    {
        thumbnail: '/images/ads/ad2.png',
        to: ''
    }
]


export const HeroCarousel: heroCarouselType[] = [
    {
        thumbnail: '/images/hero/BG4.png',
        to: ''
    },
    {
        thumbnail: '/images/hero/BG4.png',
        to: ''
    },

]


export const FeatureSectionData: FeatureType[] = [
    {
        thumbnail: '/images/feature/Icon1.png',
        heading: 'Free Shipping',
        description: 'Free shipping with discount'
    },
    {
        thumbnail: '/images/feature/Icon2.png',
        heading: 'Great Support 24/7',
        description: 'Instant access to Contact'
    },
    {
        thumbnail: '/images/feature/Icon3.png',
        heading: '100% Sucure Payment',
        description: 'We ensure your money is save'
    },
    {
        thumbnail: '/images/feature/Icon4.png',
        heading: 'Money-Back Guarantee',
        description: '30 days money-back'
    },



]