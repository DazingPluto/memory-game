const cardArray = [
    {
        name: 'Sad Lapis',
        img: 'images/965b8587064d568d7dbe9f144d25ed53.jpg'
    },
    {
        name: 'Saphire and Ruby',
        img: 'images/screen_shot_2021_03_30_at_32609_pm.png.webp'
    },
    {
        name: 'Spinel',
        img: 'images/tumblr_e748e8de32ef6721e411c563a7b44677_d4bd2842_1280.png'
    },
    {
        name: 'Connie',
        img: 'images/tumblr_plr223kyk71vyo8ri_1280.png'
    },
    {
        name: 'Diamonds',
        img: 'images/ca-times.brightspotcdn.jpg'
    },
    {
        name: 'Saphire Stenve',
        img: 'images/garnet-steven-universe-pearl-television-show-png-favpng-epAWAPzL1wM7rg0HrmgAwWSsS.jpg'
    },
    {
        name: 'Steven Pearl',
        img: 'images/image-steven-tag-pearl-steven-universe-wiki-steven-universe-steven-tag-pearl-1589095.png'
    },
    {
        name: 'Scared Stevn',
        img: '/images/Snow_Day_211.webp'
    },
    {
        name: 'Sad Lapis',
        img: 'images/965b8587064d568d7dbe9f144d25ed53.jpg'
    },
    {
        name: 'Saphire and Ruby',
        img: 'images/screen_shot_2021_03_30_at_32609_pm.png.webp'
    },
    {
        name: 'Spinel',
        img: 'images/tumblr_e748e8de32ef6721e411c563a7b44677_d4bd2842_1280.png'
    },
    {
        name: 'Connie',
        img: 'images/tumblr_plr223kyk71vyo8ri_1280.png'
    },
    {
        name: 'Diamonds',
        img: 'images/ca-times.brightspotcdn.jpg'
    },
    {
        name: 'Saphire Stenve',
        img: 'images/garnet-steven-universe-pearl-television-show-png-favpng-epAWAPzL1wM7rg0HrmgAwWSsS.jpg'
    },
    {
        name: 'Steven Pearl',
        img: 'images/image-steven-tag-pearl-steven-universe-wiki-steven-universe-steven-tag-pearl-1589095.png'
    },
    {
        name: 'Scared Stevn',
        img: '/images/Snow_Day_211.webp'
    }
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < 17; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images')
        console.log(card, i);
    }
}

createBoard();