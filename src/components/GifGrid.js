import React, {useEffect, useState} from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";
// import {getGifs} from "../helpers/getGifs";
//import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    // const [ images, setImages ] = useState( [] );
    const { data: images,loading } = useFetchGifs( category );

    return (
        < >
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">LOADING</p>}

            <div className="card-gird">
                {
                    images.map( ( img ) => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        < />
    );

}

//GifGrid.propTypes = {};