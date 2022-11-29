/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZDEN EMİN OLUNUZ (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığınız kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanızı öneririz.
Bunu sağlamak için cevabı direk console'a loglayın veya çağırdığınız fonksiyondan dönen değeri console'a loglayın.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   1. surucuYasi diye bir değişken yaratın ve bir sayı atayın.
   2. Eğer yaş 18'den büyük ise Console'da True, değilse False değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
const surucuYasi = 35;
if (surucuYasi < 18) {
  console.log("False");
}
else if (surucuYasi > 18) {
  console.log("True");
}


/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yapınız:   
   1. 2 değişken oluşturun ve bunlara değerler atayın (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
let birinciDeger = 1;
let ikinciDeger = 2;
if (birinciDeger > ikinciDeger) {
  console.log(birinciDeger);
}
else if (birinciDeger < ikinciDeger) {
  birinciDeger = 3;
  console.log(birinciDeger);
}




/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   1. String türünde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let variable = "1999";
variable = 1999;
console.log(variable);


/*
Görev 1d - Çarpma
 
Aşağıdakileri yapın:   
   1. a ve b olarak 2 değer alın
   2. Aşağıdaki çarpma fonksiyonunu çağırarak, 2 sayıyı bu fonksiyona iletin
   3. a ve b'yi çarpıp, sonucu dönün
*/

function carpma(a, b) {
  return a * b;
}




/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yapın:
 1. Aşağıdaki fonksiyona bir değer ileterek çalıştırın.
 2. Gelen değeri kullanarak köpeğin yaşını hesaplayın (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */
let insanYasi;
function kopeginYasi(insanYasi) {
  return insanYasi * 7;
}
let k = kopeginYasi(5);
console.log(k);




/* Görev 3 */

// Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Aşağıdakileri yapın:
1. Bilgisayarın seçimini rastgele oluşturacağımız bir değişken tanımlayın (bu fonksiyon içinde yaratılmalı)
2. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
3. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun

Aşağıdakileri oyun isimli fonksiyonu kullanarak yapın.
1. 2 parametre alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/
const result = "Kazandın!";
const result2 = "Kaybettin!";
const result3 = "Beraberlik";
const situationArr = ["Taş", "Kağıt", "Makas"];
let oyuncu = situationArr[Math.round(Math.random() * 3)];
let bilgisayar = situationArr[Math.round(Math.random() * 3)];

function oyun(oyuncu, bilgisayar) {

  /*if (oyuncu === "Taş" && bilgisayar === "Makas")   {
    return result;
  }
  else if (oyuncu === "Makas" && bilgisayar === "Kağıt") {
    return result;
  }
  else if (oyuncu === "Kağıt" && bilgisayar === "Taş") {
    return result;
  }
  else if (oyuncu === bilgisayar) {
    return result3;
  }
  else {
    return result2;
  }*/
  if ((oyuncu === "Taş" && bilgisayar === "Makas") || (oyuncu === "Makas" && bilgisayar === "Kağıt") || (oyuncu === "Kağıt" && bilgisayar === "Taş"))
  {
    return result;
  }
  else if (oyuncu === bilgisayar) {
    return result3;
  }
  else {
    return result2;
  }
}
let lastResult = oyun(oyuncu, bilgisayar);
console.log(lastResult);


/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdakileri milDonusturucu fonksiyonunu kullanarak yapın:
1. Kilometre değerini alın.
2. Aldığınız bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/
let km = 80;
function milDonusturucu(km) {
  return km * 0.621371;
}
let mil = milDonusturucu(km);
console.log(mil);



//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yapın:
1. Santimetre değerini alın.
2. Aldığınız bu değeri feet'e dönüştürün
3. feet değerini geri dönün
*/
let cm = 10;
function feetDonusturucu(cm) {
  return cm / 30.48;
  //return cm * 0.0328084;
}
let feet = feetDonusturucu(cm);


/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımızı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yapın:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazdırmalı:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/
let maymunSayisi = 5;
for (let i = maymunSayisi; i > 0; i--) {
  let song = cocukSarkisi(i);
  console.log(song);
}
function cocukSarkisi(maymunSayisi) {
  return maymunSayisi + " küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!";
}


/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yapın.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/
let sinavSonucu = 40;
function notHesapla(sinavSonucu) {
  if (sinavSonucu >= 90 && sinavSonucu <= 100) {
    return "A aldın";
  }
  else if (sinavSonucu >= 80 && sinavSonucu <= 89) {
    return "B aldın";
  }
  else if (sinavSonucu >= 70 && sinavSonucu <= 79) {
    return "C aldın";
  }
  else if (sinavSonucu >= 60 && sinavSonucu <= 69) {
    return "D aldın";
  }
  else if (sinavSonucu >= 0 && sinavSonucu <= 59) {
    return "F aldın";
  }
}
let examResult = notHesapla(sinavSonucu);
console.log(examResult);




/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yapın.
1. Bir parametre alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

let name = "Öykü Gökçek";
let nameWithLowerCase = name.toLowerCase();
let nameArray = Array.from(nameWithLowerCase);
let count = 0;
function sesliHarfSayaci(nameWithLowerCase) {
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i] == "a" || nameArray[i] == "e" || nameArray[i] == "ı" || nameArray[i] == "i" || nameArray[i] == "o" || nameArray[i] == "ö" || nameArray[i] == "u" || nameArray[i] == "ü") {
      count++;
    }
  }
  return count;
}
count = sesliHarfSayaci(name);
console.log(count);


/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla
}
