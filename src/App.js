import React from 'react'
import ReactDOM from 'react-dom'

// ======================Class 2=======================

// class App extends React.Component{
//   render(){

//     return React.createElement('h1', 'null', 'Hello eggheads')
//     // <div>
//     //     <h1>This is newly added</h1>
//     //     <b>bold</b>
//     //   </div>
//   }
  
// }

// const App = () => <h2>this is through es6 function</h2>

// ======================Class 3=======================

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>This is newly added</h1>
//         <b>bold</b>
//       </div>
//     )
//   }
// }

// ======================Class 4=======================

// class App extends React.Component{
//   render(){
//     let txt = this.props.txt
//     return(
//       <div>
//       <h1>{txt}</h1>
//       <h2>{this.props.cat}</h2>
//       </div>
//     )
//   }
// }
// App.propTypes = {
//   // txt: React.PropTypes.string,
//   // cat: React.PropTypes.number.isRequired
//   }

// App.defaultProps = {
//   txt: "this is the default text"
// }

// ======================Class 5=======================

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       txt: 'this is state text',
//       cat: 2
//     }
//   }
//   update( e ){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     return(
//       <div>
//       <input type="text" 
//       onChange={this.update.bind(this)}/>
//       <h1>{this.state.txt}-{this.props.cat}</h1>
//       </div>
//     )
//   }
// }

// ======================Class 6=======================
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state ={
//       txt: 'this is state text'
//     }
//   }
//   update( e ){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     return(
//       <div>
//          <h1>{this.state.txt}-{this.props.cat}</h1>
//          <Widget update = {this.update.bind(this)} />
//       </div>
//     )
//   }
// }

// const Widget = (props) => <input type="text" onChange={props.update} />

// ======================Class 7=======================
// class App extends React.Component{
//   render(){
//     return(
//       <Button>I <Heart /> React</Button>
//     )
//   }
// }

// const Button = (props) =><button>{props.children}</button>

// class Heart extends React.Component{
//   render(){
//     return(
//       <span>&hearts;</span>
//     )
//   }
// }

// ======================Class 8=======================

// class App extends React.Component{
//   render(){
//     return(
//       <Title text='the text' />
//     )
//   }
// }

// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
//   text(props, propName, component){
//     if(!(propName in props)){
//       return new Error(`missing ${propName}`)
//     }
//     if(props[propName].length < 10){
//       return new Error(`${propName} was too short`)
//     }
//   }
// }

// ======================Class 9=======================

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {currentEvent:'---'}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({currentEvent: e.type})
//   }
//   render(){
//     return(
//       <div>
//         <textarea 
//           onKeyPress={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           onDoubleClick={this.update}
//           onTouchStart={this.update}
//           onTouchMove={this.update}
//           onTouchEnd={this.update}


//           cols='30'
//           rows = '10'
//         />
//         <h1>{ this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }

// ======================Class 10=======================
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {a:''}
    
//   }
//   update(){
//     this.setState({
//       a:this.a.value,
//       b:this.refs.b.value

//     })
//   }
//   render(){
//     return(
//       <div>
//         <input 
//         ref = { node => this.a =node}
//         type='text'
//         onChange = {this.update.bind(this)}/>
//         {this.state.a}
//         <hr />
//         <input 
//         ref = 'b'
//         type='text'
//         onChange = {this.update.bind(this)}/>
//         {this.state.b}
//       </div>
//     )
//   }
// }

// ======================Class 11=======================
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update( e ){
//     this.setState({val: this.state.val + 1})
//   }

//   componentWillMount(){
//     console.log("componentWillMount");
//   }

//   render(){
//     console.log('render');
//     return(
//       <div>
//         <button onClick={this.update}>{this.state.val}</button>
//       </div>
//     )
//   }
//   componentDidMount(){
//     console.log('componentDidMount');
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//   }
  
// }

// class Wrapper extends React.Component{

//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }

//   render(){

//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>UnMount</button>
//         <div id='a'></div>
//       </div>
//     )
//   }
// }

// export default Wrapper

// ======================Class 12=======================

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update( e ){
//     this.setState({val: this.state.val + 1})
//   }

//   componentWillMount(){
//     console.log("componentWillMount");
//     this.setState({m: 2})
//   }

//   render(){
//     console.log('render');
//     return(
//       <div>
//         <button onClick={this.update}>{this.state.val * this.state.m}</button>
//       </div>
//     )
//   }
//   componentDidMount(){
//     console.log('componentDidMount');
//     this.inc = setInterval(this.update,500)
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//     clearInterval(this.inc)
//   }
  
// }
// class Wrapper extends React.Component{

//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }

//   render(){

//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>UnMount</button>
//         <div id='a'></div>
//       </div>
//     )
//   }
// }

// export default Wrapper

// ======================Class 13=======================

// class App extends React.Component{

//   constructor(){
//     super()
//     this.state = {increasing: false}
//   }

//   update(){
//     ReactDOM.render(
//       <App val={this.props.val + 1} />,
//       document.getElementById('root')
//     )
//   }

//   componentWillReceiveProps(nextProps){
//     this.setState({increasing: nextProps.val > this.props.val})
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     return nextProps.val % 5=== 0;
//   }

//   render(){
//     console.log(this.state.increasing);
//     // console.log('render');
//     return(
//       <div>
//         <button onClick={this.update.bind(this)}>{this.props.val}</button>
//       </div>
//     )
//   }
// }

// App.defaultProps = {val: 0}
// export default App

// ======================Class 14=======================
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {items:[]}
//   }

//   componentWillMount(){
//     fetch( 'http://swapi.co/api/people/?format=json' )
//     .then( response => response.json())
//     .then(({results: items}) => this.setState({items}))
//   }
//   render(){
//     return(
//       <div>
//         {this.state.items.map(item =>
//             <h4 key={item.name}>{item.name}</h4>)}
//       </div>
//     )
//   }
// }
// export default App

// ======================Class 15=======================

// const HOC = (InnerComponent) => class extends React.Component {
//   constructor(){
//     super();
//     this.state = {count: 0}
//   }
//   update(){
//     this.setState({count: this.state.count + 1})
//   }
//   componentWillMount(){
//     console.log('will mount')
//   }
//   render(){
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//       />
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }

// const Button = HOC((props) =>
//   <button onClick={props.update}>{props.children} - {props.count}</button>
// )

// class Label extends React.Component {
//   componentWillMount(){
//     console.log('label will mount')
//   }
//   render(){
//     return (
//       <label onMouseMove={this.props.update}>
//       {this.props.children} - {this.props.count}
//       </label>
//     )
//   }
// }

// const LabelHOC = HOC(Label)

// export default App

// ======================Class 16=======================
