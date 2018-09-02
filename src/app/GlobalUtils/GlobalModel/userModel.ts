import {RoleModel} from './roleModel';

/**
 * Created by cbadea on 5/9/2018.
 */
export class UserModel {
  id: number;
  username: string;
  password: string;
  email: string;
  roles: Array<RoleModel> = [];
}
