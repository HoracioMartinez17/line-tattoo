import { useEffect } from 'preact/hooks';

const ElfsightScript = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.setAttribute('data-use-service-core', '');
      script.defer = true;
      document.body.appendChild(script);
  
      // Asegurarse de que el contenedor tenga una altura automática
      const elfsightContainer = document.querySelector('.elfsight-app-cc374729-d92d-4017-8474-b542b303cfbb');
      if (elfsightContainer) {
        (elfsightContainer as HTMLElement).style.height = 'auto';
      }
    }, []);
  
    return null;
  };
  export default ElfsightScript;
