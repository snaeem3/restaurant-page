import restaurantImgSrc from './images/restaurant1.jpg';
const contentDiv = document.querySelector('#content');

export default function loadHome() {
    // loadImg();
    loadDescription();
    // loadReviews();
    loadRestaurantHours();
    loadLocation();
}

function loadImg() {
    const restaurantImg = new Image();
    restaurantImg.src = restaurantImgSrc;
    contentDiv.appendChild(restaurantImg);
}

function loadDescription() {
    const descriptionText = document.createElement('p');
    descriptionText.textContent = 'We welcome you to Ralph\'s restaurant with locations all over the tri-state area. Since 2002, our restaurants have been serving award-winning food and drinks to give our customers an outstanding experience. We cannot wait to serve you!';
    contentDiv.appendChild(descriptionText);
}

function loadRestaurantHours() {
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours';

    const hoursArray = [['Monday', '4:00 PM - 10:00 PM'], ['Tuesday', '4:00 PM - 10:00 PM']];

    const hoursTable = arrayToTable(hoursArray);
    
    contentDiv.append(hoursHeader,hoursTable);

    function arrayToTable(tableData) {
        const tableResult = document.createElement('table');

        for (let i = 0;i<tableData.length;i++) {
            let row = tableResult.insertRow(-1); // Insert row at end of table
            for(let j= 0;j<tableData[i].length;j++) {
                let cell = row.insertCell(j);
                let cellText = document.createTextNode(tableData[i][j]);
                cell.appendChild(cellText);
            }
        }
        
        return tableResult;
    }
}