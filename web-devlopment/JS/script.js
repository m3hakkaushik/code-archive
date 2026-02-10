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

    // const container2 = document.getElementsByClassName("container2");
    // console.log(container2);
    // let count =1
    // const timerID=setInterval(()=>{console.log("interval:"+count); count++;},1000)
    

    // const timeoutID=setInterval(()=>{clearInterval(timerID)},10000)
    // // clear Timeout(timeputID)

    // let num =1 ;
    // const id = setInterval(()=>{
    //     if (num==10)clearInterval(id)
    //     console.log(num)
    //     num++
    // },1000)

    // const name= document.querySelector("#name")
    // const btn=document.querySelector(".btn")
    // const list=document.querySelector(".list")
    // btn.addEventListener('click',()=>{
    //     const li=document.createElement("li")
    //     li.innerText=name.value;
    //     list.appendChild(li)
    //     name.value=""
    // })

    // const name= document.querySelector("#name")
    // const btn=document.querySelector(".btn")
    // const list =document.querySelector(".list")
    // btn.addEventListener('click',()=>{
    //     if (name.value===""){
    //         alert("enter the name!!")
    //         return;
    //     }

    //     const li=document.createElement("li")
    //     const dlt=document.createElement("button")
    //     li.innerText=name.value;
    //     dlt.addEventListener("click",()=>{
    //         list.removeChild(li)
    //     })
    //     li.appendChild(dlt)
    //     list.appendChild(li)
    //     name.value=""
    // })
     

    //chatgpt.....
    //     const name = document.querySelector("#name")
    // const btn = document.querySelector(".btn")
    // const list = document.querySelector(".list")

    // btn.addEventListener('click', () => {
    //     if (name.value.trim() === "") return

    //     const li = document.createElement("li")
    //     const dlt = document.createElement("button")

    //     li.innerText = name.value
    //     dlt.addEventListener("click", () => {
    //         list.removeChild(li)
    //     })

    //     li.appendChild(dlt)
    //     list.appendChild(li)
    //     name.value = ""
    // })


    // function print(num){
    //     console.log("inside print")
    //     num()
    // }

    // function callback(){
    //     console.log("inside callback")
    
    // }

    // print(callback)


    // function print(num){ // hof: higher order function
    //     setTimeout(()=>{
    //         console.log("inside print")
    //         num()
    //     },2000)
    // }
    
    // function sample2(){ //callnack fn
    //         console.log("inside callback ")
    // }
    // function sample(){ //callnack fn
    //         console.log("inside callback ")
    // }

    // print(sample)
    // print(sample2)


    // // // // // // // callback hell
    // console.log("Starting homework...");
    // setTimeout(() => {
    //     console.log ("Homework done!");
    //     console.log("Starting dinner...");
    //     setTimeout(() => {
    //         console.log("Dinner done!");
    //         console.log("Getting ready to go out...");
    //         setTimeout(() => {
    //             console.log("Going to the playground!");
    //         }, 1000); // after dinner
    //     }, 2000); // dinner time
    // }, 3000); // homework time

    //     function finishHomework(callback) {
    //     console. log("Starting homework...");
    //         setTimeout (() => {
    //             console. log ("Homework done!");
    //             callback();
    //         }, 2000);
    //     ｝
    //     function eatDinner (callback) ‹
    //     console. log("Starting dinner...");
    //     setTimeout ( () => {
    //         console. log("Dinner done!");
    //         callback();
    //         ｝，1500）；
    //     function goToPlayground) 1
    //     console. log ("Going to the playground!");
    //     }
    //     ｝
    //     // Chained in steps, but cleaner
    //     finishHomework(() => {
    //     eatDinner ( ( ) => {
    //     goToPlayground();
    //     });
    // });

//ques : resolve the promise in 2 seconds......(interview lvl)
    // const p = new Promise ((res,rej)=>{
    //     let done=true;
    //     setTimeout(()=>{
    //         if (done){
    //             res({name:"Anand",age:23})
    //         } else{
    //             rej ("Word has not been completed")
    //         }
    //         //reject()
    //     },5000)
    // })
    // // console.log(p)
    // p.then((data)=>{
    //     console.log(data.name)
    // }).catch ((err)=>{
    //     console.log(err)
    // }).finally(()=>{
    //     console.log("finally block")
    // })
    // console.log("after promise")

    // console.log("before promise")
    // const p = new Promise ((res,rej)=>{
    //     // let done=true;
    //     // setTimeout(()=>{
    //     //     if (done){
    //     //         res({name:"Anand",age:23})
    //     //     } else{
    //     //         rej ("Word has not been completed")
    //     //     }
    //     //     //reject()
    //     // },5000)
    // })
    // // console.log(p)
    // p.then((data)=>{
    //     console.log("promise resolved")
    // }).catch ((err)=>{
    //     console.log(err)
    // }).finally(()=>{
    //     console.log("finally block")
    // })
    // console.log("after promise")
    // function doHomework(){
    //     const p= new Promise((res,rej)=>{
    //         let done=true;
    //         setTimeout(()=>{
    //             if (done){
    //                 console.log("Homework completed")
    //                 res ("Homework is Done")
    //             }else{
    //                 rej("Homework is not completed")

    //             }
    //         },2000)
    //     })
    //     p.then((data)=>{
    //         console.log("promise resolved")

    //     })
    // }
    

    //--------Multiple promise or chaining promise --------
    // function doHomework() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //     let homeworkDone = true;
    //     if (homeworkDone) {
    //         console.log("Homework is done");
    //         resolve("Homework complete");
    //     } else {
    //         reject("Homework not done");
    //     }
    //     }, 3000);
    // });
    // }
    // function eatDinner() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //     let dinnerEaten = false;
    //     if (dinnerEaten) {
    //         console.log("Dinner is eaten");
    //         resolve("Dinner complete");
    //     } else {
    //         reject(" Didn't eat dinner");
    //     }
    //     }, 2000);
    // });
    // }
    // function goToPlayground() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //     let permission = true;
    //     if (permission) {
    //         console.log(" Went to the playground");
    //         resolve("Playground time!");
    //     } else {
    //         reject(" Not allowed to go out");
    //     }
    //     }, 3000);
    // });
    // }
    // //chaining
    

    // // Promise Chaining Starts
    // doHomework()
    // .then((data) => {
    // console.log(data);
    // return eatDinner();
    // })
    // .then((data) => {
    // console.log(data);
    // return goToPlayground();
    // })
    // .catch((error) => {
    // console.log("Something went wrong:", error);
    // })
    // .finally(() => {
    // console.log("Day ended — Go to sleep");
    // });


function orderfood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("food ordered")
            res()
        })
    })
}
function prepfood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("food prepared")
            res()
        },2000)
    })
}
function deliverfood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("food delivered")
            res()
        },2000)
    })
}

async function food_order() {
    await orderfood()
    await prepfood()
    await deliverfood()

}

food_order()