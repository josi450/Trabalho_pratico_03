import React from 'react'


const FormularioLivros = ({adicionar}) => {

   
    const [titulo, setTitulo]= React.useState('');
    const [autor, setAutor]= React.useState('');
    const [editora, setEditora]= React.useState('');
    const [anopublic, setAnopublic]= React.useState('');

    function submeterFormulario(e){
        e.preventDefault();

    // Chamando a função que veio via props do componente pai
    adicionar(titulo, autor, editora, anopublic);

     // Limpar formulário
     setTitulo('');
     setAutor('');
     setEditora('');
     setAnopublic('');
        
    }

    return (
        <form onSubmit ={submeterFormulario}>
            <div className= "form-group">
                <label htmlFor="titulo">Título da obra:</label>
                <input type="text" className="form-control" id="titulo" name="titulo" value={titulo}
                onChange={e => setTitulo(e.target.value)}/>
                <label htmlFor="autor">Autor(es):</label>
                <input type="text" className="form-control" id="autor" name="autor" value={autor}
                onChange={e => setAutor(e.target.value)}/>
                <label htmlFor="editora">Editora:</label>
                <input type="text" className="form-control" id="editora" name="editora" value={editora}
                onChange={e => setEditora(e.target.value)}/>
                <label htmlFor="anopublic">Ano de publicação:</label>
                <input type="text" className="form-control" id="anopublic" name="anopublic" value={anopublic}
                onChange={e => setAnopublic(e.target.value)}/>
            </div><br/>
            <button  type="submit" className="btn btn-primary" >Salvar</button>
            

        </form>
    )
}

export default FormularioLivros;
