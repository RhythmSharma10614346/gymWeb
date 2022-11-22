$(document).ready(()=>{
    document.getElementById('search').focus();
      $.getJSON('./prodDetails.json', (data)=>{
          data.forEach((Prod)=>{              
                $('#allProducts').append(
                    '<div class="col-sm-12 col-lg-4 col-md-4 product-container '+Prod.Name+'">'+
'<div class="card">'+
'<img class="more-products card-img-top" src="'+Prod.ImgURL1+'" alt="'+Prod.Name+'">'+
'<div class="card-body">'+
'<h5 class="card-title">'+Prod.Name+'</h5>'+
'<a href="./products.html?id='+Prod.id+'" class="btn btn-gym">Details</a>'+
'</div>'+
'</div>'+
'</div>' )                
          });
      });
  });    
  function searchProduct() {
    let productName = document.getElementById('search').value;
    input = productName.toLowerCase();
    console.log(input);
    let resList = document.getElementsByClassName('product-container');
    console.log(resList);
    for (i = 0; i < resList.length; i++) {
        if (!resList[i].className.toLowerCase().includes(input)) {
            resList[i].style = "display: none";
        }
        else {
            resList[i].style = "display: block";
        }
    }
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }