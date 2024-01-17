var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0";

}

function hideMenu() {
    navLinks.style.right = "-300px";
}
//display start time 
const date_time1 = new Date('December 21, 2023 12:00:00').getTime();
var f_fun = setInterval(function() {
    //display end time  
    const date_time2 = new Date().getTime();
    //show the difference between start and end time  
    const time_var = date_time1 - date_time2;
    //convert difference time in days  
    const days_data = Math.floor(time_var / (1000 * 60 * 60 * 24));
    //convert difference time in hours  
    const hours_data = Math.floor((time_var % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //convert difference time in minutes  
    const minutes_data = Math.floor((time_var % (1000 * 60 * 60)) / (1000 * 60));
    //convert difference time in the second  
    const seconds_data = Math.floor((time_var % (1000 * 60)) / 1000);
    //display countdown timer   
    document.getElementById("day_value").innerHTML = days_data;
    document.getElementById("hour_value").innerHTML = hours_data;
    document.getElementById("minute_value").innerHTML = minutes_data;
    document.getElementById("second_value").innerHTML = seconds_data;
}, 5);