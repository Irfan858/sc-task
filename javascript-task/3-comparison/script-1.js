// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here
if (number) 
{
  if (number > 0)
  {
    console.log(`Angka ${number} Adalah Positif`);  
  }
  else if (number < 0)
  {
      console.log(`Angka ${number} Adalah Negatif`);
  }
  else {
    console.log("Angka Adalah 0");
  }
}
else
{
    console.log("Anda Tidak memasukkan Angka");
}