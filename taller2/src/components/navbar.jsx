import { Menubar } from 'primereact/menubar';

function Navbar() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
    },
    {
        label: 'About',
        icon: 'pi pi-fw pi-info',
    },
    {
        label: 'Contact',
        icon: 'pi pi-fw pi-phone',
    }
  ];

  return (
    <Menubar model={items} />    
  )
}

export default Navbar