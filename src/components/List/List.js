import React from 'react';
import {useDispatch} from "react-redux";
import {itemActions} from "../../redux/slices";
import {MdOutlineDoneOutline} from "react-icons/md";

const List = ({items}) => {

    const dispatch = useDispatch();

    const {item, id} = items;

    const selectItem = () => {
        const textDecor = document.querySelector(`.product-text-${id}`);
        if (textDecor.classList.length < 2) {
            textDecor.classList.add('product-text-custom')
            document.querySelector('.list-items').append(document.querySelector(`.one-item-${id}`))
            dispatch(itemActions.itemCountDec())
        } else {
            textDecor.classList.remove('product-text-custom')
            document.querySelector('.list-items').insertBefore(document.querySelector(`.one-item-${id}`), document.querySelector('.list-items').firstChild)
            dispatch(itemActions.itemCountInc())
        }
    };

    const delItem = (id) => {
        if (document.querySelector(`.product-text-${id}`).classList.length < 2) {
            dispatch(itemActions.deleteItem(id))
        } else {
            dispatch(itemActions.deleteItem(id))
            dispatch(itemActions.itemCountInc())
        }
    }



    return (

            <div className={`one-item one-item-${id}`}>
                <div className={`product-text-${id}`}>{id}.{item}</div>

                <div className={'one-item-buttons'}>
                    <button className={'delete-button'} onClick={() =>
                        delItem(id)}>
                        видалити
                    </button>

                    <button className={'edit-button'} onClick={() => dispatch(itemActions.editItem(items))}>редагувати
                    </button>

                    <button className={'done-button'} onClick={selectItem}>
                        <MdOutlineDoneOutline/>
                    </button>

                </div>
            </div>

    );
};

export {List}