let groceries=
[{Item:'Rice',Quantity:5,Price:300},
{Item:'Dal',Quantity:2,Price:200},
{Item:'Sugar',Quantity:1,Price:70},
{Item:'Salt',Quantity:3,Price:75},
{Item:'Atta',Quantity:10,Price:495},
{Item:'Paste',Quantity:0.5,Price:95},]

function getgroceries() {
    let row = " "
   /* for(let i=0;i<=groceries.length-1;i++)  {      
        row=row + `<tr>                             
        <td>${groceries[i].Item}</td>                 
        <td>${groceries[i].Quantity}</td>              
        <td>${groceries[i].Price}</td>                   
        </tr>`                                              
    }*/
    for(grocery of groceries)  {      
        row=row + `<tr>                             
        <td>${grocery.Item}</td>                 
        <td>${grocery.Quantity}</td>              
        <td>${grocery.Price}</td>                   
        </tr>`                                              
    }
    document.getElementById('tbody_data').innerHTML=row
}