function compareAge( a, b ) {
    if ( a.age < b.age ){
      return -1;
    }
    if ( a.age> b.age ){
      return 1;
    }
    return 0;
  }

  function compareName( a, b ) {
    if ( a.name > b.name ){
      return -1;
    }
    if ( a.name< b.name ){
      return 1;
    }
    return 0;
  }


  array=[{ name: "John", age: 25 ,id:1},
        { name: "Pete", age: 30,id:2 },
       {name: "Mary", age: 28,id:3 },
       { name: "neel", age: 38,id:4 },
       { name: "romit", age: 20,id:5 },
       { name: "smit", age: 15,id:6 },
       { name: "smith", age: 26,id:7 },
       { name: "rupesh", age: 45,id:8 },
       { name: "parth", age: 50,id:9 },
       { name: "jay", age: 54,id:10 }]
  array.sort( compareAge);
  console.log(array);

  console.log("-----------------------------------");

  array1=[{ name:"john", age: 25 ,id:1},
  { name:"pete", age: 30,id:2 },
 {name: "mary", age: 28,id:3 },
 { name: "neel", age: 38,id:4 },
 { name: "romit", age: 20,id:5 },
 { name: "smit", age: 15,id:6 },
 { name: "smith", age: 26,id:7 },
 { name: "rupesh", age: 45,id:8 },
 { name: "parth", age: 50,id:9 },
 { name: "jay", age: 54,id:10 }]

 array1.sort( compareName);
 console.log(array1);