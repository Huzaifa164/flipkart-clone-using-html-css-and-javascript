const categories = [
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1350e22cff9663e7.png?q=100',
        title: 'Top Offers'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d64cae0f8081256a.png?q=100',
        title: 'Mobiles & Tablets'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7dbcda527b648814.png?q=100',
        title: 'Electronics'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e29a070388d534a5.png?q=100',
        title: 'TVs & Appliences'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d44ffc537ed6e241.png?q=100',
        title: 'Fashion'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/994a83c90019fb5f.png?q=100',
        title: 'Beauty'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d300931a0fd1c17e.png?q=100',
        title: 'Home & Furniture'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/2dac2decff60c650.png?q=100',
        title: 'Flights'
    },
    {
        image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100',
        title: 'Grocery'
    }
]

let section1 = document.querySelector('.section-1');

let categoriesHtml = '';

// categories.forEach((category)=>{
//     let div = document.createElement('div');
//     div.classList.add('section-1-item');
//     console.log(div);
//     div.innerHTML = `<img src=${cat} alt="">
//     Top Offers`;
//     console.log(div);
//     section1.appendChild(div);
// })

for(let index = 0; index < categories.length; index++) {
    let div = document.createElement('div');
    div.classList.add('section-1-item');
    console.log(div);
    div.innerHTML = `<img src=${categories[index].image} alt="">
    ${categories[index].title}`;
    console.log(div);
    section1.appendChild(div);
}


// section1.innerHTML = categoriesHtmlArr;



