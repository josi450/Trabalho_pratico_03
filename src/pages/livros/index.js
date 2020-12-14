import React from 'react'
import FormularioLivros from '../../Componentes/FormularioLivros';
import Livro from '../../Componentes/livro';
import uuid from 'react-uuid';

const Livros = () => {

    const [livros, setLivros] = React.useState([]);

    function adicionarLivro(titulo, autor, editora, anopublic){
        const id = uuid();
        setLivros([...livros, {id, titulo, autor, editora, anopublic} ])
    }

    function removerLivro(id){
        setLivros(livros.filter(livro => livro.ide !== id))
    }
    return (
        <div>
            <h1>Livros de interesse</h1>
            {/* Exibir lista de livros */}
            <ul className= "list-group">
                {livros.map(livro => (
                    <Livro key={livro.id} livro={livro} removerLivro= {removerLivro} />
                ))}  


            </ul>
            <hr/>
            <h2>Crie sua lista </h2>
            <FormularioLivros adicionar= {adicionarLivro}/>
        </div>
    )
}

export default Livros;
