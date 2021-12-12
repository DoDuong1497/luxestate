// 1. Khai báo 2 số a = 4, b = 12.

let a = 4,
    b = 12;

let c = a + b;
console.log(`${"Kết quả:"} ${c}`);

let d = b / a;
console.log(`${"Kết quả:"} ${d}`);


let e = b % a;
console.log(`${"Kết quả:"} ${e}`);



// 2. In ra họ và tên của mình bằng cách khai báo 1 biến chứa Họ và biến chứa Tên, có khoảng trắng giữa họ và tên của bạn.


let firstname = "Đỗ",
    lastname = "Dương";

console.log(`${"Họ tên:"} ${firstname} ${lastname}`);



// 3. Khai báo một chuỗi ký tự là “happy news year”.

let string = "happy news year";


let totalString = string.length;
console.log(`${"Tổng số kí tự là:"} ${totalString}`);


let locationY = string.indexOf("y");
console.log(`${"Vị trí của chữ y từ đầu xuống là:"} ${locationY}`);

let locationY1 = string.lastIndexOf("y");
console.log(`${"Vị trí của chữ y từ dưới lên là:"} ${locationY1}`);

let replace = string.replace("year", "abc");
console.log(`${"Từ sau khi thay thế là:"} ${replace}`);




// 4. Khai báo một số bất kỳ, kiểm tra xem số đó có phải là số chẵn hay không, nếu là số chẵn thì trả về true, ngược lại trả về false. Gợi ý sử dụng câu lệnh điều kiện If Else để kiểm tra.



let evenNum = 4;

if( evenNum % 2 == 0 ){
    console.log(true);
}else{
    console.log(false);
}




// 5. Chạy vòng lặp với i = 0, i < 10, i++. Tính tổng giá trị mỗi lần i tăng lên 1 (gợi ý dùng vòng lặp for, khai báo thêm 1 biến total bên ngoài for và sử dụng toán tử += để cộng dồn giá trị của i). In ra kết quả.


let total = 0;

for (let i = 0; i < 10; i++) {
    total += i;
}

console.log(total);




// 6. In ra số chẵn từ 0 - 20. (gợi ý: khai báo một biến n có giá trị = 0, sử dụng vòng lặp while với điều kiện n <= 20, tiếp tục sử dụng câu lệnh điều kiện if trong while để kiểm tra xem nếu là số chẵn thì in n ra, sau khi in thì biến n tăng 1 đơn vị).

let n = 0;

while (n <= 20) {
    if(n % 2 === 0){
        console.log(n);
    }

    n++;
}

