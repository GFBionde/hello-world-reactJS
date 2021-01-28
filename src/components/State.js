import React from 'react';

class State extends React.Component {
    
    
    // Construtor da Classe, aqui é criado o objeto-estado.
    constructor() {
        super();
        this.state = {
            clicado: false,
            message: "Mude meu estado!"
        }
    }
    

    // Função responsável por alterar o conteúdo atual do componente..
    changeMessage() {
        var msg = this.state.clicado ? "Mude meu estado!" : "Olá mundo!";
        
        // Trocando o atributo "clicado" ao clicar..
        this.state.clicado = !this.state.clicado;
        
        // Trocando o estado..
        this.setState({ message: msg });
    }


    // Componente que muda a mensagem conforme clicado.. 
    render() {
        return (
            <div>
                <button onClick={ () => this.changeMessage() }> 
                    {this.state.message} 
                </button>
            </div>
        );
    }

}

export default State;
