// მოცემულია ობიექტი
// var user = {
//     name: "giorgi",
//     age: 25,
//     gender: "male"
//   };
  
//   დაწერეთ შემდეგი პირობები:
//    თუ ასაკი ნაკლებია 18 დაიწეროს "არასრულწლოვანი";
//    თუ ასაკი მეტია ან ტოლი 18-ზე და სქესი არის "male" დაიწეროს "სრულწლოვანი ბიჭი";
  var user = {
      name:'giorgi',
      age:25,
      gender:'male'

  };

  if (user.age <18){
    console.log("არასრულწლოვანი")
}
if (user.age >= 18 && user.gender == 'male'){
    console.log("სრულწლოვანი ბიჭი")
}
// მოცემულია მასივი:
// let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche"];

// ციკლის დახმარებით, ეკრანზე გამოიტანეთ ყველა ელემენტი, დაწყებული მეორე ელემენტისგან მე-5ის ჩათვლით;

let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche"];
for(i=1; i<cars[4]; i++){ 
    console.log(cars[i]);

}
// შექმენით სახელების მასივი და დაბეჭდეთ ის სახელები რომლისს სიმბოლების რაოდენობა 5 ზე მეტია;
let names = ['ana','giorgi','mari','tamuna','givi'];
for(i=0;i<names.length;i++){
    if(names[i].length >5){
        console.log(names[i]);
    }
    
}

// შექმენით ციფრების მასივი და გამოიტანეთ მარტო ლუწი რიცხვები და მარტო კენტი რიცხვები;
let array = [1,2,3,4,5,6,7,8,9,10];

for(i=0;i<array.length;i++){
    if (array[i]%2==0){
        console.log(array[i]);
    }

}
for(i=0;i<array.length;i++){
    if (array[i]%2==1){
        console.log(array[i]);
    }

}

// მოცემულია მასივი:
// let user = [‘name’, ‘age, 25, 50, ‘surname’, [100, 500] ];
// ჩადგმული მასივიდან ამოიღეთ მეორე ელემენტი; ანუ 500;
let user1=['name','age',25,50,'surname',[100,500]];
console.log(user1[5][1])
// მოცემულია ობიექტი:
// var person = {
//   firstname: "john",
//   lastname: "doe",
//   age: 50,
//   eyecolor: "blue"
// };
var person = {
    fisrtname:'john',
    lastname:'doe',
    age:50,
    eyecolor:'blue'
};
console.log(person.eyecolor)
// ამოიღეთ person ცვლადის თვალის ფერი;

// შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;
let mas=['name','lastname',30,'55'];
// while(mas.length!=0){
//     i=3;
//     console.log(mas[i]);
//     i--;
// }
for(i=0;i<mas.length;i++){
    console.log(mas[i]);

}