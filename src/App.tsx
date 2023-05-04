import type { Component } from 'solid-js';

// import logo from './logo.svg';
// import styles from './App.module.css';

import Header from './components/Header';
import Error from './components/Error';
import Formulaire from './components/Formulaire';

const App: Component = () => {
  return (
    <>
      <Header />
      <Error message="Une erreur s'est produite" isOpen={true} />
      <Formulaire />
      

    </>
    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     <img src={logo} class={styles.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
