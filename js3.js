//David Nagy
// 4/15/19
//js3.js
// Writing a function heeHaw () that takes any number as an input and prints
// the numbers from 1 to that number to the console,


function heeHaw(num) {
    console.log("Using "+num+" ------------------");
    if(num < 1)
    {
        console.log("Error! Enter a number larger than 0.");
    }
    else
    {
        for (let i = 1; i <= num; i++) {
            let word = i;
            if(i%15 === 0)
            {
                word = "Hee Haw!";
            }
            else if(i%3 === 0)
            {
                word = "Hee!";
            }
            else if(i%5 === 0)
            {
                word = "Haw!";
            }
            console.log(word);
        }
    }
}

heeHaw(20);
heeHaw(4);
heeHaw(0);
heeHaw(-10);
heeHaw(143);