import './sort.css';


const Sort = ({product}) => {

    const strAscending = [...product].sort((a, b) =>
  a.price - b.price 
);
    return ( 
        <>
        <div className="bg-white">
           <h5 className='sort-title'>مرتب سازی بر اساس</h5> 
        </div>
        </>
     );
}
 
export default Sort;