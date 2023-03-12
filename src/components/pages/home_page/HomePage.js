import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Notification from "../notification/Notification";
import Chats from "../chats/Chats";
import PeopleManagement from "../people-management/PeopleManagement";
import BusinessManagement from "../business-management/BusinessManagement";
import Dashboard from "../dashboard/Dashboard";
import Settings from "../settings/Settings";

import Sidebar from "../../layouts/sidebar/Sidebar";

function HomePage() {
  return (
    <Router>
      <Sidebar>
        <Link to={"/"}>Home page</Link>
        <Link to={"/notification"}>Notificação</Link>
        <Link to={"/chats"}>Chats</Link>
        <Link to={"/people_management"}>Gestão de pessoas</Link>
        <Link to={"/business_management"}>Gestão de empresas</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/analytics"}>Configurações</Link>
        <Link to={"/logout"}>Fazer logout</Link>
      </Sidebar>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/" element={<Notification />} />
        <Route exact path="/" element={<Chats />} />
        <Route exact path="/" element={<PeopleManagement />} />
        <Route exact path="/" element={<BusinessManagement />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default HomePage;
