import { getData } from "../googleDrive";

const page = async () => {
  const data = await getData();
  
  // Función recursiva para crear la estructura de carpetas y archivos
  const processObject = (obj, name) => {
    const result = [];

    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        // Si es un objeto, es una carpeta, así que creamos un objeto de carpeta
        const folder = {
          id: key,
          name: name || key, // Usar el nombre si está disponible, de lo contrario usar el ID
          type: 'folder',
          children: processObject(obj[key], key), // Pasar el nombre actual como segundo argumento
        };
        result.push(folder);
      } else {
        // Si no es un objeto, es un archivo, así que creamos un objeto de archivo
        const value = obj[key];
        const extension = value.substring(value.lastIndexOf('.') + 1);
        const name = value.substring(0, value.lastIndexOf('.'));
        const file = {
          id: key,
          type: 'file',
          name: name,
          extension: `.${extension}`,
        };
        result.push(file);
      }
    }

    return result;
  };

  // Crear la estructura JSON raíz
  const root = {
    name: 'KALEUCHE',
    type: 'folder',
    children: processObject(data, 'KALEUCHE'), // Iniciar con el nombre 'KALEUCHE'
  };

  // Imprime la estructura JSON
  console.log(JSON.stringify(root, null, 2));

  // También puedes retornar la estructura JSON si lo necesitas
  return root;
};

export default page;
