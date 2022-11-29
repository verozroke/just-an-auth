let choiceButton1 = document.getElementById('choiceButton1')
let choiceButton2 = document.getElementById('choiceButton2')
let forgetPassword = document.getElementById('forget')
let confirmPassword = document.getElementById('confirm')

choiceButton1?.addEventListener('click', () => {
    if (choiceButton2?.classList.contains('active')) {
        choiceButton2.classList.remove('active')
        choiceButton1?.classList.add('active')
        //@ts-ignore
        forgetPassword?.style.display = 'none'
        //@ts-ignore
        confirmPassword?.style.display = 'block'
    }
})

choiceButton2?.addEventListener('click', () => {
    if (choiceButton1?.classList.contains('active')) {
        choiceButton1.classList.remove('active')
        choiceButton2?.classList.add('active')
        //@ts-ignore
        forgetPassword?.style.display = 'block'
        //@ts-ignore
        confirmPassword?.style.display = 'none'
    }
})

export { };