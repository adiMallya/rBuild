function minArea()
{ 
var area = document.estform.grnd;    
var numbers = /^[0-9]+$/;
if(area.value.match(numbers) && parseInt(area.value)>= 1200)
{
    setSuccesFor(area);      
    return true;
}
else
{
    setErrorFor(area);
    if(area.value === ''){
        area.value = 1200;
        setSuccesFor(area);
    }
    return false;
}
}

function setErrorFor(input){
    const parent = input.parentElement;
    parent.className = 'col-75 error';
}

function setSuccesFor(input){
    const parent = input.parentElement;
    parent.className =  'col-75 success';
}

function paintPrice(bhk,type,area){
    const dfarea=1200;
    var budget = {1:"86566",2:"88619",3:"90315",4:"91755",5:"93004"};
    var basic = {1:"97179",2:"99452",3:"101328",4:"102921",5:"104301"};
    var premium = {1:"113099",2:"115702",3:"117849",4:"119670",5:"121246"};
    var budget1 = {1:"44",2:"46",3:"48",4:"50",5:"52"};
    var basic1 = {1:"50",2:"52",3:"54",4:"56",5:"58"};
    var premium1 = {1:"56",2:"58",3:"60",4:"62",5:"64"};
    switch(type){
        case "budget":{
              if(area==dfarea){
                 if(bhk==1){
                     return parseInt(budget['1']);
                 }
                 else if(bhk==2){
                     return parseInt(budget['2']);
                 }
                 else if(bhk==3){
                     return parseInt(budget['3']);
                 }
                 else if(bhk==4){
                     return parseInt(budget['4']);
                 }
                 else{
                     return parseInt(budget['5']);
                 }
              }
              else{
              const diff=area-dfarea;
              if(bhk==1){
                  return (parseInt(budget['1'])+(diff*parseInt(budget1['1'])));
              }
              else if(bhk==2){
                return (parseInt(budget['2'])+(diff*parseInt(budget1['2'])));
              }
              else if(bhk==3){
                return (parseInt(budget['3'])+(diff*parseInt(budget1['3'])));
              }
              else if(bhk==4){
                return (parseInt(budget['4'])+(diff*parseInt(budget1['4'])));
              }
              else{
                return (parseInt(budget['5'])+(diff*parseInt(budget1['5'])));
              }
              }
        }
        case "basic":{ 
            if(area==dfarea){
               if(bhk==1){
                   return  parseInt(basic['1']);
               }
               else if(bhk==2){
                   return parseInt(basic['2']);
               }
               else if(bhk==3){
                   return parseInt(basic['3']);
               }
               else if(bhk==4){
                   return parseInt(basic['4']);
               }
               else{
                   return parseInt(basic['5']);
               }
            }
            else{
            const diff=area-dfarea;
            if(bhk==1){
                return (parseInt(basic['1'])+(diff*parseInt(basic1['1'])));
            }
            else if(bhk==2){
              return (parseInt(basic['2'])+(diff*parseInt(basic1['2'])));
            }
            else if(bhk==3){
              return (parseInt(basic['3'])+(diff*parseInt(basic1['3'])));
            }
            else if(bhk==4){
              return (parseInt(basic['4'])+(diff*parseInt(basic1['4'])));
            }
            else{
              return (parseInt(basic['5'])+(diff*parseInt(basic1['5'])));
            }
            }
        }
        case "premium":{
            if(area==dfarea){
               if(bhk==1){
                   return parseInt(premium['1']);
               }
               else if(bhk==2){
                   return parseInt(premium['2']);
               }
               else if(bhk==3){
                   return parseInt(premium['3']);
               }
               else if(bhk==4){
                   return parseInt(premium['4']);
               }
               else{
                   return parseInt(premium['5']);
               }
            }
            else{
            const diff=area-dfarea;
            if(bhk==1){
                return (parseInt(premium['1'])+(diff*parseInt(premium1['1'])));
            }
            else if(bhk==2){
              return (parseInt(premium['2'])+(diff*parseInt(premium1['2'])));
            }
            else if(bhk==3){
              return (parseInt(premium['3'])+(diff*parseInt(premium1['3'])));
            }
            else if(bhk==4){
              return (parseInt(premium['4'])+(diff*parseInt(premium1['4'])));
            }
            else{
              return (parseInt(premium['5'])+(diff*parseInt(premium1['5'])));
            }
            }
        }
    }
}                             

function flooringPrice(type,area){
     const dfarea=1200;
     var floor = {tiles:"99000",marble:"112500",granite:"103500"};
     var floor1 ={tiles:"82",marble:"94",granite:"87"};
     switch(type){
         case "tiles" :{
             if(area==dfarea){
                 return parseInt(floor['tiles']);
             }
             else{
                 const diff = area-dfarea;
                 return (parseInt(floor['tiles'])+(diff*parseInt(floor1['tiles'])));
             }
         } 
         case "marble":{
            if(area==dfarea){
                return parseInt(floor['marble']);
            }
            
            else{
                const diff = area-dfarea;
                return (parseInt(floor['marble'])+(diff*parseInt(floor1['marble'])));
            }
         }
        case "granite":{
            if(area==dfarea){
                return parseInt(floor['granite']);
            }
            else{
                const diff = area-dfarea;
                return (parseInt(floor['granite'])+(diff*parseInt(floor1['granite'])));
            }
        }
     }    
}

function totalPrice(){
  var area = parseInt(document.getElementById("grnd").value);
  var floor = parseInt(document.getElementById("floors").value);
  var bhk = parseInt(document.getElementById("bhk").value);
  var paint = document.getElementById("paint").value;
  var ftype = document.getElementById("ftype").value;
  if(area>=1200){
  const pprice = paintPrice(bhk,paint,area);
  const fprice = flooringPrice(ftype,area);
  const total= pprice + (floor * fprice);
  document.getElementById("output").innerHTML = "Rs "+total;
  }
  else{
      setErrorFor(area);
  }
}