import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ReactPaginate from 'react-paginate';

function Paginacion() {

    const[posts, setPosts] = useState([])
    const[pageNumber, setPageNUmber] = useState(0)
   
        
        useEffect(() => {
            const fetchPosts = async () => {
                const res =await axios.get ('http://localhost:3001/countries/allCountries');
                setPosts(res.data);           
            };
            fetchPosts();
        }, []);

    const usersPerPage = 10
    const pageVisited = pageNumber * usersPerPage
    const displayUsers = posts.slice(pageVisited, pageVisited + usersPerPage).map((post) => {
        return(<div>
            <h1>{post.name}</h1>
    
        </div>)
    })


    const pageCount = Math.ceil(posts.length/usersPerPage);

    const changePage = ({selected}) => {
            setPageNUmber(selected)
    }
return <div style={{padding: "10px"}}>{displayUsers}
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={ "Next"}
                pageCount = {pageCount}
                onPageChange= {changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"PreviousBttn"}
                nextLinkClassName={"NextBttn"}
                disableInitialCallback={"paginationDisable"}
                activeClassName={"paginationActive"}
            />
            </div>


}

export default Paginacion;