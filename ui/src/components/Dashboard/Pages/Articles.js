import React,{useEffect} from 'react'
import { Link } from "@material-ui/core";

export default function Articles() {

    return (
        <div>
            <Link href="/add/article">
                <p>Add Articles</p>
            </Link>
            
        </div>
    )
}
