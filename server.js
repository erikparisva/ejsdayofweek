const port = 3000

var express = require('express')
var app = express()
app.set('view engine', 'ejs');

function get_day_of_week(date) {
    var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days_of_week[date.getDay()];
      /*var dateString = "";  
      switch (date.getDay()) {
        case 0:
            dateString = "Sunday";
            break;
        case 1:
            dateString = "Monday";
            break;
        case 2:
            dateString = "Tuesday";
            break;
        case 3:
            dateString = "Wednesday";
            break;
        }  
        return dateString; */
    };

    app.get('/',  (req, res) => {
        var today = new Date();
        //res.send(get_day_of_week(today));
        res.render('day_of_week', {date: today, day_of_week: get_day_of_week(today)});
    });
    app.get('/birthday',  (req, res) => {
        var birthday = new Date(2000, 10, 22);
        //res.send(get_day_of_week(today));
        res.render('day_of_week', {date: birthday, day_of_week: get_day_of_week(birthday)});
    });

app.listen(port, () => console.log(`start listening on ${port}`));
