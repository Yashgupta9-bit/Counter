// set initial count
let count=0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    //for each button, used a event listener
    btn.addEventListener('click', function(e){
        //store the class of the button which is clicked
        const styles = e.currentTarget.classList; 
        //checking if the button containes decrease class
        if(styles.contains('decrease')){
            count--;
            value.style.color = "red";
        }
        else if(styles.contains('increase')){
            count++;
            value.style.color = "green";
        }
        else if(styles.contains('reset')){
            count =0;
            value.style.color = "black";
        }
        value.textContent = count;
        if(value.textContent == 0){
            value.style.color = "black";
        }
    });
});