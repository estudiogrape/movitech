interface PropsGradiente {
  classColor: string;
}


export default function Gradiente(props: PropsGradiente) {
     const gradiColor = props.classColor;
    return (
        <div className= {`${gradiColor}  h-2.5 w-full` } /> 
    )
}