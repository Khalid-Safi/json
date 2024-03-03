let soru = document.getElementById('soru');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');
let aTrue = document.getElementById('true-a');
let bTrue = document.getElementById('true-b');
let cTrue = document.getElementById('true-c');
let dTrue = document.getElementById('true-d');
let eTrue = document.getElementById('true-e');
let kaydet = document.getElementById('kaydet');
let res = document.getElementById('result');
let copy = document.getElementById('copy');
let ques = []
let obj ={
    soru : '',
    trueQ: '',
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
}
function kaydett(){
    obj.soru = soru.value
    if(aTrue.checked == true){
        obj.trueQ = a.value
    }else if(bTrue.checked == true){
        obj.trueQ = b.value
    }else if(cTrue.checked == true){
        obj.trueQ = c.value
    }else if(dTrue.checked == true){
        obj.trueQ = d.value
    }if(eTrue.checked == true){
        obj.trueQ = e.value
    }
    obj.a = a.value;
    obj.b = b.value;
    obj.c = c.value;
    obj.d = d.value;
    obj.e = e.value;

    ques.push(JSON.stringify(obj));
    res.style.display = 'block'
    res.value = ques;

    sessionStorage.setItem('result', ques);
    a.value = '';
    b.value = '';
    c.value = '';
    d.value = '';
    e.value = '';
    soru.value = '';
    aTrue.checked = false;
    bTrue.checked = false;
    cTrue.checked = false;
    dTrue.checked = false;
    eTrue.checked = false;
    copy.style.display = 'block';
}
if(sessionStorage.getItem('result')){
    res.style.display = 'block'
    res.value = sessionStorage.getItem('result');
}
function copyText(){
    res.select();
  res.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(res.value);


}