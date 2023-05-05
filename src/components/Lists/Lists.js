import React from 'react';

import {TiPlusOutline} from "react-icons/ti";
import {useForm} from "react-hook-form";

const Lists = () => {

    const {register, reset, handleSubmit} = useForm();

        const formWrap = document.querySelector('.input-field');
    const showForm = () => {
        formWrap.style.cssText = `opacity: 1; z-index: 10`;
    }
    const hideForm = () => {
        formWrap.style.cssText = `opacity: 0; z-index: -1`
    }

    return (

        <div className={'lists'}>
            <h1>Lists</h1>


            <div className={'input-field'}>

                <form onSubmit={handleSubmit(hideForm)} className={'item-form'}>
                    <input type="text" placeholder={'продукт'} {...register('item')}/>
                    <button>зберегти</button>
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