class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <Bye to="Earth" from="Marsh"/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))