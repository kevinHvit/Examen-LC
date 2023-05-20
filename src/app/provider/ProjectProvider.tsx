"use client"

import axios from "axios";
import * as React from 'react';
import { createContext, useEffect, useState } from "react";

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  color: string;
}

export interface ProjectContextData {
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextData | null>(null);
interface ProjectProviderProps extends React.PropsWithChildren<{}> { }
const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    try {
      const response = await axios.get<Project[]>(`https://api.github.com/users/kevinHvit/repos`);
      console.log(response);

      const newData = response.data.map((project) => {
        return {
          ...project,
          color: colorRGB()
        };
      });
      if (response.status === 200) {
        setProjects(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  function generarNumero(numero: number) {
    return (Math.random() * numero).toFixed(0);
  }

  function colorRGB(): string {
    let coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
    return "rgb" + coolor;
  }


  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };


