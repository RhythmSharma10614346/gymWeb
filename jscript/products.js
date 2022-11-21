$(document).ready(()=>{
    var type;
    var pathname = window.location.search;
    type = pathname.split('=')[1];              
    var search = document.location.search;
      $.getJSON('./prodDetails.json', (data)=>{
        let counter=0;
          data.forEach((Prod)=>{            
            console.log(counter)
              if(search.indexOf(Prod.id) != -1 && Prod.id == type){
                $('.info-container').append('<h2>'+Prod.Name+'</h2>'+
                '<h1> </h1>'+
                '<hr>'+
                '<h4>Product Ratings</h4>'+
                '<h3>Price : € '+Prod.Rate+'</h3>'+
                '<ul>    '+
                '<li class="prod-spec">'+Prod.Spec1+'</li> '+
                '<li class="prod-spec">'+Prod.Spec2+'</li> '+
                '<li class="prod-spec">'+Prod.Spec3+'</li> '+
                '</ul>'+
                '<div>'+
                '<button class="btn btn-gym" type="submit" onclick="openReserve()"  > Reserve Product </button>'+
                '</div>')
                $('#mainImg').attr("src",Prod.ImgURL1)
                $('.img-container').append('<img class="product-img" src='+Prod.ImgURL1+' id="mainImg" alt="product"> '+
                '<br>'+
                '<div style="height: 1rem;" ></div>'+
                '<img class="product-icon" src='+Prod.ImgURL1+' alt="icon" onclick="changeMainImg('+"'"+Prod.ImgURL1+"'"+')">'+
                '<img class="product-icon" src='+Prod.ImgURL2+' alt="icon" onclick="changeMainImg('+"'"+Prod.ImgURL2+"'"+')">'+
                '<img class="product-icon" src='+Prod.ImgURL3+' alt="icon" onclick="changeMainImg('+"'"+Prod.ImgURL3+"'"+')">'+
                '<img class="product-icon" src='+Prod.ImgURL4+' alt="icon" onclick="changeMainImg('+"'"+Prod.ImgURL4+"'"+')">')
              }
              else if(counter<5){
                  $(".ProdLine").append(
                    '<div class="col-sm-12 col-lg-3 col-md-3">'+
'<div class="card">'+
'<img class="more-products card-img-top" src="'+Prod.ImgURL1+'" alt="'+Prod.Name+'">'+
'<div class="card-body">'+
'<h5 class="card-title">'+Prod.Name+'</h5>'+
'<a href="./products.html?id='+Prod.id+'" class="btn btn-primary">More</a>'+
'</div>'+
'</div>'+
'</div>')         
              }
              counter++;
          });
      });
  });    

function openReserve() {
    $("#ReserveModal").modal('show');
  };
  function ReserveComplete(){
    $("#ReserveModal").modal('hide');
  }