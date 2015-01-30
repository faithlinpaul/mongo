
// Load 1 million records onto a mongo collection

  use mydb;
  db.mydata.drop();
  for (var i=0;i<=100000000;i++){
      db.mydata.insert( {x:i} ) ;
  }
  
  // Run from shell :
  //  fpaul@fpaul:~/work# mongo < loaddata.js 
