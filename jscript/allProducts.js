$(document).ready(()=>{
    var type;
    var pathname = window.location.search;
    type = pathname.split('=')[1];              
    var search = document.location.search;
      $.getJSON('./prodDetails.json', (data)=>{
          data.forEach((Prod)=>{              
                $('#allProducts').append(
                    '<div class="col-sm-12 col-lg-3 col-md-3">'+
'<div class="card">'+
'<img class="more-products card-img-top" src="'+Prod.ImgURL1+'" alt="'+Prod.Name+'">'+
'<div class="card-body">'+
'<h5 class="card-title">'+Prod.Name+'</h5>'+
'<a href="./products.html?id='+Prod.id+'" class="btn btn-primary">More</a>'+
'</div>'+
'</div>'+
'</div>' )                
          });
      });
  });    
