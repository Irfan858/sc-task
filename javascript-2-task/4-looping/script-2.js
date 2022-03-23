// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here
let string = "";
for(let i = 1; i <= n; i++)
{
    for(let j = i; j <= n; j++)
    {
        string += "*";
    }
    string += "\n";
}

console.log(string);
