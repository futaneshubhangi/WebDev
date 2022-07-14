function add_data(){
    var data = document.getElementById("new_data").value;
    console.log(data);
    var item = document.createElement("li");
    item.innerText = data;
    document.getElementById("unordered_list").appendChild(item);
    console.log("Append Successfull !!")
}