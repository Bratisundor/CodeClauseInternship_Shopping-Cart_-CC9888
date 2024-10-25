
const items = [
    {
        id: '001',
        item_image: '/Book Images/1.png',
        company_name: 'Karunamoyee Book Center',
        item_name:'Glencoe-World History',
        original_price: 849,
        current_price: 649,
        discount_percentage: 24,
        rating: {
            stars: 4.5,
            noOfReviews: 1400,
        },
    },
    {
        id: '002',
        item_image: '/Book Images/2.png',
        company_name: 'Biswas Book Center',
        item_name:'Mahesh Story Book',
        original_price: 350,
        current_price: 327,
        discount_percentage: 7,
        rating: {
            stars: 5.0,
            noOfReviews: 2630,
        },
    },
    {
        id: '003',
        item_image: '/Book Images/3.png',
        company_name: 'Modern Book House',
        item_name:'The Misery House',
        original_price: 822,
        current_price: 752,
        discount_percentage: 9,
        rating: {
            stars: 4.6,
            noOfReviews: 1700,
        },
    },
    {
        id: '004',
        item_image: '/Book Images/4.png',
        company_name: 'Sen Book Stall',
        item_name:'The Oddmire',
        original_price: 773,
        current_price: 608,
        discount_percentage: 21,
        rating: {
            stars: 4.9,
            noOfReviews: 2000,
        },
    },
    {
        id: '005',
        item_image: '/Book Images/5.png',
        company_name: 'The Book House',
        item_name:'The Adventures Guild',
        original_price: 750,
        current_price: 574,
        discount_percentage: 23,
        rating: {
            stars: 4.7,
            noOfReviews: 1925,
        },
    },
    {
        id: '006',
        item_image: '/Book Images/6.png',
        company_name: 'Maa Saraswati Book Center',
        item_name:'Love Unscripted',
        original_price: 1505,
        current_price: 1308,
        discount_percentage: 13,
        rating: {
            stars: 3.9,
            noOfReviews: 968,
        },
    },
    {
        id: '007',
        item_image: '/Book Images/7.png',
        company_name: 'Ramkrishna Puthi-Patra',
        item_name:'Indian Contributions to Science',
        original_price: 2396,
        current_price: 1946,
        discount_percentage: 19,
        rating: {
            stars: 5.0,
            noOfReviews: 5288,
        },
    },
    {
        id: '008',
        item_image: '/Book Images/8.png',
        company_name: 'Bidya-Buddhi Book Center',
        item_name:'History of Science in India (2nd edition)',
        original_price: 499,
        current_price: 391,
        discount_percentage: 22,
        rating: {
            stars: 4.5,
            noOfReviews: 1400,
        },
    },
    {
        id: '009',
        item_image: '/Book Images/9.png',
        company_name: 'Shil Book House',
        item_name:'The Greeks at War',
        original_price: 14617,
        current_price: 10819,
        discount_percentage: 26,
        rating: {
            stars: 5.0,
            noOfReviews: 4812,
        },
    },
    {
        id: '0010',
        item_image: '/Book Images/10.png',
        company_name: 'Indian Book Stall',
        item_name:'LoveSick',
        original_price: 699,
        current_price: 535,
        discount_percentage: 23,
        rating: {
            stars: 4.2,
            noOfReviews: 1218,
        },
    },
    {
        id: '0011',
        item_image: '/Book Images/11.png',
        company_name: 'Ganesh Book Stall',
        item_name:'Sanchayita',
        original_price: 350,
        current_price: 250,
        discount_percentage: 29,
        rating: {
            stars: 4.9,
            noOfReviews: 4578,
        },
    },
    {
        id: '0012',
        item_image: '/Book Images/12.png',
        company_name: 'PK Roy Book Center',
        item_name:'Hanging House',
        original_price: 960,
        current_price: 960,
        discount_percentage: 0,
        rating: {
            stars: 5.0,
            noOfReviews: 10000,
        },
    },

];

window.onload = function() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
};

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';  
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';  
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
        <div class="item-container">
            <img src="${item.item_image}" alt="item image" class="item-image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.noOfReviews} Reviews
            </div>
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add to Cart</button>
        </div>`;
    });
    itemsContainerElement.innerHTML = innerHtml;
}