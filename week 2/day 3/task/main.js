function add_data(){
    let name=document.getElementById("name").Value;
    let roll=document.getElementById("roll").Value;
    let email=document.getElementById("email").Value;

    let table=document.getElementsByTagName('table')[0];
    let newrow=table.insertRow(table.rows.length/2+1);

    let cell1=newrow.insertCell(0);
    let cell2=newrow.insertCell(1);
    let cell3=newrow.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML=roll;
    cell3.innerHTML=email;

}
