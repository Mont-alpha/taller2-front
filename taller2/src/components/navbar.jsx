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
      label: 'Lecturas',
      icon: 'pi pi-fw pi-info',
      template: (item, options) => (
        <NavLink to="/lecturas" className={options.className}>
          {item.label}
        </NavLink>
      )
    },
    {
      label: 'Crear lectura',
      icon: 'pi pi-fw pi-phone',
      template: (item, options) => (
        <NavLink to="/nueva-lectura" className={options.className}>
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