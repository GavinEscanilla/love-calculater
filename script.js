const name1 = document.getElementById('input1');
const name2 = document.getElementById('input2');
const  heart = document.getElementById('heart');
const submit = document.getElementById('submit');
const calculate = () => {
    const answer = Math.floor(Math.random() * 101);
    return answer;
};
const result = () =>{
    const name1 = document.getElementById('input1');
const name2 = document.getElementById('input2');
    if(name1.value === '' && name2.value === ''){
   heart.textContent= 'Please enter a names';
    }else{
   heart.textContent= `${calculate()}%`;
    }
   
}

