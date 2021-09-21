const batteryPercentage = {
    value: 30,
    total: 100
};
const storage = {
    value: 10,
    total: 100
};
const imagesTaken = {
    value: 50,
    total: 150
};
var batteryChart, storageChart, imagesChart;

$(document).ready(function() {
    renderCharts(0, 0, 0);
    setTimeout(function() { 
        batteryChart.set(batteryPercentage.value);
        storageChart.set(storage.value);
        imagesChart.set(imagesTaken.value);
        $(':root').css('--fill-battery', correctChart(batteryPercentage.value, 'battery', batteryPercentage.total));
        $(':root').css('--fill-storage', correctChart(storage.value, 'storage', storage.total));
        $(':root').css('--fill-images', correctChart(imagesTaken.value, 'images', imagesTaken.total));
    }, 200)
});

const renderCharts = function(batteryValue, storageValue, imagesValue) {
    batteryChart = drawChart(batteryValue, 'battery', batteryPercentage.total);
    storageChart = drawChart(storageValue, 'storage', storage.total);
    imagesChart = drawChart(imagesValue, 'images', imagesTaken.total)
}

const correctChart = function(value, type, totalValue) {
    let dividedValue = (totalValue / 3);

    if (type == 'battery' ) {
        if (value < dividedValue) return '#F15454'; // 🔴
        else if (value >= dividedValue && value <= dividedValue * 2) return '#FFF172'; // 🟡)
        else return '#05FF00'; // 🟢
    } else {
        if (value > dividedValue * 2) return '#F15454'; // 🔴
        else if (value >= dividedValue && value <= dividedValue * 2) return '#FFF172'; // 🟡)
        else return '#05FF00'; // 🟢
    }
}

const drawChart = function(value, type, total) {
    return new ldBar(`.${type}-chart`, {
        "stroke": correctChart(value, type, total),
        "stroke-width": 6,
        "value": value
    });
}