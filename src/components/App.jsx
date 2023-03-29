import { Component } from 'react';
import React from 'react';




export default class App extends Component {
  state = {  } 
  render() { 
    return (
      <form>
        <label>
          Login
           <input type='text' name='login' />
        </label>
        <label>
          Password
          <input type='text' name='password' />
        </label>
       <button type="button">Login</button>
          
      
    </form>
    );
  }
}
 
// export default App;




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
