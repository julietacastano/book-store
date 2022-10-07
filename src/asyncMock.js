import achilles from './Imagenes/achilles.jpg' 
import atomicHabits from './Imagenes/atomicHabits.jpg' 
import boyfriendMaterial from './Imagenes/boyfriendMaterial.jpg' 
import bromance from './Imagenes/bromance.jpg' 
import cinderella from './Imagenes/cinderella.jpg' 

const products = [
    {
        id: '1',
        name: 'The Song of Achilles',
        price: 10,
        category: 'Fiction',
        img: achilles,
        stock: 6,
        description: 'We were like gods at the dawning of the world, and our joy was so bright we could see nothing else but the other.'
    },
    {
        id: '2',
        name: 'Atomic Habits',
        price: 12,
        category: 'Non-Fiction',
        img: atomicHabits,
        stock: 2,
        description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones'
    },
    {
        id: '3',
        name: 'Boyfriend Material',
        price: 13,
        category: 'Romance',
        img: boyfriendMaterial,
        stock: 4,
        description: 'Wanted: One "fake" boyfriend, Practically perfect in every way'
    },
    {
        id: '4',
        name: 'The Bromance Book Club',
        price: 10,
        category: 'Romance',
        img: bromance,
        stock: 3,
        description: 'The first rule of book club: You dont talk about book club.'
    },
    {
        id: '5',
        name: 'Cinderella Is Dead',
        price: 9,
        category: 'Fiction',
        img: cinderella,
        stock: 5,
        description: 'Do not be silent. Raise your voice. Be a light in the dark.'
    },
    
];


export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products);
        }, 2000)
    })
}

export const getProductById = (id) =>{
    return new Promise((res =>{
        setTimeout(()=>{
            res(products.find((prod)=> prod.id === id))
        },2000)
    }))
}