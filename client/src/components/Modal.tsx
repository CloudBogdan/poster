import React from "react";
import { CrossIcon } from "./Icons";

type ModalType = {
    children: any,
    title: string,
    hidden: boolean,
    setHidden: (value: any)=> void
};

const Modal: React.FC<ModalType> = ({ children, title, hidden, setHidden })=> {
    return (
        <div className={ "modal-box" + (hidden ? "" : " active") }>

            <div className="modal">
                <header className="modal-header">
                    <h3 className="title">{ title }</h3>
                    <button onClick={ ()=> setHidden(false) } className="fab-button">
                        <CrossIcon />
                    </button>
                </header>
                <main className="modal-content">
                    { children }
                </main>
            </div>

        </div>
    );
};

export default Modal;