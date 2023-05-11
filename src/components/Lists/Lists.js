import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {BsFillMicFill} from "react-icons/bs";
import {TiPlus} from "react-icons/ti";

import {itemActions} from "../../redux/slices";
import {List} from "../List/List";
import {formActions, listFunctions, speech} from "../../services";

const Lists = () => {

    const dispatch = useDispatch();
    const {items, itemForEdit, count} = useSelector(state => state.item);
    const {register, reset, handleSubmit, setValue, formState: {isValid}} = useForm({mode: "all"});

    useEffect(() => {
        if (itemForEdit) {
            setValue('item', itemForEdit.item)
            setValue('id', itemForEdit.id)
            formActions.showForm()
        }
    }, [itemForEdit, setValue]);


    const saveI = (item) => {
        listFunctions.saveItem(dispatch, item)
        reset()
    }
    const updateI = (item) => {
        listFunctions.update(dispatch, item)
        reset()
        formActions.hideForm()
    }


    let speechTrigger = 0;


    return (

        <div className={'lists'}>

            <div className={'lists-header'}>

                <h3>Залишилось: {count}</h3>

                <button className={'dell-all'} onClick={() => {
                    dispatch(itemActions.deleteAll())
                    localStorage.clear()
                    formActions.hideForm()
                }}>
                    видалити все

                </button>

            </div>


            <div className={'list-items'}>{
                items.map(item => <List key={item.id} items={item}/>)
            }</div>


            <div id={'input-field'} className={'input-field'}>

                <form onSubmit={handleSubmit(itemForEdit ? updateI : saveI)} className={'item-form'}>

                    <input type="text" placeholder={'продукт'} {...register('item')} required={true}/>


                    <button className={'save-button save-button-none'} disabled={!isValid}>

                        {itemForEdit ? 'оновити' : 'зберегти'}

                    </button>


                    <button onClick={handleSubmit(formActions.hideForm)} className={'hide-button'}>

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
                                }
                                speechTrigger = setTimeout(() => {
                                    speech(dispatch, setValue)
                                }, 1000)
                            }}

                            onTouchEnd={() => {

                                clearTimeout(speechTrigger);
                                formActions.showForm();
                                reset();
                            }}>

                        <BsFillMicFill/>
                        <TiPlus/>

                    </button>

                </div>


            </div>

        </div>
    );
};


export {Lists}