// let -> 값 변경 가능 , const -> 값 변경 불가능
const name = 'kuhn';
let age = 29;
const hashobbies = true;

age = 30;

const summarizeUser = (userName,userAge,userHobby) => {
    return `Name is ${userName}, age is ${userAge} and the user has hobbies ${userHobby}`;
};

const add = (a,b) => a+b;

// 함수의 인수가 1개라면 () 생략 가능 (한개 일때만 생략가능)
const addOne = a => a + 1;

// 함수의 인수가 없으면 () 무조건 명시
const addRandom = () => Math.random() + Math.random();

console.log(summarizeUser(name,age,hashobbies));
console.log(add(5,7));
console.log(addRandom());
