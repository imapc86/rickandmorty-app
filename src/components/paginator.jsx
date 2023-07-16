import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../store/slice/thunks";

export const Paginator = () => {

  const dispatch = useDispatch();
  const { totalPages, currentPage, characterToSearch } = useSelector(state => state.characters);

  const [pageToShow, setPageToShow] = useState([])

  const getPagination = (_currentPage, _totalPages) => {

    let paginas = [];

    let prev = _currentPage - 1;
    let next = _currentPage + 1;

    for( let i = 1; i<=_totalPages; i++ ) {
      if( i === 1 || i === _totalPages || (i >= prev && i <= next)) {
          paginas.push(i);
      }
    }
      
    let final = [];

    final = paginas.pop();
    paginas.push(final);

    let pagesToShow = [];
    
    for(let i = 1; i < paginas.length - 1; i++) {

      if(paginas[i-1] === 1 && paginas[i] !== 2) {
          pagesToShow.push(1);
          pagesToShow.push('...');
      }

      pagesToShow.push(paginas[i]);

      if(paginas[i+1]===final && paginas[i]!==(final-1)) {
        pagesToShow.push('...');
        pagesToShow.push(final);
      }

    }

    !pagesToShow.includes(1) && pagesToShow.unshift(1);
    !pagesToShow.includes(_totalPages) && pagesToShow.push(_totalPages);

    setPageToShow(pagesToShow);
  }

  const scrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    getPagination(currentPage, totalPages);
    
  }, [totalPages, currentPage]);

  const onChangePage = (pageToChange) => {

    if(pageToChange <= 0 || pageToChange === currentPage || pageToChange > totalPages){
      return;
    }
    dispatch(getCharacters(characterToSearch, pageToChange));
    scrollToTop();
  }
  
  return (
    <>
      {
        totalPages > 1 && (
          <div className="pagination">
            <span onClick={()=>onChangePage(currentPage - 1)}>&laquo;</span>
            {
              pageToShow.map(page => 
                <span 
                  onClick={()=>onChangePage(page)}
                  key={page} className={page === currentPage ? 'active': ''} >{page}</span>
              )
            }
            <span onClick={()=>onChangePage(currentPage + 1)}>&raquo;</span>
          </div>
        )
      }
    </>
  )
}
