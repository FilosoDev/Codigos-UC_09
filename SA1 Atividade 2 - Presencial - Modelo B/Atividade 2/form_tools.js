


/*
Insere de 1 a n quebras de linha. Recebe dois par�metros: o primeiro � o elemento pai onde ser� inserida a quebra de linha, e o segundo o n�mero de quebras de linha desejado. Se n�o informado o segundo par�metro, ser� inserida apenas uma quebra de linha. Observe a implementa��o da fun��o:

*/
var append_br = (el, n) => {
  if (n == undefined)
    n = 1;
  for (var i=0; i<n; i++) {
    var br = document.createElement("br");
    el.appendChild(br);
  }
}                            


/*
append_span

Insere um elemento span com um texto interno. Recebe dois par�metros: o primeiro � o elemento pai onde ser� inserido o span, e o segundo � o texto a ser inserido dentro dele. Observe a implementa��o da fun��o:

*/

var append_span = (el, text) => {
  var span = document.createElement("span");
  span.innerHTML = text;
  el.appendChild(span);
  return span;
}

/*
append_text_input

Insere um elemento de texto. Recebe quatro par�metros: o elemento pai onde ser� inserido, um identificador, o tamanho da caixa de texto e o n�mero m�ximo de caracteres. Veja a implementa��o da fun��o

*/
var append_text_input = (el, id, size, maxlen) => {
  var text_input = document.createElement("input");
  text_input.setAttribute("type", "text");
  text_input.setAttribute("id", id);
  text_input.setAttribute("name", id);
  text_input.setAttribute("size", size);
  text_input.setAttribute("maxlength", maxlen);
  el.appendChild(text_input);
  return text_input;
}

/*
append_select

Insere uma caixa de sele��o com m�ltiplas op��es. Recebe quatro par�metros: o elemento pai onde ser� inserido, um identificador, um array de op��es (cada uma � um objeto com valor e o texto de apresenta��o) e o valor da op��o default. Observe o c�digo:
*/

var append_select = (el, id, options, default_id) => {
  var select = document.createElement("select");
  select.setAttribute("id", id);
  select.setAttribute("name", id);
  el.appendChild(select);
  options.forEach ( item => {
     var option = document.createElement("option");
     option.setAttribute("value", item.value);
     if (default_id == item.value) {
       option.setAttribute("selected","selected");
     }
     option.innerHTML = item.text;
     select.appendChild(option);
  });
}

/*
append_fieldset

Insere um elemento de texto. Recebe dois par�metros: o elemento pai onde ser� inserido e um t�tulo. Veja o c�digo:
*/
var append_fieldset = (el, title) => {
  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  legend.innerHTML = title;
  fieldset.appendChild(legend);
  el.appendChild(fieldset);
  return fieldset;
}


/*
append_checkbox

Insere uma caixa de marca��o (checkbox). Recebe tr�s par�metros: o elemento pai onde ser� inserido, um identificador e o texto de apresenta��o. Veja a implementa��o, e perceba como a fun��o append_span � reaproveitada aqui:
*/

var append_checkbox = (el, id, text) => {
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", id);
  check.setAttribute("name", id);
  el.appendChild(check);
  append_span(el, text);
  return check;
}

/*
append_radio

Insere um bot�o de op��o (radio button). Recebe tr�s par�metros: o elemento pai onde ser� inserido, o nome pelo qual o conjunto de op��es ser� identificado e um texto de apresenta��o. Veja que o texto � inserido como um valor e tamb�m em um elemento span para que seja vis�vel. Observe a implementa��o desta fun��o e como, novamente, a fun��o append_span � reaproveitada:
*/

var append_radio = (el, name, id, text) => {
  var radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", name);
  radio.setAttribute("value", id);
  el.appendChild(radio);
  append_span(el, text);
  return radio;
}

/*
append_textarea

Insere um elemento de texto de m�ltiplas linhas. Recebe quatro par�metros: o elemento pai onde ser� inserido, um identificador, e o n�mero de colunas e de linhas. Veja o c�digo:
*/
var append_textarea = (el, id, cols, rows) => {
  var textarea = document.createElement("textarea");
  textarea.setAttribute("id", id);
  textarea.setAttribute("name", id);
  textarea.setAttribute("cols", cols);
  textarea.setAttribute("rows", rows);
  el.appendChild(textarea);
  return textarea;
}

/*
append_submit

Insere um bot�o de submiss�o do formul�rio. Recebe tr�s par�metros: o elemento pai onde ser� inserido, o texto do interior do bot�o e uma fun��o de valida��o para ser invocada quando o formul�rio for submetido.
*/
var append_submit = (el, text, onsubmit_handler) => {
  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", text);
  el.appendChild(submit);
  el.onsubmit = onsubmit_handler;
  return submit;
}


