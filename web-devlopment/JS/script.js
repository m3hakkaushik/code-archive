/* 1 . Lecture : Introduction to Objects :
     Creating objects using object literal and Object constructor  */
    // let car = {
    //     brand:"Toyota",
    //     colour:"red",
    //     year:2020
    // };

    // let std= new Object();
    // std.name="mehak";
    // std.age=19;
    // std.course='btech';

    // console.log(car);
    // console.log(std);

    /*Accessing object properties :dot notation and bracket  */

    // console.log(std.name);
    // console.log(car["colour"]);

    /* why use bracket notation if we already have dot notation */

    // let char={
    //     name:"tanu",
    //     age:56, 
    //     "user_id":345678};
    // let prop = "age";
    // console.log(char.prop); //undefined(dot)
    // console.log(char[prop]); //output :56 
    // console.log(char["user_id"]); // 345678 (special char variable)

/* 2. Lecture : CRUD and Copy in Objects  */
    // let ch={
    //     name:"NITESH",
    //     age:56,
    //     address:{city:"Mumbai"},
    //     "user_id":345678,
    // };
    // console.log(ch);

    // ch.course='Btech'; //create
    // ch.age=19;         // update dot
    // ch['user_id']=3455432; //update bracket
    // delete ch.city         // delete
    // console.log(ch);

/* Create an object literal named car.
1. Give it three properties: make with a value of "Toyota", model with a value of "Camry", and year with a value of 2021.
2. Log the entire car object to the console.
3. Log just the year of the car to the console using dot notation. */
    // console.log("full details:", car);
    // console.log("car model:",car.year); 
/*shallow copy */
    // let ch2={...ch};
    // ch2.address.city="delhi";
    // console.log(ch.address);
    // console.log(ch2.address);
/* deep copy... (for JSON.. use JSON.parse(JSON.stringify.key)) */
    // const original ={ch};
    // const deepcopy = structuredClone(original); 
    // console.log(deepcopy)

/* Lecture: Objects Methods*/

/* object handling methods: 
1. extracting/deconstructing object data
2. looping through objects
3. creating &merging objects*/

    // const user ={ name: 'SHADAV' , age: 34}; //extracting/deconstructing object data
    // console.log(Object.keys(user)); // Object.keys(obj)
    // console.log(Object.values(user)) // Object.values(obj)
    // console.log(Object.entries(user)) // Object.entries(obj)

/*looping*/
    // const user ={ name: 'SHADAV' , age: 34, isadmin:true};
    // for (const key in user){
    //     console.log(`${key}: ${user[key]}`);
    // }

/*creating and merging loops*/
    // const a={name:'mehak'};
    // const b={age:19};

    // Object.assign(a,b);
    // console.log(a); //{name: 'mehak', age: 19}
    // const merged={...a,...b};
    // console.log(merged); //{name: 'mehak', age: 19}
    // const entries=[['name','sadav'],['age',23]]
    // const obj=Object.fromEntries(entries)
    // console.log(obj) //{name: 'sadav', age: 23}

/* Lecture: Introduction to DOM Traversal*/
    // const container = document.getElementById("container");
    // container.firstElementChild.style.color ='blue';
    // container.lastElementChild.style.fontWeight ='bold';
    // console.log(container);

    const container2 = document.getElementsByClassName("container2");
    console.log(container2);
