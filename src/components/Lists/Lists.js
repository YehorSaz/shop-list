import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {BsFillMicFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";

import {itemActions} from "../../redux/slices";
import {List} from "../List/List";


const Lists = () => {

    const dispatch = useDispatch();
    const {items, itemForEdit, count} = useSelector(state => state.item);
    const {register, reset, handleSubmit, setValue, formState: {isValid}} = useForm({mode: "all"});

    useEffect(() => {
        if (itemForEdit) {
            setValue('item', itemForEdit.item)
            setValue('id', itemForEdit.id)
            showForm()
        }
    }, [itemForEdit, setValue]);


    const showForm = () => {
        document.querySelector('#input-field').classList.add('show-form')
        document.querySelector('.save-button').classList.remove('save-button-none')
    }
    const hideForm = () => {
        document.querySelector('#input-field').classList.remove('show-form')
        document.querySelector('.save-button').classList.remove('save-button-none')
    }

    const save = (item) => {
        dispatch(itemActions.createItem(item))
        reset()
        hideForm()
    }
    const update = (item) => {
        dispatch(itemActions.updateItem(item))
        dispatch(itemActions.editItem(null))
        reset()
        hideForm()
    }


    let SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition,
        recognition;

    const speech = () => {

        recognition = new SpeechRecognition();
        console.log(recognition.lang);
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
        showForm()
    };

    let speech1 = 0;

    // const sort = () => {
    //     document.querySelector('.list-items').append(document.querySelector(`.one-item-${idForSort}`))
    //     dispatch(itemActions.sortItem(null))
    // }


    return (

        <div className={'lists'}>

            <div className={'lists-header'}>

                <h3>Залишилось: {count}</h3>

                <button className={'dell-all'} onClick={() => {
                    dispatch(itemActions.deleteAll())
                    dispatch(itemActions.resetCount())
                }
                }>
                    видалити все
                </button>

            </div>


            <div className={'list-items'}>{
                items.map(item => <List key={item.id} items={item}/>)
            }</div>


            <div id={'input-field'} className={'input-field'}>

                <form onSubmit={handleSubmit(itemForEdit ? update : save)} className={'item-form'}>

                    <input type="text" placeholder={'продукт'} {...register('item')} required={true}/>

                    <button className={'save-button save-button-none'} disabled={!isValid}>
                        {itemForEdit ? 'оновити' : 'зберегти'}
                    </button>

                    <button onClick={handleSubmit(hideForm)} className={'hide-button'}>
                        закрити
                    </button>
                </form>

            </div>


            <div className={'list-buttons'}>

                <div className={'mic-button'}>


                    <button className={'new-item-button'}

                            onTouchStart={() => {
                                window.oncontextmenu = function(event) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    return false;
                                };
                                speech1 = setTimeout(() => {
                                    speech()
                                }, 1500)
                            }}

                            onTouchEnd={() => {
                                clearTimeout(speech1);
                                showForm();
                                reset();
                            }}>
                        <BsFillMicFill/>додати
                    </button>

                </div>


            </div>

        </div>
    );
};


export {Lists}