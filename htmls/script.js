const modal = document.querySelector('.modal-wrapper')
const questionWrapper = document.querySelector('.question-wrapper')
const question = document.querySelector('.actions')



const active = {
  hidden() {
    modal.classList.toggle('active')
  },

  read() {
    questionWrapper.classList.toggle('read')    
    question.innerHTML = ''
    question.innerHTML = DOM.innerHtmlAction()
  } 
}

DOM = {
  innerHtmlAction() {
    const html = `
      <a href="#" class="delete">
        <img src="/assets/check.svg" alt="pergunta lida">
        Pergunta lida
      </a>
    `
    return html
  }
}



