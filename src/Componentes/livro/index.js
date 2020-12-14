import React from 'react'

const Livro = ({livro, removerLivro}) => {
    return (
        <li className="list-group-item">
            {livro.titulo} - {livro.autor} - {livro.editora} - {livro.anopublic}
            <a href="#" className="badge badge-danger" onClick={() => removerLivro(livro.id)}>Excluir</a>
        </li>
    )
}

export default Livro
