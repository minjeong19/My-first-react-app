import React from "react";

export default function ListChild({ title, todo }) {
  return (
    <div>
      <hr />
      <h2>{title}</h2>
      <p>{todo}</p>
    </div>
  );
}

// import React, { Component } from "react";

// export default class ListChild extends Component {
//   render() {
//     const { big, small } = this.props;
//     return (
//       <div>
//         <h2>{big}</h2>
//         <p>{small}</p>
//       </div>
//     );
//   }
// }
