import React from 'react';


const Header = (props: any) => {
  return (
    <header className="bg-dark rounded-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 col-md-6">
            <img src="https://i.redd.it/wjl1x8tfahm41.jpg" alt="" className='d-block w-25 h-25' />
          </div>
          <div className="col-8 col-md-6">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <ul className="navbar-nav mr-auto">
                <li className="btn nav-item" onClick={props.handleNavigationPresentation}>
                  <a className="nav-link text-white row left">
                    Quien soy
                  </a>
                </li>
                <li className="btn nav-item" onClick={props.handleNavigationProjects}>
                  <a target="_blank" rel="noreferrer" className="nav-link text-white">
                    Proyectos
                  </a>
                </li>
                <li className="btn nav-item" onClick={props.handleNavigationCallAction}>
                  <a className="nav-link text-white">
                    informacion
                  </a>
                </li>
                <li className="btn nav-item" onClick={props.handleNavigationContact}>
                  <a className="nav-link text-white">
                    Contacto
                  </a>
                </li>
              </ul>

            </nav>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header