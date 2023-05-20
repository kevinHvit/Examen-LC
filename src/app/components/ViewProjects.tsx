"use client"

import React from 'react'
import useProject from '../hooks/useProject';
import { Carousel } from 'react-bootstrap';


const ViewProjects = () => {
    
    const data = useProject();
    const projects = data?.projects || [];


    return (
        <div>
            <h2 className="text-center">Mis Proyectos</h2>

            <Carousel interval={3000}>
                {projects.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <div className="d-block w-100 slide-content p-3"     >
                            <div className="card"  style={
                                {
                                    backgroundColor: slide.color
                                }
                            }>
                                <div className="card-body">
                                    <div className="d-flex justify-content-center  align-items-center flex-column">
                                        <h5 className="card-title">{slide.name}</h5>
                                        <p className="card-text">{slide.description}</p>
                                        <a href={slide.html_url} className='btn btn-primary'>ver proyecto</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                ))}

            </Carousel>

        </div>
    )
}

export default ViewProjects