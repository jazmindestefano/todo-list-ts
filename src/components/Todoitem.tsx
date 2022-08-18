const TodoItem: React.FC<{text: string}> = (props) => { 
return (
        <li>{props.text}</li>
    )
};  

export default TodoItem;

/*
 - props es un objeto, se debe descomprimir
 - descomprimir significa acceder a todos los atributos 
 - React.FC significa que es un Componente Funcional
 - entre los <{}> se especifica el tipo de atributo que se espera, al que se accede por medio de props, 
    se puede esperar un atributo solo como un string, un array o un objeto
*/