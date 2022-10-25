const products = [
    {
        id: '1',
        name: 'The Song of Achilles',
        price: 10,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/81kONtZsITL.jpg',
        stock: 6,
        description:"Achilles, 'the best of all the Greeks', son of the cruel sea goddess Thetis and the legendary king Peleus, is strong, swift, and beautiful, irresistible to all who meet him. Patroclus is an awkward young prince, exiled from his homeland after an act of shocking violence. Brought together by chance, they forge an inseparable bond, despite risking the gods wrath." +      
        "They are trained by the centaur Chiron in the arts of war and medicine, but when word comes that Helen of Sparta has been kidnapped, all the heroes of Greece are called upon to lay siege to Troy in her name. Seduced by the promise of a glorious destiny, Achilles joins their cause, and torn between love and fear for his friend, Patroclus follows. Little do they know that the cruel Fates will test them both as never before and demand a terrible sacrifice."
    },
    {
        id: '2',
        name: 'Atomic Habits',
        price: 12,
        category: 'Non-Fiction',
        img: 'https://m.media-amazon.com/images/I/51-uspgqWIL.jpg' ,
        stock: 3,
        description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones." + 
            "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world`s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."+
            "If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights."
    },
    {
        id: '3',
        name: 'Boyfriend Material',
        price: 13,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51USBx6APlL._SY346_.jpg' ,
        stock: 4,
        description: "Luc O'Donnell is tangentially--and reluctantly--famous. His rock star parents split when he was young, and the father he's never met spent the next twenty years cruising in and out of rehab. Now that his dad's making a comeback, Luc's back in the public eye, and one compromising photo is enough to ruin everything." +
            "To clean up his image, Luc has to find a nice, normal relationship...and Oliver Blackwood is as nice and normal as they come. He's a barrister, an ethical vegetarian, and he's never inspired a moment of scandal in his life. In other words: perfect boyfriend material. Unfortunately apart from being gay, single, and really, really in need of a date for a big event, Luc and Oliver have nothing in common. So they strike a deal to be publicity-friendly (fake) boyfriends until the dust has settled. Then they can go their separate ways and pretend it never happened." +
            "But the thing about fake-dating is that it can feel a lot like real-dating. And that's when you get used to someone. Start falling for them. Don't ever want to let them go."
    },
    {
        id: '4',
        name: 'The Bromance Book Club',
        price: 10,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51dpRyRbquL._SY346_.jpg' ,
        stock: 4,
        description:"The first rule of book club: You don't talk about book club."+
            "Nashville Legends second baseman Gavin Scott's marriage is in major league trouble. He’s recently discovered a humiliating secret: his wife Thea has always faked the Big O. When he loses his cool at the revelation, it’s the final straw on their already strained relationship. Thea asks for a divorce, and Gavin realizes he’s let his pride and fear get the better of him."+
            "Distraught and desperate, Gavin finds help from an unlikely source: a secret romance book club made up of Nashville's top alpha men. With the help of their current read, a steamy Regency titled Courting the Countess, the guys coach Gavin on saving his marriage. But it'll take a lot more than flowery words and grand gestures for this hapless Romeo to find his inner hero and win back the trust of his wife."
    },
    {
        id: '5',
        name: 'Cinderella Is Dead',
        price: 9,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/51GHN3VDPCL._SY346_.jpg',
        stock: 5,
        description:"It’s 200 years after Cinderella found her prince, but the fairy tale is over. Teen girls are now required to appear at the Annual Ball, where the men of the kingdom select wives based on a girl’s display of finery. If a suitable match is not found, the girls not chosen are never heard from again."+
            "Sixteen-year-old Sophia would much rather marry Erin, her childhood best friend, than parade in front of suitors. At the ball, Sophia makes the desperate decision to flee, and finds herself hiding in Cinderella’s mausoleum. There, she meets Constance, the last known descendant of Cinderella and her step sisters. Together they vow to bring down the king once and for all–and in the process, they learn that there’s more to Cinderella’s story than they ever knew . . ."+
            "This fresh take on a classic story will make readers question the tales they’ve been told, and root for girls to break down the constructs of the world around them."
    },
    {
        id: '6',
        name: 'Daisy Jones & The Six',
        price: 10,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/51NLaLPY6HL._SY346_.jpg' ,
        stock: 8,
        description:"Everyone knows Daisy Jones & The Six, but nobody knows the real reason why they split at the absolute height of their popularity…until now."+
            "Daisy is a girl coming of age in L.A. in the late sixties, sneaking into clubs on the Sunset Strip, sleeping with rock stars, and dreaming of singing at the Whisky a Go-Go. The sex and drugs are thrilling, but it’s the rock and roll she loves most. By the time she’s twenty, her voice is getting noticed, and she has the kind of heedless beauty that makes people do crazy things."+
            "Another band getting noticed is The Six, led by the brooding Billy Dunne. On the eve of their first tour, his girlfriend Camila finds out she’s pregnant, and with the pressure of impending fatherhood and fame, Billy goes a little wild on the road. Daisy and Billy cross paths when a producer realizes the key to supercharged success is to put the two together. What happens next will become the stuff of legend. "
    },
    {
        id: '7',
        name: 'It Ends with Us',
        price: 11,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51Zu0ZwT0jL.jpg',
        stock: 8,
        description:"Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true."+
            "Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place."+
            "As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened."
    },
    {
        id: '8',
        name: 'The Seven Husbands of Evelyn Hugo',
        price: 9,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/41Ohor4O+rL.jpg',
        stock: 9,
        description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?" +
            "Monique is not exactly on top of the world. Her husband has left her, and her professional life is going nowhere. Regardless of why Evelyn has selected her to write her biography, Monique is determined to use this opportunity to jumpstart her career."+
            "Summoned to Evelyn's luxurious apartment, Monique listens in fascination as the actress tells her story. From making her way to Los Angeles in the 1950s to her decision to leave show business in the ‘80s, and, of course, the seven husbands along the way, Evelyn unspools a tale of ruthless ambition, unexpected friendship, and a great forbidden love. Monique begins to feel a very real connection to the legendary star, but as Evelyn's story near its conclusion, it becomes clear that her life intersects with Monique's own in tragic and irreversible ways."
    },
    {
        id: '9',
        name: 'The Girl on the Train',
        price: 8,
        category: 'Thriller',
        img: 'https://m.media-amazon.com/images/I/51KQwCQ326L._SX331_BO1,204,203,200_.jpg',
        stock: 4,
        description:"Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. She’s even started to feel like she knows the people who live in one of the houses. “Jess and Jason,” she calls them. Their life—as she sees it—is perfect. If only Rachel could be that happy."+
            "And then she sees something shocking. It’s only a minute until the train moves on, but it’s enough. Now everything’s changed. Now Rachel has a chance to become a part of the lives she’s only watched from afar. Now they’ll see; she’s much more than just the girl on the train..."
    },
    {
        id: '10',
        name: 'The Hating Game',
        price: 12,
        category: 'Romance',
        img: 'https://m.media-amazon.com/images/I/51zQ86FWQ1L._SX330_BO1,204,203,200_.jpg',
        stock: 10,
        description:"Lucy Hutton has always been certain that the nice girl can get the corner office. She’s charming and accommodating and prides herself on being loved by everyone at Bexley & Gamin. Everyone except for coldly efficient, impeccably attired, physically intimidating Joshua Templeman. And the feeling is mutual."+
            "Trapped in a shared office together 40 (OK, 50 or 60) hours a week, they’ve become entrenched in an addictive, ridiculous never-ending game of one-upmanship. There’s the Staring Game. The Mirror Game. The HR Game. Lucy can’t let Joshua beat her at anything—especially when a huge new promotion goes up for the taking."+
            "If Lucy wins this game, she’ll be Joshua’s boss. If she loses, she’ll resign. So why is she suddenly having steamy dreams about Joshua, and dressing for work like she’s got a hot date? After a perfectly innocent elevator ride ends with an earth shattering kiss, Lucy starts to wonder whether she’s got Joshua Templeman all wrong. Maybe Lucy Hutton doesn’t hate Joshua Templeman. And maybe, he doesn’t hate her either. Or maybe this is just another game."
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