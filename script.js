images = ["images/ass.JPEG", "images/bitches1.JPEG", "images/bitches2.PNG", "images/bitches3.jpg", "images/bitches4.JPEG", "images/cockface.jpeg",
          "images/cry.JPG", "images/dildo1.JPG", "images/dildo2.JPG", "images/durag.JPEG", "images/jay.JPEG", "images/lowkey.JPEG", 
          "images/pants.jpg", "images/punani.JPG", "images/ria.JPG", "images/siege.PNG", "images/water.jpeg"]

var rand = Math.floor(Math.random() * images.length);
document.getElementById("jay").setAttribute("src", images[rand]);


rand = [160, 188, 34, 74, 7, 83, 249, 87, 151, 45, 205, 29, 221, 155, 84, 228, 32, 25, 63, 44, 137, 90, 162, 26, 192, 124, 120, 210, 145, 21, 4, 168, 254, 232, 182, 33, 73, 1, 266, 197, 236, 133, 183, 69, 43, 49, 62, 153, 22, 171, 138, 244, 51, 186, 13, 227, 194, 52, 93, 263, 234, 128, 217, 46, 65, 99, 134, 166, 12, 88, 154, 3, 53, 264, 64, 126, 207, 40, 41, 54, 198, 268, 107, 185, 237, 222, 115, 174, 204, 96, 38, 140, 31, 127, 119, 70, 105, 256, 82, 122, 152, 203, 85, 130, 116, 245, 86, 18, 255, 66, 260, 169, 36, 175, 15, 258, 253, 48, 57, 5, 78, 59, 55, 218, 80, 19, 24, 265, 161, 164, 111, 23, 189, 201, 28, 147, 214, 102, 230, 251, 241, 129, 109, 79, 121, 118, 71, 267, 184, 76, 191, 149, 27, 206, 159, 112, 190, 72, 158, 35, 106, 139, 98, 150, 246, 252, 257, 187, 91, 165, 6, 92, 0, 215, 202, 2, 173, 47, 67, 209, 223, 61, 101, 225, 233, 136, 172, 231, 219, 60, 42, 176, 181, 148, 50, 261, 144, 113, 146, 68, 30, 229, 9, 250, 235, 242, 200, 238, 178, 216, 259, 226, 167, 95, 224, 110, 157, 163, 240, 75, 239, 114, 220, 141, 20, 208, 211, 117, 104, 39, 132, 56, 177, 212, 58, 262, 100, 180, 142, 143, 179, 195, 16, 135, 17, 193, 77, 247, 14, 131, 123, 10, 125, 94, 108, 8, 248, 243, 81, 103, 156, 37, 97, 196, 170, 89, 11, 199, 213];

var today = new Date();

var id = 31 * Number(String(today.getMonth()).padStart(2, '0')) + Number(String(today.getDate()).padStart(2, '0'));
if (id > 268) {
  id -= 269;
}

fetch("./quotes.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    document.getElementById("quote").innerHTML = data[rand[id]].quote;
    document.getElementById("date").innerHTML = data[rand[id]].date;
  });
