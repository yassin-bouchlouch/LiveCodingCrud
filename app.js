
function affichage() {
  // document.querySelector('table').innerHTML=''
$.ajax({
url:'API/get.php',
datatype:'JSON',
method:'GET',
success: function(data){

  console.log(data)
  document.querySelector('table').innerHTML=`<tr>
  <th>name</th>
  <th>fathername</th>
  <th>rollno</th>
  <th>degree</th>
  <th>branch</th>
  <th>Edit</th>
  <th>Delete</th>
  </tr>`

  let dataArr=JSON.parse(data)
  console.log(dataArr)
  dataArr.forEach(element => {
  document.querySelector('table').innerHTML+=`
  <tr  idofedited=${element.id}>
  <td>${element.name}</td>
  <td>${element.fathername}</td>
  <td>${element.rollno}</td>
  <td>${element.degree}</td>
  <td>${element.branch}</td>
  <td><button class='btnEdit'>Edit</button></td>
  <td><button class='btnDelete'>Delete</button></td>
 
  </tr>`
    
  deleteStudent()  
  });
}
})
}

affichage()




function deleteStudent(){
  document.querySelectorAll('.btnDelete').forEach(element=>{
    element.addEventListener('click',()=>{
     let containerD= element.closest('tr')
     console.log(containerD)
     let containerDId = containerD.getAttribute('idofedited')
     console.log(containerDId)
     $.ajax({
       url:'API/delete.php',
       method:'POST',

       data:{
         sId: containerDId
       },
       success:(data)=>{
         if(data='deltedOk'){
            affichage()
         }
       
       }

     })
  
    })
  })

}