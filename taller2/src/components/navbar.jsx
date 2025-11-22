import { Menubar } from 'primereact/menubar';
import { NavLink } from 'react-router-dom'; 

function Navbar() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      template: (item, options) => (
        <NavLink to="/" className={options.className}> 
          {item.label} 
        </NavLink>
      )
    },
    {
      label: 'Mediciones Existentes',
      icon: 'pi pi-fw pi-info',
      template: (item, options) => (
        <NavLink to="/mediciones" className={options.className}>
          {item.label}
        </NavLink>
      )
    },
    {
      label: 'Crear medición',
      icon: 'pi pi-fw pi-phone',
      template: (item, options) => (
        <NavLink to="/nueva_medicion" className={options.className}>
          {item.label}
        </NavLink>
      )
    }
  ];

  return (
    <Menubar model={items} />
  );
}

export default Navbar;