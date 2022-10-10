const products = [
    {
        id: '1',
        name: 'The Song of Achilles',
        price: 10,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/81kONtZsITL.jpg',
        stock: 6,
        description: 'We were like gods at the dawning of the world, and our joy was so bright we could see nothing else but the other.'
    },
    {
        id: '2',
        name: 'Atomic Habits',
        price: 12,
        category: 'Non-Fiction',
        img: 'https://m.media-amazon.com/images/I/51-uspgqWIL.jpg' ,
        stock: 3,
        description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones'
    },
    {
        id: '3',
        name: 'Boyfriend Material',
        price: 13,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51USBx6APlL._SY346_.jpg' ,
        stock: 4,
        description: 'Wanted: One "fake" boyfriend, Practically perfect in every way'
    },
    {
        id: '4',
        name: 'The Bromance Book Club',
        price: 10,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51dpRyRbquL._SY346_.jpg' ,
        stock: 4,
        description: 'The first rule of book club: You dont talk about book club.'
    },
    {
        id: '5',
        name: 'Cinderella Is Dead',
        price: 9,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/51GHN3VDPCL._SY346_.jpg',
        stock: 5,
        description: 'Do not be silent. Raise your voice. Be a light in the dark.'
    },
    {
        id: '6',
        name: 'Daisy Jones & The Six',
        price: 10,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/51NLaLPY6HL._SY346_.jpg' ,
        stock: 8,
        description: 'Everyone knows DAISY JONES & THE SIX, but nobody knows the reason behind their split at the absolute height of their popularity . . . until now.'
    },
    {
        id: '7',
        name: 'It Ends with Us',
        price: 11,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51Zu0ZwT0jL.jpg',
        stock: 8,
        description: 'Everyone knows DAISY JONES & THE SIX, but nobody knows the reason behind their split at the absolute height of their popularity . . . until now.'
    },
    {
        id: '8',
        name: 'The Seven Husbands of Evelyn Hugo',
        price: 9,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/41Ohor4O+rL.jpg',
        stock: 9,
        description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?'
    },
    {
        id: '9',
        name: 'The Girl on the Train',
        price: 8,
        category: 'Thriller',
        img: 'https://m.media-amazon.com/images/I/51KQwCQ326L._SX331_BO1,204,203,200_.jpg',
        stock: 4,
        description: 'I have never understood how people can blithely disregard the damage they do by following their hearts. Who was it said that following your heart is a good thing? It is pure egotism, a selfishness to conquer all.'
    },
    {
        id: '10',
        name: 'The Hating Game',
        price: 12,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51zQ86FWQ1L._SX330_BO1,204,203,200_.jpg',
        stock: 10,
        description: 'Nemesis: 1- An opponent or rival whom a person cannot best or overcome. 2- A person’s undoing. 3- Joshua Templeman'
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
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find((prod)=> prod.id === id));
        },2000)
    })
}

export const getProductByCategory = (categoryId) =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(products.filter(prod=> prod.category === categoryId));
        },1000)
    })
}