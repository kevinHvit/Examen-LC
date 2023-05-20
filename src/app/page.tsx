
"use client"
import Image from 'next/image'
import { MutableRefObject, useRef } from 'react';
import ViewProjects from './components/ViewProjects'
import { ProjectProvider } from './provider/ProjectProvider'
import { ClientOnly } from './components/ClientOnly'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import CallAction from './components/CallAction';

export default function Home() {
  const presentation = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const callAction = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);


  const handleNavigationPresentation = () => {
    if (presentation.current) {
      presentation.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationProjects = () => {
    if (projects.current) {
      projects.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationCallAction = () => {
    if (callAction.current) {
      callAction.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationContact = () => {
    if (contact.current) {
      contact.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <ClientOnly>
      <ProjectProvider>
        <Header
          handleNavigationPresentation={handleNavigationPresentation}
          handleNavigationProjects={handleNavigationProjects}
          handleNavigationCallAction={handleNavigationCallAction}
          handleNavigationContact={handleNavigationContact}
        />
        <main className="container">
          <div ref={presentation} className="mb-5">
            <Presentation />
          </div>
          <div className="row mb-5">
            <div ref={projects} className='col-6'>
              <ViewProjects />
            </div>
            
            <div ref={callAction} className="bg-dark mb-5 col-6">
              <CallAction />
            </div>
          </div>

        </main>

        <div ref={contact}>
          <Footer />
        </div>

      </ProjectProvider>
    </ClientOnly>

  )
}
