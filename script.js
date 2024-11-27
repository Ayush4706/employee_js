const empData=document.querySelector("#inputForm");

const btn=document.querySelector(".btn");

const empTable=document.querySelector("tbody")

var empDataArray=[];

empData.addEventListener('submit',(e)=>{
    e.preventDefault();

    const formData={
        id:document.querySelector('#id').value,
        name:document.querySelector('#name').value,
        city:document.querySelector('#city').value
    }
    empDataArray.push(formData);
    console.log(formData);

    updateTableData();
    

})

function updateTableData(){
    empTable.innerHTML='';
    empDataArray.forEach((e)=>{
        const row=document.createElement('tr');

        const id=document.createElement('td');
        id.textContent=e.id;
        row.appendChild(id);

        const name=document.createElement('td');
        name.textContent=e.name;
        row.appendChild(name);

        const city=document.createElement('td');
        city.textContent=e.city;
        row.appendChild(city);

        const dlt=document.createElement('button');
        dlt.innerText='Delete';
        row.appendChild(dlt);


        empTable.appendChild(row);


    })


}




