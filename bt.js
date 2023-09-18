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



// var url = "https://jsonplaceholder.typicode.com/todos";
// var xhr = new XMLHttpRequest()
// xhr.open("GET", url, true)
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText)
//     if (xhr.readyState == 4 && xhr.status === 200) {
//         var users = JSON.parse(xhr.responseText)
//         console.table(users)
//     } else {
//         console.err(users);
//     }
// }
// xhr.send(null)


var url = "https://jsonplaceholder.typicode.com/todos";
var xhr = new XMLHttpRequest()
xhr.open("GET", url + '/1', true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText)
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.table(users)
    } else {
        console.err(users);
    }
}
xhr.send(null)


// var url = "https://my-json-server.typicode/demo/posts"

// var data = {}
// data.firstname = "John"
// data.lastname = "Snow"
// var json = JSON.stringify(data)
// var xhr = new XMLHttpRequest()
// xhr.open("POST", url, true)
// xhr.setRequestHeader('Content-type', 'application/json;charset=urf-8')
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText)
//     if (xhr.readyState == 4 && xhr.status == "201") {
//         console.table(users);
//     } else {
//         console.error(userss);
//     }
// }
// xhr.send(json)


// var url = "http://localhost:8080/api/v1/users"
// var data = {}
// data.firstname = "John2"
// data.lastname = "Snow2"
// var json = JSON.stringify(data)
// var xhr = new XMLHttpRequest()
// xhr.open("PUT", url + '/12', true)
// xhr.setRequestHeader('Content-type', 'application/json;charset=urf-8')
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText)
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(userss);
//     }
// }
// xhr.send(json)



// var url = "https://jsonplaceholder.typicode.com/todos/1"
// var xhr = new XMLHttpRequest()
// xhr.open("DELETE", url + "/12", true)
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText)
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(null)