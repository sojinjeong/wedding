let str = "hello javascript" //3글자 자르고 7번째 이후부터 자른다.
console.log(str.slice(3, 7));
console.log(str.slice(3,-3)); // 뒤에서 부터 첫 번째 글자가 -1임.


//substring ==> 첫 번째 인자 시작 인덱스 , 두 번째 인자 종료인덱스
//시작 인덱스는 문자열 포함 , 종료 인덱스는 문자열 제외
//예를 들어 abcdefg.substring(2, 5) 하면 첫번째 인자 c부터 5번째 인자 e까지 반환
//음수 값을 넘기면 0인자 부터 시작
console.log("abcdefg".substring(2));
console.log(str.substring(3, 7));
console.log(str.substring(3, -3));
console.log(str.substr(3, 2));

str="3일차,01/02,화요일,1,19:10~20,하*호,영상 프로토타입 제작, 프로토 타입 제작하기"
let arr = str.split(",");
console.log(arr);