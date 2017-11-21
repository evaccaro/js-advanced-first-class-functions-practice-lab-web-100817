// Code your solution in this file!
function logDriverNames(arr){
  arr.forEach(function(elem){
    console.log(elem.name);
  });
}

function logDriversByHometown(arr, location){
  arr.forEach(function(elem){
    if (elem.hometown === location){
      console.log(elem.name);
    }
  });
}

function driversByRevenue(arr){
  return arr.slice().sort(function(a, b){
    return a.revenue == b.revenue ? 0: +(a.revenue > b.revenue) || -1;
  });
}

function driversByName(arr){
  return arr.slice().sort(function(a,b){
    return a.name == b.name ? 0: +(a.name > b.name) || -1;
  });
}

function totalRevenue(arr){
  return arr.reduce(function(sum, curr){
    return sum + curr.revenue;
  }, 0);
}

function averageRevenue(arr){
  return totalRevenue(arr)/arr.length;
}
