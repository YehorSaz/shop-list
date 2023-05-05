import React from 'react';
import {useDispatch} from "react-redux";
import {itemActions} from "../../redux/slices";

const List = ({items}) => {

    const dispatch = useDispatch();

    const {item, id} = items;


    return (

            <li className={'one-item'}>
                {id}.{item}

                <button className={'delete-button'} onClick={() =>
                    dispatch(itemActions.deleteItem(id))}>
                    видалити</button>

                <button className={'edit-button'} onClick={() => dispatch(itemActions.editItem(items))}>редагувати</button>
            </li>

    );
};

export {List}