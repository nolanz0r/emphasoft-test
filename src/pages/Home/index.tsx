import { FC, useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { IUser } from "../../interfaces/IUser";
import { Table } from "../../components/Table";
import { usersService } from "../../services/api/users";

import "./Home.css";

export const Home: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [asc, setAsc] = useState<boolean>(false);

  const filterUsersHandler = (e: any) => {
    const filtered = users.filter(
      (user: IUser) =>
        user.username.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
    );
    setFilteredUsers(filtered);
  };

  const sortUsersHandler = () => {
    setAsc(!asc);
    const sorted = filteredUsers.sort((a, b) => a.id - b.id);
    asc ? setFilteredUsers(sorted.reverse()) : setFilteredUsers(sorted);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    setLoading(true);

    usersService()
      .getUsers()
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home container">
      {loading ? (
        <span className="home-loading">Loading...</span>
      ) : (
        <Table
          arrow={asc ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          users={filteredUsers}
          onSort={sortUsersHandler}
          onFilter={filterUsersHandler}
        />
      )}
    </div>
  );
};
