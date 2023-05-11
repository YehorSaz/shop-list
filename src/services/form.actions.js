const formActions = {
    showForm:  () => {
        document.querySelector('#input-field').classList.add('show-form')
        document.querySelector('.save-button').classList.remove('save-button-none')
    },
    hideForm : () => {
        document.querySelector('#input-field').classList.remove('show-form')
        document.querySelector('.save-button').classList.remove('save-button-none')
    }
}

export {formActions}