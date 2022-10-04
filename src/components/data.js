import { AiFillCar } from 'react-icons/ai';
import { FcSupport } from 'react-icons/fc';
import { FaCarCrash, FaCarBattery } from 'react-icons/fa';
import { GiFuelTank } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';



export const menuData = [
    {
        title: "Home",
        path: "/home"
    },
    {
        title: "Vehicles",
        path: "/vehicles"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "Featured",
        path: "/featured"
    },
    {
        title: "Reviews",
        path: "/reviews"
    },
    {
        title: "Contact",
        path: "/contact"
    }
];

export const cardData = [
    {
        icon: <AiFillCar />,
        title: 'Car Selling',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non!',
        buttonLabel: 'Read More'
    },
    {
        icon: <FcSupport />,
        title: 'Parts Repair',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non!',
        buttonLabel: 'Read More'
    },
    {
        icon: <FaCarCrash />,
        title: 'Car Insurance',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non!',
        buttonLabel: 'Read More'
    },
    {
        icon: <FaCarBattery />,
        title: 'Battery Replacement',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non!',
        buttonLabel: 'Read More'
    },
    {
        icon: <GiFuelTank />,
        title: 'Oil Change',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non!',
        buttonLabel: 'Read More'
    },
    {
        icon: <BiSupport />,
        title: '24/7 Support',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non!',
        buttonLabel: 'Read More'
    }

];

