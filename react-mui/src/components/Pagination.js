import * as React from 'react';

export default function PaginationRounded(props) {
  return (
   <>
    <nav aria-label="">
  <ul className="pagination">
    <li className={`page-item `}>
      <button className="page-link" onClick={props.prev}>Previous</button>
    </li>
    {/* <li className="page-item"><button className="page-link" onClick={props.one}>1</button></li>
    <li className="page-item " aria-current="page">
      <button className="page-link" onClick={props.two}>2</button>
    </li> */}
    <li className="page-item">
      <button className="page-link" onClick={props.next} >Next</button>
    </li>
  </ul>
</nav>
   </>
  );
}
