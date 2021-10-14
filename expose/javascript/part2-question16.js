for(const property in s){
    if(property[0] === 'r' || s[property] %2 === 1){
      console.log(s[property]);
    }
  }