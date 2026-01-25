
// 1 . Lecture : Introduction to Objects :
    // Creating objects using object literal and Object constructor
    let car = {
        brand:"Toyota",
        colour:"red",
        year:2020
    };

    let std= new Object();
    std.name="mehak";
    std.age=19;
    std.course='btech';

    console.log(car);
    console.log(std);

    // Accessing object properties :dot notation and bracket

    console.log(std.name);
    console.log(car["colour"]);

    // why use bracket notation if we already have dot notation

    let char={
        name:"tanu",
        age:56, 
        "user_id":345678};
    let prop = "age";
    console.log(char.prop); //undefined(dot)
    console.log(char[prop]); //output :56 
    console.log(char["user_id"]); // 345678 (special char variable)

// 2. Lecture :