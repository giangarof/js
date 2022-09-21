const myNum = () => {
    return Math.floor(Math.random()*44)+1
}
class Hello extends React.Component{
    render(){
        const num = myNum()
        return(
            <div>
                <h1>{num}</h1>
                <p>{num % 2 ? 'odd' : 'even'}</p>
            </div>
        )
    }
}
