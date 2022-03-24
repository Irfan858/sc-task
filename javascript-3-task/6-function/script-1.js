// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    let res = "";

    for (let i = str.length -1; i >= 0; i--) {
        res += str[i];
    }

    return res;
}

const string = prompt('Masukan teks: ');

const result = reverseString(string);
console.log(result);