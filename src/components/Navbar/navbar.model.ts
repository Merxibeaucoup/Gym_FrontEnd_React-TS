export interface INavbarTypes {
  id: number;
  name: string;
}

const navbarItems: INavbarTypes[] = [
  { id: 1, name: "Home" },
  { id: 2, name: "Plans" },
  { id: 3, name: "About" },
  { id: 4, name: "Gallery" },
  { id: 5, name: "Contact" },
  { id: 6, name: "Workouts" },
];

export default navbarItems;
