let result = 0
function digital_root(n) {
  let all = 0;
  if(String(n).length > 1){
    String(n).split('').map(num => all += Number(num))
    if(String(all).length > 1){
        digital_root(all)
    }else if(String(all).length === 1){
           result = all
    }
  }
  return result
}
console.log(digital_root(1));