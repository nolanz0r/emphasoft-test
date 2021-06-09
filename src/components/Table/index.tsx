import { FC, ReactNode, SyntheticEvent } from "react";

import { IUser } from "../../interfaces/IUser";

import "./Table.css";

interface Props {
  users: IUser[];
  onSort: () => void;
  onFilter: (e: SyntheticEvent) => void;
  arrow: ReactNode;
}

export const Table: FC<Props> = ({ users, onSort, onFilter, arrow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-head__item">
              <span>id</span>
              <span className="table-icon" onClick={onSort}>
                {arrow}
              </span>
            </th>
            <th className="table-head__item">
              <div>username</div>
              <input
                className="table-head__input"
                type="text"
                onChange={onFilter}
                placeholder="Filter..."
              />
            </th>
            <th className="table-head__item">online</th>
            <th className="table-head__item">super user</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td className="table-body__item">{user.id}</td>
                <td className="table-body__item">{user.username}</td>
                <td className="table-body__item">
                  {user.is_active ? "Yes" : "No"}
                </td>
                <td className="table-body__item">
                  {user.is_superuser ? "Yes" : "No"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
