import React from 'react';
import {useDispatch, useSelector} from "react-redux";


import {itemActions} from "../../redux/slices";
import {RiDeleteBin2Line} from "react-icons/ri";
import {FaEdit} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import {GiCheckMark} from "react-icons/gi";


const List = ({items}) => {

    const dispatch = useDispatch();

    const {item, id} = items;
    const {classNames} = useSelector(state => state.item);
    if (classNames) {
        console.log(classNames);
    }

    window.onload = () => {
        const namesOfClass = document.querySelectorAll(`#products`);

        console.log(namesOfClass);
        for (let i in namesOfClass) {
            if (classNames.includes(`${namesOfClass[i].className} product-text-custom`)) {
                document.querySelector(`.${namesOfClass[i].className}`).classList.add('product-text-custom')
            }
        }
    }


    const selectItem = () => {

        const textDecor = document.querySelector(`.product-text-${id}`);

        if (textDecor.classList.length < 2) {
            textDecor.classList.add('product-text-custom')

            dispatch(itemActions.addClassName(textDecor.className))

            document.querySelector('.done-button').dangerouslySetInnerHTML={__html: <ImCross/>}

            // document.querySelector('.list-items').append(document.querySelector(`.one-item-${id}`))

            // dispatch(itemActions.sortItem(id))
            dispatch(itemActions.itemCountDec())

        } else {
            textDecor.classList.remove('product-text-custom')

            // document.querySelector('.list-items').insertBefore(document.querySelector(`.one-item-${id}`), document.querySelector('.list-items').firstChild)

            dispatch(itemActions.itemCountInc())
            dispatch((itemActions.removeClassName(`${textDecor.className} product-text-custom`)))

        }
    };

    const delItem = (id) => {
        if (document.querySelector(`.product-text-${id}`).classList.length < 2) {
            dispatch(itemActions.deleteItem(id))
        } else {
            dispatch(itemActions.deleteItem(id))
            dispatch(itemActions.itemCountInc())
        }
        dispatch(itemActions.editItem(null))
    }



    return (

        <div className={`one-item one-item-${id}`}>
            <div id={'products'} className={`product-text-${id}`} onClick={() => {
                selectItem()
            }}>{id}.{item}</div>

            <div className={'one-item-buttons'}>
                <button className={'delete-button'} onClick={() =>
                    delItem(id)}>
                    <RiDeleteBin2Line/>
                </button>

                <button className={'edit-button'} onClick={() => dispatch(itemActions.editItem(items))}>
                    <FaEdit/>
                </button>

                <button className={`done-button`} onClick={() => selectItem()}>
                    <GiCheckMark/>
                </button>

            </div>
        </div>

    );
};

export {List}