function getRow(white, black) {
    return "<tr><td>" + white + "</td><td>" + black + "</td></tr>";
}

var colors = [
    ["white", "black"],
    ["black", "white"],
    ["white", "black"]
];

var rows = '';

// colors.forEach(function(color) {
//     rows += getRow(color[0], color[1]); // 0 - prima coloana, 1 - a doua coloana
// });

for (var i = 0; i < colors.length; i ++) {
    var color = colors[i];
    rows += getRow(color[0], color[1]);
}

$('#table_1 tbody').html(rows);

rows = '';

