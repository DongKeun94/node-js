// 자바스크립트 객체 생성 -> 객체의 key-value 한쌍을 property 또는 field 라고 부름

const person = {
    name: 'kuhn',
    age: 29,

    // greet: () => {
    //     console.log(`Hi, I am ${this.name} `) // 화살표 함수에서 this는 해당 객체가 아닌 전역 범위를 참조함
    // } greet 함수를 이런식으로 코드 작성하면 this.name 참조를 못함

    // 콜론을 생략해야 this.name이 해당 객체 안의 name을 잘 참조함 !
    greet() {
        console.log(`Hi, I am ${this.name} `)
    }
};

// const printName = (personData) => {
//     return console.log(personData.name);
// }

//구조 분해 (Destructuring)
const printName = ({name}) => {
    return console.log(name);
}
printName(person);

const {name,age} = person; //객체안에 있는 property 이름과 동일해야함 
console.log(name,age);


// // 배열안에는 여러 데이터 넣을 수 있음 ( 데이터 타입이 통일되어야할 필요 없음) , 객체도 넣을 수 있음
const hobbies = ['Sports','Cooking'];
const [hobby1, hobby2] = hobbies; // 배열 구조분해에서는 이름을 내맘대로 선택 가능 -> 배열 데이터의 위치 기반으로 추출됨
console.log(hobby1,hobby2);

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby)) // map에 대해서 좀 더 알아보기

// // const hobbies 배열인데 배열에 데이터를 추가할 수 있는 이유는 hobbies가 값을 참조하는 것이 아닌 메모리 주소를 참조하고 있음

// // for(hobby of hobbies){
// //     console.log(hobby);
// // }

// // for (let i=0;i<hobbies.length;i++){
// //     console.log(hobbies[i])
// // }


// // const copiedArray = hobbies.slice(); // 배열을 복사
// const copiedArray = [...hobbies] // Spread => ... (배열의 원소나 객체의 속성을 추출하는데 사용 ) 
// console.log(copiedArray);

// const toArry = (...args) => { // rest => ...인수 (인수의 개수 제한을 제거) , 여러 인수를 하나의 배열로 묶는데 사용 !
//     return args;
// }
// console.log(toArry(1,2,3,4,5,6));