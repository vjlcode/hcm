import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import Notification from "./Notification";
import Chats from "./Chats";
import People from "./People";
import Business from "./Business";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

import style from "../layouts/StartPage.module.css";

function StartPage() {
  return (
    <Router>
      <nav className={`${style.sidebar}`}>
        <Link to={"/"} className={`${style.link} ${style.logo}`}>
          <i class={`bx bxs-grid-alt ${style.icon}`}></i>
          <span className={style.logo}>HCM JL</span>
        </Link>
        <Link to={"/notification"} className={`${style.link}`}>
          <i className={`bx bxs-bell ${style.icon}`}></i>
          <span className={style.menuLink}>Notificação</span>
        </Link>
        <Link to={"/chats"} className={`${style.link}`}>
          <i className={`bx bxs-chat ${style.icon}`}></i>
          <span className={style.menuLink}>Chats</span>
        </Link>
        <Link to={"/people"} className={`${style.link}`}>
          <i className={`bx bxs-group ${style.icon}`}></i>
          <span className={style.menuLink}>Gestão de pessoas</span>
        </Link>
        <Link to={"/business"} className={`${style.link}`}>
          <i className={`bx bxs-briefcase ${style.icon}`}></i>
          <span className={style.menuLink}>Gestão de empresas</span>
        </Link>
        <Link to={"/dashboard"} className={`${style.link}`}>
          <i className={`bx bxs-dashboard ${style.icon}`}></i>
          <span className={style.menuLink}>Dashboard</span>
        </Link>
        <Link to={"/settings"} className={`${style.link}`}>
          <i className={`bx bxs-cog ${style.icon}`}></i>
          <span className={style.menuLink}>Configurações</span>
        </Link>
        <Link className={`${style.link}`}>
          <i className={`bx bxs-log-out ${style.icon}`}></i>
          <span className={style.menuLink}>Fazer logout</span>
        </Link>
      </nav>

      <div className={style.content}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/chats" element={<Chats />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/business" element={<Business />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default StartPage;
