import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RiDeleteBin2Line} from "react-icons/ri";
import {GiCheckMark} from "react-icons/gi";
import {FaEdit} from "react-icons/fa";

import {itemActions} from "../../redux/slices";
import {listFunctions} from "../../services";


const List = ({items}) => {

    const dispatch = useDispatch();

    const {item, id} = items;
    const {classNames} = useSelector(state => state.item);

    listFunctions.componentOnLoad(classNames);

    return (

        <div className={`one-item one-item-${id}`}>

            <div id={'products'} className={`product-text-${id}`}
                 onClick={() => listFunctions.markItem(dispatch, id)}>{id}.{item}
            </div>

            <div className={'one-item-buttons'}>

                <button className={'delete-button'} onClick={() =>
                    listFunctions.delItem(dispatch, id)}>
                    <RiDeleteBin2Line/>
                </button>

                <button className={'edit-button'} onClick={() => dispatch(itemActions.editItem(items))}>
                    <FaEdit/>
                </button>

                <button className={`done-button`} onClick={() => listFunctions.markItem(dispatch, id)}>
                    <GiCheckMark/>
                </button>

            </div>
        </div>

    );
};

export {List}