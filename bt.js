// const urlBacom = "https://jsonplaceholder.typicode.com/todos/1";
// (function() {
//     $.ajax({
//             method: "GET",
//             url: urlBacom,
//             dataType: "json"
//         })
//         .done(function(data) {
//             console.log(data);
//         })
//         .fail(function() {
//             alert("no good")
//         })
// })()



// $.ajax({
//         url: "https://jsonplaceholder.typicode.com/todos/1",
//         beforeSend: function(xhr) {
//             xhr.overrideMimeType("text/planin;charset=x-user-defined")
//         }
//     })
//     .done(function(data) {
//         if (console && console.log) {
//             console.log("Sample of data:", data.slice(0, 100));
//         }
//     })



var url = "http://localhost:8080/api/v1/users";
var xhr = new XMLHttpRequest()
xhr.open("GET", url, true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText)
    if (xhr.readyState == 4 && xhr.status === 200) {
        var users = JSON.parse(xhr.responseText)
        console.table(users)
    } else {
        console.err(users);
    }
}
xhr.send(null)

// var url = "http://localhost:8080/api/v1/users";
// var xhr = new XMLHttpRequest()
// xhr.open("GET", url + '/1', true)
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText)
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users)
//     } else {
//         console.err(users);
//     }
// }
// xhr.send(null)