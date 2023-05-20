"use client"
import { useContext } from 'react';
import {ProjectContext} from '../provider/ProjectProvider';

const useProject = () => {

    return useContext(ProjectContext);

    
}
 export default useProject;