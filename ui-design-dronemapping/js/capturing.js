const batteryPercentage = 90;
const storage = 50;
var batteryChart, storageChart;

$(document).ready(function() {
    renderCharts(0, 0);
    setTimeout(function() { 
        batteryChart.set(batteryPercentage);
        storageChart.set(storage);
        $(':root').css('--fill-battery', correctChart(batteryPercentage, 'battery'));
        $(':root').css('--fill-storage', correctChart(storage, 'storage'));
    }, 200)
});

const renderCharts = function(batteryValue, storageValue) {
    batteryChart = drawChart(batteryValue, 'battery');
    storageChart = drawChart(storageValue, 'storage');
}

const correctChart = function(value, type) {
    if ((type == 'battery' && value < 33) || (type == 'storage' && value > 66)) return '#F15454'; // 🔴
    else if ((type == 'battery' || 'storage') && (value >= 33 && value <= 66)) return '#FFF172'; // 🟡
    else return '#05FF00'; // 🟢
}

const drawChart = function(value, type) {
    return new ldBar(`.${type}-chart`, {
        "stroke": correctChart(value, type),
        "stroke-width": 6,
        "value": value
    });
}


