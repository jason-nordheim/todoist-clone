import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/log.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
