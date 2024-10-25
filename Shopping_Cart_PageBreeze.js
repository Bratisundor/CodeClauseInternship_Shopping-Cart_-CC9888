let bagItems;


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

window.onload=function displayBagIcon() {
    let change = document.getElementById('change-it');

    // let bagItemCountElement = document.getElementsByClassName('bag_item_count');
    // if (bagItems.length > 0) {
    //     bagItemCountElement.style.visibility = 'visible'; 
        // console.log(bagItemCountElement.innerHTML ); 
        change.innerHTML =localStorage.bagItems.length;
        console.log(bagItems.item);
       
    //}
    //  else {
    //     bagItemCountElement.style.visibility = 'hidden';  
    // }
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
