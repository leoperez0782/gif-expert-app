import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';


export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className = 'animate__animated animate__bounce animate__repeat-2'>{category}</h3>
            {loading && <p className = 'animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map(img => <GifGridItem
                        key={img.id}
                        {...img} />)
                }
            </div>
        </>
    );
}