import React from 'react';

// Props = Propriedades / Properties.
// É um objeto que contém os atributos e valores passados pelo elemento-pai.

const Props = (props) => <h1> Props.name = "{props.name}" </h1>

// class Props extends React.Component {
//     render() {
//         return <h1> Props.name = "{this.props.name}" </h1>;
//     }
// }


export default Props;