interface LastAccess {
  id: number;
  name: string;
  avatar: string;
  status: string;
  approved_by: string;
  dh_access: string;
  dependents: { name: string; avatar: string }[];
}

export default LastAccess;
