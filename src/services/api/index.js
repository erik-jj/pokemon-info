const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
   
    pokemon: {
      getPokemon: (id) => `${API}/api/${VERSION}/pokemon/${id}`,
    }
  };
  
  export default endPoints;
  