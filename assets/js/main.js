//===========================================
console.log("%c------Lev1_1_js-vertiefung_loops_for-loop_hello-world------", "color: yellow; background: teal")

for (i = 1; i <= 10; i++) {
    console.log("Hello World " + i)
}

//===========================================
console.log("%c------Lev1_2_js-vertiefung_loops_for-loop-array------", "color: yellow; background: teal")

numArray = []
for (i = 0; i <= 10; i++) {
    numArray.push(i)
}
console.log(numArray)

//===========================================
console.log("%c------Lev1_4_js-vertiefung_loops_for-loop_namen------", "color: yellow; background: teal")

let names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]

for (i = 0; i < names.length; i++) {
    console.log(names[i])
}

//===========================================
console.log("%c------Lev1_7_js-vertiefung_loops_do_while------", "color: yellow; background: teal")

let x = 0
do {
    document.write("The number is " + x)
    x++;
} while (x < 5);

//===========================================
console.log("%c------Lev1_6_js-vertiefung_loops_for-loop-array------", "color: yellow; background: teal")

let imageArray = []
for (y = 1; y <= 100; y++) {
    imageArray.push("image_" + y + ".jpg")
}
console.log(imageArray)

//===========================================
console.log("%c------Lev1_8_js-vertiefung_loops_do_while------", "color: yellow; background: teal")

let z = 0
do {
    if (z % 2 == 0) {
        console.log(z)
        z++
    } else { z++ }
} while (z <= 20)

console.log("%c------Ende------", "color: yellow; background: teal")