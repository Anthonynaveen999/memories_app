import React from "react";
import useStyles from "./styles"; 
import {Pagination,PaginationItem} from "@mui/material";
import { Link } from "react-router-dom";

const Paginate = () => {
    const {classes} = useStyles();
    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={5}
            page={1}
            color="primary"
            variant="outlined"
            // renderItem={(item)=>{
            //     <PaginationItem {...item} component={Link} to={`/posts?page=${1}`}/>
            // }}
        />
    );
}
export default Paginate;