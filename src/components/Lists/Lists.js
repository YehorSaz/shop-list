import React, {useEffect} from 'react';

import {TiPlusOutline} from "react-icons/ti";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {itemActions} from "../../redux/slices";
import {List} from "../List/List";


const Lists = () => {

    const dispatch = useDispatch();
    const {items, itemForEdit, count} = useSelector(state => state.item);


    const {register, reset, handleSubmit, setValue} = useForm({mode: "all"});

    useEffect(() => {
        if (itemForEdit){
            setValue('item', itemForEdit.item)
            setValue('id', itemForEdit.id)
            showForm()
        }
    }, [itemForEdit, setValue]);


    const showForm = () => {
        document.querySelector('#input-field').classList.add('show-form')
    }
    const hideForm = () => {
        document.querySelector('#input-field').classList.remove('show-form')
    }

    const save = (item) => {
        dispatch(itemActions.create(item))
        reset()
        hideForm()
    }

    const update = (item) => {
        dispatch(itemActions.updateItem(item))
        dispatch(itemActions.editItem(null))
        reset()
        hideForm()
    }


    return (

        <div className={'lists'}>
            <h1>Залишилось {count}</h1>


            <div className={'list-items'}>{
                items.map(item => <List key={item.id} items={item}/>)
            }</div>

            <div id={'input-field'} className={'input-field'}>

                <form onSubmit={handleSubmit(itemForEdit ? update : save)} className={'item-form'}>
                    <input type="text" placeholder={'продукт'} {...register('item')}/>

                    <button className={'save-button'}>
                        {itemForEdit ? 'оновити' : 'зберегти'}
                    </button>

                    <button onClick={handleSubmit(hideForm)} className={'hide-button'}>
                        сховати
                    </button>
                </form>

            </div>


            <div className={'list-buttons'}>

                <div className={'mic-button'}>

                    <button className={'new-item-button'} onClick={() => showForm()}>
                        MIC
                    </button>

                </div>

                <div className={'plIcon'}>
                    <TiPlusOutline className={'list-plus-icon'}/>
                </div>

            </div>

        </div>
    );
};


export {Lists}