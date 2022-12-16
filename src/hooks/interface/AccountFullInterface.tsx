import { AccountInterface } from '../../redux/interface/AccountInterface';
import { MovementInterface } from '../../redux/interface/MovementInterface';
import { ImageInterface } from './ImageInterface';

export interface AccountFullInterface {
  account: AccountInterface;
  movements: MovementInterface[];
  images: ImageInterface[];
}
