import {RoleModel} from './roleModel';

/**
 * Created by cbadea on 5/9/2018.
 */
export class UserModel {
  id: number;
  username: String;
  password: String;
  email: String;
  roles: Array<RoleModel> = [];
}
