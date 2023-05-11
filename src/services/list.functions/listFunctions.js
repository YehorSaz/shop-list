import {itemActions} from "../../redux/slices";
import {formActions} from "../form.actions";


const listFunctions = {

    componentOnLoad: (classNames) => {
        window.onload = () => {
            const namesOfClass = document.querySelectorAll(`#products`);

            for (let i in namesOfClass) {
                if (classNames.includes(`${namesOfClass[i].className} product-text-custom`)) {
                    document.querySelector(`.${namesOfClass[i].className}`).classList.add('product-text-custom')
                }
            }
        }
    },
    markItem: (dispatch, id) => {
        const textDecor = document.querySelector(`.product-text-${id}`);
        const icon = document.querySelector(`#done-button-${id}`);
        console.log(icon);
        if (textDecor.classList.length < 2) {
            textDecor.classList.add('product-text-custom')
            icon.classList.add('done-button-vis');

            dispatch(itemActions.addClassName(textDecor.className))
            dispatch(itemActions.itemCountDec())


        } else {
            textDecor.classList.remove('product-text-custom')
            icon.classList.remove('done-button-vis');
            dispatch(itemActions.itemCountInc())
            dispatch((itemActions.removeClassName(`${textDecor.className} product-text-custom`)))
        }
    },
    delItem: (dispatch, id) => {
        if (document.querySelector(`.product-text-${id}`).classList.length < 2) {
            dispatch(itemActions.deleteItem(id))
        } else {
            dispatch(itemActions.deleteItem(id))
            dispatch(itemActions.itemCountInc())
        }
        dispatch(itemActions.editItem(null))
    },
    saveItem: (dispatch, item) => {
        dispatch(itemActions.createItem(item))
    },
    update: (dispatch, item) => {
        dispatch(itemActions.updateItem(item))
        dispatch(itemActions.editItem(null))
    }
}

const speech = (dispatch, setValue) => {

    let SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition,
        recognition;

    recognition = new SpeechRecognition();
    recognition.lang = 'uk-UA';
    recognition.interimResults = true;
    recognition.start();


    recognition.onresult = (event) => {

        const item = event.results[0][0].transcript;

        if (event.results[0].isFinal) {
            dispatch(itemActions.createItem({item: item}))
            document.querySelector('.save-button').classList.add('save-button-none')


        } else {
            setValue('item', item)
        }
    }
    formActions.showForm()
};


export {listFunctions, speech}