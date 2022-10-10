import React, { useState } from "react";

interface CounterAppI {
    count: number
}

//CLASS BASED REACT COUNTER APP

class CounterApp extends React.Component<CounterAppI> {
    constructor(props: any){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState((state) => ({
            count: state.count + 1
        }))
    }
    
    decrement(){
        this.setState((state) => ({
            count: state.count - 1
        }))

    }
    //create a function so whenver we click it, it handles increment/decerement

    render() {
        return (
            <section>
                <div>
                    Number: {this.state.count}
                </div>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </section>
        )
    }
}

// export default CounterApp

//FUNCTIONAL REACT COUNTER APP

// const CounterApp:React.FC = () => {
//     const [count, setCount] = useState(0)

//     const increment = () => setCount((state) => state + 1)
//     const decrement = () => setCount((state) => state - 1)

//     return (
//         <div>
//             <div>
//                 {count}
//             </div>
//             <div>
//                 <button onClick={increment}>Increment</button>
//                 <button onClick={decrement}>Decrement</button>
//             </div>
//         </div>
//     )
// }