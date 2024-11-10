/* eslint-disable max-lines-per-function */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SearchHelperText from '@/components/common/SearchHelperText';
import { SelectLanguage } from '@/components/common/SelectLanguage';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { User } from '@/types/user.types';

type UserTableProps = {
  users: User[] | undefined;
};

const UserTable = ({ users }: UserTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { t } = useTranslation();

  const tableHeader = t('userTable.headers', {
    returnObjects: true,
  }) as string[];

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="px-5">
      <div className="flex flex-row justify-between">
        <h1 className="mb-10 text-2xl font-bold">{t('userTable.title')}</h1>
        <SelectLanguage />
      </div>

      <SearchHelperText searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Table>
        <TableCaption>{t('userTable.caption')}</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeader.map((th, idx) => (
              <TableHead key={idx}>{th}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
