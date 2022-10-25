function Apply()
{
  let forms = document.forms.data_for_card;
  for (let i = 0; i < forms.elements.length; i++) {
    let data = forms.elements[i].value ? forms.elements[i].value : '';

    let classname = 'card-preview__' + forms.elements[i].name;  
    let res = document.getElementsByClassName(classname); 

    if (res[0] && data){
      res[0].innerText = data;
    }
  }

  document.getElementsByClassName('card-preview__fio')[0].style.color = color_value_fio;
  document.getElementsByClassName('card-preview__position')[0].style.color = color_value_position;
}

/* function on button event (alignment selection)  */
function set_align()
{
  let divS = document.getElementsByClassName('form-field__align');
  for (let i = 0; i < divS.length; i++) {
    let div = divS[i];
    let field_now = (String(div.getElementsByTagName('input')[0].name)).split('_'); 
    field_now = field_now[0]; // here value of fio or position
    let res_div = document.getElementsByClassName('card-preview__' + field_now); 
    res_div[0].setAttribute('class', 'card-preview__' + field_now); 
    let input = div.getElementsByTagName('input');  
    for (let j = 0; j < input.length; j++) {
      if (input[j].value != " " && input[j].checked)  
        res_div[0].classList.add(input[j].value);
    }
  }
}

function set_size()
{
  let divS = document.getElementsByClassName('form-field__size');
  for (let i = 0; i < divS.length; i++) {
    let div = divS[i];
    let field_now = (String(div.getElementsByTagName('input')[0].name)).split('_');
    field_now = field_now[0];
    let res_div = document.getElementsByClassName('card-preview__' + field_now);  
    let input = div.getElementsByTagName('input');  
    for (let j = 0; j < input.length; j++) {
      if (input[j].value != " " && input[j].checked)  
        res_div[0].classList.add(input[j].value);
    }
  }
}

function changePhone()
{
  let add_phone = document.getElementsByClassName('form-field__phoneMore'); // find the first input
  let del_phone = document.getElementsByClassName('form-field__additionalPhone'); // find the first input
  let div_additionalPhone = document.getElementsByClassName('card-preview__additionalPhone'); // find the final element (additional number on the business card)
  /*  switch the display */
  add_phone[0].classList.toggle('hide');
  del_phone[0].classList.toggle('hide');
  div_additionalPhone[0].classList.toggle('hide');
}

function hideInput(class_elem, img_className)
{
  document.getElementsByClassName(class_elem)[0].classList.toggle('hide');
  img = document.getElementsByClassName(img_className)[0];
  img.src = String(img.src).includes('check') ? 'data_pictures/cross.png' : 'data_pictures/check.png';
}

var last_elem_color_fio = document.getElementsByClassName('form-field__color__fio__black')[0];
var last_elem_color_position = document.getElementsByClassName('form-field__color__position__01')[0];
var color_value_fio = '#202020';
var color_value_position = '#474747';

function Apply_color(className, color_value)
{
  let elem = document.getElementsByClassName(className)[0]; 
  if (String(elem.classList.value).includes('fio')) 
  {
    color_value_fio = color_value; 
    last_elem_color_fio.innerHTML = ''; 
    last_elem_color_fio = elem;
  }
  else // if color for position
  {
    color_value_position = color_value;
    last_elem_color_position.innerHTML = '';
    last_elem_color_position = elem;
  }
  elem.innerHTML = '<div class="form-field__color__checked">';
}
