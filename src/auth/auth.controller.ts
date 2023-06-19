import { Response } from 'express';
import { compose } from 'compose-middleware';
import { getUserByEmail } from '../api/user/user.service';
import { verifyToken } from './auth.service';
import { AuthRequest, PayloadType } from './auth.types';
import { UserWithRoles } from '../api/user/user.types';


/**
 * Attaches the user object to the request if authenticated
 * @returns RequestHandler
 */
export async function isAuthenticated(
  req: AuthRequest,
  res: Response,
  next: any
  ) {


        const token = req.headers?.authorization?.split(' ')[1];
        console.log("ingresa")

        if (!token) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = verifyToken(token) as PayloadType;

        if (!decoded) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        const user = await getUserByEmail(decoded.email);

        if (!user) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;

       next();
      };


  /**
   * Checks if the user role meets the minimum requirements of the route
   * @param allowRoles Array of roles allowed to access the route
   * @returns RequestHandler
   */
 export function hasRole(allowRoles: string[]) {

    return (req: AuthRequest, res: Response, next: any) => {
      console.log('allowroles',allowRoles)
      const { roles } = req.user as UserWithRoles;
      console.log('hasRole',roles); //revisar el typeof
      const userRoles = roles.map(({ role }: any ) => role.name); // ['ADMIN','ADMINRESTAURANT','CUSTUMER']
      console.log('userRoles',userRoles)
      const hasPermission = allowRoles.some((role) => userRoles.includes(role)); // check if it finds the user
      console.log(hasPermission);
      if (!hasPermission) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      return next();
      };
      };
