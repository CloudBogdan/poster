import React, { useContext, useState } from "react";
import Context from "../Context";
import { Mutation } from "../queries";
import { useMutation } from "react-apollo";
import { IArticle } from "./Article";
import { formatDate } from "../math";
import { navigate } from "hookrouter";
//
import Modal from "./Modal";

const CreateModal: React.FC<{ loadArticles?: ()=> void }> = ({ loadArticles=()=>{} })=> {
    
    const { is_creating, setIsCreating } = useContext(Context);
    const [addArticle, { data }] = useMutation(Mutation("addArticle", "$title: String!, $body: String!, $author: String!, $date: String!", "title: $title, body: $body, author: $author, date: $date"));
    // Article props
    const [title, setTitle] = useState<IArticle["title"]>("");
    const [body, setBody] = useState<IArticle["body"]>("");
    const [author, setAuthor] = useState<IArticle["author"]>("");
    const [error, setError] = useState<string | null>(null);
    
    function checkEmptyInputs() {

        if (title.trim() === "") {
            setError("Укажите заголовок");
            return false;
        } else if (author.trim() === "") {
            setError("Укажите автора");
            return false;
        } else if (body.trim() === "") {
            setError("Укажите содержание");
            return false;
        } else {
            setError(null);
            return true;
        }

    }

    return (
        <Modal title="Содание статьи" hidden={ !is_creating } setHidden={ setIsCreating }>
            <div className="form">
                <div className="input">
                    <input type="text" value={ title } onChange={ e=> setTitle(e.target.value) } />
                    <span className="placeholder">Заголовок статьи</span>
                </div>
                <div className="input">
                    <input type="text" value={ author } onChange={ e=> setAuthor(e.target.value) } />
                    <span className="placeholder">Автор статьи</span>
                </div>
                <div className="input">
                    <textarea value={ body } onChange={ e=> setBody(e.target.value) }></textarea>
                    <span className="placeholder">И содержание статьи</span>
                </div>
                {
                    error ?
                        (<div className="error">{ error }</div>)
                    : ""
                }
                <button onClick={ ()=> {

                    
                    if (checkEmptyInputs()) {
                        
                        addArticle({ variables: { title, body, author, date: formatDate(new Date) } });
                        window.location.reload();
                        loadArticles();
                        setIsCreating(false);
                        navigate("/");
                        
                    }

                } }>
                    Опубликовать!
                </button>
            </div>
        </Modal>
    );
};

export default CreateModal;