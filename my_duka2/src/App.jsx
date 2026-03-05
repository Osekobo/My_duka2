// import Header from "./assets/components/Header"
// import Footer from "./assets/components/Footer"

// const App = () => {
//   const user = { name: "Jane", email: "jane@gmail.com" }
//   const text = "A message from parent"
//   return (
//     <div>
//       <p>This is a React app</p>
//       <Header user={user} msg={text} />
//       <div>
//         <Footer x={user} y={text} />
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0)
  function increase(){
    setCount{count +1}
  }
}
export default App