let string = ""
let store = 0
let buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string)
      document.querySelector('input').value = string
    }

    else if (e.target.innerHTML == 'M+'){
        store += parseInt(string)

    }

    else if (e.target.innerHTML == 'MC'){
        store = 0
        document.querySelector('input').value = store
    }

    else if (e.target.innerHTML == 'MV'){
        document.querySelector('input').value = store
    }

    else if (e.target.innerHTML== 'C'){
        string = ""
      document.querySelector('input').value = string
      }
    else{
    console.log(e.target)
    string += e.target.innerHTML
    document.querySelector('input').value = string
    }
  })
})