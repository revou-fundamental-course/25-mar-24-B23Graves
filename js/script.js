function calculate(){
    let weightInput = document.getElementById('weight-input').value; 
    console.log(weightInput);
    
    if(weightInput == '') {
        alert('Harap isi berat badan anda')
        console.log('kosong');
    } else {
        console.log('ada isi');
    }
}