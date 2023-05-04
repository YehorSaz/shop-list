import React from 'react';
import {Link} from "react-router-dom";
import {TbCirclePlus} from "react-icons/tb";

const AddNewPage = () => {

    return (

        <div className={'add-new-page'}>
            <Link to={'/lists'} className={'link-plus'}>
                <TbCirclePlus className={'plus-icon'}/>
            </Link>
        </div>
    );
};

export {AddNewPage}